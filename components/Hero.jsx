/* eslint-disable @next/next/no-img-element */
import React from "react";

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
  return (
    <section className="w-full h-[80vh] mt-40 bg-red-300 md:h-[60vh] lg:h-[87vh] lg:mt-[84.2px]"></section>
  );
};

export default Hero;
