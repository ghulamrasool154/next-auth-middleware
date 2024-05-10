import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register page",
  description: "Register Page discription",
  keywords: ["Next.js", "React", "JavaScript", "resgitser page"],
};
export default function Register() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center text-rose-600	">
        Register Page
      </h1>
    </main>
  );
}
