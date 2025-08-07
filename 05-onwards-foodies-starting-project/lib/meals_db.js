import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  //   throw new Error("Database connection failed"); // Simulating a database error
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals;
}
