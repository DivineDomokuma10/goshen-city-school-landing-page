import { motion } from "framer-motion";
import React, { useContext } from "react";
import { textColors } from "./PageHeader";
import NavLinksContext from "@/context/NavLinkContext";

const DropDown = () => {
  const { navLinks, toggleSubDropDown } = useContext(NavLinksContext);

  return (
    <motion.nav
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      className="w-5/6 h-screen flex left-0 flex-col z-50 p-5 shadow-xl fixed bg-gray-100 lg:hidden"
    >
      {navLinks.map((navLink, index) => (
        <div key={navLink.text} className="py-1">
          <motion.div
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 * index }}
            key={navLink.text}
            className="py-2"
          >
            <motion.div
              initial={{ x: -70, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 * index }}
              onClick={() => toggleSubDropDown(navLink.text)}
              className={`font-semibold p-2 rounded-md border-b hover:bg-gray-200`}
            >
              {navLink.children.length !== 0 ? (
                <span>{navLink.text}</span>
              ) : (
                <a href="">{navLink.text}</a>
              )}
            </motion.div>
            {navLink.children.length !== 0 ? (
              navLink.childIsOpen ? (
                <motion.div
                  initial={{ x: -70, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex flex-col px-5"
                >
                  {navLink.children.map((child) => (
                    <a
                      className={`font-semibold text-sm border-b p-2 ${textColors[index]} rounded-md hover:bg-gray-200`}
                      key={child.text}
                      href=""
                    >
                      {child.text}
                    </a>
                  ))}
                </motion.div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </motion.div>
        </div>
      ))}
    </motion.nav>
  );
};

export default DropDown;
