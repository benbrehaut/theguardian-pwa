import React from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

const Button = ({ url, isExternal, children, type }) => {
  if (url) {
    return isExternal ? (
      <a href={ url } className="o-btn o-btn--primary">
        { children }
      </a>
    ) : (
      <Link to={ url }>
        { children }
      </Link>
    )
  }

  return(
    <button 
      type={ type ? type : "button" }
      className="o-btn o-btn--primary">
      { children }
    </button>
  )
}

export default Button;