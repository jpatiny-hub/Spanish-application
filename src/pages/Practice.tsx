import { Link } from 'react-router-dom'

const items = [
  { to: '/lecture', label: 'Lecture', icon: '📰', desc: 'Textes progressifs avec questions' },
  { to: '/ecoute', label: 'Écoute', icon: '🎧', desc: 'Quiz audio de compréhension' },
  { to: '/oral', label: 'Oral', icon: '🎤', desc: 'Prononciation par thème' },
  { to: '/ecrit', label: 'Écrit', icon: '✍️', desc: 'Traductions et phrases à trous' },
]

export function Practice() {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Pratique</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Choisis une compétence à travailler.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm active:scale-[0.98] transition-transform dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="mt-2 font-semibold">{item.label}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
