"use client";

import { togglePostLike } from "@/lib/actions";
import { useOptimistic } from "react";

export default function LikeButton({ post }) {
  const [optimisticPost, addOptimisticLike] = useOptimistic(
    post,
    (currentPost, optimisticValue) => {
      return {
        ...currentPost,
        likes: optimisticValue.isLiked
          ? currentPost.likes - 1
          : currentPost.likes + 1,
        isLiked: !optimisticValue.isLiked,
      };
    }
  );

  async function formAction() {
    addOptimisticLike({ isLiked: optimisticPost.isLiked });
    await togglePostLike(optimisticPost.id);
  }

  return (
    <form action={formAction}>
      <button
        className="like-button"
        data-liked={optimisticPost.isLiked}
        title={optimisticPost.isLiked ? "Unlike this post" : "Like this post"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <span>{optimisticPost.likes}</span>
      </button>
    </form>
  );
}
