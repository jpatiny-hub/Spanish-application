import { useMemo, useState } from 'react'
import { vocabulary } from '../data/vocabulary'
import { canListen, canSpeak, listenOnce, normalizeForComparison, speak } from '../lib/speech'

const phrases = vocabulary.filter((v) => v.es.split(' ').length <= 3)

export function Speaking() {
  const [index, setIndex] = useState(0)
  const [listening, setListening] = useState(false)
  const [result, setResult] = useState<'correct' | 'wrong' | 'error' | null>(null)
  const [heard, setHeard] = useState('')

  const item = phrases[index]
  const supported = useMemo(() => canListen(), [])

  function playTarget() {
    speak(item.es)
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
        const ok = normalizeForComparison(transcript) === normalizeForComparison(item.es)
        setResult(ok ? 'correct' : 'wrong')
      },
      () => {
        setListening(false)
        setResult('error')
      },
    )
  }

  function next() {
    setIndex((i) => (i + 1) % phrases.length)
    setResult(null)
    setHeard('')
  }

  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Oral</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Écoute, répète, et vérifie ta prononciation.
      </p>

      <div className="mt-5 flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <p className="text-3xl font-bold">{item.es}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.fr}</p>

        {canSpeak() && (
          <button
            onClick={playTarget}
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
