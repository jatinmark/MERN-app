import  React ,{useContext} from 'react'
import { AccountContext } from './accountdetail';
import GetAppIcon from '@mui/icons-material/GetApp';
import './chatsender.css';
import { downloadmedia } from './utiles.js';
import { Typography } from '@mui/material';
const you = "You"
// message
function Chatsender({message}) {      
   // eslint-disable-next-line
   const { account , person } = useContext(AccountContext);
   
  return (
    <div>
      {
      account.sub === message.senderId ?
      <div>
         {
          message.type==='file' ? <div className = 'chat__reciver' ><Imagemessage message = {message} /> </div> : <div className = 'chat__reciver' ><Textmessage message={message} /> </div>
         }
            </div>:
            // message received box down
             <div className = 'chat__message' > 
              {
          message.type==='file' ? <Imagerecived message = {message} /> : <Textrecived message={message} />
         }
    </div> }
    </div>
      )
}

const Imagemessage = ({message})=>{
  return (
    <div >
    {
      message?.text?.includes('.pdf')?
      
      
     <div style ={{position : "relative"}}>
      <p style ={{ margin : "-9px" , marginBottom:'16px' }} className = 'chat__reciver' >
      <span className='chat__name'>
       {you} </span>
       <div style={{display: 'flex' , justifyContent : 'right'}}>
       <img src = 'https://play-lh.googleusercontent.com/LvJB3SJdelN1ZerrndNgRcDTcgKO49d1A63C5hNJP06rMvsGkei-lwV52eYZJmMknCwW' style={{width : 80 , objectFit : 'cover'}}  alt = {message.text} />
       <Typography style={{fontSize : 14}} > {message.text.split('/').pop()}</Typography>
       </div>
         <span className='time__stamp  Download' style = {{textAlign: 'center'  ,position : 'absolute' , bottom: '-21px' , right: '6px'  }}>
           {message.current} < GetAppIcon
           onClick ={(e) => downloadmedia(e , message.text)}
           style={{  border : '1px solid grey' , borderRadius:"50%"}} fontSize='small' />
           </span> 
          
          </p>
          </div> : 
      
      
      <div style ={{position : "relative"}}>
      <p style ={{ margin : "-9px" , marginBottom:'16px' }} className = 'chat__reciver' >
      <span className='chat__name'>
       {you} </span>
       <img style={{width : 300 , height : '100%', objectFit : 'cover'}} src={message.text} alt = {message.text} />
         <span className='time__stamp  Download' style = {{textAlign: 'center'  ,position : 'absolute' , bottom: '-21px' , right: '6px'  }}>
           {message.current} < GetAppIcon 
           onClick ={(e) => downloadmedia(e , message.text)}
           style={{  border : '1px solid grey' , borderRadius:"50%"}} fontSize='small' />
           </span> 
          
          </p>
          </div>
    }
    </div>
  )
}




const Textmessage = ({message}) => {
  return (
    <div>
<p style ={{  marginBottom:'0px' }}  >
        <span className='chat__name'>
         {you} </span>
         {message.text}
           <span className='time__stamp'>
             {message.current}</span> 
            </p>
    </div>
  )
}

const Imagerecived = ({message})=>{
  const { person } = useContext(AccountContext);
  return (
    <div >
    {
      message?.text?.includes('.pdf')?
      
      
     <div style ={{position : "relative"}}>
      <p style ={{ margin : "-9px" , marginBottom:'16px' }} className = 'chat__message' >
      <span className='chat__name'>
       {person.name} </span>
       <div style={{display: 'flex' , justifyContent : 'right'}}>
       <img src = 'https://play-lh.googleusercontent.com/LvJB3SJdelN1ZerrndNgRcDTcgKO49d1A63C5hNJP06rMvsGkei-lwV52eYZJmMknCwW' style={{width : 80 , objectFit : 'cover'}}  alt = {message.text} />
       <Typography style={{fontSize : 14}} > {message.text.split('/').pop()}</Typography>
       </div>
         <span className='time__stamp  Download' style = {{textAlign: 'center'  ,position : 'absolute' , bottom: '-21px' , right: '6px'  }}>
           {message.current} < GetAppIcon 
           onClick ={(e) => downloadmedia(e , message.text)}
           style={{  border : '1px solid grey' , borderRadius:"50%"}} fontSize='small' />
           </span> 
          
          </p>
          </div> : 
      
      
      <div style ={{position : "relative"}}>
      <p style ={{ margin : "-9px" , marginBottom:'16px' }} className = 'chat__message' >
      <span className='chat__name'>
       {person.name} </span>
       <img style={{width : 300 , height : '100%', objectFit : 'cover'}} src={message.text} alt = {message.text} />
         <span className='time__stamp  Download' style = {{textAlign: 'center'  ,position : 'absolute' , bottom: '-21px' , right: '6px'  }}>
           {message.current} < GetAppIcon 
           onClick ={(e) => downloadmedia(e , message.text)}
           style={{  border : '1px solid grey' , borderRadius:"50%"}} fontSize='small' />
           </span> 
          
          </p>
          </div>
    }
    </div>
  )
}


const Textrecived = ({message}) => {
  const {  person } = useContext(AccountContext);
  return (
    <div>
<p style ={{  marginBottom:'0px' }}  >
        <span className='chat__name'>
         {person.name} </span>
         {message.text}
           <span className='time__stamp'>
             {message.current}</span> 
            </p>
    </div>
  )
}


export default Chatsender;