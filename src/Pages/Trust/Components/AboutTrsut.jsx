import React, { useState } from "react";
import Comma50 from "../../../assets/Comma50.svg";
import Img1 from "../../../assets/Trust/AboutImgs/Img1.png";
import Img2 from "../../../assets/Trust/AboutImgs/Img2.png";
import Img3 from "../../../assets/Trust/AboutImgs/Img3.png";
// import { ChevronUp, ChevronDown } from "lucide-react";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";

const images = [Img1, Img2, Img3];

const AboutTrsut = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
      {/* LEFT: Main Image + Vertical Thumbnail Strip */}
      <div data-aos="fade-right" className="flex gap-3 mr-12 relative">
        {/* Main Image */}
        <div className="flex-1 rounded-2xl overflow-hidden">
          <img
            src={images[activeIndex]}
            alt="About Trust"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Vertical Thumbnail Strip */}
        <div className="absolute -right-10 top-1/2 transform -translate-y-1/2  flex flex-col items-center gap-2 w-20">
          {/* Up Arrow */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors flex-shrink-0"
            aria-label="Previous image"
          >
            <FaChevronUp size={16} />
          </button>

          {/* Thumbnails */}
          <div className="flex flex-col gap-3 flex-1 justify-center">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? "transform ring ring-primary ring-offset-2 scale-105 opacity-100 bg-transparent"
                    : "opacity-80 hover:opacity-90"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Down Arrow */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors flex-shrink-0"
            aria-label="Next image"
          >
            <FaChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* RIGHT: Text Content */}
      <div className="space-y-6 ">
        <h1 data-aos="fade-left" data-aos-delay="100" className="flex gap-3">
          About GiriviharTrust{" "}
          <span>
            <img src={Comma50} alt="" />
          </span>
        </h1>
        <p data-aos="fade-left" data-aos-delay="200" className="tracking-wide">
          <strong className="text-primary">
            Shree Prabhav-Hem-Kamdhenu Girivihar Trust – Palitana
          </strong>{" "}
          is a renowned non-profit charitable organization dedicated to the
          noble mission of "Service to Mankind and Animals." Established in 1999
          and registered under the Bombay Public Trust Act, 1950 (Registration
          No. E/1798), the Trust is headquartered at Girivihar, Taleti Road,
          Palitana, Gujarat.
        </p>
        <p data-aos="fade-left" data-aos-delay="300" className="tracking-wide">
          Inspired by the spiritual vision of Param Pujya Acharyadev Shreemad
          Vijay Hem Prabh Suriswarji Maharaj Saheb and guided by Param Pujya
          Acharyadev Shri Vijay Vignan Prabh Surishwarji Maharaj Saheb, the
          Trust works tirelessly to promote compassion, healthcare, education,
          and humanitarian service rooted in Jain values.
        </p>
        <p data-aos="fade-left" data-aos-delay="400" className="tracking-wide">
          Over the years, Girivihar Trust has developed several impactful
          initiatives focused on Ayurvedic education, holistic healthcare, cow
          protection, and community welfare. Through its institutions such as
          Shree RMD Ayurved College & Hospital, Shree RMD Super Specialty
          Ayurveda Hospital, Gaushala, and Annakshetra, the Trust serves society
          by providing authentic Ayurvedic treatment, medical education,
          cow-based medicinal research, and affordable meals for the community.
        </p>
        <p data-aos="fade-left" data-aos-delay="500" className="tracking-wide">
          With a strong commitment to ethical healthcare, spiritual values, and
          social responsibility, Girivihar Trust continues to uplift lives by
          combining ancient Ayurvedic wisdom, compassionate service, and modern
          healthcare support for the welfare of people and animals alike.
        </p>
      </div>
    </div>
  );
};

export default AboutTrsut;
