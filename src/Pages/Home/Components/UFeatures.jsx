import React from "react";
import Globally from "../../../assets/HomePage/UFeaturesSVG/Globally.svg";
import individuals from "../../../assets/HomePage/UFeaturesSVG/individuals.svg";
import Recognized from "../../../assets/HomePage/UFeaturesSVG/Recognized.svg";
import Renowned from "../../../assets/HomePage/UFeaturesSVG/Renowned.svg";
import library from "../../../assets/HomePage/UFeaturesSVG/library.svg";
import Parentalcare from "../../../assets/HomePage/UFeaturesSVG/Parentalcare.svg";
import academic from "../../../assets/HomePage/UFeaturesSVG/academic.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const FeaturesList = [
  {
    id: 1,
    icons: Globally,
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 2,
    icons: individuals,
    Text: "Creating clinically competent and academically strong individuals",
  },
  {
    id: 3,
    icons: Recognized,
    Text: "Recognized with B Grade Accreditation by  NABET QCI",
  },
  {
    id: 4,
    icons: Renowned,
    Text: "Renowned for compassionate care and charitable service",
  },
  {
    id: 5,
    icons: library,
    Text: "A Well-established library with 11,000+ textbooks",
  },
  {
    id: 6,
    icons: Parentalcare,
    Text: "Personal affectionate Parental care and Counselling for the students.",
  },
  {
    id: 7,
    icons: academic,
    Text: "Highly qualified faculty committed to academic excellence",
  },
  {
    id: 8,
    icons: "",
    Text: "Spacious hostel facilities within peaceful campus environment",
  },
];

const UFeatures = () => {
  return (
    <section className="py-24 bg-[#FFF6F6] space-y-16">
      <h1 className="text-center">Unique Features</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FeaturesList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-3 text-center hover:bg-white duration-300 p-4 pt-8 pb-14 rounded-3xl text-[#676767] group hover:shadow-xl"
          >
            <div className="bg-[#696969] mb-6 p-2 rounded-full group-hover:bg-primary">
                <LazyImage src={item.icons} alt="Globally" className="" />
            </div>
            <p>{item.Text}</p>
            <hr className="border-2 rounded-full w-20 border-primary"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UFeatures;
