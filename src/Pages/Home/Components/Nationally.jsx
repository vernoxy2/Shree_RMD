import React from "react";
import nationallyBg from "../../../assets/HomePage/nationallyBg.png";
const NationallyData = [
  {
    id: 1,
    number: 6,
    text: "Accreditations",
  },
  {
    id: 2,
    number: 15,
    text: "Years of Trust",
  },
  {
    id: 3,
    number: "A+",
    text: "Naac Grade",
  },
];

const Nationally = () => {
  return (
    <div
      style={{ backgroundImage: `url(${nationallyBg})` }}
      className="bg-cover"
    >
      <div className="py-20 container flex flex-col md:flex-row gap-4 items-center justify-between h-full">
        {/* Left Heading */}
        <div>
          <h2 data-aos="fade-right" className="text-white border-l-2 border-white pl-5">
            Recognised nationally. <br /> Trusted locally
          </h2>
        </div>
        {/* Right Number */}
        <div className=" bg-white max-w-xl w-full grid grid-cols-3 gap-0.5">
          {NationallyData.map((item) => (
            <div
            data-aos="fade"
            data-aos-delay={item.id * 100}
              key={item.id}
              className="flex bg-primary flex-col items-center justify-center gap-3"
            >
              <h2 className="text-white">{item.number}</h2>
              <h2 className="text-base text-white">{item.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nationally;
