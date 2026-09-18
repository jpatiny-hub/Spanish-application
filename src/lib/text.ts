// Compare deux chaînes en ignorant accents, ponctuation et casse pour une tolérance raisonnable.
export function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[¿?¡!.,;:]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export type MatchLevel = 'correct' | 'close' | 'wrong'

// Score la prononciation d'une phrase par recouvrement de mots plutôt que
// par égalité stricte : une phrase longue reconnue à 80% doit compter comme réussie.
export function scoreSpokenMatch(transcript: string, target: string): MatchLevel {
  const heardWords = normalizeForComparison(transcript).split(' ').filter(Boolean)
  const targetWords = normalizeForComparison(target).split(' ').filter(Boolean)
  if (targetWords.length === 0) return 'wrong'

  const heardSet = new Set(heardWords)
  const matched = targetWords.filter((w) => heardSet.has(w)).length
  const ratio = matched / targetWords.length

  if (ratio >= 0.8) return 'correct'
  if (ratio >= 0.5) return 'close'
  return 'wrong'
}

// Comparaison tolérante pour les réponses écrites (accents/casse/ponctuation ignorés).
export function isWrittenAnswerCorrect(answer: string, expected: string): boolean {
  return normalizeForComparison(answer) === normalizeForComparison(expected)
}
