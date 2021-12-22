import { useContext } from 'react'

import { Brightness4Rounded, Brightness7Rounded, MenuRounded } from '@mui/icons-material'
import { AppBar, Avatar, IconButton, Toolbar, Typography, useTheme } from '@mui/material'

import { LayoutContext } from '../../context/Layout'
import { ThemeColorContext } from '../ThemeColorProvider'

export function TopBar() {
  const { toggleColorMode } = useContext(ThemeColorContext)
  const { sideBarWidth, isOpen, toggleSideBar } = useContext(LayoutContext)
  const theme = useTheme()

  return (
    <AppBar
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(isOpen && {
          marginLeft: sideBarWidth,
          width: `calc(100% - ${sideBarWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }),
      }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          color="secondary"
          aria-label="open side bar"
          onClick={toggleSideBar}
          edge="start"
          sx={{
            ...(isOpen && { display: 'none' }),
          }}
        >
          <MenuRounded />
        </IconButton>
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
