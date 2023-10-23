"use client";

/* eslint-disable @next/next/no-img-element */

import React, { useContext } from "react";
import NavLinksContext from "@/context/NavLinkContext";
import { FaBars, FaTimes } from "react-icons/fa";

export const textColors = [
  "text-red-500",
  "text-yellow-500",
  "text-orange-500",
  "text-purple-500",
  "text-blue-500",
  "text-pink-500",
];

const PageHeader = () => {
  const { navLinks, toggleDropMenu, showDropMenu } =
    useContext(NavLinksContext);

  return (
    <nav className="w-full fixed p-3 z-40 flex top-0 items-center bg-white justify-between lg:px-7">
      <img
        alt="school logo"
        src="/School-Logo-with-name.jpg"
        className="w-48 h-14"
      />

      <div className="hidden w-fit h-full transition items-center pt-2 space-x-8 lg:flex">
        {navLinks.map((navLink, index) => (
          <div key={navLink.text} className="group flex flex-col relative">
            <a href="" className={`font-semibold text-sm text-black`}>
              {navLink.text}
            </a>

            {navLink.children.length !== 0 && (
              <div className="hidden w-60 z-[100] flex-col top-5 -right-5 transition p-3 space-y-2 bg-white rounded-md shadow-md absolute group-hover:flex">
                {navLink.children.map((child) => (
                  <a
                    className={`font-semibold text-sm  p-2  ${textColors[index]} rounded-md  hover:bg-gray-100`}
                    key={child.text}
                    href=""
                  >
                    {child.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <>
        {showDropMenu ? (
          <FaTimes
            onClick={toggleDropMenu}
            className="text-2xl font-semibold cursor-pointer transition md:text-3xl lg:hidden hover:scale-110"
          />
        ) : (
          <FaBars
            onClick={toggleDropMenu}
            className="text-2xl font-semibold cursor-pointer transition md:text-3xl lg:hidden hover:scale-110"
          />
        )}
      </>
    </nav>
  );
};

export default PageHeader;
