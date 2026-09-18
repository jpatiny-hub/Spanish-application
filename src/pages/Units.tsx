import { Link } from 'react-router-dom'
import { units } from '../data/units'
import { useLocalStorage } from '../lib/storage'
import type { UnitStep } from '../types'

const STEPS: UnitStep[] = ['grammaire', 'vocabulaire', 'lecture', 'ecoute', 'oral', 'ecrit']

export function Units() {
  const [progress] = useLocalStorage<Record<string, boolean>>('unit-progress', {})

  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Parcours découverte</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Des paquets thématiques qui mélangent grammaire, vocabulaire, lecture, écoute, oral et écrit.
      </p>

      <div className="mt-4 space-y-3">
        {units.map((unit) => {
          const done = STEPS.filter((step) => progress[`${unit.id}:${step}`]).length
          return (
            <Link
              key={unit.id}
              to={`/parcours/${unit.id}`}
              className="block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm active:scale-[0.98] transition-transform dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{unit.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold">{unit.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{unit.description}</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className="h-full bg-red-600"
                      style={{ width: `${(done / STEPS.length) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-gray-400">{done} / {STEPS.length} étapes</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
