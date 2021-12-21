import { Route, Routes, HashRouter } from 'react-router-dom'
import { ColorProvider } from './components/ColorProvider'
import { Layout } from './components/Layout'
import { Create } from './pages/Create'
import { Notes } from './pages/Notes'

export function App() {
  return (
    <HashRouter>
      <ColorProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </ColorProvider>
    </HashRouter>
  )
}
