import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Post from "./components/Post.jsx";
import ReactDom from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./components/NewPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/create-post", element: <NewPost /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* Uncomment the line below to render the Post component */}
    {/* <Post /> */}
  </StrictMode>
);
