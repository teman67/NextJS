import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Post from "./components/Post.jsx";
import ReactDom from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Posts from "./routes/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
      { path: "/create-post", element: <NewPost /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* Uncomment the line below to render the Post component */}
    {/* <Post /> */}
  </StrictMode>
);
