import React from 'react';

import './AppBar.scss'

const AppBar = ({ children }) => {
  return(
    <div className="o-appbar">
      { children }
    </div>
  )
}

export default AppBar;
