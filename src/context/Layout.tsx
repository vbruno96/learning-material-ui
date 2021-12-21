import { createContext, ReactNode, useState } from 'react';

import { CSSObject, Theme } from '@mui/material';

type Props = { children: ReactNode }

type LayoutContextData = {
  sideBarWidth: number
  isOpen: boolean
  toggleSideBar: () => void
  openedMixin: (theme: Theme) => CSSObject
  closedMixin: (theme: Theme) => CSSObject
}

export const LayoutContext = createContext({} as LayoutContextData)

export function LayoutProvider({ children }: Props) {
  const sideBarWidth = 240
  const [isOpen, setIsOpen] = useState(true)

  const openedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
  })

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
  })

  const toggleSideBar = () => {
    setIsOpen((state) => !state)
  }
  return (
    <LayoutContext.Provider
      value={{
        sideBarWidth,
        isOpen,
        toggleSideBar,
        openedMixin,
        closedMixin,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
