import React from "react";
import PrimaryCard from "./PrimaryCard";

const Professional = ({ HeadLine, Data = [] }) => {
  return (
    <div className="space-y-12 pb-12">
      <div className="max-w-md mx-auto bg-gradient-to-r from-transparent via-primary to-transparent py-2.5">
        <h2 className="text-center  text-white">{HeadLine}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Data.map((item, index) => (
          <PrimaryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Professional;
