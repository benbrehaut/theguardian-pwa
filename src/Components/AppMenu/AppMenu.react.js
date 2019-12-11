import React, { useContext } from 'react';

import { MenuContext } from './../../Providers/menuProvider'

import './AppMenu.scss'

export default function AppMenu() {
  const state = useContext(MenuContext)

  return(
    <>
      <nav className={`o-app-menu ${state.menuOpen ? 'is-open' : ''}`}>
        I am the navigation
      </nav>
    </>
  )
}