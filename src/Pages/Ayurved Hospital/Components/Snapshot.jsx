import React from "react";
import Kayachikitsa from "../../../assets/AyurvedHospital/Snapshot/Kayachikitsa.svg";

const SerSnapshotList = [
  {
    id: 1,
    img: Kayachikitsa,
    title: "Department of Kayachikitsa",
    description:
      "The hospital’s Yoga unit provides personalized guidance, where expert physicians teach patients tailored Yogic practices following a detailed consultation.",
  },
];

const Snapshot = () => {
  return (
    <div className="py-20 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center justify-center bg-primary/30 ">
          <h1>
            Services <br /> snapshot <br />
            section
          </h1>
        </div>
        {SerSnapshotList.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <img src={item.img} alt={item.title} className="w-full" />
            <div className="flex items-center gap-4">
              <h1>0{item.id}</h1>
              <h2 className="">{item.title}</h2>
            </div>
            <hr className="my-6" />
            <p className="text-xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snapshot;
