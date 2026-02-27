import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";

const affiliationData = [
  {
    id: "01",
    text: "Affiliated to Gujarat Ayurved University (GAU)",
  },
  {
    id: "02",
    text: "Approved by National Commission for Indian System of Medicine (NCISM)",
  },
  {
    id: "03",
    text: "Recognized by Ministry of AYUSH, Government of India",
  },
];

const Affiliation = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <div className="container py-8 space-y-4">
        
        <h1 className="text-white text-center">
          Affiliation & Accreditation
        </h1>

        <p className="text-white max-w-xl mx-auto text-center">
          The institution is duly affiliated and recognized by statutory
          authorities governing Ayurvedic education in India
        </p>

        <div className="py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {affiliationData.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              
              <div className="border-8 border-primary/50 rounded-full w-fit">
                <h1 className="text-white px-3 py-1">
                  {item.id}
                </h1>
              </div>

              <div className="border-l-4 border-primary px-4 py-2 bg-gradient-to-r from-primary/60 to-transparent">
                <p className="text-white">{item.text}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="mx-auto w-fit">
          <PrimaryBtn text="View Affiliation Details" />
        </div>

      </div>
    </div>
  );
};

export default Affiliation;