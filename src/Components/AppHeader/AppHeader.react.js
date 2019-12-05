import React from 'react';
import { Link } from 'react-router-dom'
import AppMenu from './../AppMenu'
import ScreenReaderText from './../Common/ScreenReaderText'

import './AppHeader.scss'

export default function AppHeader() {
  return(
    <header className="o-app-header" role="banner">
      <Link className="o-app-header__logo" to="/">The Guardian</Link>
      <AppMenu />
    </header>
  )
}