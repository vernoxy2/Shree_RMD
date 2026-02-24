import React from "react";
import Slide1 from "../../../assets/HomePage/HomeSliderImg/Slide1.png";

const HomeSlider = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Slide1})` }}
      className="bg-cover bg-center py-44"
    >
      <div className="container space-y-5 text-white">
        <h1 className="text-white ">Hero</h1>
        <hr className="border-primary border max-w-sm" />
        <p>Sub Txttt</p>
      </div>
    </div>
  );
};

export default HomeSlider;
