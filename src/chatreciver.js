import React from 'react'
import './chatreciver.css'
function Chatreciver() {
  return (
    <div>
        <p className = 'chat__reciver'>
    <span className='chat__name'>
    soony</span>
    this is message
    <span className='time__stamp'>
      {new Date().toLocaleTimeString()}</span>
    </p>
    </div>
  )
}

export default Chatreciver;