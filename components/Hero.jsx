"use client";
"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [schoolText, setShoolText] = useState("");
  const placeHolder = "To Goshen City School.";

  const writeText = () => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === placeHolder.length) {
        clearInterval(interval);
        setTimeout(deleteText, 100);
      } else {
        setShoolText(placeHolder.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, 300);
  };

  const deleteText = () => {
    let currentIndex = placeHolder.length;
    const interval = setInterval(() => {
      if (currentIndex === 0) {
        clearInterval(interval);
        writeText();
      } else {
        setShoolText(placeHolder.slice(0, currentIndex - 1));
        currentIndex--;
      }
    }, 300);
  };

  useEffect(() => writeText(), []);

  return (
    <main className="w-full h-[90vh] bg-[url(/Building.jpg)] bg-center mt-[81px] md:h-[60vh] lg:h-[87vh] lg:mt-[79.5px]">
      <section className="w-full h-full flex flex-col space-y-10 items-center justify-center bg-black bg-opacity-80 backdrop-blur backdrop-filter">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-5 text-center"
        >
          <h1 className={`text-3xl font-bold text-gray-100 md:text-6xl lg:8xl`}>
            Welcome
          </h1>
          <p className="text-lg text-white md:text-xl">{schoolText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-5"
        >
          <p className="text-gray-300 font-bold px-5 text-sm text-center leading-7 md:text-base md:px-16 lg:px-60">
            Thank you for choosing Goshen City Schools, The best choice for your
            child. We wish to assure you that you have made the right choice.The
            School is the school for the child you love.
          </p>
          <button className="w-fit px-4 py-1 font-medium bg-blue-400 text-white text-lg rounded transition hover:scale-105">
            Join Us
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
