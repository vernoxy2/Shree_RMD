import React from "react";
import { AffiliationData } from "./AffiliationData";
import Rightsaid from "../../../assets/HomePage/AffiliationIcons/Rightsaid.svg";

const fitterData = (data, category) => {
  return data.filter((item) => item.category === category);
};

const AffiliationCard = ({ item }) => {
  return (
    <div className="ps-6 pt-7 pb-6 pe-5 space-y-2.5 bg-white hover:shadow-xl duration-500 hover:-translate-y-2 relative">
      <div className="flex items-center gap-2">
        <img
          src={item.icon}
          alt={item.title}
          className="bg-primary/10 rounded-full p-2 border-dashed border-primary border border-spacing-2"
        />
        <p className="uppercase">{item.category}</p>
      </div>
      <h2 className="text-xl">{item.title}</h2>
      <p className="bg-primary w-fit text-white font-bold rounded-md px-4 py-1">
        {item.points}
      </p>
      <p className="">{item.text}</p>
      <div className="flex items-center justify-between pt-4">
        <p className="text-primary font-bold">since {item.since}</p>
        <button className="bg-primary py-1.5 px-3 font-inter font-bold text-white">
          View More
        </button>
      </div>
      <img src={Rightsaid} alt="" className="absolute right-0 -top-2"/>
    </div>
  );
};

const Affiliation = () => {
 const [affiliationData, setAffiliationData] = React.useState(AffiliationData);

  const handleFilter = (category) => {
    if (category === "all") {
      setAffiliationData(AffiliationData);
    } else {
      const filtered = filterData(AffiliationData, category);
      setAffiliationData(filtered);
    }
  };

  return (
    <div className="py-20 container">
      <div className="text-center space-y-2">
        <h1>Affiliation & Accreditation</h1>
        <p className="max-w-xl mx-auto">
          The institution is duly affiliated and recognized by statutory
          authorities governing Ayurvedic education in India
        </p>
      </div>

      {/* Filter */}
      <div className="mt-10 flex gap-5 items-center justify-center">
        <button
          onClick={() => handleFilter("all")}
          className="bg-primary py-1.5 px-3 font-inter font-bold text-white"
        >
          All
        </button>

        <button
          onClick={() => handleFilter("colleges")}
          className="bg-primary py-1.5 px-3 font-inter font-bold text-white"
        >
          colleges
        </button>

        <button
          onClick={() => handleFilter("Hospital")}
          className="bg-primary py-1.5 px-3 font-inter font-bold text-white"
        >
          Hospital
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {AffiliationData.map((item) => (
          <AffiliationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Affiliation;
