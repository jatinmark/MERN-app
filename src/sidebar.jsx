import React  from 'react'
import './sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar , IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './sidebarchat';
import {useContext} from 'react'
import { AccountContext } from './accountdetail';
function Sidebar() {

  const {settext ,account } = useContext(AccountContext);

  return (
    <div className='sidebar'>
          <div className = 'sidebar__header' >
                  <Avatar style ={{ height : 42 , width: 42}} src = {account.picture}  />
         
                 <div className = 'sidebar__heade__right' >
                   <IconButton>
                      <DonutLargeIcon />
                   </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon  />
                    </IconButton>
                 </div>
          </div>
               <div className='searchbar'>
               <div className ='search_contain'>
               <IconButton>
               <SearchIcon />
               </IconButton>
                       <input onChange={(e) => settext(e.target.value)} type = "text" placeholder='search or start new chat'  />
                       </div>
                       
                 </div>
                 
                 <div className='addcon' >
                  <Sidebarchat />
                  
                 </div>
          </div>
          
  )
}

export default Sidebar