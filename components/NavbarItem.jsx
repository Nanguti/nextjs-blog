import React from "react";
import Link from "next/link";

function NavbarItem({ text, link }) {
  return (
    <a className="text-gray-800 hover:text-blue-500 px-4 py-2 block"> {text}</a>
  );
}

export default NavbarItem;
