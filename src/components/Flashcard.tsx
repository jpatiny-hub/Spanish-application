import { useState } from 'react'
import { canSpeak, speak } from '../lib/speech'
import type { VocabItem } from '../types'

interface Props {
  item: VocabItem
  onAnswer: (correct: boolean) => void
}

export function Flashcard({ item, onAnswer }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="flex h-56 w-full max-w-sm flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
      >
        <span className="text-xs uppercase tracking-wide text-gray-400">{item.category}</span>
        <span className="mt-3 text-3xl font-bold">{flipped ? item.fr : item.es}</span>
        {item.example && (
          <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {flipped ? item.example.fr : item.example.es}
          </span>
        )}
        <span className="mt-4 text-xs text-gray-400">
          {flipped ? 'Touche pour revoir en espagnol' : 'Touche pour voir la traduction'}
        </span>
      </button>

      {canSpeak() && (
        <button
          onClick={() => speak(item.es)}
          className="mt-3 rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800"
        >
          🔊 Écouter
        </button>
      )}

      {flipped && (
        <div className="mt-5 flex w-full max-w-sm gap-3">
          <button
            onClick={() => onAnswer(false)}
            className="flex-1 rounded-xl bg-gray-200 py-3 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            À revoir
          </button>
          <button
            onClick={() => onAnswer(true)}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white"
          >
            Je savais ✓
          </button>
        </div>
      )}
    </div>
  )
}
