import React from 'react'
import { Link } from 'react-router-dom'

import ScreenReaderText from './../ScreenReaderText'

import './ActionBadge.scss'

const ActionBadge = ({ onClick, children, fill, text }) => {
  return(
    <button 
      type="butotn"
      className="o-action-badge" 
      onClick={onClick}
      style={{
        backgroundColor: fill
      }}>
      {children} 
    <ScreenReaderText>{text}</ScreenReaderText>
    </button>
  )
}

export default ActionBadge;