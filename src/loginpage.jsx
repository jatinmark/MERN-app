import React from 'react'
import './loginpage.css'
import GoogleIcon from '@mui/icons-material/Google';
import TelegramIcon from '@mui/icons-material/Telegram';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function Loginpage() {

  // const login = useGoogleLogin({
  //   onSuccess: res  => console.log(jwt_decode(res.access_token))
  // });


const loginfail = useGoogleLogin({
  onloginfail: res =>console.log('login fail', res)
});

const onloginsuccess =(res) =>{
  console.log(jwt_decode(res.credential));
  }
    return (
      <div className='whole'>
    <div className='bod'>
              <div className='main_content'>
                <div className='icon'>
              <TelegramIcon  sx={{color: 'error.light', width : 60 , height : 60}} />
               <h1>Messanger App</h1> 
               </div>
               <div className='greet'>
               <h5> Messaging, There's No Better Way.</h5>
               </div>
            
               <button  type="button" class="btn btn-outline-danger">
               <GoogleLogin
                         onSuccess={onloginsuccess} />
                <div className='button'>< GoogleIcon /><span>Sign in with Google </span></div>   
                </button>
                
                      </div>
    </div>
    </div>
  
    ) ;
}

export default Loginpage ;