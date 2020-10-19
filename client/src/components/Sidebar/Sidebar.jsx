import React from "react";

import "./Sidebar.css";
import Header from "../Header/Header";
import Sidechats from "../Sidechats/Sidechats";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* header */}
      <Header />
      {/* side chats */}
      <Sidechats />
    </div>
  );
}
