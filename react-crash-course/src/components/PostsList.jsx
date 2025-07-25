import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react"; // Importing useState hook to manage state in functional components
import Modal from "./Modal"; // Importing Modal component to display a modal dialog

function PostsList({ isCloseModal, onStopPoting }) {
  const [posts, setPosts] = useState([]); // State to hold the list of posts

  function addPostHandler(postData) {
    setPosts((prevPosts) => [...prevPosts, postData]); // Update the posts
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
          <NewPost onClose={onStopPoting} addPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => {
            console.log("Rendering post at index:", index);
            return <Post key={index} auth={post.author} body={post.body} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <>
          <h2>Add some posts!</h2>
          <p style={{ textAlign: "center", color: "white" }}>
            No posts available.
          </p>
        </>
      )}
    </>
  );
}

export default PostsList;
