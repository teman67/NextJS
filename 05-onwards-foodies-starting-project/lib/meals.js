// Static meal data - no backend needed
const DUMMY_MEALS = [
  {
    id: "1",
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    creator: "John Doe",
    creator_email: "johndoe@example.com",
    instructions: `
      1. Prepare the patty: Mix 200g of ground beef with salt and pepper. Form into a patty.
      2. Cook the patty: Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.
      3. Assemble the burger: Toast the bun halves. Place lettuce, tomato, and the patty on the bottom half. Add cheese and top bun.
      4. Serve: Serve immediately with fries or a side salad.
    `,
  },
  {
    id: "2",
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary:
      "A rich and spicy curry, infused with exotic spices and creamy coconut milk.",
    creator: "Jane Smith",
    creator_email: "janesmith@example.com",
    instructions: `
      1. Chop vegetables: Cut your choice of vegetables into bite-sized pieces.
      2. Sauté onions: Heat oil in a large pan. Sauté onions until translucent.
      3. Add spices: Add curry powder, turmeric, and garam masala. Cook for 1 minute.
      4. Add vegetables and coconut milk: Add the vegetables and coconut milk. Simmer for 15-20 minutes.
      5. Serve: Garnish with fresh cilantro and serve with rice or bread.
    `,
  },
  {
    id: "3",
    title: "Homemade Dumplings",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
    instructions: `
      1. Prepare the filling: Mix minced pork, cabbage, ginger, and soy sauce in a bowl.
      2. Prepare the dough: Mix flour and water to form a smooth dough. Let it rest for 30 minutes.
      3. Assemble dumplings: Roll the dough into small circles. Place filling in the center and fold.
      4. Cook the dumplings: Steam the dumplings for 15-20 minutes until cooked through.
      5. Serve: Serve hot with a dipping sauce made of soy sauce, vinegar, and chili oil.
    `,
  },
  {
    id: "4",
    title: "Classic Mac n Cheese",
    slug: "classic-mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Creamy and cheesy macaroni, topped with a golden breadcrumb crust.",
    creator: "Mike Johnson",
    creator_email: "mikejohnson@example.com",
    instructions: `
      1. Cook the pasta: Boil macaroni according to package instructions. Drain and set aside.
      2. Make cheese sauce: In a pan, melt butter, add flour, then gradually add milk. Stir in cheese until melted.
      3. Combine: Mix the cooked pasta with the cheese sauce.
      4. Bake: Transfer to a baking dish, top with breadcrumbs and more cheese. Bake at 350°F for 20 minutes.
      5. Serve: Let it cool for a few minutes, then serve hot.
    `,
  },
  {
    id: "5",
    title: "Authentic Pizza",
    slug: "authentic-pizza",
    image: "/images/pizza.jpg",
    summary:
      "Hand-tossed pizza with a tangy tomato sauce, fresh mozzarella, and aromatic basil.",
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
    instructions: `
      1. Prepare the dough: Mix flour, water, yeast, and salt. Knead until smooth. Let it rise for 1 hour.
      2. Shape the pizza: Roll out the dough into a circle. Place it on a pizza stone or baking sheet.
      3. Add toppings: Spread tomato sauce, add mozzarella cheese, and fresh basil leaves.
      4. Bake the pizza: Bake in a preheated oven at 475°F for 10-12 minutes until the crust is golden.
      5. Serve: Slice and serve hot, with a drizzle of olive oil if desired.
    `,
  },
  {
    id: "6",
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.",
    creator: "Franz Weber",
    creator_email: "franzweber@example.com",
    instructions: `
      1. Prepare the veal: Pound veal cutlets to an even thickness. Season with salt and pepper.
      2. Set up breading station: Prepare three bowls: flour, beaten eggs, and breadcrumbs.
      3. Bread the cutlets: Dredge each cutlet in flour, then egg, then breadcrumbs.
      4. Fry the schnitzel: Heat oil in a large pan. Fry the schnitzels until golden brown on both sides.
      5. Serve: Serve immediately with lemon wedges, potato salad, and cranberry sauce.
    `,
  },
  {
    id: "7",
    title: "Fresh Tomato Salad",
    slug: "fresh-tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "A light and refreshing salad with ripe tomatoes, fresh basil, and mozzarella.",
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
    instructions: `
      1. Prepare the tomatoes: Wash and slice ripe tomatoes into thick slices.
      2. Prepare the mozzarella: Slice fresh mozzarella into rounds.
      3. Assemble the salad: Alternate tomato and mozzarella slices on a plate.
      4. Add herbs and seasoning: Sprinkle with fresh basil leaves, salt, and pepper.
      5. Dress and serve: Drizzle with olive oil and balsamic vinegar. Serve immediately.
    `,
  },
];

/**
 * Get all meals
 * @returns {Array} Array of meal objects
 */
export function getMeals() {
  return DUMMY_MEALS;
}

/**
 * Get a specific meal by slug
 * @param {string} slug - The meal slug
 * @returns {Object|undefined} The meal object or undefined if not found
 */
export function getMeal(slug) {
  return DUMMY_MEALS.find((meal) => meal.slug === slug);
}
