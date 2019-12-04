import React from 'react';
import { Link } from 'react-router-dom'
import AppMenu from './../AppMenu'
import ScreenReaderText from './../Common/ScreenReaderText'

import './AppHeader.scss'

export default function AppHeader() {
  return(
    <header className="o-app-header">
      <Link className="o-app-header__logo" to="/">The Guardian</Link>
      <button className="o-app-header__menuToggle" type="button">
        <ScreenReaderText>Toggle Menu</ScreenReaderText>
      </button>
      <AppMenu />
    </header>
  )
}