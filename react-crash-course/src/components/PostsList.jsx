import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post auth="Amir" body="Hello" />
      <Post auth="Ali" body="Bye" />
    </ul>
  );
}

export default PostsList;
