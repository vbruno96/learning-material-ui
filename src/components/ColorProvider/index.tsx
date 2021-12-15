import { PaletteMode } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { createContext, ReactNode, useMemo, useState } from 'react'
import { themeScheme } from '../../utlis/themeScheme'

type Props = {
  children: ReactNode
}

type ColorModeContextData = {
  toggleColorMode: () => void
}

export const ColorModeContext = createContext({} as ColorModeContextData)

export function ColorProvider({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>('dark')

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === 'light' ? 'dark' : 'light'
    )
  }

  const theme = useMemo(() => createTheme(themeScheme(mode)), [mode])

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
