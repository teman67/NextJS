"use server";

import { createUser } from "@/lib/user";
import { hashUserPassword } from "@/lib/hash";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Email must be valid.";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors: errors };
  }

  const hashedPassword = hashUserPassword(password);
  createUser(email, hashedPassword);
}
