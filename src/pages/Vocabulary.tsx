import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { vocabCategories, vocabulary } from '../data/vocabulary'
import { useLocalStorage } from '../lib/storage'
import { isDue, reviewCard, type SrsData } from '../lib/srs'
import { markUnitStepDone } from '../lib/progress'
import { Flashcard } from '../components/Flashcard'

export function Vocabulary() {
  const [searchParams] = useSearchParams()
  const unitId = searchParams.get('unit')
  const [srsData, setSrsData] = useLocalStorage<SrsData>('srs-vocab', {})
  const [session, setSession] = useState<string[] | null>(null)
  const [index, setIndex] = useState(0)

  const dueIds = useMemo(
    () => vocabulary.filter((v) => isDue(srsData[v.id])).map((v) => v.id),
    [srsData],
  )

  function startReview(categoryFilter?: string) {
    const pool = categoryFilter
      ? vocabulary.filter((v) => v.category === categoryFilter)
      : vocabulary.filter((v) => dueIds.includes(v.id))
    const ids = (pool.length > 0 ? pool : vocabulary).map((v) => v.id)
    setSession(shuffle(ids))
    setIndex(0)
  }

  function handleAnswer(correct: boolean) {
    if (!session) return
    const id = session[index]
    setSrsData({ ...srsData, [id]: reviewCard(srsData[id], correct) })
    if (index + 1 < session.length) {
      setIndex(index + 1)
    } else {
      setSession(null)
      markUnitStepDone(unitId, 'vocabulaire')
    }
  }

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat && (vocabCategories as string[]).includes(cat)) {
      startReview(cat)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (session) {
    const item = vocabulary.find((v) => v.id === session[index])!
    return (
      <div className="px-4 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <button onClick={() => setSession(null)} className="text-sm text-red-600 dark:text-red-400">
            ✕ Quitter
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {index + 1} / {session.length}
          </span>
        </div>
        <Flashcard key={item.id} item={item} onAnswer={handleAnswer} />
      </div>
    )
  }

  return (
    <div className="px-4 pt-6">
      <h1 className="text-xl font-bold">Vocabulaire</h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {dueIds.length > 0
          ? `${dueIds.length} carte(s) à réviser aujourd'hui.`
          : 'Tout est à jour, bravo !'}
      </p>

      <button
        onClick={() => startReview()}
        className="mt-4 w-full rounded-2xl bg-red-600 py-3 font-semibold text-white shadow-sm"
      >
        {dueIds.length > 0 ? 'Réviser mes cartes' : 'Réviser quand même'}
      </button>

      <div className="mt-6 space-y-2">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Par thème</p>
        {vocabCategories.map((cat) => {
          const items = vocabulary.filter((v) => v.category === cat)
          const dueInCat = items.filter((v) => dueIds.includes(v.id)).length
          return (
            <button
              key={cat}
              onClick={() => startReview(cat)}
              className="flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div>
                <p className="font-semibold">{cat}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{items.length} mots</p>
              </div>
              {dueInCat > 0 && (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">
                  {dueInCat}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
