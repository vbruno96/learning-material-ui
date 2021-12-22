import React, { ReactNode, useContext } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { ChevronLeftRounded, NoteAddRounded, NotesRounded } from '@mui/icons-material'
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'

import { LayoutContext } from '../../context/Layout'

type MenuItens = {
  text: string
  icon: ReactNode
  path: string
}

const menuItens: MenuItens[] = [
  {
    text: 'My Notes',
    icon: <NotesRounded color='success' />,
    path: '/',
  },
  {
    text: 'Create Notes',
    icon: <NoteAddRounded color='success' />,
    path: '/create',
  },
]

export function SideBar() {
  const theme = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const { sideBarWidth, isOpen, toggleSideBar, openedMixin, closedMixin } = useContext(LayoutContext)

  return (
    <Drawer
      sx={{
        width: sideBarWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(isOpen && {
          ...openedMixin(theme),
        }),
        ...(!isOpen && {
          ...closedMixin(theme),
        }),
        '& .MuiDrawer-paper': {
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderRight: 'none',
          borderRightColor: 'transparent',
          width: sideBarWidth,
          ...(isOpen && {
            ...openedMixin(theme),
          }),
          ...(!isOpen && {
            ...closedMixin(theme),
          }),
        },
      }}
      variant='permanent'
      anchor='left'
      open={isOpen}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          ...theme.mixins.toolbar,
        }}
      >
        <Typography variant='h5'>Notes</Typography>
        <IconButton edge='end' onClick={toggleSideBar}>
          <ChevronLeftRounded />
        </IconButton>
      </Box>
      <List
        sx={{
          mt: theme.spacing(1),
        }}
      >
        {menuItens.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              '&:hover, &.Mui-focusVisible': {
                bgcolor: theme.palette.primary.light,
              },
              '&.Mui-selected': {
                bgcolor: theme.palette.primary.light,
              },
            }}
            selected={location.pathname === item.path ? true : false}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}
