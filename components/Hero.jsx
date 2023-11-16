"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="w-full h-screen flex flex-col space-y-7 items-center justify-center bg-slate-950 lg:items-start lg:px-20 lg:space-y-10">
      <h1 className="text-[33px] font-bold text-gray-200 md:text-4xl lg:text-5xl">
        Goshen City School
      </h1>
      <p className="text-center text-gray-300 px-5 md:text-xl md:px-8 lg:text-start lg:px-0 lg:w-2/3">
        At Goshen City Schools, we provide our children with adquate learning
        materils in spacious classrooms and the engagement of well tranined and
        highly motivated teachers and teachng...
      </p>

      <p className="flex items-center text-gray-300 text-sm space-x-3">
        <span>1</span>
        <span className="flex items-center text-gray-300 space-x-1">
          <FaStar className="text-yellow-400" />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <span>(3 verifed ratings)</span>
      </p>

      <div className="flex space-x-7 items-center">
        <button className="bg-blue-800 px-7 rounded-md transition py-3 text-gray-400 font-semibold hover:scale-105">
          Apply For Admisson
        </button>
        <button className="hidden bg-gray-200 px-7 rounded-md transition py-3 text-blue-500 font-semibold hover:scale-105 md:block">
          Make Enquiry
        </button>
        <a
          href=""
          className="hidden text-white border-b-2 border-b-white md:block"
        >
          Access Tuition Finance
        </a>
      </div>
    </main>
  );
};

export default Hero;
