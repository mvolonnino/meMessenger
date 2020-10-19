import React from "react";

import "./Sidebar.css";

import SidebarChat from "../SidebarChat/SidebarChat";
import SidebarHeader from "../SidebarHeader/SidebarHeader";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* sidebar header */}
      <SidebarHeader />
      {/* sidebar chats */}
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
