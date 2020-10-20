import React from "react";

import "./ChatHeader.css";
import { useSelector } from "react-redux";
import { selectChatName } from "../../features/chatSlice";

function ChatHeader() {
  const chatName = useSelector(selectChatName);
  return (
    <div className="chat_header">
      <h4>
        To: <span className="channel_name">{chatName}</span>
      </h4>
      <strong>Details</strong>
    </div>
  );
}

export default ChatHeader;
