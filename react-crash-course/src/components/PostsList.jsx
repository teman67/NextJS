import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react"; // Importing useState hook to manage state in functional components
import Modal from "./Modal"; // Importing Modal component to display a modal dialog

function PostsList({ isCloseModal, onStopPoting }) {
  const [enteredBody, setenteredBody] = useState(""); // This is a hook that allows you to add state to a functional component
  const [enteredAuth, setenteredAuth] = useState("");

  function changeBodyHandeler(event) {
    setenteredBody(event.target.value);
  }

  function changeAuthHandeler(event) {
    setenteredAuth(event.target.value);
  }

  return (
    <>
      {/* {isModalOpen ? (
        <Modal onClose={closeModal}>
          <NewPost
            changeBodyHandeler={changeBodyHandeler}
            changeAuthHandeler={changeAuthHandeler}
          />
        </Modal>
      ) : (
        false
      )} */}
      {isCloseModal && (
        <Modal onClose={onStopPoting}>
          <NewPost
            changeBodyHandeler={changeBodyHandeler}
            changeAuthHandeler={changeAuthHandeler}
            onClose={onStopPoting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post auth={enteredAuth} body={enteredBody} />
        <Post auth="Ali" body="Bye" />
      </ul>
    </>
  );
}

export default PostsList;
