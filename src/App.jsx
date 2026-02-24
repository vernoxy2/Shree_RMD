import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Components/Layout/Layout.jsx";


// Lazy loaded pages
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs.jsx"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ConatactUs.jsx"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <div className="relative">
      <div className="h-16 w-16 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;