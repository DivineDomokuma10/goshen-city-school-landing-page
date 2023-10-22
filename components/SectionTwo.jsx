/* eslint-disable @next/next/no-img-element */

import { Pacifico } from "next/font/google";
import React from "react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const SectionTwo = () => {
  return (
    <section className="w-full py-12 flex flex-col space-y-24 items-center bg-blue-400 ">
      <div className="w-full flex justify-center">
        <img
          src="/prop-2edited.png"
          alt="director's image"
          className="w-5/6 rounded-md transition hover:scale-105"
        />
      </div>
      <div className="w-full flex flex-col items-center space-y-7 text-center">
        <h1
          className={`${pacifico.className}  text-gray-300 text-3xl font-bold`}
        >
          Welcome to Goshen City Schools.
        </h1>
        <p className="text-center px-5 text-gray-700 py-1 text-lg font-medium leading-8 md:text-xl md:px-20 lg:text-base lg:px-10">
          Director{"'"}s Speech “Train up a child in the way he should go, and
          when he is old, he will not…
        </p>
        <button className="w-fit px-5 py-2 text-lg rounded-md transition font-semibold bg-gray-200 hover:scale-105">
          Read More
        </button>
      </div>
    </section>
  );
};

export default SectionTwo;
