import React from "react";
import Inquiry from "./Components/Inquiry";
import UFeatures from "./Components/UFeatures";
import Legacy from "./Components/Legacy";
import AboutUS from "./Components/AboutUS";
import HomeSlider from "./Components/HomeSlider";
import Reviews from "./Components/Reviews";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <AboutUS />
      <Legacy />
      <UFeatures />
      <Inquiry />
      <Reviews />
    </>
  );
};

export default Home;
