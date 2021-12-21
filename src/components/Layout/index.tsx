import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'
import { SideBar } from '../SideBar'
import { TopBar } from '../TopBar'

type Props = {
  children: ReactNode
}

const drawerWidth = 240

export function Layout({ children }: Props) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <TopBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        sx={{
          bgcolor: theme.palette.background.default,
          width: '100%',
          height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
          mt: '56px',
          p: theme.spacing(2),
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
