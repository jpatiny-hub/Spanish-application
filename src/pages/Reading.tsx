import { Link } from 'react-router-dom'
import { readingTexts } from '../data/reading'

const levelLabel = { 1: 'Débutant', 2: 'Intermédiaire', 3: 'Confirmé' } as const

export function Reading() {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Lecture</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Textes courts, du plus simple au plus complexe.
      </p>

      <div className="mt-4 space-y-3">
        {readingTexts.map((text) => (
          <Link
            key={text.id}
            to={`/lecture/${text.id}`}
            className="block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm active:scale-[0.98] transition-transform dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="font-semibold">{text.title}</p>
            <p className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">
              {levelLabel[text.level]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
