import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { vocabulary } from '../data/vocabulary'
import { canSpeak, speak } from '../lib/speech'
import { markUnitStepDone } from '../lib/progress'
import type { VocabItem } from '../types'

interface Question {
  item: VocabItem
  options: string[]
}

const QUIZ_SIZE = 8

function buildQuiz(category?: string | null): Question[] {
  const pool = category ? vocabulary.filter((v) => v.category === category) : vocabulary
  const source = pool.length >= 4 ? pool : vocabulary
  const shuffled = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(QUIZ_SIZE, source.length))
  return shuffled.map((item) => {
    const distractors = vocabulary
      .filter((v) => v.id !== item.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((v) => v.fr)
    const options = [...distractors, item.fr].sort(() => Math.random() - 0.5)
    return { item, options }
  })
}

export function Listening() {
  const [searchParams] = useSearchParams()
  const unitId = searchParams.get('unit')
  const [quiz, setQuiz] = useState<Question[] | null>(null)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [lastLength, setLastLength] = useState(QUIZ_SIZE)

  const question = quiz?.[index]

  function start(category?: string | null) {
    const built = buildQuiz(category)
    setQuiz(built)
    setLastLength(built.length)
    setIndex(0)
    setScore(0)
    setSelected(null)
  }

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat) start(cat)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function choose(option: string) {
    if (selected) return
    setSelected(option)
    if (option === question!.item.fr) setScore((s) => s + 1)
  }

  function next() {
    if (!quiz) return
    if (index + 1 < quiz.length) {
      setIndex(index + 1)
      setSelected(null)
    } else {
      setQuiz(null)
      markUnitStepDone(unitId, 'ecoute')
    }
  }

  if (!canSpeak()) {
    return (
      <div className="px-4 pt-6">
        <h1 className="text-xl font-bold">Écoute</h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          La synthèse vocale n'est pas disponible sur ce navigateur. Essaie avec Chrome sur Android.
        </p>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="px-4 pt-6">
        <h1 className="text-xl font-bold">Écoute</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Écoute le mot en espagnol et choisis la bonne traduction.
        </p>
        {score > 0 && (
          <p className="mt-3 text-sm font-semibold">Dernier score : {score} / {lastLength}</p>
        )}
        <button
          onClick={() => start()}
          className="mt-4 w-full rounded-2xl bg-red-600 py-3 font-semibold text-white shadow-sm"
        >
          Commencer
        </button>
      </div>
    )
  }

  const isCorrect = selected === question!.item.fr

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => setQuiz(null)} className="text-sm text-red-600 dark:text-red-400">✕ Quitter</button>
        <span className="text-sm text-gray-500 dark:text-gray-400">{index + 1} / {quiz.length}</span>
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <button
          onClick={() => speak(question!.item.es)}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-3xl text-white shadow"
          aria-label="Écouter"
        >
          🔊
        </button>
        <p className="mt-3 text-xs text-gray-400">Touche pour réécouter</p>
      </div>

      <div className="mt-4 space-y-2">
        {question!.options.map((opt) => {
          const showCorrect = selected && opt === question!.item.fr
          const showWrong = selected === opt && !isCorrect
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={`block w-full rounded-xl border px-4 py-3 text-left ${
                showCorrect
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                  : showWrong
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                    : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {selected && (
        <button
          onClick={next}
          className="mt-4 w-full rounded-2xl bg-red-600 py-3 font-semibold text-white"
        >
          {index + 1 < quiz.length ? 'Suivant' : 'Terminer'}
        </button>
      )}
    </div>
  )
}
