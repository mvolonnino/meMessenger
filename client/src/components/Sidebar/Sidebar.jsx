import React, { useState, useEffect } from "react";

import "./Sidebar.css";

import SidebarChat from "../SidebarChat/SidebarChat";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import db from "../../database/firebase";

export default function Sidebar() {
  const [chats, setChats] = useState([]);
  console.log({ chats });

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      {/* sidebar header */}
      <SidebarHeader />
      {/* sidebar chats */}
      <div className="sidebar_chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}
