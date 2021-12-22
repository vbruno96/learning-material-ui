import React, { ReactNode, useEffect } from 'react'

import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { SideBar } from '../SideBar'
import { TopBar } from '../TopBar'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  const theme = useTheme()
  useEffect(() => console.log(theme.mixins.toolbar.minHeight), [theme.mixins.toolbar.minHeight])

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <TopBar />
      <SideBar />
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          width: '100%',
          height: `100vh`,
          p: theme.spacing(2),
          flexGrow: 1,
          '&:before': {
            content: '""',
            display: 'block',
            mt: theme.spacing(2),
            ...theme.mixins.toolbar,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
