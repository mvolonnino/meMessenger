import React from "react";

import "./MeMessage.css";

// sidebar
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

function MeMessage() {
  return (
    <div className="meMessage">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default MeMessage;
