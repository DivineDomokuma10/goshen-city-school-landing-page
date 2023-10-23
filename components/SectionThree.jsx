import React from "react";
import SectionThreeCards from "./SectionThreeCards";

const templateDatas = [
  {
    img: "/Building.jpg",
    bgColor: "bg-yellow-500",
    title: "Conducive Environment",
    text: `At Goshen City Schools, we provide our children with adequate learning materials in spacious classrooms and the engagement of well…`,
  },
  {
    img: "/computer-room.jpg",
    bgColor: "bg-red-500",
    title: "Blended Curriculum",
    text: `At Goshen City Schools, our curriculum is a blend of the Nigerian National Basic Education curriculum and that of schools…`,
  },
  {
    img: "/Lab1.jpg",
    bgColor: "bg-orange-500",
    title: "Standard facilities",
    text: `It is important to understand that science and technology cannot be over-emphasized, hence we have made sure that our science…`,
  },
];

const SectionThree = () => {
  return (
    <section className="w-full flex flex-col justify-center space-y-16 py-16 lg:items-center">
      <h1 className="text-gray-500 text-center text-2xl font-bold lg:text-3xl">
        Why Choose Goshen City Schools
      </h1>
      <div className="w-full flex flex-col space-y-16 px-5 md:px-16 lg:w-11/12 lg:flex-row lg:justify-center lg:space-y-0 lg:px-0 lg:space-x-10">
        {templateDatas.map((data) => (
          <SectionThreeCards key={data.title} {...data} />
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
