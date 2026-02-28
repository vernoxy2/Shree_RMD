import React from "react";
import LazyImage from "../../../Components/Ui/LazyImage";
import CompassionateImg from "../../../assets/AyurvedHospital/CompassionateImg.svg";

const Compassionate = () => {
  return (
    <div className="py-20 container grid grid-cols-1 lg:grid-cols-2 gap-8 ">
      <div className="my-auto">
        <LazyImage
          src={CompassionateImg}
          alt="Compassionate"
          className="w-full "
        />
      </div>
      <div className="space-y-5">
        <h1>Compassionate Ayurvedic Care at Shree RMD Hospital, Gujarat</h1>
        <p>
          <strong className="text-primary">Shree RMD Ayurvedic Hospital</strong>{" "}
          <br />
          is a leading Ayurvedic healthcare center in Gujarat, offering
          authentic, affordable, and holistic treatments. With a 180-bed
          capacity, including the college-attached unit and extension Cancer
          Hospital, the hospital provides comprehensive patient care through
          experienced doctors and trained staff. Equipped with Panchakarma
          facilities, X-Ray, and Physiotherapy units, it integrates traditional
          Ayurvedic therapies with modern support for effective healing.
        </p>
      </div>
    </div>
  );
};

export default Compassionate;
