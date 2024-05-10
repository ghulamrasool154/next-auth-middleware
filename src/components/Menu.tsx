import Link from "next/link";
import React from "react";
import AuthMenu from "./logut/login";

const Menu = () => {
  const item = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Admin",
      link: "/admin",
    },
    {
      name: "Add Product",
      link: "/admin/add-product",
    },
  ];
  return (
    <ul className="text-center py-20">
      {item.map((item, index) => {
        return (
          <li
            className="bg-gray px-2 py-3 bg-black text-white mb-2 inline-block ml-2"
            key={index}
          >
            <Link href={item.link}>{item.name}</Link>{" "}
          </li>
        );
      })}
      <AuthMenu />
    </ul>
  );
};

export default Menu;
