import { createTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Create } from './pages/Create'
import { Notes } from './pages/Notes'

const theme = createTheme({
  palette: {
    primary: {
      main: '#121096',
    },
  },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
