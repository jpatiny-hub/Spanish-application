import { Link } from 'react-router-dom'
import { grammarLessons } from '../data/grammar'

export function Grammar() {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Grammaire</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Les bases, dans l'ordre.</p>

      <div className="mt-4 space-y-3">
        {grammarLessons
          .sort((a, b) => a.order - b.order)
          .map((lesson) => (
            <Link
              key={lesson.id}
              to={`/grammaire/${lesson.id}`}
              className="block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm active:scale-[0.98] transition-transform dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  {lesson.order}
                </span>
                <div>
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{lesson.summary}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
