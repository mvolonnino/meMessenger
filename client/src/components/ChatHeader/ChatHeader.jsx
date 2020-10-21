import React, { useEffect, useState } from "react";

import "./ChatHeader.css";
import { useSelector } from "react-redux";
import { selectChatName } from "../../features/chatSlice";
import DetailsMenu from "../DetailsMenu/DetailsMenu";

function ChatHeader() {
  const chatName = useSelector(selectChatName);

  return (
    <div className="chat_header">
      <h4>
        To: <span className="channel_name">{chatName}</span>
      </h4>
      <DetailsMenu />
    </div>
  );
}

export default ChatHeader;
