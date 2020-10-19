import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import "./App.css";
import MeMessage from "./components/MeMessage/MeMessage";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {/* iMessage */}
      {user ? <MeMessage /> : <Login />}
    </div>
  );
}

export default App;
