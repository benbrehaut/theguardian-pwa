import React, { useContext } from 'react';

import { MenuContext } from '../../Providers/menuProvider';

import ScreenReaderText from './../Common/ScreenReaderText' 

import './AppMenuTriggerButton.scss'

export default function AppMenuTriggerButton() {
  const state = useContext(MenuContext)

  function changeMenuState() {
    state.menuOpen ? state.setMenu(false) : state.setMenu(true)
  }

  return(
    <>
      <button className={`o-app-menu-toggler ${state.menuOpen ? 'is-open' : ''}`} type="button" onClick={() => changeMenuState()}>
        <ScreenReaderText>Toggle Menu</ScreenReaderText>
        <span className="o-app-menu-toggler__line o-app-menu-toggler__line--top" aria-hidden="true"></span>
        <span className="o-app-menu-toggler__line o-app-menu-toggler__line--middle" aria-hidden="true"></span>
        <span className="o-app-menu-toggler__line o-app-menu-toggler__line--bottom" aria-hidden="true"></span>
      </button>
    </>
  )
}