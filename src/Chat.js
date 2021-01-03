import React, { useState } from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import AttachFileRoundedIcon from "@material-ui/icons/AttachFileRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import SendIcon from "@material-ui/icons/Send";
import axios from "./axios";

function Chat({ messages }) {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    axios.post("/messages/new", {
      name: "Arun",
      message: message,
      timeStamp: new Date(),
      received: false,
    });
    setMessage('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__profile">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/FelixINX_Avatar.png/240px-FelixINX_Avatar.png" />
          <div className="chat__profileInfo">
            <h3>Arun</h3>
            <p>Last seen yesterday</p>
          </div>
        </div>
        <div className="chat__haderOptions">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => {
          if (message?.name && message?.message)
            return (
              <p
                className={`chat__message ${
                  message?.received ? "received" : ""
                }`}
              >
                <span className="chat__name">{message?.name}</span>
                <span>{message?.message}</span>
                <span className="chat__timeStamp">
                  {new Date(message?.timeStamp || new Date.now()).toLocaleTimeString("en-US")}
                </span>
              </p>
            );
        })}
      </div>
      <footer className="chat__footer">
        <div className="chat__footerLeft">
          <IconButton>
            <InsertEmoticonRoundedIcon />
          </IconButton>
          <IconButton>
            <AttachFileRoundedIcon />
          </IconButton>
        </div>
        <div className="chat__footerCenter">
          <form>
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button onClick={sendMessage}>
              <IconButton>
                <SendIcon />
              </IconButton>
            </button>
          </form>
        </div>
        <div className="chat__footerRight">
          <IconButton>
            <MicRoundedIcon />
          </IconButton>
        </div>
      </footer>
    </div>
  );
}

export default Chat;
