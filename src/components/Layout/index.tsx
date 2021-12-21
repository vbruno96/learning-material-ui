import {
  AddCircleOutlined,
  Brightness4Rounded,
  Brightness7Rounded,
  SubjectOutlined,
} from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ReactNode, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ColorModeContext } from '../ColorProvider'

type Props = {
  children: ReactNode
}

type MenuItens = {
  text: string
  icon: ReactNode
  path: string
}

const drawerWidth = 240

export function Layout({ children }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const { mode, toggleColorMode } = useContext(ColorModeContext)

  const menuItens: MenuItens[] = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="success" />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color="success" />,
      path: '/create',
    },
  ]

  const theme = useTheme()
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
      }}
    >
      <AppBar
        sx={(theme) => ({
          width: `calc(100% - ${drawerWidth}px)`,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        })}
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
            sx={(theme) => ({
              ml: theme.spacing(2),
            })}
            src="https://github.com/vbruno96.png"
          />
          <IconButton
            sx={(theme) => ({
              ml: theme.spacing(1),
            })}
            onClick={toggleColorMode}
          >
            {theme.palette.mode === 'light' ? (
              <Brightness4Rounded
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            ) : (
              <Brightness7Rounded
                sx={(theme) => ({
                  color: theme.palette.primary.contrastText,
                })}
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={(theme) => ({
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            borderRight: 'none',
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        })}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography
            variant="h5"
            sx={(theme) => ({
              p: theme.spacing(2),
            })}
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
              sx={(theme) => ({
                '& .Mui-active': {
                  color: theme.palette.success.main,
                },
              })}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={(theme) => ({
          bgcolor: theme.palette.background.default,
          width: '100%',
          height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
          mt: '56px',
          p: theme.spacing(2),
        })}
      >
        {children}
      </Box>
    </Box>
  )
}
