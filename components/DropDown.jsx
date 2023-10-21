import React, { useContext } from "react";
import { textColors } from "./PageHeader";
import NavLinksContext from "@/utils/NavLinkProvider";

const DropDown = () => {
  const { navLinks, toggleSubDropDown } = useContext(NavLinksContext);

  return (
    <nav className="w-5/6 h-screen flex flex-col z-30 p-5 shadow-lg fixed bg-white lg:hidden">
      {navLinks.map((navLink, index) => (
        <div key={navLink.text}>
          <div
            onClick={() => toggleSubDropDown(navLink.text)}
            className={`font-semibold text-sm p-2 rounded-md hover:bg-gray-100`}
          >
            <a href="">{navLink.text}</a>
          </div>
          {navLink.children.length !== 0 ? (
            navLink.childIsOpen ? (
              <div className="flex flex-col px-5">
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
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      ))}
    </nav>
  );
};

export default DropDown;
