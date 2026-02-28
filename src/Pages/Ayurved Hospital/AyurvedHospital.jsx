import React from "react";
import PrimaryHeader from "../../Components/Ui/PrimaryHeader";
import AyurvedHospitalHead from "../../assets/AyurvedHospital/AyurvedHospitalHead.png";
import Compassionate from "./Components/Compassionate";
import OurTeam from "./Components/OurTeam";
import Campus from "./Components/Campus";
import Services from "./Components/Services";
import Infrastructure from "./Components/Infrastructure";
import Diagnostics from "./Components/Diagnostics";
// import Snapshot from "./Components/snapshot";

const AyurvedHospital = () => {
  return (
    <div className="bg-Bg">
      <PrimaryHeader
        BgImg={AyurvedHospitalHead}
        HeadLine={"Ayurved Hospital"}
        SubText="Shree RMD Ayurveda Hospital in Gujarat provides holistic Ayurvedic care, Panchakarma therapy, and specialized cancer treatment with compassionate, affordable patient-centered services."
      />
      <Compassionate />
      <OurTeam />
      <Campus />
      <Services/>
      <Infrastructure/>
      <Diagnostics/>
      {/* <Snapshot/> */}
    </div>
  );
};

export default AyurvedHospital;
