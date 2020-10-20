import React, { useState } from "react";

import "./ChatInput.css";

// material-ui
import IconButton from "@material-ui/core/IconButton";
// material ui icons
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    // firebase logic here
    setMessage("");
  };

  return (
    <div className="chat_input">
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="meMessage"
          onSubmit={sendMessage}
        />
        <IconButton className="send_button" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default ChatInput;
