"use client";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";

function MobileMenuButton({ isOpen, toggleMenu }) {
  return (
    <button
      className="text-white focus:outline-none md:hidden"
      onClick={toggleMenu}
    >
      {isOpen ? "X" : "Menu"}
    </button>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-gray-800 text-xl font-semibold">
            TechMaster
          </span>
          {/* Add the search bar here */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-800 px-4 py-2 ml-4 rounded-full search-border"
          />
        </div>
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
          <NavbarItem text="Home" link="/" />
          <NavbarItem text="Blog" link="/blog" />
          <NavbarItem text="About" link="/about" />
          {/* Add more menu items as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
