import React from "react";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile"
import NavBar from "./Components/NavBar"
import './index.css';
import Posts from "./Components/Posts";

function App() {
  const name = "Jordan Walk";
  const image = "https://picsum.photos/200/300";
  return (
    <div>
      <NavBar />
      <h1>{name}</h1>
      <UserProfile />
      <Contacts />
      <Posts />
    </div>
  );
}

export default App;
