import React from "react";
import ConatactUsBg from "../../assets/ConatactUsImg/ConatactUsBg.webp";

const PrimaryHeader = ({HeadLine, SubText, BgImg = ConatactUsBg}) => {
  return (
    <div
      className=" bg-cover bg-center h-[540px] flex items-end justify-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
        <div className="container py-28 space-y-6">

      <h1 className="text-white border-l-2 border-primary pl-5">{HeadLine}</h1>
      <p className="text-white w-1/3">{SubText}</p>
        </div>
    </div>
  );
};

export default PrimaryHeader;