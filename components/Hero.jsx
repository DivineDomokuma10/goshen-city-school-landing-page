"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";

export const sliders = [
  {
    image: "/Building.jpg",
    bg: "bg-[url(/Building.jpg)]",
    title: "Conducive Environment",
    text: `At Goshen City Schools, we provide our children with adequate learning materials in spacious classrooms and the engagement of well…`,
  },
  {
    image: "/computer-room.jpg",
    title: "Blended Curriculum",
    bg: "bg-[url(/computer-room.jpg)]",
    text: `At Goshen City Schools, our curriculum is a blend of the Nigerian National Basic Education curriculum and that of schools…`,
  },
  {
    image: "/Lab1.jpg",
    bg: "bg-[url(/Lab1.jpg)]",
    title: "Standard facilities",
    text: `It is important to understand that science and technology cannot be over-emphasized, hence we have made sure that our science…`,
  },
];

const Hero = () => {
  const [skill, setSkill] = useState("To Goshen City School.");

  return (
    <main className="w-full h-[82vh] bg-[url(/Building.jpg)] bg-center mt-36 bg-red-300 md:h-[60vh] lg:h-[87vh] lg:mt-[84.2px]">
      <section className="w-full h-full flex flex-col space-y-10 items-center justify-center bg-black bg-opacity-80 backdrop-blur backdrop-filter">
        <div className="flex flex-col space-y-5 text-center">
          <h1 className={`text-3xl font-bold text-gray-100 md:text-6xl lg:8xl`}>
            Welcome
          </h1>
          <p className="text-lg text-white md:text-xl">{skill}</p>
        </div>

        <div className="flex flex-col items-center space-y-5">
          <p className="text-gray-300 font-bold text-center leading-7 md:px-16 lg:px-60">
            Thank you for choosing Goshen City Schools, The best choice for your
            child. We wish to assure you that you have made the right choice.The
            School is the school for the child you love.
          </p>
          <button className="w-fit px-4 py-1 font-medium bg-blue-400 text-white text-lg rounded transition hover:scale-105">
            Join Us
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
