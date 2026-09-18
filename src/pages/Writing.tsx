import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { writingCategories, writingExercises } from '../data/writing'
import { isWrittenAnswerCorrect } from '../lib/text'
import type { WritingCategory } from '../types'

export function Writing() {
  const [searchParams] = useSearchParams()
  const presetCategory = searchParams.get('cat') as WritingCategory | null

  const [category, setCategory] = useState<WritingCategory | null>(
    presetCategory && writingCategories.includes(presetCategory) ? presetCategory : null,
  )
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [checked, setChecked] = useState(false)
  const [selfCorrect, setSelfCorrect] = useState(false)
  const [score, setScore] = useState(0)

  const items = useMemo(
    () => (category ? writingExercises.filter((w) => w.category === category) : []),
    [category],
  )
  const item = items[index]
  const isCorrect = checked && (selfCorrect || isWrittenAnswerCorrect(input, item.answer))

  function chooseCategory(cat: WritingCategory) {
    setCategory(cat)
    setIndex(0)
    setInput('')
    setChecked(false)
    setSelfCorrect(false)
    setScore(0)
  }

  function check() {
    setChecked(true)
    if (isWrittenAnswerCorrect(input, item.answer)) setScore((s) => s + 1)
  }

  function markSelfCorrect() {
    setSelfCorrect(true)
    setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 < items.length) {
      setIndex(index + 1)
      setInput('')
      setChecked(false)
      setSelfCorrect(false)
    } else {
      setCategory(null)
    }
  }

  if (!category) {
    return (
      <div className="px-4 pt-6">
        <h1 className="text-xl font-bold">Écrit</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Traductions et phrases à trous pour travailler l'écriture, niveau A1.
        </p>
        <div className="mt-4 space-y-2">
          {writingCategories.map((cat) => {
            const count = writingExercises.filter((w) => w.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => chooseCategory(cat)}
                className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-semibold">{cat}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{count} exercices</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => setCategory(null)} className="text-sm text-red-600 dark:text-red-400">
          ← Thèmes
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">{index + 1} / {items.length}</span>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          {item.type === 'traduction' ? 'Traduction' : 'Phrase à trous'}
        </span>
        <p className="mt-3 text-lg font-semibold">{item.prompt}</p>
        {item.hint && <p className="mt-1 text-xs italic text-gray-400">{item.hint}</p>}

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={checked}
          placeholder="Écris ta réponse en espagnol…"
          className="mt-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base disabled:opacity-70 dark:border-gray-700 dark:bg-gray-800"
          autoCapitalize="none"
          autoCorrect="off"
        />

        {!checked ? (
          <button
            onClick={check}
            disabled={!input.trim()}
            className="mt-4 w-full rounded-2xl bg-red-600 py-3 font-semibold text-white disabled:opacity-40"
          >
            Vérifier
          </button>
        ) : (
          <div className="mt-4">
            {isCorrect ? (
              <p className="font-semibold text-green-600">✓ Correct !</p>
            ) : (
              <div>
                <p className="font-semibold text-red-600">Pas exactement.</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Réponse attendue : <span className="font-medium text-gray-900 dark:text-gray-100">{item.answer}</span>
                </p>
                <button
                  onClick={markSelfCorrect}
                  className="mt-2 text-xs text-red-600 underline dark:text-red-400"
                >
                  Ma réponse était correcte (formulation différente)
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {checked && (
        <button
          onClick={next}
          className="mt-4 w-full rounded-2xl bg-gray-200 py-3 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          {index + 1 < items.length ? 'Suivant' : `Terminer (${score}/${items.length})`}
        </button>
      )}
    </div>
  )
}
