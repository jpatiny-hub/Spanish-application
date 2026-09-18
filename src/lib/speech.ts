// Petits utilitaires autour des Web Speech APIs du navigateur (gratuites, embarquées dans Android/Chrome).
export { normalizeForComparison } from './text'

export function speak(text: string, lang = 'es-ES', rate = 0.9) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = rate
  window.speechSynthesis.speak(utterance)
}

export function canSpeak() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

type SpeechRecognitionResultLike = { transcript: string }

interface MinimalSpeechRecognition extends EventTarget {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  start: () => void
  stop: () => void
  onresult: ((event: { results: ArrayLike<ArrayLike<SpeechRecognitionResultLike>> }) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
}

function getRecognitionCtor(): (new () => MinimalSpeechRecognition) | null {
  const w = window as unknown as {
    SpeechRecognition?: new () => MinimalSpeechRecognition
    webkitSpeechRecognition?: new () => MinimalSpeechRecognition
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export function canListen() {
  return typeof window !== 'undefined' && getRecognitionCtor() !== null
}

export function listenOnce(
  lang: string,
  onResult: (transcript: string) => void,
  onError: (error: string) => void,
) {
  const Ctor = getRecognitionCtor()
  if (!Ctor) {
    onError('unsupported')
    return () => {}
  }
  const recognition = new Ctor()
  recognition.lang = lang
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  recognition.onresult = (event) => {
    const transcript = event.results[0]?.[0]?.transcript ?? ''
    onResult(transcript)
  }
  recognition.onerror = (event) => onError(event.error)

  recognition.start()
  return () => recognition.stop()
}
