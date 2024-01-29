"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function ShareMeal(forData) {
  const meal = {
    title: forData.get("title"),
    summary: forData.get("summary"),
    instructions: forData.get("instructions"),
    image: forData.get("image"),
    creator: forData.get("name"),
    creator_email: forData.get("email"),
  };

  await saveMeal(meal);

  redirect("/meals");
}
