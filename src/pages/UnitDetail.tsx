import { Link, useParams } from 'react-router-dom'
import { units } from '../data/units'
import { useLocalStorage } from '../lib/storage'
import type { UnitStep } from '../types'

interface StepDef {
  step: UnitStep
  icon: string
  label: string
  description: string
  to: (unitId: string) => string
}

const STEP_DEFS: StepDef[] = [
  {
    step: 'grammaire',
    icon: '📖',
    label: 'Grammaire',
    description: 'Le point théorique du thème',
    to: () => '',
  },
  {
    step: 'vocabulaire',
    icon: '🗂️',
    label: 'Vocabulaire',
    description: 'Les mots à connaître',
    to: () => '/vocabulaire',
  },
  {
    step: 'lecture',
    icon: '📰',
    label: 'Lecture',
    description: 'Un texte à comprendre',
    to: () => '',
  },
  {
    step: 'ecoute',
    icon: '🎧',
    label: 'Écoute',
    description: 'Quiz audio sur le thème',
    to: () => '/ecoute',
  },
  {
    step: 'oral',
    icon: '🎤',
    label: 'Oral',
    description: 'Prononciation guidée',
    to: () => '',
  },
  {
    step: 'ecrit',
    icon: '✍️',
    label: 'Écrit',
    description: 'Traductions et phrases à trous',
    to: () => '',
  },
]

export function UnitDetail() {
  const { unitId } = useParams()
  const unit = units.find((u) => u.id === unitId)
  const [progress, setProgress] = useLocalStorage<Record<string, boolean>>('unit-progress', {})

  if (!unit) {
    return (
      <div className="px-4 pt-6">
        <p>Parcours introuvable.</p>
        <Link to="/parcours" className="text-red-600 underline">Retour</Link>
      </div>
    )
  }

  function stepLink(step: UnitStep): string {
    if (!unit) return '/'
    switch (step) {
      case 'grammaire':
        return `/grammaire/${unit.grammarLessonId}`
      case 'vocabulaire':
        return `/vocabulaire?cat=${encodeURIComponent(unit.vocabCategory)}`
      case 'lecture':
        return `/lecture/${unit.readingTextId}`
      case 'ecoute':
        return `/ecoute?cat=${encodeURIComponent(unit.vocabCategory)}`
      case 'oral':
        return `/oral?cat=${encodeURIComponent(unit.speakingCategory)}`
      case 'ecrit':
        return `/ecrit?cat=${encodeURIComponent(unit.writingCategory)}`
    }
  }

  function toggleDone(step: UnitStep) {
    const key = `${unitId}:${step}`
    setProgress({ ...progress, [key]: !progress[key] })
  }

  return (
    <div className="px-4 pt-6">
      <Link to="/parcours" className="text-sm text-red-600 dark:text-red-400">← Parcours</Link>
      <div className="mt-2 flex items-center gap-3">
        <span className="text-3xl">{unit.icon}</span>
        <div>
          <h1 className="text-xl font-bold">{unit.title}</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">{unit.description}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        {STEP_DEFS.map((def) => {
          const key = `${unit.id}:${def.step}`
          const done = !!progress[key]
          return (
            <div
              key={def.step}
              className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <button
                onClick={() => toggleDone(def.step)}
                aria-label={done ? 'Marquer comme non fait' : 'Marquer comme fait'}
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-sm ${
                  done
                    ? 'border-green-500 bg-green-500 text-white'
                    : 'border-gray-300 text-transparent dark:border-gray-600'
                }`}
              >
                ✓
              </button>
              <Link to={stepLink(def.step)} className="flex flex-1 items-center gap-3">
                <span className="text-xl">{def.icon}</span>
                <div>
                  <p className={`font-semibold ${done ? 'text-gray-400 line-through' : ''}`}>{def.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{def.description}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      <p className="mt-4 text-center text-xs text-gray-400">
        Coche chaque étape une fois terminée. Tu pourras revenir réviser ces thèmes plus tard.
      </p>
    </div>
  )
}
