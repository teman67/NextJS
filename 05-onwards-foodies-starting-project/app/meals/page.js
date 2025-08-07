import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
// import { getMeals } from "@/lib/meals"; // For static generation
import { getMeals } from "@/lib/meals_db"; // Adjusted import to match the new file structure
import { Suspense } from "react";

export const metadata = {
  title: "All Meals | NextLevel Food",
  description:
    "Browse our collection of delicious meals shared by our food-loving community. Discover new recipes and get inspired to cook!",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  // const meals = getMeals();  for static generation
  const meals = await getMeals(); // for server-side rendering

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* <MealsGrid meals={meals} /> */}
        <Suspense
          fallback={
            <div className={classes.loading}>
              <p>Loading...</p>
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
