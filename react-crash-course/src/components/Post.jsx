import classes from "./Post.module.css";
import { MdDelete } from "react-icons/md";

function Post({ id, auth, body, createdAt, onDelete }) {
  return (
    <li className={classes.post}>
      <div className={classes.header}>
        <p className={classes.author}>{auth}</p>
        {createdAt && <span className={classes.date}>{createdAt}</span>}
        <button
          className={classes.deleteBtn}
          onClick={() => onDelete(id)}
          aria-label="Delete post"
        >
          <MdDelete />
        </button>
      </div>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

export default Post;
