"use client";

import { useState } from "react";
import DropDown from "@/components/DropDown";
import PageHeader from "@/components/PageHeader";
import { NavLinksContext } from "@/context/NavLinkContext";
import Hero from "@/components/Hero";

export default function Home() {
  const [showDropMenu, setShowDropMenu] = useState(false);

  const [navLinks, setNavLinks] = useState([
    {
      text: "Home",
      childIsOpen: false,
      hoverColor: "hover:text-red-400",
      children: [],
    },
    {
      text: "About us",
      childIsOpen: false,
      hoverColor: "hover:text-yellow-200",
      children: [
        { text: "Welcome to GOSHEN SCHOOLS ENUGU" },
        { text: "From the Principal's Desk" },
        { text: "From the Dean of Studies Desk" },
      ],
    },
    {
      text: "Why choose Us",
      childIsOpen: false,
      hoverColor: "hover:text-orange-400",
      children: [
        { text: "Blended Curriculum" },
        { text: "Conducive Environment" },
        { text: "Standard Facilities" },
      ],
    },
    {
      text: "News and Events",
      childIsOpen: false,
      hoverColor: "hover:text-purple-400",
      children: [],
    },
    {
      text: "How to use e-learning",
      childIsOpen: false,
      hoverColor: "hover:text-blue-400",
      children: [],
    },
    {
      text: "Login",
      childIsOpen: false,
      hoverColor: "hover:text-pink-400",
      children: [{ text: "Staff Login" }, { text: "Student Login" }],
    },
  ]);

  const toggleDropMenu = () => setShowDropMenu(!showDropMenu);

  const toggleSubDropDown = (text) => {
    const newValue = navLinks.map((navLink) => {
      if (navLink.text === text)
        return { ...navLink, childIsOpen: !navLink.childIsOpen };
      else return { ...navLink, childIsOpen: navLink.childIsOpen };
    });

    setNavLinks(newValue);
  };

  return (
    <NavLinksContext.Provider
      value={{ navLinks, showDropMenu, toggleDropMenu, toggleSubDropDown }}
    >
      <main className="w-full h-full flex flex-col">
        {showDropMenu && <DropDown />}
        <PageHeader />
        <Hero />
      </main>
    </NavLinksContext.Provider>
  );
}
