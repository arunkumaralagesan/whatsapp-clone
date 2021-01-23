import React from 'react';
import './SidebarChat.css';
import Avatar from "@material-ui/core/Avatar";

function SidebarChat({ name, url }) {
  return (
    <div className="sidebarChat">
      <Avatar src="https://images.unsplash.com/photo-1520962922320-2038eebab146?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
      <div className="sidebardChat__info">
        <h2>Group{name}</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
