import React from "react";
import PrimaryHeader from "../../Components/Ui/PrimaryHeader";
import AyurvedCollageHead from "../../assets/AyurvedCollage/AyurvedCollageHead.webp"
import Established from "./Components/Established";
import Department from "./Components/Department";
import AddmissionUpdate from "./Components/AddmissionUpdate";
import LegacyReach from "./Components/LegacyReachBg";
import BlogsSec from "./Components/BlogsSec";
import GallerySec from "./Components/GallerySec";
import ResAndDev from "./Components/ResAndDev";
import Calendar from "./Components/Calendar";
import HospitalReview from "./Components/HospitalReview";

const AyurvedCollage = () => {
  return (
    <div>
      <PrimaryHeader
        BgImg={AyurvedCollageHead}
        HeadLine={"Ayurved Collage"}
        SubText={
          "Leading BAMS College in Gujarat, affiliated with Gujarat Ayurved University and recognized by NCISM, delivering quality Ayurvedic medical education."
        }
      />
      <Established/>
      <Department/>
      <AddmissionUpdate/>
      <Calendar/>
      <LegacyReach/>
      <ResAndDev/>
      <GallerySec/>
      <BlogsSec/>
      <HospitalReview/>
    </div>
  );
};

export default AyurvedCollage;
