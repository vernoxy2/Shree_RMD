import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";

const Affiliation = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="container py-8 space-y-4">
        <h1 className="text-white text-center">Affiliation & Accreditation</h1>
        <p className="text-white max-w-xl mx-auto text-center">
          The institution is duly affiliated and recognized by statutory
          authorities governing Ayurvedic education in India
        </p>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex gap-4 items-center">
            <div className="border-8 border-primary/50 rounded-full w-fit bf-primary/50">
              <h1>01</h1>
            </div>
            <div className="border-l-4 border-primary px-4 py-2 bg-gradient-to-r from-primary/60 to-transparent">
              <p className="text-white">Affiliated to Gujarat Ayurved University (GAU)</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-8 border-primary/50 rounded-full w-fit bf-primary/50">
              <h1>02</h1>
            </div>
            <div className="border-l-4 border-primary px-4 py-2 bg-gradient-to-r from-primary/60 to-transparent">
              <p className="text-white">Affiliated to Gujarat Ayurved University (GAU)</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="border-8 border-primary/50 rounded-full w-fit bf-primary/50">
              <h1>03</h1>
            </div>
            <div className="border-l-4 border-primary px-4 py-2 bg-gradient-to-r from-primary/60 to-transparent">
              <p className="text-white">Affiliated to Gujarat Ayurved University (GAU)</p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-fit">
          <PrimaryBtn text="View Affiliation Details" />
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
