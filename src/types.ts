export type VocabCategory =
  | 'Salutations'
  | 'Nombres'
  | 'Famille'
  | 'Couleurs'
  | 'Nourriture'
  | 'Jours & mois'
  | 'Au quotidien'

export interface VocabItem {
  id: string
  es: string
  fr: string
  category: VocabCategory
  example?: { es: string; fr: string }
}

export interface GrammarPoint {
  title: string
  explanation: string
  examples: { es: string; fr: string }[]
}

export interface GrammarLesson {
  id: string
  title: string
  order: number
  summary: string
  points: GrammarPoint[]
}

export interface ReadingQuestion {
  question: string
  options: string[]
  answerIndex: number
}

export interface ReadingText {
  id: string
  title: string
  level: 1 | 2 | 3
  paragraphs: { es: string; fr: string }[]
  questions: ReadingQuestion[]
}
