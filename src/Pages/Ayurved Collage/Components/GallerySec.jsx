import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import Left1 from "../../../assets/AyurvedCollage/GalleryImgs/Left1.svg";
import Left2 from "../../../assets/AyurvedCollage/GalleryImgs/Left2.svg";
import Right from "../../../assets/AyurvedCollage/GalleryImgs/RightImg.svg";
import Icon from "../../../assets/AyurvedCollage/GalleryImgs/Icon.svg";

const GallerySec = () => {
  return (
    <div className="bg-primary/10 py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="grid grid-cols-2 gap-8 order-2 lg:order-1">
  
  {/* Left Images */}
  <div className="grid grid-rows-2 gap-8">
    {[Left1, Left2].map((img, index) => (
      <div key={index} className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="object-cover h-full w-full grayscale hover:grayscale-0 duration-500 hover:scale-110"
        />
      </div>
    ))}
  </div>

  {/* Right Image */}
  <div className="overflow-hidden ">
    <img
      src={Right}
      alt=""
      className="object-cover h-full w-full grayscale hover:grayscale-0 duration-500 hover:scale-110"
    />
  </div>

</div>
        {/* Content */}
        <div className="space-y-5 max-w-[80%] lg:ml-auto orddr-1 lg:order-2">
          <h1 className="flex items-center gap-4">
            Gallery{" "}
            <span>
              {" "}
              <img src={Icon} alt="" />
            </span>
          </h1>
          <p className="text-primary font-bold">
            Inspiring Activities Beyond Classroom Learning
          </p>
          <p>
            Explore the vibrant moments of Shree RMD Ayurveda College & Hospital
            through our gallery showcasing academic seminars, NSS activities,
            medical camps, research programs, cultural celebrations, sports
            events, and community health initiatives. These highlights reflect
            our commitment to holistic Ayurvedic education, student development,
            and compassionate healthcare services.
          </p>
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
  );
};

export default GallerySec;
