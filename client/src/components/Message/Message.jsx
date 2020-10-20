import React from "react";

import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message({
  id,
  contents: { timestamp, displayName, email, message, photo, uid },
}) {
  return (
    <div className="message">
      <Avatar src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleTimeString()}</small>
    </div>
  );
}

export default Message;
