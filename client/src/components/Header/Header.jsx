import React from "react";

import "./Header.css";
// material-ui
import IconButton from "@material-ui/core/IconButton";

// material-ui icons
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

function Header() {
  return (
    <div className="sidebar_header">
      <Avatar className="sidebar_avatar" />
      <div className="sidebar_input">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <IconButton variant="outlined" className="sidebar_inputButton">
        <RateReviewOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default Header;
