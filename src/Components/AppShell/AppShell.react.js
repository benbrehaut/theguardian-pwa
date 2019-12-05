import React from 'react';

import AppHeader from './../AppHeader'

import './AppShell.scss'

export default function AppShell(props) {
  return(
    <div className="o-app-shell">
      <AppHeader />
      <main role="main">
        { props.children }
      </main>
    </div>
  )
}