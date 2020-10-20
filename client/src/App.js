import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./database/firebase";

import "./App.css";
import MeMessage from "./components/MeMessage/MeMessage";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log({ authUser });
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
        console.log({ authUser });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {/* iMessage */}
      {user ? <MeMessage /> : <Login />}
    </div>
  );
}

export default App;
