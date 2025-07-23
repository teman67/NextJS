function Post(props) {
  return (
    <div>
      <p>{props.auth}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
