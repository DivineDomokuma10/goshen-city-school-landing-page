/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaClock } from "react-icons/fa";

const Card = ({ img, date, text, title, bgColor }) => {
  return (
    <div className="flex flex-col space-y-3 bg-white shadow-md transition rounded-md hover:scale-105">
      {img && (
        <div className="overflow-hidden p-3">
          <img src={img} alt={title} className="w-full h-60 rounded-md" />
        </div>
      )}
      {date && (
        <div className="flex space-x-2 items-center pl-5 pt-5">
          <FaClock className="text-gray-400" />{" "}
          <p className="text-gray-400">{date}</p>
        </div>
      )}
      <div className="flex flex-col space-y-6 py-5 px-5">
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

export default Card;
