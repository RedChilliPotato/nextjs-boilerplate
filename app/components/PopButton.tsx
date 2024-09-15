"use client";

import React, { useState } from "react";

const PopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const toggleSubmenu = () => {
    setIsSubmenuVisible((prev) => !prev);
  };

  return (
    <div className="sm:hidden relative">
      <button
        id="Pop"
        onClick={toggleVisibility}
        aria-expanded={isVisible}
        aria-controls="menu"
        className={`absolute z-10 rounded-md py-1 px-2 transition-all top-1 left-1 
          ${isVisible ? "bg-green-500" : "bg-white"} active:bg-gray-200`}
      >
        POP
      </button>

      <div
        id="menu"
        role="menu"
        className={`X absolute top-0 left-0 transition-all duration-500 transform 
            ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        aria-hidden={!isVisible}
      >
        <ul className="pt-10 bg-white h-screen w-24">
          <li role="menuitem" tabIndex={0} className="text-center w-full">
            Home
          </li>
          <li role="menuitem" tabIndex={0} className="text-center w-full">
            About
          </li>
          <li role="menuitem" tabIndex={0} className="text-center w-full">
            <button
              onClick={toggleSubmenu}
              aria-expanded={isSubmenuVisible}
              aria-controls="submenu"
              className="w-full"
            >
              More
            </button>
            <ul
              id="submenu"
              className={`transition-all duration-500 transform ${
                isSubmenuVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
              aria-hidden={!isSubmenuVisible}
            >
              <li role="menuitem" tabIndex={0} className="text-center w-full">Services</li>
              <li role="menuitem" tabIndex={0} className="text-center w-full">Contact</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PopButton;