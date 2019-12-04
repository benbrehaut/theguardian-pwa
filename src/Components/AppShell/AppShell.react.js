import React from 'react';

import AppHeader from './../AppHeader'

export default function AppShell(props) {
  return(
    <div className="app-shell">
      <AppHeader />
      <main role="main">
        { props.children }
      </main>
    </div>
  )
}