import React from "react";
import CampusBg from "../../../assets/AyurvedHospital/Campus/CampusBg.webp";
import Left from "../../../assets/AyurvedHospital/Campus/Left.svg";
import Right1 from "../../../assets/AyurvedHospital/Campus/R1.svg";
import Right2 from "../../../assets/AyurvedHospital/Campus/R2.svg";

const Campus = () => {
  return (
    <div
      className="py-24 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${CampusBg})` }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <img src={Left} alt="Left" className="my-auto" />
          <div className="flex flex-col gap-4">
            <img src={Right1} alt="Right1" className="h-fit" />
            <img src={Right2} alt="Right2" className="h-fit" />
          </div>
          <div className="bg-primary p-6 py-7 rounded-xl absolute top-40 left-1/2 translate-x-[-50%] ">
            <h2 className="text-white">Hospital Campus</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-6">
          <h1>center of Excellence</h1>
          <div className="space-y-1">
            <strong className="text-primary">
              Ayurvedic Cancer Hospital & Research Centre
            </strong>
            <p>
              Spread across 18 acres at Waghaldhara on NH-8, this Ayurvedic
              Cancer Hospital & Research Centre provides Panchagavya-based
              holistic cancer treatment. Offering 100% free medicine, food, and
              accommodation, the center is dedicated to compassionate care and
              advanced Ayurveda research.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
