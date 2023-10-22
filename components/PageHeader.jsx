"use client";

import Image from "next/image";
import React, { useContext } from "react";
import NavLinksContext from "@/context/NavLinkContext";

export const textColors = [
  "text-red-500",
  "text-yellow-500",
  "text-orange-500",
  "text-purple-500",
  "text-blue-500",
  "text-pink-500",
];

const PageHeader = () => {
  const { navLinks, toggleDropMenu } = useContext(NavLinksContext);

  return (
    <nav className="w-full fixed bg-red-500 z-40 flex flex-col top-0 items-center lg:flex-row lg:justify-between lg:p-2 lg:px-5">
      <header className="w-full flex items-center justify-center border-b lg:w-fit lg:border-none">
        <Image
          width={230}
          height={230}
          alt="school logo"
          src={"/School-Logo-with-name.jpg"}
          className="lg:hidden"
        />
        <Image
          width={200}
          height={200}
          alt="school logo"
          src={"/School-Logo-with-name.jpg"}
          className="hidden lg:block"
        />
      </header>
      <div className="w-full flex items-center justify-between p-4 bg-blue-400 lg:w-fit lg:hidden">
        <a
          href="#"
          className="py-3 px-5 rounded-md text-teal-50 transition bg-blue-500 hover:scale-105"
        >
          Check your Result
        </a>

        <p
          onClick={toggleDropMenu}
          className="text-xl font-semibold cursor-pointer transition md:text-3xl hover:scale-110"
        >
          &#9776;
        </p>
      </div>
      <div className="hidden w-fit h-full transition items-center pt-2 pr-10 space-x-8 lg:flex">
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
    </nav>
  );
};

export default PageHeader;
