export type VocabCategory =
  | 'Salutations'
  | 'Nombres'
  | 'Famille'
  | 'Couleurs'
  | 'Nourriture'
  | 'Jours & mois'
  | 'Au quotidien'
  | 'Météo'
  | 'Voyage'
  | 'Au travail'
  | 'Achats'
  | 'Santé'
  | 'Loisirs'

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

export type SpeakingCategory =
  | 'Salutations'
  | 'Famille'
  | 'Au quotidien'
  | 'Au travail'
  | 'Météo'
  | 'Voyage'
  | 'Au restaurant'
  | 'Achats'
  | 'Santé'
  | 'Loisirs'

export type SpeakingLevel = 'mot' | 'fragment' | 'phrase'

export interface SpeakingItem {
  id: string
  es: string
  fr: string
  category: SpeakingCategory
  level: SpeakingLevel
}

export type WritingCategory =
  | 'Au quotidien'
  | 'Famille'
  | 'Au travail'
  | 'Météo'
  | 'Voyage'
  | 'Grammaire'
  | 'Achats'
  | 'Santé'
  | 'Loisirs'

export interface WritingExercise {
  id: string
  category: WritingCategory
  type: 'traduction' | 'a-trous'
  prompt: string
  answer: string
  hint?: string
}

export type UnitStep = 'grammaire' | 'vocabulaire' | 'lecture' | 'ecoute' | 'oral' | 'ecrit'

export interface Unit {
  id: string
  title: string
  description: string
  icon: string
  grammarLessonId: string
  vocabCategory: VocabCategory
  readingTextId: string
  speakingCategory: SpeakingCategory
  writingCategory: WritingCategory
}
