import React from "react";

import "./IMessage.css";

// sidebar
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

function IMessage() {
  return (
    <div className="imessage">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default IMessage;
