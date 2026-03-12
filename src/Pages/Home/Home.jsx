import React from "react";
import Inquiry from "./Components/Inquiry";
import UFeatures from "./Components/UFeatures";
import Legacy from "./Components/Legacy";
import AboutUS from "./Components/AboutUS";
import HomeSlider from "./Components/HomeSlider";
import Reviews from "./Components/Reviews";
import Affiliation from "./Components/Affiliation";
import Nationally from "./Components/Nationally";
import CircaleAnimation from "../../Components/Ui/CircaleAnimation";

const Home = () => {
  return (
    <div
    className="bg-Bg">
      <HomeSlider />
      <AboutUS />
      <Legacy />
      <UFeatures />
      <Affiliation />
      <Nationally />
      <Inquiry />
      <Reviews />
    </div>
  );
};

export default Home;
