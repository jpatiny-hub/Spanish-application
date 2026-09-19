import type { UnitStep } from '../types'

const UNIT_PROGRESS_KEY = 'unit-progress'

// Écrit directement dans localStorage (plutôt que via le hook React) car ces
// appels viennent d'événements de fin de session, pas du rendu du composant.
export function markUnitStepDone(unitId: string | null | undefined, step: UnitStep) {
  if (!unitId) return
  try {
    const raw = localStorage.getItem(UNIT_PROGRESS_KEY)
    const data = raw ? JSON.parse(raw) : {}
    data[`${unitId}:${step}`] = true
    localStorage.setItem(UNIT_PROGRESS_KEY, JSON.stringify(data))
  } catch {
    // stockage indisponible : on ignore silencieusement
  }
}
