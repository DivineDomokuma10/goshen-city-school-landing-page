import React from "react";
import Card from "./Card";

import { templateDatas } from "./SectionThree";

const SectionFour = () => {
  return (
    <section className="w-full flex flex-col bg-gray-50 justify-center space-y-16 py-14 lg:items-center">
      <h1 className="text-gray-500 text-center  text-2xl font-bold lg:text-3xl">
        Latest News Updates
      </h1>
      <div className="w-full flex flex-col space-y-16 px-5 md:px-16 lg:w-11/12 lg:flex-row lg:justify-center lg:space-y-0 lg:px-0 lg:space-x-10">
        {templateDatas.map((data) => (
          <Card
            date={data.date}
            key={data.title}
            text={data.text}
            title={data.titleTwo}
            bgColor={data.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
