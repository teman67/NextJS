import classes from "./NewPost.module.css";
import { useState } from "react"; // Importing useState hook to manage state in functional components

function NewPost({ changeBodyHandeler, changeAuthHandeler, onClose, addPost }) {
  const [enteredBody, setenteredBody] = useState(""); // This is a hook that allows you to add state to a functional component
  const [enteredAuth, setenteredAuth] = useState("");

  function changeBodyHandeler(event) {
    setenteredBody(event.target.value);
  }

  function changeAuthHandeler(event) {
    setenteredAuth(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuth,
    };
    addPost(postData); // Call the addPost function passed as a prop to add the new post
    console.log(postData);
    onClose(); // Call the onClose function to close the modal after submitting the form
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandeler} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthHandeler} />
      </p>
      <p className={classes.actions}>
        <button type="submit" className={classes.button}>
          Add Post
        </button>
        <button type="button" className={classes.button} onClick={onClose}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
