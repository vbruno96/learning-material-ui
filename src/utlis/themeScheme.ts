import { PaletteMode } from '@mui/material'

export const themeScheme = (colorMode: PaletteMode) => ({
  palette: {
    mode: colorMode,
    ...(colorMode === 'light'
      ? {
          primary: {
            main: '#680da0',
            light: '#9b45d2',
            dark: '#350070',
            contrastText: '#fefefe',
          },
          secondary: {
            main: '#307ea0',
            light: '#66add1',
            dark: '#005271',
            contrastText: '#fefefe',
          },
          success: {
            main: '#42a031',
            light: '#76d260',
            dark: '#007000',
            contrastText: '#000',
          },
        }
      : {
          secondary: {
            main: '#680da0',
            light: '#9b45d2',
            dark: '#350070',
            contrastText: '#fefefe',
          },
          primary: {
            main: '#307ea0',
            light: '#66add1',
            dark: '#005271',
            contrastText: '#fefefe',
          },
          success: {
            main: '#42a031',
            light: '#76d260',
            dark: '#007000',
            contrastText: '#000',
          },
          background: {
            default: '#350070',
            paper: '#9b45d2',
          },
          divider: '#42a031',
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
