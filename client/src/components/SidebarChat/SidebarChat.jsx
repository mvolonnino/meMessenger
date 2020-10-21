import React, { useState, useEffect } from "react";
import db from "../../database/firebase";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);
  console.log({ chatInfo });

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div className="sidebar_chat">
      <Avatar src={chatInfo[0]?.photo} />
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
        <p>{`${chatInfo[0]?.message.split(" ", 4).join(" ")} ...`}</p>
        <span className="totalMessages">{`${chatInfo?.length} messages`}</span>
        <small>
          {new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
