import React , { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Chat from './chat';
import './App.css';
// import axios from './axios.js';
import {useContext} from 'react'
import { AccountContext } from './accountdetail';
// import Pusher from 'pusher-js'
import Loginpage from './loginpage';
import Startingpage from './startingpage';
function Finalchat(){
 const {account} = useContext(AccountContext);
 const {person} = useContext(AccountContext);

  
//  useEffect(() => {
//  axios.get('/message/sync').then((response) => {
//   setmessage(response.data)
//  });
//   }, []);
  

//   useEffect (() => {
//     const pusher = new Pusher('a5001549bc0f9b271c0a', {
//       cluster: 'ap2'
//     });

//     const channel = pusher.subscribe('messages');
//     channel.bind('inserted', function(data) {
//       setmessage([...message,data]);
//     });

// return () => {
//   channel.unsubscribe();
//   channel.unbind_all();
// };


//   }, [message]);

//   console.log(message);
    return(
      <div>
        {account ? <><div className="app" >
      <div className = "app__body" >
        
          <Sidebar />        
       { Object.keys(person).length ? <Chat   />  : <Startingpage />   }   
      </div>
    </div></> : <Loginpage /> }
        
    </div>
    )
}

export default Finalchat;