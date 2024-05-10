import Link from "next/link";
import React from "react";
import Logout from "./logut/logout";

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
    {
      name: "Login",
      link: "/admin/login",
    },
    {
      name: "Register",
      link: "/admin/register",
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
      <Logout />
    </ul>
  );
};

export default Menu;
