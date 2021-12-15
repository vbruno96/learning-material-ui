import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Typography,
} from '@mui/material'
import { DefaultTheme, makeStyles } from '@mui/styles'
import { ReactNode } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type Props = {
  children: ReactNode
}

type MenuItens = {
  text: string
  icon: ReactNode
  path: string
}

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPapper: {
      width: drawerWidth,
    },
    page: {
      background: '#F9F9F9',
      width: '100%',
      padding: theme.spacing(3),
    },
    active: {
      '&&': {
        background: '#f4f4f4',
      },
    },
    title: {
      padding: theme.spacing(2),
    },
  }
})

export function Layout({ children }: Props) {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const menuItens: MenuItens[] = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/create',
    },
  ]

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPapper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Notes
          </Typography>
        </div>
        <List>
          {menuItens.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  )
}
