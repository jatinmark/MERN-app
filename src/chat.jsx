import { Avatar, IconButton } from '@mui/material'
import React , { useState } from 'react'
import { useContext } from 'react';
import { AccountContext } from './accountdetail';
import './chat.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chatsender from './chatsender';
import axios from './axios'
// import Chatreciver from './chatreciver';
import './chatsender.css'
// import './chatreciver.css'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat({message}) {
 const {person} = useContext(AccountContext);
const [input,setinput] = useState('');
let time = new Date().toLocaleTimeString();
 const sendmessage = async (e) => {
   e.preventDefault();
  
   await axios.post('/message/new' , {
      message :  input ,
      timestamp : time ,
      received : "true" ,
      name  : "jatin"
   });
   
   setinput("");
   
 }

   return (
    <div className='chat'>
          <div className='chat__header' >
             <Avatar sx={{height : 42 , width: 42}} src = {person.picture} />
                   <div className='ava__info'>
                      <h3>{person.name}</h3>
                          <p>Offline</p>
                     </div>
                        <div>
                           <IconButton>
                            <SearchIcon />
                           </IconButton> 
                           
                           <IconButton>
                            <MoreVertIcon />
                           </IconButton>
                         </div>
             </div>
             <div className='chat__body' >
                <Chatsender message = {message} />            
             </div>
             <div className = 'chat__footer'>
             <IconButton>
             <InsertEmoticonIcon />
             </IconButton>
             <IconButton>
                              <AttachFileIcon />
                           </IconButton>
                                       <form>
                                         <input value = {input} onChange = {(e)=> setinput(e.target.value) }  type='text' placeholder='Type a message'  /> 
                                            <button onClick = {sendmessage}  
                                           type ='submit'>send message
                                          </button>
                                       </form>
                    <IconButton>
                    <MicIcon />
                     </IconButton> 
            </div>
      </div>
  )
}
export default Chat