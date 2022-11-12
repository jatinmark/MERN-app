// eslint-disable-next-line

import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './axios.js';
import Loginpage from './loginpage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './accountdetail';
import Finalchat from './finalchat';

function App() {
  
 
//client id : 870774976201-e8pj9ekudefr7bit4dqj6hmvl0lkmcpn.apps.googleusercontent.com
const clientId= '870774976201-e8pj9ekudefr7bit4dqj6hmvl0lkmcpn.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
    
        <Finalchat />
    </AccountProvider>
    </GoogleOAuthProvider>
    
    // <div className="app" >
    //   <div className = "app__body" >
        
    //       <Sidebar />         {    /* Sidebar  */}
    //     <Chat  message={message} />           {/* Chat   */}
    //   </div>
    // </div>
  );
}


export default App;
