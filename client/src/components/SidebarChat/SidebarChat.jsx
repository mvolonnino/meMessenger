import React from "react";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();

  return (
    <div className="sidebar_chat">
      <Avatar />
      <div
        onClick={() =>
          dispatch(
            setChat({
              chatId: id,
              chatName: chatName,
            })
          )
        }
        className="sidebarChat_info"
      >
        <h3>{chatName}</h3>
        <p>Last Message Sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
