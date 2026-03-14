import React from "react";
import LazyImage from "../../../Components/Ui/LazyImage";
import CompassionateImg from "../../../assets/AyurvedHospital/CompassionateImg.svg";
import Comma50 from "../../../assets/Comma50.svg";

const Compassionate = () => {
  return (
    <div className="py-20 container grid grid-cols-1 lg:grid-cols-2 gap-8 ">
      <div data-aos="fade-right" className="my-auto">
        <LazyImage
          src={CompassionateImg}
          alt="Compassionate"
          className="w-full "
        />
      </div>
      <div className="space-y-5">
        <h1 data-aos="fade-left" data-aos-delay="200" className="leading-[55px]">Compassionate Ayurvedic Care at Shree RMD Hospital, Gujarat</h1>
        <p data-aos="fade-left" data-aos-delay="200" className="tracking-wide ">
          <strong className="text-primary leading-snug ">Shree RMD Ayurvedic Hospital</strong>{" "}
          <br />
          is a leading Ayurvedic healthcare center in Gujarat, offering
          authentic, affordable, and holistic treatments. With a 180-bed
          capacity, including the college-attached unit and extension Cancer
          Hospital, the hospital provides comprehensive patient care through
          experienced doctors and trained staff. Equipped with Panchakarma
          facilities, X-Ray, and Physiotherapy units, it integrates traditional
          Ayurvedic therapies with modern support for effective healing.
          <span><img src={Comma50} alt="" className="ml-auto" /></span>
        </p>
      </div>
    </div>
  );
};

export default Compassionate;
