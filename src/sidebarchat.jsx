import React, { useState } from 'react'
import { Avatar  } from '@mui/material';
import './sidebarchat.css'
import {useEffect} from 'react'
import { getUsers, setConversation } from './axios';
import {useContext} from 'react'
import { AccountContext } from './accountdetail';


function Sidebarchat() {
  const {setperson , account , text , users,setUsers} = useContext(AccountContext);

  
    useEffect(() => {
  const fetchdata = async() => {
   let res =  await getUsers();
   const filter = res.filter(user => user.name.toLowerCase().includes(text.toLowerCase())) 
   setUsers(filter);
  }
  fetchdata();
},[text]);

const getUser = async  (user) => {
 setperson(user);
 await setConversation({ senderId: account.sub, receiverId: user.sub });
}

  return (
       <div>
        <hr style={{    marginTop: 0 , marginBottom: 0}} />
      {users.map(user => (<>
        <div className='add_contact' onClick = {() => getUser(user)}>
        <Avatar style ={{ marginTop : "3px" ,height : 48 , width: 48 }} src = {user.picture} />
    <div className='info'>
    <h3>{user.name}</h3>
    <p>hello</p>
    </div>
    </div>
    <hr style={{    marginTop: 0 , marginBottom: 0}} />
      </>

      ))
      }
    
    </div>
  )
}

export default Sidebarchat;