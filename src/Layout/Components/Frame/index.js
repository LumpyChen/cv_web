import React from 'react'
import './frame.css'

const Frame = ({children}) => (
    <div className="frame-container">
      <div className="frame">
        {children}
      </div>
    </div>
)

export default Frame
