import React from "react";
import { FaClock } from "react-icons/fa";

const SectionFourCards = ({ title, text, date }) => {
  return (
    <div className="flex flex-col space-y-5 bg-white p-5 shadow-md transition rounded-md hover:scale-105">
      <div className="flex space-x-2 items-center">
        <FaClock className="text-lg text-gray-400" />{" "}
        <p className="text-gray-400">{date}</p>
      </div>
      <h3 className="text-xl font-bold lg:2xl">{title}</h3>
      <p className="pr-10 text-gray-800">{text}</p>
      <button
        className={`w-fit px-2 py-1 font-medium text-white bg-red-500 rounded transition hover:scale-105`}
      >
        Read More
      </button>
    </div>
  );
};

export default SectionFourCards;
