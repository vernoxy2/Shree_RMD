import React from "react";
import CampusBg from "../../../assets/AboutUsPageImg/CampusBg.webp";
import CampusImg from "../../../assets/AboutUsPageImg/CampusImg.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const Counting = [
  {
    id: 1,
    count: "17 km",
    title: "Campus located",
  },
  {
    id: 2,
    count: "150+",
    title: "Beds in Hospital",
  },
  {
    id: 3,
    count: "24",
    title: "Acres well-planned land",
  },
];
const AboutCampus = () => {
  return (
    <div
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${CampusBg})` }}
      id="about-campus"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content */}
        <div className="space-y-5 sm:w-[90%] 2xl:w-[80%]">
          <h1 className="text-white border-l-2 border-white pl-5">
            About The Campus
          </h1>
          <div className="pl-5 space-y-5">
            <p className="text-white">
              Our campus is strategically located just 17 km from Valsad Railway
              Station and 1 km from Wagaldhara town, easily accessible from
              National Highway 48 (NH-48). Spread across 24 acres of serene and
              well-planned land, the campus is situated opposite the Extension
              Unit (Cancer Hospital) of our main hospital facility.
            </p>
            <p className="text-white">
              The infrastructure includes a modern Ayurvedic College building, a
              fully functional 150-bed charitable hospital, separate students’
              hostels, staff quarters, a well-maintained medicinal plant garden,
              and other essential academic and healthcare facilities. The entire
              project has been developed with an investment of over fifteen
              crores, ensuring quality education and patient care under one
              integrated campus.
            </p>
            <p className="text-white">
              Our 150-bed hospital was established with a strong social
              commitment to provide affordable Ayurvedic treatment and
              healthcare services to underprivileged and economically weaker
              sections of society. The institution focuses on delivering
              low-cost, high-quality holistic medical care, making traditional
              healing accessible to all.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="space-y-6">
          <div className="bg-primary/40 p-6 overflow-hidden group">
            <div className="h-full w-full overflow-hidden">
              <img
                src={CampusImg}
                alt="CampusImg"
                className="w-full h-full object-cover 
      transform transition-all duration-1000 
      ease-[cubic-bezier(0.22,1,0.36,1)]
      grayscale group-hover:grayscale-0 
      group-hover:scale-110"
              />
            </div>
          </div>
          <hr className="border-white border w-full rounded-full" />
          <div className="grid grid-cols-3 gap-8">
            {Counting.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-lg p-4"
              >
                <p className="text-3xl font-bold text-white">{item.count}</p>
                <p className="text-white text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCampus;
