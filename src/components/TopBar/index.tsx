import { Brightness4Rounded, Brightness7Rounded } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../ColorProvider'

type Props = {
  drawerWidth: number
}

export function TopBar({ drawerWidth }: Props) {
  const { toggleColorMode } = useContext(ColorModeContext)
  const theme = useTheme()

  return (
    <AppBar
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
      elevation={0}
    >
      <Toolbar>
        <Typography
          sx={{
            flex: 1,
          }}
        >
          {Intl.DateTimeFormat('en-US', {
            dateStyle: 'full',
            timeStyle: undefined,
          }).format(Date.now())}
        </Typography>
        <Typography>Bruno</Typography>
        <Avatar
          sx={{
            ml: theme.spacing(2),
          }}
          src="https://github.com/vbruno96.png"
        />
        <IconButton
          sx={{
            ml: theme.spacing(1),
          }}
          onClick={toggleColorMode}
        >
          {theme.palette.mode === 'light' ? (
            <Brightness4Rounded
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            />
          ) : (
            <Brightness7Rounded
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
