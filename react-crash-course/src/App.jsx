import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react"; // Importing useState hook to manage state in functional components

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // This is a hook that allows you to add state to a functional component

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <MainHeader onCreatePost={openModal} />
      <main>
        <PostsList isCloseModal={isModalOpen} onStopPoting={closeModal} />
      </main>
    </>
  );
}

export default App;
