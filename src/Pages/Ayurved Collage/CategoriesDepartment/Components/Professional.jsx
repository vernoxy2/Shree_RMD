import React from "react";
import PrimaryCard from "./PrimaryCard";
import HeadIcon from "../../../../assets/AyurvedCollage/CategoriesDepartmentImgs/HeadIcon.svg";

const Professional = ({ HeadLine, Data = [] }) => {
  return (
    <div className="space-y-12 pb-12">
      <div className="max-w-md mx-auto bg-primary py-1 px-6 rounded-r-full w-fit relative">
        <h2 className="text-center text-white">{HeadLine}</h2>
        <div className="h-16 w-16 flex items-center justify-center absolute bg-Bg border-[3px] border-primary rounded-full -left-12 top-1/2 -translate-y-1/2">
        <img src={HeadIcon} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Data.map((item, index) => (
          <PrimaryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Professional;
  