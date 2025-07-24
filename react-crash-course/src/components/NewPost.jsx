import classes from "./NewPost.module.css";

function NewPost({ changeBodyHandeler, changeAuthHandeler, onClose }) {
  return (
    <form className={classes.form}>
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
