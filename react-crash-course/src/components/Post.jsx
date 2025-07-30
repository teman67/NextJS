import classes from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Post({ id, auth, body, createdAt, onDelete }) {
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <li className={classes.post}>
      <Link to={`/${id}`}>
        <div className={classes.header}>
          <p className={classes.author}>{auth}</p>
          {createdAt && <span className={classes.date}>{createdAt}</span>}
          <button
            className={classes.deleteBtn}
            onClick={handleDeleteClick}
            aria-label="Delete post"
          >
            <MdDelete />
          </button>
        </div>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
