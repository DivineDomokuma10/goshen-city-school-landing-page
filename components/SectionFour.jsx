import React from "react";
import SectionFourCards from "./SectionFourCards";

const templateDatas = [
  {
    date: "April 18, 2022",
    title: "GOSHEN STARS GLOBAL COLLEGE 2021/2022 SECOND TERM NEWSLETTER",
    text: `Our dear valuable parents/guardians, We sincerely thank God Almighty for bringing us again to the end of another term successfully,…`,
  },
  {
    date: "April 18, 2022",
    title: "GOSHENCITY INT’L ACADEMY 2021/2022 SECOND TERM NEWSLETTER",
    text: `The management of Goshencity school want to express our gratitude to the Almighty God for His mercy towards us through…`,
  },
  {
    date: "December 20, 2021",
    title: "GOSHENCITY INT’L ACADEMY",
    text: `2021/2022 FIRST TERM NEWSLETTER Dear Parents/Guardians, The school term has come to an end in this out-going year 2021. We…`,
  },
];

const SectionFour = () => {
  return (
    <section className="w-full flex flex-col bg-gray-50 justify-center space-y-16 py-14 lg:items-center">
      <h1 className="text-gray-500 text-center  text-2xl font-bold lg:text-3xl">
        Latest News Updates
      </h1>
      <div className="w-full flex flex-col space-y-16 px-5 md:px-16 lg:w-11/12 lg:flex-row lg:justify-center lg:space-y-0 lg:px-0 lg:space-x-10">
        {templateDatas.map((data) => (
          <SectionFourCards key={data.title} {...data} />
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
