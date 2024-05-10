"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleSubmit = async (e: FormData) => {
  // try {
  const email = e.get("email");
  const password = e.get("password");
  const auth = { email, password };

  var oneday = 24 * 60 * 60 * 1000;
  var exp = Date.now() + oneday;
  cookies().set("auth", JSON.stringify(auth), {
    expires: new Date(exp),
  });

  redirect("/");
  // } catch (error) {
  //   console.log("some error", error);
  // }
};

export const logoutAction = () => {
  cookies().delete("auth");
  redirect("/");
  return;
};
