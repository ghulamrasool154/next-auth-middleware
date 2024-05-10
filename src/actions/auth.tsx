"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleSubmit = async (e: FormData) => {
  const email = e.get("email");
  const password = e.get("password");
  const auth = { email, password };
  cookies().set("auth", JSON.stringify(auth));
  redirect("/");
};

export const logoutAction = () => {
  cookies().delete("auth");
  redirect("/");
  return;
};
