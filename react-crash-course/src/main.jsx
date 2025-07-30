import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost.jsx";
import { action as newPostAction } from "./actions/newPostAction.js";
import RootLayout from "./routes/RootLayout.jsx";
import Posts, { loader as postsLoader } from "./routes/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
