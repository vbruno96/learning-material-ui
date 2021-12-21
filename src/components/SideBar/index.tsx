import { NoteAddRounded, NotesRounded } from '@mui/icons-material'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  drawerWidth: number
}

type MenuItens = {
  text: string
  icon: ReactNode
  path: string
}

const menuItens: MenuItens[] = [
  {
    text: 'My Notes',
    icon: <NotesRounded color="success" />,
    path: '/',
  },
  {
    text: 'Create Notes',
    icon: <NoteAddRounded color="success" />,
    path: '/create',
  },
]

export function SideBar({ drawerWidth }: Props) {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          borderRight: 'none',
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div>
        <Typography
          variant="h5"
          sx={{
            p: theme.spacing(2),
          }}
        >
          Notes
        </Typography>
      </div>
      <List>
        {menuItens.map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => navigate(item.path)}
            sx={{
              '& .Mui-active': {
                color: theme.palette.success.main,
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
