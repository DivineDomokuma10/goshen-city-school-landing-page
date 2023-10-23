/* eslint-disable @next/next/no-img-element */

import { Pacifico } from "next/font/google";
import React from "react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const SectionTwo = () => {
  return (
    <section className="transition w-full py-12 flex flex-col space-y-24 items-center bg-gray-50 lg:h-[70vh] lg:flex-row lg:space-y-0 lg:space-x-10 lg:px-12 ">
      <div className=" w-full overflow-hidden flex justify-center p-2 lg:w-[30%] lg:border-4 lg:border-blue-400 lg:rounded-md">
        <img
          src="/prop-2edited.png"
          alt="director's image"
          className="w-5/6 rounded-md transition md:w-1/2 lg:w-full hover:scale-110"
        />
      </div>
      <div className="w-full flex flex-col items-center space-y-7 text-center lg:w-fit">
        <h1 className={`text-gray-500 text-2xl font-bold lg:text-3xl`}>
          Welcome to Goshen City Schools.
        </h1>
        <p className="text-center px-5 text-gray-700 py-1 font-medium leading-8 md:text-xl md:px-20 lg:text-lg lg:px-40">
          Director&apos;s Speech &quot;Train up a child in the way he should go,
          and when he is old, he will not…&quot;
        </p>
        <button className="w-fit px-5 py-2 rounded-md transition text-white font-semibold bg-blue-400 hover:scale-105">
          Read More
        </button>
      </div>
    </section>
  );
};

export default SectionTwo;
