import { Avatar, IconButton } from '@mui/material'
import React , { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AccountContext } from './accountdetail';
import './chat.css'
import { uploadFile } from './axios';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chatsender from './chatsender';
// import Chatreciver from './chatreciver';
import './chatsender.css'
// import './chatreciver.css'
import { getConversation , newMessage , getMessages  } from './axios';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
   // {message}
 const {person , account} = useContext(AccountContext);
const [input,setinput] = useState('');
let time = new Date().toLocaleTimeString();
 const [conversation , setconversation] = useState({});
 const [messages, setmessage] = useState([]);
const [newmessageflag , setmessageflag ] = useState(false);
const [file , setfile] = useState();
const [image , setimage] = useState('');

useEffect(() => {
   const getImage = async() => {
     if (file){
        const data = new FormData();
         data.append('name' , file.name);
         data.append('file' , file)
        let response =  await uploadFile(data);
         setimage(response.data);        
     }
   }
   getImage();
} , [file])

const onfilechange = (e) => {
setfile(e.target.files[0]);
setinput(e.target.files[0].name);
console.log(e);
}


useEffect(() => {
     const getConversationDetails = async() =>{
     let data =  await getConversation({ senderId : account.sub , receiverId : person.sub})
     setconversation(data); 
   }
     getConversationDetails();
} , [person.sub]);

useEffect(() => {
   const getmessagedetails = async()=>{
       let data = await getMessages(conversation._id);
       setmessage(data);
   }
   conversation._id && getmessagedetails();
},[person._id , conversation._id , newmessageflag])

const sendmessage = async (e) => {
   e.preventDefault();
   let message = {};
   if(!file){
    message = {
      senderId : account.sub ,
      receiverId : person.sub , 
      conversationId : conversation._id ,
      type : 'text',
      text : input ,
      current : time
     };
   }else{
     message = {
         senderId : account.sub ,
         receiverId : person.sub , 
         conversationId : conversation._id ,
         type : 'file',
         text : image ,
         current : time
        };
   }
   await newMessage(message);
   console.log(message);
   setmessageflag(prev => !prev )

   // await axios.post('/message/new' , {
   //    message :  input ,
   //    timestamp : time ,
   //    received : true ,
   //    name  : "jatin"
   // });
   
   setinput("");
   setfile("");
   setimage('');
 }

   return (
    <div className='chat'>
          <div className='chat__header' >
             <Avatar sx={{height : 42 , width: 42}} src = {person.picture} />
                   <div className='ava__info'>
                      <h3>{person.name}</h3>
                          <p>last active {time}</p>
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
             { messages && messages.map(message =>
                   <Chatsender   message = {message} />
                   )}
             </div>
             <div className = 'chat__footer'>
             <IconButton>
             <InsertEmoticonIcon />
             </IconButton>
             <IconButton>
                <label htmlFor='fileinput' >
                              <AttachFileIcon  />
               </label>
                          <input onChange={(e) => onfilechange(e)} type = 'file' id='fileinput' style ={{display:'none'}} />
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