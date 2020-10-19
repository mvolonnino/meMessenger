import React from "react";

import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chat_header">
      <h4>
        To: <span className="channel_name">Channel Name</span>
      </h4>
      <strong>Details</strong>
    </div>
  );
}

export default ChatHeader;
