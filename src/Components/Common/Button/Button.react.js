import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ url, isExternal, children, type }) => {
  if (url) {
    return isExternal ? (
      <a href={ url }>
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
      type={ type ? type : "button" }>
      { children }
    </button>
  )
}

export default Button;