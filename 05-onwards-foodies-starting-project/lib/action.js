"use server";

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
  console.log("Meal shared:", meal);
}
