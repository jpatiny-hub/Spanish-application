import { Link, useParams } from 'react-router-dom'
import { grammarLessons } from '../data/grammar'
import { speak, canSpeak } from '../lib/speech'

export function GrammarLessonPage() {
  const { lessonId } = useParams()
  const lesson = grammarLessons.find((l) => l.id === lessonId)

  if (!lesson) {
    return (
      <div className="px-4 pt-6">
        <p>Leçon introuvable.</p>
        <Link to="/grammaire" className="text-red-600 underline">Retour</Link>
      </div>
    )
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
    </div>
  )
}
