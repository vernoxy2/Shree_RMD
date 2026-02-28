import React from "react";
import TeamBg from "../../../assets/AyurvedHospital/TeamBg.webp";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";

const OurTeam = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TeamBg})` }}
      className="py-20 bg-cover bg-center bg-no-repeat"
    >
      <div className="container space-y-6">
        <h1 className="text-white">Our Team</h1>
        <p className="text-white max-w-lg">
          Our team at Shree RMD Ayurved College & Hospital comprises experienced
          faculty members, skilled healthcare professionals, and dedicated
          administrative staff committed to excellence in Ayurvedic education
          and patient care. Their expertise, integrity, and collaborative
          approach drive academic success, research advancement, and quality
          healthcare services.
        </p>
        <PrimaryBtn text={"Contact Us"} />
      </div>
    </div>
  );
};

export default OurTeam;
