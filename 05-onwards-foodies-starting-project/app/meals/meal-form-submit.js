"use client";
import { useFormState } from "react-dom";

export default function MealFormSubmit() {
  const { pending } = useFormState();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
