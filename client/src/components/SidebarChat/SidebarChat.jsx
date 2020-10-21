import React, { useState, useEffect } from "react";
import db from "../../database/firebase";

import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chatSlice";
import * as timeago from "timeago.js";
import useWindowDimensions from "../../utils/WindowDimensions";

function SidebarChat({ id, chatName }) {
  const { height, width } = useWindowDimensions();
  console.log({ height, width });
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

  // if page is loaded on a screen that is less that 940 px, it will not show time but it does not dynamically change
  const isSmall = width < 940;
  const showTime = isSmall ? (
    <></>
  ) : (
    timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))
  );

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
        <h3>{chatName.split(" ").join(" ", 3)}</h3>
        <p>{`${chatInfo[0]?.message.split(" ", 6).join(" ")} ...`}</p>
        <span className="totalMessages">{`${chatInfo?.length} messages`}</span>
        <small>{showTime}</small>
      </div>
    </div>
  );
}

export default SidebarChat;
