"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function ShareMeal(prevState, forData) {
  const meal = {
    title: forData.get("title"),
    summary: forData.get("summary"),
    instructions: forData.get("instructions"),
    image: forData.get("image"),
    creator: forData.get("name"),
    creator_email: forData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input." };
  }

  await saveMeal(meal);

  redirect("/meals");
}
