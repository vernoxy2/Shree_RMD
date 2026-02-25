import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import UpdateGirl from "../../../assets/AyurvedCollage/UpdateGirl.png";

const AddmissionUpdate = () => {
  return (
    <div className="pt-36 2xl:pt-44">
      <div className="bg-primary  relative">
        <div className="container py-20">
          <div className="w-1/2 space-y-4 ">
            <h1 className=" text-white">Addmission Update</h1>
            <p className="text-3xl font-normal text-white">
              Apply Now for BAMS Admissions 2025-2026
            </p>
            <p className="text-white">
              Shree RMD Ayurveda College invites applications for the Bachelor
              of Ayurveda Medicine & Surgery (B.A.M.S.) program. The college,
              affiliated with Gujarat Ayurved University, Jamnagar and
              recognized by NCISM, New Delhi, offers quality education with
              modern infrastructure, experienced faculty, and practical clinical
              training. Prospective students can stay updated on admissions,
              eligibility criteria, seat availability, and application deadlines
              to join this premier Ayurveda institute.
            </p>
            <div>
              <PrimaryBtn text="Contact Now" />
            </div>
          </div>
        </div>
        <img src={UpdateGirl} alt="" className="absolute -bottom-5 right-0 h-fit" />
      </div>
    </div>
  );
};

export default AddmissionUpdate;
