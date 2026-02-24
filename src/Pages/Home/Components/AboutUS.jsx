import React from "react";
import HomeAbout from "../../../assets/HomePage/HomeAboutUs/HomeAbuout.png";
import Campus from "../../../assets/HomePage/HomeAboutUs/Campus.png";
import AyurvedaCollege from "../../../assets/HomePage/HomeAboutUs/AyurvedaCollege.png";
import Hospital from "../../../assets/HomePage/HomeAboutUs/Hospital.png";
import LazyImage from "../../../Components/Ui/LazyImage";

const AboutData = [
  {
    id: 1,
    Img: Campus,
    title: "About The Campus",
    subtext:
      "Shree RMD Ayurved College & Hospital is located on a serene 24-acre campus near Wagaldhara on National Highway 48, just 17 km from Valsad. The campus brings together academic learning and healthcare services with a college building, 150-bed hospital, cancer care extension unit, hostels, herbal garden, and essential facilities, creating an ideal environment for education and healing.",
  },
  {
    id: 2,
    Img: AyurvedaCollege,
    title: "About Ayurveda College",
    subtext:
      "hree RMD Ayurved College is committed to nurturing skilled and ethical BAMS graduates through quality education and clinical exposure. With experienced faculty, modern classrooms, and a well-equipped library, the college focuses on blending classical Ayurvedic knowledge with practical training to prepare students for professional excellence.",
  },
  {
    id: 3,
    Img: Hospital,
    title: "About Hospital",
    subtext:
      "Shree RMD Ayurvedic Hospital is a 150-bed teaching hospital offering OPD and IPD services, Panchakarma therapies, physiotherapy, yoga, and modern diagnostic support. The hospital emphasizes affordable, patient-centric care through personalized treatment plans rooted in authentic Ayurvedic principles.",
  },
];

const AboutUS = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className=" bg-[#FFF6F6]">
      <div className="container px-0">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col justify-center xl:px-24 gap-y-4">
            <h1>About Us </h1>
            <p>
              Established in 2016 under the esteemed Shree Prabhav Hem Kamdhenu
              Girivihar Trust, Shree RMD Ayurved College & Hospital stands as a
              center of excellence in Ayurvedic education and healthcare.  Our
              vision goes beyond teaching medicine{" "}
            </p>
            <p>
              we cultivate leaders, researchers, and practitioners who uphold
              the purity and authenticity of Ayurveda while embracing modern
              scientific advancements.With a strong commitment to service,
              research, and nation building, we strive to create a healthier
              society through sustainable, holistic healthcare.
            </p>
          </div>
          {/* Right Section */}
          <div className="overflow-hidden ">
            <img
              src={HomeAbout}
              alt="Home About"
              className="object-cover w-full h-full transition-all duration-700 ease-in-out hover:scale-110 grayscale hover:grayscale-0"
            />
          </div>
        </div>
        {/* Image Slider */}
        <div className="flex h-96 overflow-hidden">
          {AboutData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className={`relative cursor-pointer transition-all duration-700
        ${active === index ? "min-w-[60%]" : "min-w-[20%]"}
      `}
            >
              {/* Image */}
              <img
                src={item.Img}
                alt=""
                className={`h-full w-full object-cover transition-all duration-700
          ${active === index ? "grayscale-0" : "grayscale"}
        `}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-white">0{item.id}</h1>
                  <button className={`${active === index ? "opacity-100" : "opacity-0"}`}>{">"}</button>
                </div>

                <div>
                  <h1 className="text-white text-3xl pb-2">{item.title}</h1>

                  <hr
                    className={`border-white transition-all duration-700 origin-left
        ${active === index ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
      `}
                  />

                  <p
                    className={`text-white text-lg mt-2 transition-all duration-700 ease-in-out overflow-hidden
        ${
          active === index
            ? "opacity-100 translate-y-0 max-h-40"
            : "opacity-0 translate-y-4 max-h-0"
        }
      `}
                  >
                    {item.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
