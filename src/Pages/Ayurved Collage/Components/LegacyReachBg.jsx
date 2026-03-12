import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import LegacyReachBg from "../../../assets/AyurvedCollage/LegacyReachBg.png";

const affiliationData = [
  {
    id: "01",
    number: "25",
    text: "Healthcare Professionals Produced",
  },
  {
    id: "02",
    number: "25",
    text: "Healthcare Professionals Produced",
  },
  {
    id: "03",
    number: "25",
    text: "Healthcare Professionals Produced",
  },
  {
    id: "03",
    number: "25",
    text: "Healthcare Professionals Produced",
  },
];

const LegacyReach = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${LegacyReachBg})` }}>
      <div
        className="container py-12 
      grid gap-8 grid-cols-1 lg:grid-cols-2"
      >
        <div className="flex items-center">
          <h1 className="max-w-xs text-white border-l-2 pl-5">Our legacy and reach</h1>
        </div>

        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {affiliationData.map((item) => (
            <div key={item.id} className="px-5 py-3.5 bg-white/10 rounded ">
              <h2 className="text-white">{item.number}+</h2>
              <h1 className="font-medium text-base text-white">{item.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegacyReach;
