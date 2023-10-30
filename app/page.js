"use client";

import { useState } from "react";
import DropDown from "@/components/DropDown";
import PageHeader from "@/components/NavSection";
import { NavLinksContext } from "@/context/NavLinkContext";
import Hero from "@/components/Hero";
import SectionOne from "@/components/AspirationSection";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import Footer from "@/components/Footer";

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
        { text: "Welcome to GOSHEN SCHOOLS ENUGU", path: "" },
        { text: "From the Principal's Desk", path: "" },
        { text: "From the Dean of Studies Desk", path: "" },
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
      path: "https://Goshen-portal.vercel.app",
      children: [],
    },
  ]);

  const toggleDropMenu = () => {
    setShowDropMenu(!showDropMenu);
    setNavLinks((prev) =>
      prev.map((navLink) => ({ ...navLink, childIsOpen: false }))
    );
  };

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
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </main>
    </NavLinksContext.Provider>
  );
}
