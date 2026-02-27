import React from "react";
import PrimaryHeader from "../../Components/Ui/PrimaryHeader";
import AyurvedCollageHead from "../../assets/AyurvedCollage/AyurvedCollageHead.webp"
import Established from "./Components/Established";
import Department from "./Components/Department";
import AddmissionUpdate from "./Components/AddmissionUpdate";
import Affiliation from "./Components/Affiliation";
import BlogsSec from "./Components/BlogsSec";
import GallerySec from "./Components/GallerySec";
import ResAndDev from "./Components/ResAndDev";
import Calendar from "./Components/Calendar";

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
      <ResAndDev/>
      <Affiliation/>
      <GallerySec/>
      <BlogsSec/>
    </div>
  );
};

export default AyurvedCollage;
