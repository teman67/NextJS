"use server";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/cloudinary";

export async function createPost(formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  // Basic validation
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    console.warn("Image upload failed, using fallback image:", error.message);
    // Use fallback image if upload fails
    imageUrl =
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop";
  }

  await storePost({
    imageUrl,
    title: title.trim(),
    content: content.trim(),
    userId: 1, // Hard-coded for now, would be from session in real app
  });

  revalidatePath("/feed");
  redirect("/feed");
}

export async function togglePostLike(postId) {
  const userId = 2; // Hard-coded for now, would be from session in real app

  await updatePostLikeStatus(postId, userId);
  revalidatePath("/feed");
  revalidatePath("/");
}
