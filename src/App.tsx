import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Grammar } from './pages/Grammar'
import { GrammarLessonPage } from './pages/GrammarLesson'
import { Vocabulary } from './pages/Vocabulary'
import { Reading } from './pages/Reading'
import { ReadingTextPage } from './pages/ReadingText'
import { Listening } from './pages/Listening'
import { Speaking } from './pages/Speaking'
import { Writing } from './pages/Writing'
import { Practice } from './pages/Practice'
import { Units } from './pages/Units'
import { UnitDetail } from './pages/UnitDetail'
import { Revision } from './pages/Revision'

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <main className="flex-1 overflow-y-auto pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Units />} />
          <Route path="/parcours/:unitId" element={<UnitDetail />} />
          <Route path="/revision" element={<Revision />} />
          <Route path="/grammaire" element={<Grammar />} />
          <Route path="/grammaire/:lessonId" element={<GrammarLessonPage />} />
          <Route path="/vocabulaire" element={<Vocabulary />} />
          <Route path="/pratique" element={<Practice />} />
          <Route path="/lecture" element={<Reading />} />
          <Route path="/lecture/:textId" element={<ReadingTextPage />} />
          <Route path="/ecoute" element={<Listening />} />
          <Route path="/oral" element={<Speaking />} />
          <Route path="/ecrit" element={<Writing />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
