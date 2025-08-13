"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals_db";

export async function handleSubmit(formData) {
  "use server";
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    name: formData.get("name"),
    email: formData.get("email"),
  };
  await saveMeal(meal);
  redirect("/meals");
}
