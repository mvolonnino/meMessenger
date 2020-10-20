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
      <small>
        <span className="displayName">{displayName}</span>
      </small>
      <small>
        <span className="timestamp">
          {new Date(timestamp?.toDate()).toLocaleTimeString()}
        </span>
      </small>
    </div>
  );
}

export default Message;
