import React from 'react'
import './loginpage.css'
import { useContext } from 'react';
import { AccountContext } from './accountdetail';
import GoogleIcon from '@mui/icons-material/Google';
import TelegramIcon from '@mui/icons-material/Telegram';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import {addUser} from './axios.js'

function Loginpage() {

  // const login = useGoogleLogin({
  //   onSuccess: res  => console.log(jwt_decode(res))
  // });


// const loginfail = useGoogleLogin({
//   onloginfail: res =>console.log('login fail', res)
// });
const {setaccount} = useContext(AccountContext);
const onloginsuccess = async(res) =>{
  console.log(jwt_decode(res.credential));
  setaccount(jwt_decode(res.credential));
 await addUser(jwt_decode(res.credential));
  }

    return (
      <div className='whole'>
    <div className='bod'>
              <div className='main_content'>
                <div className='icon'>
              <TelegramIcon  sx={{color: 'error.light', width : 60 , height : 60 }} />
               <h1>Messanger App</h1> 
               </div>
               <div className='greet'>
               <h5> Messaging, There's No Better Way.</h5>
               </div>
               <div className='YOYO'>
               <button  type="submit" class="btn btn-outline-danger">
               <GoogleLogin
               onSuccess={onloginsuccess} />
                <div className='button'>< GoogleIcon /><span>Sign in with Google </span></div>   
                </button>
                </div>
                      </div>
    </div>
    </div>
  
    ) ;
}

export default Loginpage ;