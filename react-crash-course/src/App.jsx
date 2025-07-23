import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post auth="Amir" body="Hello" />
      <Post auth="Ali" body="Bye" />
      <Post />
    </main>
  );
}

export default App;
