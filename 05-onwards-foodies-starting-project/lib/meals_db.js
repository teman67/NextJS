import fs from "fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { title } from "process";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //   throw new Error("Database connection failed"); // Simulating a database error
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}

export function getMealBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true, strict: true });
  meal.instructions = xss(meal.instructions);
  const extenstion = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extenstion}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const buffer = await meal.image.arrayBuffer();
  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error("Failed to save image");
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `
    INSERT INTO meals (slug, title, image, summary, instructions, name, email)
    VALUES (
    @slug, @title, @image, @summary, @instructions, @name, @email)
  `
  ).run(meal);
}
