import React from "react";
import './startingpage.css'
import Avatar from '@mui/material/Avatar';
function Startingpage(){
    return (
        <div className="chat">
          <div className="contain">
            <Avatar sx={{height: 150 , width: 150}} src = 'https://i.pinimg.com/736x/0b/ed/a7/0beda70666d2b30f4be393f0a14f3da3.jpg' />
          <h2 className="message">This is the very beginning of your <br />legendary conversation</h2>
          </div>
        </div>
    )
}

export default Startingpage ; 
// https://i.pinimg.com/736x/0b/ed/a7/0beda70666d2b30f4be393f0a14f3da3.jpg