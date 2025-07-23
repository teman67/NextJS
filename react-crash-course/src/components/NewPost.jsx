import classes from "./NewPost.module.css";
import { useState } from "react"; /* react hook */

function NewPost() {
  const [enteredBody, setenteredBody] = useState(""); // This is a hook that allows you to add state to a functional component

  function changeBodyHandeler(event) {
    setenteredBody(event.target.value);
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandeler} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
