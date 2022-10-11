import React from 'react'
import './chatsender.css'
function Chatsender({message}) {
  return (
    <div>{
      message.map((message) => 
      // eslint-disable-next-line
     <p className = { `chat__message ${message.received &&  "chat__reciver"} ` } >
    <span className='chat__name'>
    {message.name}</span>
    {message.message}
    <span className='time__stamp'>
      {message.timestamp}</span>
    </p>
      )
    }
</div>  )
}

export default Chatsender;