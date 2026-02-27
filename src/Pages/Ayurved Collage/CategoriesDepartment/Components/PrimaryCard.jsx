import React from "react";
import PrimaryBtn from "../../../../Components/Ui/PrimaryBtn";
import LazyImage from "../../../../Components/Ui/LazyImage";
import RoundBtn from "../../../../Components/Ui/RoundBtn";

const PrimaryCard = ({ HeadLine, Img, SubText, link }) => {
  return (
     <div className="bg-primary py-5 rounded-2xl flex flex-col h-full">
      <h2 className="text-white text-xl my-auto text-center pb-4 min-h-[4rem] leading-snug">{HeadLine}</h2>
      <LazyImage src={Img} alt="Sanskrit Samhita Siddhant" className="w-full" />
      <div className="flex flex-col justify-between flex-grow">
        <p className="text-white p-4 rounded-2xl -mt-6 relative z-10 bg-primary">
          {SubText}
        </p>
        <div className="px-4 py-2">
          <RoundBtn text="View More" to={link} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
