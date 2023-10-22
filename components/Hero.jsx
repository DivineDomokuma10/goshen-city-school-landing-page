/* eslint-disable @next/next/no-img-element */
import Carousel from "@/utils/Carousel";
import Image from "next/image";
import React from "react";
import { textColors } from "./PageHeader";
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
    <section className=" mt-44 lg:mt-28 overflow-hidden bg-center bg-[url(/Building.jpg)]">
      <Carousel>
        {sliders.map((slider) => (
          <div
            key={slider.text}
            className="w-full h-screen px-5 py-40 bg-black bg-opacity-90 space-y-10 text-center"
          >
            <h1 className="text-3xl text-gray-400">{slider.title}</h1>
            <p className="text-xl text-gray-200 leading-8">{slider.text}</p>
            <button className={`px-5 py-2 text-white bg-blue-400 rounded`}>
              Read more
            </button>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
