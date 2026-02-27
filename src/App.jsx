import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Components/Layout/Layout.jsx";
import Admission_Update from "./Pages/Ayurved Collage/Academics/Admission_Update/Admission_Update.jsx";
import AyurvedCollage from "./Pages/Ayurved Collage/AyurvedCollage.jsx";
import University_Examination from "./Pages/Ayurved Collage/Academics/University_Examination/University_Examination.jsx";
import Activities from "./Pages/Ayurved Collage/Students/Activities/Activities.jsx";
import CategoriesDepartment from "./Pages/Ayurved Collage/CategoriesDepartment/CategoriesDepartment.jsx";
import Committee from "./Pages/Ayurved Collage/About college/Committee/Committee.jsx";

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
          <Route path="home" index element={<Home />} />
          {/* About Us */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* Ayurveda College */}
          <Route path="ayurveda-college" element={<AyurvedCollage />} />
          {/* Ayurveda College - Categories Department */}
          <Route
            path="/ayurveda-college/categories-department"
            element={<CategoriesDepartment />}
          />
          {/* About College /}
          {/* About College - committee*/}
          <Route
            path="/ayurveda-college/committee"
            element={<Committee />}
          />
          <Route
            path="/ayurveda-college/University-Examination"
            element={<University_Examination />}
          />
          <Route
            path="/ayurveda-college/Admission-Update"
            element={<Admission_Update />}
          />
          <Route path="/ayurveda-college/Activities" element={<Activities />} />

          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
