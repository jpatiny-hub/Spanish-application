import { Link } from 'react-router-dom'
import { vocabulary } from '../data/vocabulary'
import { grammarLessons } from '../data/grammar'
import { readingTexts } from '../data/reading'
import { units } from '../data/units'
import { useLocalStorage } from '../lib/storage'
import { dueCount, isDue, type SrsData } from '../lib/srs'

const sections = [
  { to: '/parcours', label: 'Parcours', icon: '🎯', desc: 'Paquets découverte par thème' },
  { to: '/revision', label: 'Révision', icon: '🔁', desc: 'Mémorisation à long terme' },
  { to: '/grammaire', label: 'Grammaire', icon: '📖', desc: 'Rappels théoriques' },
  { to: '/vocabulaire', label: 'Vocabulaire', icon: '🗂️', desc: 'Flashcards à réviser' },
  { to: '/pratique', label: 'Pratique', icon: '🎓', desc: 'Lecture, écoute, oral, écrit' },
]

export function Home() {
  const [srsVocab] = useLocalStorage<SrsData>('srs-vocab', {})
  const [srsGrammar] = useLocalStorage<SrsData>('srs-grammar', {})
  const dueVocab = dueCount(srsVocab, vocabulary.map((v) => v.id))
  const dueGrammar = grammarLessons.filter((l) => isDue(srsGrammar[l.id])).length
  const totalDue = dueVocab + dueGrammar

  return (
    <div className="px-4 pt-8">
      <h1 className="text-2xl font-bold">¡Hola! 👋</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Ton appli personnelle pour apprendre l'espagnol depuis les bases.
      </p>

      {totalDue > 0 && (
        <Link
          to="/revision"
          className="mt-5 block rounded-2xl bg-red-600 p-4 text-white shadow-sm active:scale-[0.98] transition-transform"
        >
          <p className="text-sm opacity-90">À réviser aujourd'hui</p>
          <p className="text-xl font-bold">
            {dueVocab > 0 && `${dueVocab} carte${dueVocab > 1 ? 's' : ''}`}
            {dueVocab > 0 && dueGrammar > 0 && ' · '}
            {dueGrammar > 0 && `${dueGrammar} point${dueGrammar > 1 ? 's' : ''} de grammaire`}
          </p>
        </Link>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3">
        {sections.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm active:scale-[0.98] transition-transform dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="text-2xl">{s.icon}</span>
            <p className="mt-2 font-semibold">{s.label}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{s.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-sm dark:border-gray-800 dark:bg-gray-900">
        <p className="font-semibold">Contenu disponible</p>
        <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
          <li>{units.length} parcours découverte</li>
          <li>{grammarLessons.length} fiches de grammaire</li>
          <li>{vocabulary.length} mots de vocabulaire</li>
          <li>{readingTexts.length} textes de lecture</li>
        </ul>
      </div>
    </div>
  )
}
