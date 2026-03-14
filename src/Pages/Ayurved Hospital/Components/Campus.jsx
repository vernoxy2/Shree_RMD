import React from "react";
import CampusBg from "../../../assets/AyurvedHospital/Campus/CampusBg.webp";
import Left from "../../../assets/AyurvedHospital/Campus/Left.svg";
import Right1 from "../../../assets/AyurvedHospital/Campus/R1.svg";
import Right2 from "../../../assets/AyurvedHospital/Campus/R2.svg";
import { GoCheckCircleFill } from "react-icons/go";

const features = ["Accommodation", "Free Medicine", "Foods",];

const Campus = () => {
  return (
    <div
      className="py-24 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${CampusBg})` }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* LEFT CONTENT  */}
          <div data-aos="zoom-out" data-aos-delay="400" className="my-auto">
            <img src={Left} alt="Left" />
          </div>
          <div className="flex flex-col gap-4">
            <div data-aos="zoom-out" data-aos-delay="200" className="h-fit">
              <img
                src={Right1}
                alt="Right1"
                className="h-full w-full object-cover"
              />
            </div>
            <div data-aos="zoom-out" data-aos-delay="600" className="h-fit">
              <img
                src={Right2}
                alt="Right1"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div
            data-aos="zoom"
            data-aos-delay="800"
            data-aos-duration="1000"
            className="absolute top-40 w-full flex justify-center"
          >
            <div className="bg-primary p-6 py-7 rounded-xl">
              <h2 className="text-white">Hospital Campus</h2>
            </div>
          </div>
        </div>
        {/* RIGHT CONTENT  */}
        <div className="flex flex-col justify-center gap-y-6">
          <h1 data-aos="fade-up" data-aos-delay="500" >center of Excellence</h1>
          <div data-aos="fade-up" data-aos-delay="600" className="space-y-1">
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
          <div className="mt-5 space-y-3">
            <div className="flex gap-6 items-center">
              <div data-aos="zoom-in" data-aos-delay="800" className="h-28 w-28 rounded-full border-2 border-primary flex flex-col items-center justify-center">
                <h2>18</h2>
                <p>Acres</p>
              </div>
              <p data-aos="fade" data-aos-delay="1000" >
                Waghaldhara on <br />
                NH-8
              </p>
            </div>
            <hr className="border-b rounded-full" />
            <div className="flex gap-6 items-center">
              <div data-aos="zoom-in" data-aos-delay="800" className="h-28 w-28 rounded-full border-2 border-primary flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold">
                  100<sup className="text-lg relative -top-2.5">%</sup>
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 items-stretch">
                {features.map((item, index) => (
                  <p data-aos="fade" data-aos-delay={index * 800} key={index} className="flex items-center gap-2">
                    <GoCheckCircleFill className="text-primary text-2xl" />
                    {item}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
