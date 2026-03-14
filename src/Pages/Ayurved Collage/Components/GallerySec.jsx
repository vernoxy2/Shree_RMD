import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import Left1 from "../../../assets/AyurvedCollage/GalleryImgs/Left1.svg";
import Left2 from "../../../assets/AyurvedCollage/GalleryImgs/Left2.svg";
import Right from "../../../assets/AyurvedCollage/GalleryImgs/RightImg.svg";
import Icon from "../../../assets/AyurvedCollage/GalleryImgs/Icon.svg";
import GalleryBg from "../../../assets/AyurvedCollage/GalleryImgs/GalleryBg.png";
import CircaleAnimation from "../../../Components/Ui/CircaleAnimation";

const GallerySec = () => {
  return (
    <div
      style={{ backgroundImage: `url(${GalleryBg})` }}
      className="bg-primary/10 py-24 bg-cover bg-center"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="grid grid-cols-2 gap-8 order-2 lg:order-1 relative">
          {/* Left Images */}
          <div className="grid grid-rows-2 gap-8">
            {[Left1, Left2].map((img, index) => (
              <div data-aos="zoom-in" data-aos-delay={index * 200} key={index} className="overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="object-cover h-full w-full grayscale hover:grayscale-0 duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div data-aos="zoom-in" data-aos-delay="400" className="overflow-hidden ">
            <img
              src={Right}
              alt=""
              className="object-cover h-full w-full grayscale hover:grayscale-0 duration-500 hover:scale-110"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-10">
            <CircaleAnimation />
          </div>
        </div>
        {/* Content */}
        <div className="space-y-5 max-w-[80%] lg:ml-auto orddr-1 lg:order-2">
          <h1 data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-4">
            Gallery{" "}
            <span>
              {" "}
              <img src={Icon} alt="" />
            </span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-primary font-bold">
            Inspiring Activities Beyond Classroom Learning
          </p>
          <p data-aos="fade-up" data-aos-delay="300">
            Explore the vibrant moments of Shree RMD Ayurveda College & Hospital
            through our gallery showcasing academic seminars, NSS activities,
            medical camps, research programs, cultural celebrations, sports
            events, and community health initiatives. These highlights reflect
            our commitment to holistic Ayurvedic education, student development,
            and compassionate healthcare services.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">

          <PrimaryBtn
            text="Small View"
            icon={
              <span>
                <img src={Icon} alt="" className="brightness-0 invert h-8" />
              </span>
            }
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySec;
