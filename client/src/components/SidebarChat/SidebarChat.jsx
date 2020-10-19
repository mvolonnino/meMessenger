import React from "react";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebar_chat">
      <Avatar />
      <div className="sidebarChat_info">
        <h3>Channel Name</h3>
        <p>Last Message Sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
