import { PaletteMode, ThemeProvider, createTheme } from '@mui/material'
import { createContext, ReactNode, useMemo, useState } from 'react'
import { themeScheme } from '../../utlis/themeScheme'

type Props = {
  children: ReactNode
}

type ThemeColorContextData = {
  toggleColorMode: () => void
}

export const ThemeColorContext = createContext({} as ThemeColorContextData)

export function ThemeColorProvider({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [mode]
  )

  const theme = useMemo(() => createTheme(themeScheme(mode)), [mode])

  return (
    <ThemeColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeColorContext.Provider>
  )
}
