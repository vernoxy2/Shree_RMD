import React from "react";
import ConatactUsBg from "../../assets/ConatactUsImg/ConatactUsBg.webp";

const PrimaryHeader = ({HeadLine, SubText}) => {
  return (
    <div
      className=" bg-cover bg-center h-[500px] flex items-end justify-center"
      style={{ backgroundImage: `url(${ConatactUsBg})` }}
    >
        <div className="container py-28 space-y-6">

      <h1 className="text-white">{HeadLine}</h1>
      <p className="text-white w-1/2">{SubText}</p>
        </div>
    </div>
  );
};

export default PrimaryHeader;