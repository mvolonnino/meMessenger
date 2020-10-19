import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../database/firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.messgae));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="imessage logo"
        />
        <h1 className="logo_name">MeMessage!</h1>
        <small className="muted">an iMessage clone!</small>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
