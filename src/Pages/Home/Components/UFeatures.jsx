import React from "react";
import Globally from "../../../assets/HomePage/UFeaturesSVG/Globally.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const FeaturesList = [
  {
    id: 1,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 2,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 3,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 4,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 5,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 6,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 7,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
  },
  {
    id: 8,
    icons: "",
    Text: "Developing globally competent doctors for national growth",
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
                <LazyImage src={Globally} alt="Globally" className="" />
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
