import React from "react";

import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message({ id, contents }) {
  return (
    <div className="message">
      <Avatar />
      <p>This is a message</p>
      <small>Timestamp</small>
    </div>
  );
}

export default Message;
