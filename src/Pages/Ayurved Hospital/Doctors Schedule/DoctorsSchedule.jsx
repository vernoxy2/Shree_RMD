import React from "react";
import PrimaryHeader from "../../../Components/Ui/PrimaryHeader";
import HospitalSchedule from "./HospitalSchedule";

const DoctorsSchedule = () => {
  return (
    <div className="bg-Bg">
      <PrimaryHeader HeadLine={"Doctors Schedule"} />
      <HospitalSchedule/>
    </div>
  );
};

export default DoctorsSchedule;
