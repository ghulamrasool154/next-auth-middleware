import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import Logout from "./logout";

const AuthMenu = () => {
  const cookiesStore = cookies();
  const authValues = cookiesStore.get("auth")?.value;

  return (
    <>
      {authValues === undefined ? (
        <>
          <li className="bg-orange-400 px-2 py-3  text-white mb-2 inline-block ml-2">
            <Link href={"/admin/login"}>Login</Link>{" "}
          </li>{" "}
          <li className="bg-gray px-2 py-3 bg-black text-white mb-2 inline-block ml-2">
            <Link href={"/admin/register"}>Register</Link>{" "}
          </li>
        </>
      ) : (
        <Logout />
      )}
    </>
  );
};

export default AuthMenu;
