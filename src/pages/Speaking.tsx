import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { speakingCategories, speakingItems } from '../data/speaking'
import { canListen, canSpeak, listenOnce, speak } from '../lib/speech'
import { scoreSpokenMatch, type MatchLevel } from '../lib/text'
import { markUnitStepDone } from '../lib/progress'
import type { SpeakingCategory } from '../types'

const levelLabel = { mot: 'Mot', fragment: 'Expression', phrase: 'Phrase' } as const

export function Speaking() {
  const [searchParams] = useSearchParams()
  const unitId = searchParams.get('unit')
  const presetCategory = searchParams.get('cat') as SpeakingCategory | null

  const [category, setCategory] = useState<SpeakingCategory | null>(
    presetCategory && speakingCategories.includes(presetCategory) ? presetCategory : null,
  )
  const [index, setIndex] = useState(0)
  const [listening, setListening] = useState(false)
  const [result, setResult] = useState<MatchLevel | 'error' | null>(null)
  const [heard, setHeard] = useState('')

  const items = useMemo(
    () => (category ? speakingItems.filter((s) => s.category === category) : []),
    [category],
  )
  const item = items[index]
  const supported = useMemo(() => canListen(), [])

  function chooseCategory(cat: SpeakingCategory) {
    setCategory(cat)
    setIndex(0)
    setResult(null)
    setHeard('')
  }

  function tryListen() {
    setResult(null)
    setHeard('')
    setListening(true)
    listenOnce(
      'es-ES',
      (transcript) => {
        setListening(false)
        setHeard(transcript)
        setResult(scoreSpokenMatch(transcript, item.es))
      },
      () => {
        setListening(false)
        setResult('error')
      },
    )
  }

  function next() {
    if (index + 1 >= items.length) {
      markUnitStepDone(unitId, 'oral')
    }
    setIndex((i) => (i + 1) % items.length)
    setResult(null)
    setHeard('')
  }

  if (!category) {
    return (
      <div className="px-4 pt-6">
        <h1 className="text-xl font-bold">Oral</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Choisis un thème : mots, expressions et phrases complètes à répéter.
        </p>
        <div className="mt-4 space-y-2">
          {speakingCategories.map((cat) => {
            const count = speakingItems.filter((s) => s.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => chooseCategory(cat)}
                className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="font-semibold">{cat}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{count} exercices</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => setCategory(null)} className="text-sm text-red-600 dark:text-red-400">
          ← Thèmes
        </button>
        <span className="text-sm text-gray-500 dark:text-gray-400">{index + 1} / {items.length}</span>
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          {levelLabel[item.level]}
        </span>
        <p className="mt-3 text-2xl font-bold">{item.es}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.fr}</p>

        {canSpeak() && (
          <button
            onClick={() => speak(item.es)}
            className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800"
          >
            🔊 Écouter le modèle
          </button>
        )}

        {supported ? (
          <button
            onClick={tryListen}
            disabled={listening}
            className="mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-3xl text-white shadow disabled:opacity-60"
            aria-label="Parler"
          >
            {listening ? '…' : '🎤'}
          </button>
        ) : (
          <p className="mt-5 text-xs text-gray-400">
            La reconnaissance vocale n'est pas disponible sur ce navigateur (courant sur iPhone).
            Répète simplement à voix haute pour t'entraîner !
          </p>
        )}

        {listening && <p className="mt-2 text-xs text-gray-400">Je t'écoute…</p>}

        {result === 'correct' && (
          <p className="mt-3 font-semibold text-green-600">✓ Très bien !</p>
        )}
        {result === 'close' && (
          <div className="mt-3 text-sm">
            <p className="font-semibold text-amber-600">🟡 Presque !</p>
            <p className="text-gray-500 dark:text-gray-400">J'ai entendu : « {heard || '...'} »</p>
          </div>
        )}
        {result === 'wrong' && (
          <div className="mt-3 text-sm">
            <p className="font-semibold text-red-600">Pas tout à fait.</p>
            <p className="text-gray-500 dark:text-gray-400">J'ai entendu : « {heard || '...'} »</p>
          </div>
        )}
        {result === 'error' && (
          <p className="mt-3 text-sm text-red-600">
            Micro indisponible ou permission refusée. Vérifie les autorisations du navigateur.
          </p>
        )}
      </div>

      <button
        onClick={next}
        className="mt-4 w-full rounded-2xl bg-gray-200 py-3 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200"
      >
        Phrase suivante →
      </button>
    </div>
  )
}
