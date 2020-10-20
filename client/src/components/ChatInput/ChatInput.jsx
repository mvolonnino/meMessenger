import React, { useState } from "react";
import firebase from "firebase";
import db from "../../database/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectChatId } from "../../features/chatSlice";

import "./ChatInput.css";

// material-ui
import IconButton from "@material-ui/core/IconButton";
// material ui icons
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
  const [message, setMessage] = useState("");
  console.log({ message });
  const user = useSelector(selectUser);
  const chatId = useSelector(selectChatId);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    setMessage("");
  };

  return (
    <div className="chat_input">
      <form onSubmit={sendMessage}>
        {chatId ? (
          <>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="meMessage"
            />
            <IconButton className="send_button" onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </>
        ) : (
          <>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="meMessage"
            />
            <IconButton disabled className="send_button" onClick={sendMessage}>
              <SendIcon disabled />
            </IconButton>
          </>
        )}
      </form>
    </div>
  );
}

export default ChatInput;
