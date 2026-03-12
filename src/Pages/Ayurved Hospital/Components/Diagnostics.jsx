import React from "react";
import CategoryImg1 from "../../../assets/AyurvedHospital/DiagnosticsImages/DiagnosticsBg/Laboratory.webp";
import CategoryImg2 from "../../../assets/AyurvedHospital/DiagnosticsImages/DiagnosticsBg/X-Ray.webp";
import CategoryImg3 from "../../../assets/AyurvedHospital/DiagnosticsImages/DiagnosticsBg/Prakruti.webp";
import LaboratoryIocn from "../../../assets/AyurvedHospital/DiagnosticsImages/Icons/Laboratory.svg";
import XRay from "../../../assets/AyurvedHospital/DiagnosticsImages/Icons/X-Ray.svg";
import Prakruti from "../../../assets/AyurvedHospital/DiagnosticsImages/Icons/Prakruti.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import LazyImage from "../../../Components/Ui/LazyImage";

const categories = [
  {
    id: 0,
    img: CategoryImg1,
    Icon: LaboratoryIocn,
    link: "/ayurveda-college/categories-department",
    title: (<>Pathological Laboratory & <br />Health Check-Up Scheme</>),
    text: "Advanced pathological laboratory offers comprehensive health check-up schemes for senior citizens, women, and disease-specific or full body screening. Diagnostic services include Haematology, Serology, Biochemistry, and routine investigations, ensuring accurate reports, preventive healthcare, and timely medical diagnosis.",
  },
  {
    id: 1,
    img: CategoryImg2,
    Icon: XRay,

    link: "/ayurveda-college/categories-department",

    title: "X-Ray Unit",
    text: "Modern X-Ray and ultrasonography facilities provide accurate diagnostic imaging services for patients. A qualified and experienced radio-sonologist is available regularly to ensure precise reporting, early disease detection, and reliable radiology support for comprehensive medical diagnosis and treatment planning.",
  },
  {
    id: 2,
    img: CategoryImg3,
    Icon: Prakruti,
    link: "/ayurveda-college/categories-department",
    title: "Prakruti Analysis",
    text: "Prakruti Analysis is a classical Ayurvedic assessment method to evaluate individual body constitution and mental traits. This personalized health evaluation helps design suitable diet, lifestyle, and preventive care plans to reduce disease susceptibility and promote long-term holistic wellness.",
  },
];

const Diagnostics = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="py-24 container">
      {/* Diagnostics Head */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h1>Diagnostics</h1>
          <h2 className="text-right text-secondary">
            Advanced Laboratory & Ayurvedic <br />
            Assessment Services
          </h2>
        </div>
        <p className="text-center text-xl">
          The Diagnostics Department at Shree RMD Ayurved College & Hospital
          offers comprehensive pathological laboratory services, health check-up
          schemes, X-Ray and ultrasonography facilities, and classical Prakruti
          Analysis. Equipped with modern diagnostic infrastructure and expert
          professionals, the center ensures accurate investigations in
          Haematology, Serology, and Biochemistry, supporting preventive,
          personalized, and holistic Ayurvedic healthcare.
        </p>
        <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
      </div>
      <div className="flex gap-2 h-[550px] mt-12">
        {categories.map((item) => {
          const isActive = active === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActive(item.id)}
              className={`
                  relative overflow-hidden cursor-pointer
                  transition-all duration-1000
                  ${isActive ? "flex-[4]" : "flex-1"}
                `}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ${
                  isActive
                    ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    : "bg-gradient-to-t from-primary/70 to-primary/40"
                }`}
              />

              {/* ACTIVE CONTENT */}
              {isActive ? (
                <div className="relative h-full flex flex-col justify-end p-8 text-white space-y-3">
                  <div className="flex items-center gap-7">
                    <LazyImage src={item.Icon} alt="icon" />
                    <h2 className=" text-white -mb-2">{item.title}</h2>
                  </div>



                  <hr className=" border-white border-b rounded-full" />

                  <p className="text-white">{item.text}</p>
                </div>
              ) : (
                /* INACTIVE VERTICAL TEXT */
                <div className="relative h-full flex flex-col items-center justify-center rotate-[-90deg]">
                  <h2 className="text-white text-3xl font-bold tracking-wide  whitespace-nowrap ">
                    {item.title}
                  </h2>
                  <h2 className="text-white text-3xl font-medium">
                    {item.subTitale}
                  </h2>
                </div>
              )}
              <Link
                to={item.link}
                className="p-2 text-white text-3xl rounded-full bg-primary absolute top-4 right-4"
              >
                <IoIosArrowForward />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Diagnostics;
