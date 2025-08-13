"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals_db";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function handleSubmit(formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    name: formData.get("name"),
    email: formData.get("email"),
  };
  if (
    isInvalidText(meal.title) ||
    !meal.image ||
    meal.image.size === 0 ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.name) ||
    isInvalidText(meal.email)
  ) {
    throw new Error("Invalid input");
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
