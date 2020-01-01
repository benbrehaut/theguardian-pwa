import React from 'react';

import './AppBar.scss'

const AppBar = ({ title, leftIcon, rightIcon }) => {
  return(
    <div className="o-appbar">
      <span className="o-appbar__icon o-appbar__icon--left">
        {leftIcon}
      </span>
      <span className="o-appbar__title">{title}</span>
      <span className="o-appbar__icon o-appbar__icon--left">
        {rightIcon}
      </span>
    </div>
  )
}

export default AppBar;
