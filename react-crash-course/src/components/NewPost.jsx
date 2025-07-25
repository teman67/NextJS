import classes from "./NewPost.module.css";
import { useState } from "react"; // Importing useState hook to manage state in functional components

const MAX_BODY_LENGTH = 300;
const MAX_AUTHOR_LENGTH = 50;

function NewPost({ onClose, addPost }) {
  const [enteredBody, setenteredBody] = useState("");
  const [enteredAuth, setenteredAuth] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  function submitHandler(event) {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    // Basic validation
    if (!enteredBody.trim() || !enteredAuth.trim()) {
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    if (enteredBody.trim().length < 3) {
      setError("Post content must be at least 3 characters long");
      setIsSubmitting(false);
      return;
    }

    try {
      const postData = {
        body: enteredBody.trim(),
        author: enteredAuth.trim(),
      };
      addPost(postData);

      // Reset form
      setenteredBody("");
      setenteredAuth("");

      onClose();
    } catch {
      setError("Failed to create post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {error && <div className={classes.error}>{error}</div>}

      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          value={enteredBody}
          onChange={changeBodyHandeler}
          placeholder="What's on your mind?"
          disabled={isSubmitting}
        />
        <span className={classes.counter}>
          {enteredBody.length}/{MAX_BODY_LENGTH}
        </span>
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={enteredAuth}
          onChange={changeAuthHandeler}
          placeholder="Enter your name"
          disabled={isSubmitting}
        />
        <span className={classes.counter}>
          {enteredAuth.length}/{MAX_AUTHOR_LENGTH}
        </span>
      </p>
      <p className={classes.actions}>
        <button
          type="submit"
          className={classes.button}
          disabled={isSubmitting || !enteredBody.trim() || !enteredAuth.trim()}
        >
          {isSubmitting ? "Adding..." : "Add Post"}
        </button>
        <button
          type="button"
          className={classes.button}
          onClick={onClose}
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
