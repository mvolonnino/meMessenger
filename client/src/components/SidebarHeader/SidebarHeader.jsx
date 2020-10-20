import React from "react";

import "./SidebarHeader.css";
// material-ui
import IconButton from "@material-ui/core/IconButton";

// material-ui icons
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../database/firebase";

function SidebarHeader() {
  const user = useSelector(selectUser);

  const addChat = () => {
    const chatName = prompt("Please enter a chat name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  return (
    <div className="sidebar_header">
      <Avatar
        className="sidebar_avatar"
        src={user.photo}
        onClick={() => auth.signOut()}
      />
      <div className="sidebar_input">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <IconButton
        variant="outlined"
        className="sidebar_inputButton"
        onClick={addChat}
      >
        <RateReviewOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default SidebarHeader;
