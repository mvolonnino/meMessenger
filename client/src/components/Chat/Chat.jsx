import React from "react";

import "./Chat.css";
import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import ChatMessages from "../ChatMessages/ChatMessages";

function Chat() {
  return (
    <div className="chat">
      {/* chat header */}
      <ChatHeader />
      {/* chat messages*/}
      <ChatMessages />
      {/* chat input */}
      <ChatInput />
    </div>
  );
}

export default Chat;
