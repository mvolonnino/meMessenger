import React from "react";

import "./Login.css";
import { Button } from "@material-ui/core";
function Login() {
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt=""
        />
        <h1 className="meMessage">MeMessage!</h1>
        <small className="muted">An iMessage clone!</small>
      </div>
      <Button>Sign In</Button>
    </div>
  );
}

export default Login;
