import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { useState } from "react";
import { Link, useNavigate, Form } from "react-router-dom";

const MAX_BODY_LENGTH = 300;
const MAX_AUTHOR_LENGTH = 50;

function NewPost() {
  const [enteredBody, setenteredBody] = useState("");
  const [enteredAuth, setenteredAuth] = useState("");
  const navigate = useNavigate();

  function changeBodyHandeler(event) {
    const value = event.target.value;
    if (value.length <= MAX_BODY_LENGTH) {
      setenteredBody(value);
    }
  }

  function changeAuthHandeler(event) {
    const value = event.target.value;
    if (value.length <= MAX_AUTHOR_LENGTH) {
      setenteredAuth(value);
    }
  }

  return (
    <Modal onClose={() => navigate("/")}>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            name="body"
            id="body"
            required
            rows={3}
            value={enteredBody}
            onChange={changeBodyHandeler}
            placeholder="What's on your mind?"
          />
          <span className={classes.counter}>
            {enteredBody.length}/{MAX_BODY_LENGTH}
          </span>
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="author"
            id="name"
            required
            value={enteredAuth}
            onChange={changeAuthHandeler}
            placeholder="Enter your name"
          />
          <span className={classes.counter}>
            {enteredAuth.length}/{MAX_AUTHOR_LENGTH}
          </span>
        </p>
        <p className={classes.actions}>
          <button
            type="submit"
            className={classes.button}
            disabled={!enteredBody.trim() || !enteredAuth.trim()}
          >
            Add Post
          </button>
          <Link to="/" className={classes.button}>
            Cancel
          </Link>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
