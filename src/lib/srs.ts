// Système de répétition espacée simplifié (Leitner à 5 boîtes).
export interface CardState {
  box: number // 1 à 5
  due: string // date ISO à partir de laquelle la carte redevient due
}

export type SrsData = Record<string, CardState>

const INTERVALS_DAYS = [0, 1, 3, 7, 16, 30] // index = box

export function isDue(state: CardState | undefined): boolean {
  if (!state) return true
  return new Date(state.due).getTime() <= Date.now()
}

export function reviewCard(state: CardState | undefined, correct: boolean): CardState {
  const currentBox = state?.box ?? 1
  const nextBox = correct ? Math.min(currentBox + 1, 5) : 1
  const days = INTERVALS_DAYS[nextBox] ?? 0
  const due = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
  return { box: nextBox, due }
}

export function dueCount(data: SrsData, ids: string[]): number {
  return ids.filter((id) => isDue(data[id])).length
}
