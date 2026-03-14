import React from "react";
import TeamBg from "../../../assets/AyurvedHospital/TeamBg.webp";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import { RiTeamFill } from "react-icons/ri";

const OurTeam = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TeamBg})` }}
      className="py-20 bg-cover bg-center bg-no-repeat" data-aos="fade" data-aos-delay="200"
    >
      <div className="container space-y-6">
        <h1 data-aos="fade-up" data-aos-delay="300" className="text-white">Our Team</h1>
        <p data-aos="fade-up" data-aos-delay="300" className="text-white max-w-lg">
          Our team at Shree RMD Ayurved College & Hospital comprises experienced
          faculty members, skilled healthcare professionals, and dedicated
          administrative staff committed to excellence in Ayurvedic education
          and patient care. Their expertise, integrity, and collaborative
          approach drive academic success, research advancement, and quality
          healthcare services.
        </p>
        <div data-aos="fade-up" data-aos-delay="300">

        <PrimaryBtn text={"Meet Our Team"} icon={<RiTeamFill />}/>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
