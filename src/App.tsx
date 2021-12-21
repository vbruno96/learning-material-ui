import { Route, Routes, HashRouter } from 'react-router-dom'
import { ThemeColorProvider } from './components/ThemeColorProvider'
import { Layout } from './components/Layout'
import { Create } from './pages/Create'
import { Notes } from './pages/Notes'

export function App() {
  return (
    <HashRouter>
      <ThemeColorProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </ThemeColorProvider>
    </HashRouter>
  )
}
