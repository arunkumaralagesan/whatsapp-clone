import React from 'react';
import './SidebarChat.css';
import Avatar from "@material-ui/core/Avatar";

function SidebarChat({ name }) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebardChat__info">
        <h2>Group{name}</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
