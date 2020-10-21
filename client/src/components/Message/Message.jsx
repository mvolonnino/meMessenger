import React, { forwardRef } from "react";

import "./Message.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message_sender"}`}
      >
        <Avatar className="message_photo" src={photo} />
        <p>{message}</p>

        <span className="displayName">{displayName}</span>

        <span className="timestamp">
          {new Date(timestamp?.toDate()).toLocaleTimeString()}
        </span>
      </div>
    );
  }
);

export default Message;
