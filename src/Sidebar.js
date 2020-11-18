import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/FelixINX_Avatar.png/240px-FelixINX_Avatar.png" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </header>
      <div className="sidebar__search">
        <div className="sidebar__searchContainter">
          <SearchIcon className="search__icon"/>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat name={" A"} />
        <SidebarChat name={" B"} />
        <SidebarChat name={" C"} />
      </div>
    </div>
  );
}

export default Sidebar;
