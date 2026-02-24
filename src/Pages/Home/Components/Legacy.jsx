import React from "react";
import LegacyBg from "../../../assets/HomePage/LegacyBg.webp";

const countData = [
  { id: 1, count: 25, title: "Healthcare Professionals Produced" },
  {
    id: 2,
    count: 25,
    title: (
      <>
        Acre Green <br /> Campus
      </>
    ),
  },
  { id: 3, count: 25, title: "Years of Academic Excellence" },
  { id: 4, count: 25, title: "Established in" },
];

const Legacy = () => {
  return (
    <div
      style={{ backgroundImage: `url(${LegacyBg})` }}
      className="py-20 bg-cover bg-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Heading */}
        <div className="lg:w-4/12">
          <h1 className="text-white  border-l-4 border-white pl-5">
            Our Legacy and Reach
          </h1>
        </div>

        {/* Right Counters */}
        <div className="lg:w-8/12 e grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center">
          {countData.map((item) => (
            <div key={item.id} className="  flex flex-col items-center">
              <div className="relative h-32 w-32 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-white/40 border-t-white rounded-full animate-[spin_8s_linear_infinite]"></div>

                <h1 className="text-white text-3xl font-bold">{item.count}</h1>
              </div>

              <p className="text-white mt-4 text-sm md:text-base font-bold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legacy;
