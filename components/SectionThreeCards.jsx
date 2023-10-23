/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionThreeCards = ({ img, bgColor, title, text }) => {
  return (
    <div className="w-full flex flex-col space-y-10 bg-gray-50 rounded-md lg:w-[27%]">
      <div className="overflow-hidden p-3">
        <img
          src={img}
          alt={title}
          className="w-full h-72 transition hover:scale-110 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-6 pl-5 pb-5">
        <h2 className={`text-xl font-bold lg:2xl`}>{title}</h2>
        <p className="pr-10 text-gray-800">{text}</p>
        <button
          className={`w-fit px-2 py-1 font-medium text-white ${bgColor} rounded transition hover:scale-105`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default SectionThreeCards;
