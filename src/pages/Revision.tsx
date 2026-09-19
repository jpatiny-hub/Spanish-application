import { Link } from 'react-router-dom'
import { vocabulary } from '../data/vocabulary'
import { grammarLessons } from '../data/grammar'
import { useLocalStorage } from '../lib/storage'
import { dueCount, isDue, type SrsData } from '../lib/srs'

export function Revision() {
  const [srsVocab] = useLocalStorage<SrsData>('srs-vocab', {})
  const [srsGrammar] = useLocalStorage<SrsData>('srs-grammar', {})

  const dueVocab = dueCount(srsVocab, vocabulary.map((v) => v.id))
  const dueGrammar = grammarLessons
    .filter((l) => isDue(srsGrammar[l.id]))
    .sort((a, b) => a.order - b.order)

  const nothingDue = dueVocab === 0 && dueGrammar.length === 0

  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Révision</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Pour la mémoire à long terme : on revoit vocabulaire et grammaire à intervalles réguliers.
      </p>

      {nothingDue && (
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
          Rien à réviser pour l'instant, bravo ! Reviens plus tard.
        </div>
      )}

      {dueVocab > 0 && (
        <Link
          to="/vocabulaire"
          className="mt-5 block rounded-2xl bg-red-600 p-4 text-white shadow-sm active:scale-[0.98] transition-transform"
        >
          <p className="text-sm opacity-90">Vocabulaire à réviser</p>
          <p className="text-xl font-bold">{dueVocab} carte{dueVocab > 1 ? 's' : ''}</p>
        </Link>
      )}

      {dueGrammar.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Points de grammaire à revoir
          </p>
          <div className="mt-2 space-y-2">
            {dueGrammar.map((lesson) => {
              const box = srsGrammar[lesson.id]?.box
              return (
                <Link
                  key={lesson.id}
                  to={`/grammaire/${lesson.id}?mode=revision`}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm active:scale-[0.98] transition-transform dark:border-gray-800 dark:bg-gray-900"
                >
                  <div>
                    <p className="font-semibold">{lesson.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {box ? `Niveau de maîtrise ${box}/5` : 'Jamais révisé'}
                    </p>
                  </div>
                  <span className="text-red-600 dark:text-red-400">→</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      <p className="mt-6 text-center text-xs text-gray-400">
        Après chaque exercice réussi, le prochain rappel est espacé un peu plus loin dans le temps.
      </p>
    </div>
  )
}
