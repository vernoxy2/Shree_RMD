import React from "react";
import Inquiry from "./Components/Inquiry";
import UFeatures from "./Components/UFeatures";
import Legacy from "./Components/Legacy";
import AboutUS from "./Components/AboutUS";

const Home = () => {
  return (
    <>
    <AboutUS/>
      <Legacy />
      <UFeatures />
      <Inquiry />
    </>
  );
};

export default Home;
