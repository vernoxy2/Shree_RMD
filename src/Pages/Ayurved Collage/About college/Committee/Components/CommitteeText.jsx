import React from "react";
import LazyImage from "../../../../../Components/Ui/LazyImage";
import CommitteeTextImg from "../../../../../assets/AyurvedCollage/AboutClg/CommitteeImg.webp";

const CommitteeText = () => {
  return (
    <div className="bg-[#FFF6F6] py-24 ">
      <div className="container space-y-8">
        <LazyImage src={CommitteeTextImg} alt="Committee Text" className="w-full" />
        <p className="text-center lg:w-10/12  mx-auto">
          <strong className="text-primary">Shree RMD Ayurved College & Hospital</strong> has dedicated committees to
          ensure academic excellence, quality healthcare, and smooth
          administration. These committees oversee curriculum development,
          research activities, hospital management, student welfare, and
          compliance with regulatory standards. By promoting transparency,
          coordination, and innovation, the committees support the institute’s
          mission to provide top-quality Ayurvedic education and patient care.
          <hr className="mt-8 max-w-xs border-primary border-2 rounded-full mx-auto" />
        </p>
      </div>
    </div>
  );
};

export default CommitteeText;
