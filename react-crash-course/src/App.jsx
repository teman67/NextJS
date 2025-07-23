import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./components/Post";
import PostsList from "./components/PostsList";

function App() {
  return (
    <main>
      <PostsList />
    </main>
  );
}

export default App;
