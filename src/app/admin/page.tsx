export const metadata = {
  title: "ADMIN",
  description: "ADMIN discription",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function Admin() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center text-danger">Admin Page</h1>
    </main>
  );
}
