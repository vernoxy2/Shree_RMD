import React, { useState, useEffect } from "react";
import Slide1 from "../../../assets/HomePage/HomeSliderImg/slider-1.png";
import Slide2 from "../../../assets/HomePage/HomeSliderImg/slider-2.png";
import Slide3 from "../../../assets/HomePage/HomeSliderImg/slider-3.png";

const HeaderData = [
  {
    id: 0,
    BgImag: Slide1,
    title: (
      <>
        Leading Ayurved College in Gujarat for Quality Medical{" "}
        <span className="text-primary">Education</span>
      </>
    ),
    subtitle:
      "Shree RMD Ayurved College, Wagaldhara offers comprehensive Ayurvedic medical education with experienced faculty, modern infrastructure, clinical exposure, and a 24-acre integrated campus.",
  },
  {
    id: 1,
    BgImag: Slide2,
    title: (
      <>
        Comprehensive Ayurvedic Healing Under{" "}
        <span className="text-primary">One Roof</span>
      </>
    ),
    subtitle:
      "Advanced Panchakarma therapies, chronic disease treatment, cancer care support, physiotherapy and yoga services with affordable OPD & IPD facilities rooted in authentic Ayurveda.",
  },
  {
    id: 2,
    BgImag: Slide3,
    title: (
      <>
        Leading Ayurved College in Gujarat for Quality Medical{" "}
        <span className="text-primary">Education</span>
      </>
    ),
    subtitle:
      "Shree RMD Ayurved College, Wagaldhara offers comprehensive Ayurvedic medical education with experienced faculty, modern infrastructure, clinical exposure, and a 24-acre integrated campus.",
  },
];

const HomeSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play: advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[680px] overflow-hidden">

      {/* Background Images */}
      {HeaderData.map((item, index) => (
        <img
          key={item.id}
          src={item.BgImag}
          alt="Slider Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}

      {/* Text Content — left-aligned, matches image */}
      <div className="absolute inset-0 z-20 flex items-center container">
        <div className="2xl:pr-16 max-w-2xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {HeaderData[current].title}
          </h1>
          {/* Red divider line */}
          <div className="w-48 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed">
            {HeaderData[current].subtitle}
          </p>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HeaderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary scale-125"
                : "bg-white bg-opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;