import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/meals/">Add a new meal</Link>
      <Link href="/meals/share">Share a meal</Link>
      <p>
        <Link href="/meals/meal-1">Beef Wellington</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Chicken Curry</Link>
      </p>
    </main>
  );
}
