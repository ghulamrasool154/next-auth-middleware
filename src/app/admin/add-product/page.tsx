import { Metadata } from "next";
export const metadata: Metadata = {
  title: "add product page",
  description: "add product Page discription",
  keywords: ["Next.js", "React", "JavaScript", "add product"],
};
export default function AddProduct() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center text-green-600	">
        AddProduct Page
      </h1>
    </main>
  );
}
