"use client";
import { logoutAction } from "@/actions/auth";

import React from "react";

const Logout = () => {
  return (
    <>
      <li
        className=" px-2 py-3 bg-green-500	 text-white mb-2 inline-block ml-2 cursor-pointer"
        onClick={() => logoutAction()}
      >
        Logout
      </li>
    </>
  );
};

export default Logout;
