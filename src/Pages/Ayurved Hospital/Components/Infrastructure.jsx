import React from "react";
import InfrastructureBg from "../../../assets/AyurvedHospital/InfrastructureBg.webp";
import InfrastructureImg from "../../../assets/AyurvedHospital/InfrastructureImg.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const Infrastructure = () => {
  return (
    <div
      className=" bg-cover"
      style={{ backgroundImage: `url(${InfrastructureBg})` }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="2xl:pr-20 space-y-5 py-20">
          <h2 className="text-white">
            Hospital Infrastructure & Patient Care Services
          </h2>
          <p className="text-white ">
            Shree RMD Ayurveda College and Hospital, Waghaldhara, offers
            comprehensive clinical material including advanced hospital
            infrastructure, Medical and Surgical IP sections, OPD and IPD
            patient services, in-house medicine preparation, and MoUs with AMI
            Hospital and Spandan Hospital, ensuring quality Ayurvedic education
            and patient care.
          </p>
        </div>
        <div>
          <LazyImage
            src={InfrastructureImg}
            alt="Infrastructure"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
