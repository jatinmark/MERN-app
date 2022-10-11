import React  from 'react'
import './sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar , IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from './sidebarchat';

function Sidebar() {
  return (
    <div className='sidebar'>
          <div className = 'sidebar__header' >
                  <Avatar src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"  />
         
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
                       <input  type = "text" placeholder='search or start new chat'  />
                       </div>
                       
                 </div>
                 
                 <div className='addcon' >
                  <Sidebarchat />
                  <Sidebarchat />
                  <Sidebarchat />
                 </div>
          </div>
          
  )
}

export default Sidebar