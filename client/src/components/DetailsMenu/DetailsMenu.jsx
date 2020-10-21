import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useSelector } from "react-redux";
import { selectChatId } from "../../features/chatSlice";
import db from "../../database/firebase";
import "./DetailsMenu.css";

const ITEM_HEIGHT = 48;

export default function DetailsMenu() {
  const [chatInfo, setChatInfo] = useState([]);
  console.log("detailsmenu", { chatInfo });
  const chatId = useSelector(selectChatId);
  let uniqueEmails = [];

  useEffect(() => {
    chatId &&
      db
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setChatInfo(snapshot.docs.map((doc) => doc.data()))
        );
  }, [chatId]);

  if (chatId) {
    let emails = [];
    chatInfo.map((email) => emails.push(email.email));
    console.log({ emails });
    uniqueEmails = emails.filter((c, index) => {
      return emails.indexOf(c) === index;
    });
  }
  console.log({ uniqueEmails });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="details">
      {chatId && (
        <>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="detail_button"
          >
            <div className="details_button">
              <MoreVertIcon />
            </div>
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
              },
            }}
          >
            {uniqueEmails.map((email, i) => (
              <MenuItem
                key={i}
                selected={email === email[0]}
                onClick={handleClose}
              >
                {email}
              </MenuItem>
            ))}
            <MenuItem className="totalMessages">{`${chatInfo?.length} messages`}</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}
