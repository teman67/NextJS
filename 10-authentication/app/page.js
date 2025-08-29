import { redirect } from "next/navigation";
import AuthForm from "@/components/auth-form";
import { verifyAuth } from "@/lib/auth";

export default async function Home() {
  const { user } = await verifyAuth();

  if (user) {
    redirect("/training");
  }

  return <AuthForm />;
}
