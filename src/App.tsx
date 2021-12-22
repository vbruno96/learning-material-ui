import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { ThemeColorProvider } from './components/ThemeColorProvider'
import { Layout } from './components/Layout'
import { Create } from './pages/Create'
import { Notes } from './pages/Notes'
import { LayoutProvider } from './context/Layout'

export function App() {
  return (
    <HashRouter>
      <ThemeColorProvider>
        <LayoutProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Notes />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </Layout>
        </LayoutProvider>
      </ThemeColorProvider>
    </HashRouter>
  )
}
