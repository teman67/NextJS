import { redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const postData = {
    body: formData.get("body"),
    author: formData.get("author"),
  };

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return redirect("/");
}
