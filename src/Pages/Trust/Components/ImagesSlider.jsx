import React from "react";
import SliderBg from "../../../assets/Trust/SliderBg.png";
import Slide1 from "../../../assets/Trust/SliderImages/Slide1.svg";
import Slide2 from "../../../assets/Trust/SliderImages/Slide2.svg";
import Slide3 from "../../../assets/Trust/SliderImages/Slide3.svg";
import Slide4 from "../../../assets/Trust/SliderImages/Slide4.svg";
import Slide5 from "../../../assets/Trust/SliderImages/Slide5.svg";
import Slide6 from "../../../assets/Trust/SliderImages/Slide6.svg";
import Slide7 from "../../../assets/Trust/SliderImages/Slide7.svg";
import Slide8 from "../../../assets/Trust/SliderImages/Slide8.svg";
import Slide9 from "../../../assets/Trust/SliderImages/Slide9.svg";
import Slide10 from "../../../assets/Trust/SliderImages/Slide10.svg";
import Slide11 from "../../../assets/Trust/SliderImages/Slide11.svg";

const ImagesSlider = () => {

  const slides = [
    Slide1, Slide2, Slide3, Slide4, Slide5,
    Slide6, Slide7, Slide8, Slide9, Slide10, Slide11
  ];

  return (
    <section
      style={{ backgroundImage: `url(${SliderBg})` }}
      className="bg-cover bg-center overflow-hidden"
    >
      <div className="py-20 container">

        <div className="overflow-hidden">
          <div className="flex gap-10 animate-scroll w-max">

            {[...slides, ...slides].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="logo"
                className=" w-auto object-contain"
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ImagesSlider;