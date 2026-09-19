import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { grammarLessons } from '../data/grammar'
import { speak, canSpeak } from '../lib/speech'
import { markUnitStepDone } from '../lib/progress'
import { useLocalStorage } from '../lib/storage'
import { reviewCard, type SrsData } from '../lib/srs'

export function GrammarLessonPage() {
  const { lessonId } = useParams()
  const [searchParams] = useSearchParams()
  const unitId = searchParams.get('unit')
  const isRevision = searchParams.get('mode') === 'revision'
  const lesson = grammarLessons.find((l) => l.id === lessonId)

  const [srsGrammar, setSrsGrammar] = useLocalStorage<SrsData>('srs-grammar', {})
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (isRevision) {
      document.getElementById('exercises')?.scrollIntoView({ behavior: 'smooth' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!lesson) {
    return (
      <div className="px-4 pt-6">
        <p>Leçon introuvable.</p>
        <Link to="/grammaire" className="text-red-600 underline">Retour</Link>
      </div>
    )
  }

  const score = checked
    ? lesson.exercises.filter((ex, i) => answers[i] === ex.answerIndex).length
    : null

  function check() {
    setChecked(true)
    const correctCount = lesson!.exercises.filter((ex, i) => answers[i] === ex.answerIndex).length
    const passed = correctCount / lesson!.exercises.length >= 0.7
    setSrsGrammar({ ...srsGrammar, [lesson!.id]: reviewCard(srsGrammar[lesson!.id], passed) })
    markUnitStepDone(unitId, 'grammaire')
  }

  function retry() {
    setAnswers({})
    setChecked(false)
  }

  return (
    <div className="px-4 pt-6">
      <Link to="/grammaire" className="text-sm text-red-600 dark:text-red-400">← Grammaire</Link>
      <h1 className="mt-2 text-xl font-bold">{lesson.title}</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{lesson.summary}</p>

      <div className="mt-4 space-y-4">
        {lesson.points.map((point, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="font-semibold">{point.title}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{point.explanation}</p>
            <div className="mt-3 space-y-2">
              {point.examples.map((ex, j) => (
                <div key={j} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-800">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{ex.es}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{ex.fr}</p>
                  </div>
                  {canSpeak() && (
                    <button
                      onClick={() => speak(ex.es)}
                      aria-label="Écouter"
                      className="shrink-0 rounded-full bg-white p-2 text-red-600 shadow dark:bg-gray-700 dark:text-red-400"
                    >
                      🔊
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {lesson.exercises.length > 0 && (
        <div id="exercises" className="mt-6">
          <h2 className="font-semibold">S'entraîner</h2>
          <div className="mt-3 space-y-4">
            {lesson.exercises.map((ex, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <p className="text-sm font-medium">{ex.question}</p>
                <div className="mt-2 space-y-2">
                  {ex.options.map((opt, oi) => {
                    const isSelected = answers[i] === oi
                    const isCorrect = checked && oi === ex.answerIndex
                    const isWrong = checked && isSelected && oi !== ex.answerIndex
                    return (
                      <button
                        key={oi}
                        onClick={() => !checked && setAnswers({ ...answers, [i]: oi })}
                        className={`block w-full rounded-lg border px-3 py-2 text-left text-sm ${
                          isCorrect
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                            : isWrong
                              ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                              : isSelected
                                ? 'border-red-600 bg-red-50 dark:bg-red-900/20'
                                : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {!checked ? (
            <button
              onClick={check}
              disabled={Object.keys(answers).length < lesson.exercises.length}
              className="mt-4 w-full rounded-2xl bg-red-600 py-3 font-semibold text-white disabled:opacity-40"
            >
              Vérifier mes réponses
            </button>
          ) : (
            <div className="mt-4 text-center">
              <p className="font-semibold">Score : {score} / {lesson.exercises.length}</p>
              <button
                onClick={retry}
                className="mt-2 text-sm text-red-600 underline dark:text-red-400"
              >
                Recommencer l'exercice
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
