import React from "react";
import ExaminationResults from "../Ayurved Collage/Academics/University_Examination/Components/ExaminationResults";
import PrimaryHeader from "../../Components/Ui/PrimaryHeader";
import CoreValues from "./Components/CoreValues";
import Trustees from "./Components/Trustees";
import Trustee from "./Components/Trustee";
import AboutCampus from "./Components/AboutCampus";
import GuruJi from "./Components/GuruJi";

const AboutUs = () => {
  return (
    <>
      <PrimaryHeader HeadLine={"About Us"} />
    <GuruJi/>
      <AboutCampus/>
      <Trustee/>
      <Trustees/>
      <CoreValues />
    </>
  );
};

export default AboutUs;
