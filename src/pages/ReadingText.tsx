import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { readingTexts } from '../data/reading'
import { speak, canSpeak } from '../lib/speech'

export function ReadingTextPage() {
  const { textId } = useParams()
  const text = readingTexts.find((t) => t.id === textId)
  const [shown, setShown] = useState<Set<number>>(new Set())
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)

  if (!text) {
    return (
      <div className="px-4 pt-6">
        <p>Texte introuvable.</p>
        <Link to="/lecture" className="text-red-600 underline">Retour</Link>
      </div>
    )
  }

  function toggle(i: number) {
    setShown((prev) => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        next.add(i)
      }
      return next
    })
  }

  const score = checked
    ? text.questions.filter((q, i) => answers[i] === q.answerIndex).length
    : null

  return (
    <div className="px-4 pt-6">
      <Link to="/lecture" className="text-sm text-red-600 dark:text-red-400">← Lecture</Link>
      <h1 className="mt-2 text-xl font-bold">{text.title}</h1>

      <div className="mt-4 space-y-3">
        {text.paragraphs.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="leading-relaxed">{p.es}</p>
              {canSpeak() && (
                <button onClick={() => speak(p.es)} className="shrink-0 text-lg" aria-label="Écouter">
                  🔊
                </button>
              )}
            </div>
            <button
              onClick={() => toggle(i)}
              className="mt-2 text-xs font-medium text-red-600 dark:text-red-400"
            >
              {shown.has(i) ? 'Masquer la traduction' : 'Voir la traduction'}
            </button>
            {shown.has(i) && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{p.fr}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className="mt-6 font-semibold">Compréhension</h2>
      <div className="mt-3 space-y-4">
        {text.questions.map((q, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm font-medium">{q.question}</p>
            <div className="mt-2 space-y-2">
              {q.options.map((opt, oi) => {
                const isSelected = answers[i] === oi
                const isCorrect = checked && oi === q.answerIndex
                const isWrong = checked && isSelected && oi !== q.answerIndex
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
          onClick={() => setChecked(true)}
          disabled={Object.keys(answers).length < text.questions.length}
          className="mt-4 w-full rounded-2xl bg-red-600 py-3 font-semibold text-white disabled:opacity-40"
        >
          Vérifier mes réponses
        </button>
      ) : (
        <p className="mt-4 text-center font-semibold">
          Score : {score} / {text.questions.length}
        </p>
      )}
    </div>
  )
}
