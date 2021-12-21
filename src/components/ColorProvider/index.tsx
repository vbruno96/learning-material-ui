import { PaletteMode, ThemeProvider, createTheme } from '@mui/material'
import { createContext, ReactNode, useMemo, useState } from 'react'
import { themeScheme } from '../../utlis/themeScheme'

type Props = {
  children: ReactNode
}

type ColorModeContextData = {
  toggleColorMode: () => void
  mode: PaletteMode
}

export const ColorModeContext = createContext({} as ColorModeContextData)

export function ColorProvider({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
      mode,
    }),
    [mode]
  )

  const theme = useMemo(() => createTheme(themeScheme(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
