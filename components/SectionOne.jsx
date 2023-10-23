import React from "react";
import { FaEye, FaCar, FaArrowRight } from "react-icons/fa";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const templateDatas = [
  {
    icon: FaEye,
    title: "Our Vision",
    bgColor: "bg-red-500",
    textColor: "text-red-500",
    text: `Our vision at Goshen City Schools, is to build a solid academic
foundation for your children’s future and raise them…`,
  },
  {
    icon: FaCar,
    title: "Our Mission",
    bgColor: "bg-yellow-300",
    textColor: "text-yellow-300",
    text: `Our mission is to inculcate in the child, values of discipline, integrity, and hard work and build in him a…`,
  },
  {
    title: "Our Goal",
    icon: FaArrowRight,
    bgColor: "bg-orange-300",
    textColor: "text-orange-300",
    text: `Our goal, is to provide all-round qualitative education for your child – academically, spiritually, morally, and socially.`,
  },
];

const SectionOne = () => {
  return (
    <main className="w-full flex flex-col text-gray-600 space-y-9 lg:flex-row lg:space-y-0 lg:py-10 lg:items-center">
      {templateDatas.map((data) => (
        <div
          key={data.title}
          className="w-full flex flex-col space-y-7 py-5 items-center "
        >
          <div
            className={`w-fit p-5 rounded-full ${data.bgColor} cursor-pointer transition hover:scale-105 hover:shadow-md`}
          >
            <data.icon className="text-5xl text-white lg:text-7xl" />
          </div>
          <h2 className={`text-3xl py-1 fomnt-bold text-red-500`}>
            {data.title}
          </h2>
          <p className="text-center px-5 py-1 text-lg font-medium leading-8 md:text-xl md:px-20 lg:text-base lg:px-10">
            {data.text}
          </p>
        </div>
      ))}
    </main>
  );
};

export default SectionOne;
