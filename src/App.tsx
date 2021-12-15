import { createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Create } from './pages/Create'
import { Notes } from './pages/Notes'

const theme = createTheme({
  palette: {
    primary: purple,
  },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
