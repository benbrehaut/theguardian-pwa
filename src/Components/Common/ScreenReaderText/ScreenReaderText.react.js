import React from 'react'

import './ScreenReaderText.scss'

const SROnly = ({elem, className, id, children}) => (
  <span id={id} className="o-sr-only">
    {children}
  </span>
)

export default SROnly
