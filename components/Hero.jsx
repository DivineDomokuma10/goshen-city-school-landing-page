/* eslint-disable @next/next/no-img-element */
import Carousel from "@/utils/Carousel";
import Image from "next/image";
import React from "react";
import { textColors } from "./PageHeader";

const Hero = () => {
  const sliders = [
    {
      image: "/Building.jpg",
      title: "Conducive Environment",
      text: `At Goshen City Schools, we provide our children with adequate learning materials in spacious classrooms and the engagement of well…`,
    },
    {
      image: "/computer-room.jpg",
      title: "Blended Curriculum",
      text: `At Goshen City Schools, our curriculum is a blend of the Nigerian National Basic Education curriculum and that of schools…`,
    },
    {
      image: "/Lab1.jpg",
      title: "Standard facilities",
      text: `It is important to understand that science and technology cannot be over-emphasized, hence we have made sure that our science…`,
    },
  ];
  const setting = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };
  return (
    <section className="w-full  bg-blue-400 mt-44 lg:mt-28 overflow-hidden">
      <Carousel settings={setting}>
        {sliders.map((slider, index) => (
          <div
            key={slider.title}
            className="w-full h-[85vh] flex flex-col space-y-14"
          >
            <img
              src={slider.image}
              alt={slider.image.slice(1)}
              className="w-full h-1/2"
            />

            <div className="w-full h-2/5 flex flex-col items-center space-y-5 text-gray-900">
              <h2 className={`text-3xl font-semibold`}>{slider.title}</h2>
              <p className="px-4 font-medium">{slider.text}</p>
              <button className="px-5 py-2 bg-slate-200 transition text-xl mt-5 rounded font-semibold hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
