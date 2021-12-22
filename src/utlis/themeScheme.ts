import { PaletteMode } from '@mui/material'

export const themeScheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: '#005271',
      light: '#437ea0',
      dark: '#002a45',
      contrastText: '#fefefe',
    },
    secondary: {
      main: '#42a031',
      light: '#76d260',
      dark: '#007000',
      contrastText: '#000',
    },
    ...(mode === 'light'
      ? {}
      : {
          background: {
            default: '#002a45',
            paper: '#437ea0',
          },
          text: {
            primary: 'rgba(254,254,254, .87)',
            secondary: 'rgba(254,254,254, .54)',
            disable: 'rgba(254,254,254, .38)',
            hint: 'rgba(254,254,254, .38)',
          },
        }),
  },
  shape: {
    borderRadius: 6,
  },
})
