// eslint-disable-next-line

import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './axios.js';


function App() {
  
 const  [ message , setmessage] = useState([]);
  
 useEffect(() => {
 axios.get('message/sync').then((response) => {
  setmessage(response.data)
 });
  }, []);
  

  useEffect (() => {
    const pusher = new Pusher('a5001549bc0f9b271c0a', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setmessage([...message,data]);
    });

return () => {
  channel.unsubscribe();
  channel.unbind_all();
};


  }, [message]);

  console.log(message);
  return (
    <div className="app" >
      <div className = "app__body" >
          <Sidebar />         {    /* Sidebar  */}
        <Chat  message={message} />           {/* Chat   */}
      </div>
    </div>
  );
}


export default App;
