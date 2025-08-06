import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  // Handle empty meals array
  if (!meals || meals.length === 0) {
    return (
      <div className={classes.noMeals}>
        <p>No meals found. Be the first to share a recipe!</p>
      </div>
    );
  }

  return (
    <ul className={classes.meals} role="list">
      {meals.map((meal) => (
        <li key={meal.id} role="listitem">
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
