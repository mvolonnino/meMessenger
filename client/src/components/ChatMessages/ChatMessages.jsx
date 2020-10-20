import React, { useState, useEffect } from "react";

import "./ChatMessages.css";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { selectChatId } from "../../features/chatSlice";
import db from "../../database/firebase";

function ChatMessages() {
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);
  console.log({ messages });

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  return (
    <div className="chat_messages">
      {messages.map(({ id, data }) => (
        <Message key={id} contents={data} />
      ))}
    </div>
  );
}

export default ChatMessages;
