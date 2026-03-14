import React from "react";
import CampusBg from "../../../assets/AboutUsPageImg/CampusBg.webp";
import CampusImg from "../../../assets/AboutUsPageImg/CampusImg.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const Counting = [
  {
    id: 1,
    count: "17 km",
    title: "17km Away From Valsad",
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
          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-white border-l-2 border-white pl-5"
          >
            About The Campus
          </h1>
          <div className="pl-5 space-y-5">
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-white"
            >
              Our campus is strategically located just 17 km from Valsad Railway
              Station and 1 km from Wagaldhara town, easily accessible from
              National Highway 48 (NH-48). Spread across 24 acres of serene and
              well-planned land, the campus is situated opposite the Extension
              Unit (Cancer Hospital) of our main hospital facility.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-white"
            >
              The infrastructure includes a modern Ayurvedic College building, a
              fully functional 150-bed charitable hospital, separate students’
              hostels, staff quarters, a well-maintained medicinal plant garden,
              and other essential academic and healthcare facilities. The entire
              project has been developed with an investment of over fifteen
              crores, ensuring quality education and patient care under one
              integrated campus.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-white"
            >
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
          <div
            data-aos="fade"
            data-aos-delay="100"
            className="bg-primary/40 p-6  group relative"
          >
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
            <div className="absolute -top-1 -right-1 h-24 w-24 border-r-4 border-t-4 border-white/50"></div>
          </div>
          <hr className="border-white border w-full rounded-full" />
          <div className="grid grid-cols-3 gap-8">
            {Counting.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay={item.id * 100}
                key={item.id}
                className="flex flex-col items-center gap-2 bg-white/20 backdrop-blur-lg p-4 relative"
              >
                <p className="text-3xl font-bold text-white">{item.count}</p>
                <p className="text-white text-center">{item.title}</p>
                <div className="absolute top-2 right-2 h-10 w-10 border-r-2 border-t-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCampus;
