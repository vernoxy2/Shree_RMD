import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import TeamBg from "../../../../assets/AyurvedHospital/TeamBg.webp";
import ShodhanaImg from "../../../../assets/AyurvedHospital/DepartmentsImgs/Kayachikitsa/Shodhana.svg";
import RasayanaImg from "../../../../assets/AyurvedHospital/DepartmentsImgs/Kayachikitsa/Rasayana.svg";
import { DepartmentsList } from "./DepartmentsList";

const Card = ({ item }) => {
  return (
    <div key={item.id} className="relative rounded-3xl">
      <img
        src={item.img}
        alt={item.name}
        className="w-full object-cover rounded-2xl"
      />
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 
             bg-white/95 backdrop-blur-lg 
             px-6 py-3 rounded-lg text-center w-[calc(100%-5rem)]"
      >
        <h2 className="">{item.name}</h2>
      </div>
    </div>
  );
};

const ServicesSnapshot = () => {
  // const [active, setActive] = React.useState(DepartmentsList[0]);
  const [selected, setSelected] = React.useState(DepartmentsList[0]);
  return (
    <div className="bg-Bg">
      <PrimaryHeader
        BgImg={TeamBg}
        HeadLine={
          <>
            Our Team / Services <br />
            snapshot section
          </>
        }
      />
      <section className="container py-24 flex gap-8">
        {/* LEFT CONTENT */}
        <div className="w-4/12 bg-white rounded-2xl shadow-2xl py-9 px-5 h-full sticky top-12">
          <ul className="space-y-4">
            {DepartmentsList.map((item) => (
              <li
                key={item.id}
                className={`py-4 px-5 text-xl text-start w-full bg-[#F6F6F6] rounded-xl group duration-300 transition-all ${
                  item.id === selected.id
                    ? "bg-primary text-white font-poppins font-bold "
                    : "text-secondary hover:bg-primary/20 font-inter font-medium "
                }`}
                onClick={() => setSelected(item)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        {/* RIGHT CONTENT */}
        <div className="w-8/12 space-y-8">
          <h1>{selected.title}</h1>
          <div>
            <p className="text-xl mb-4">
              <span className="text-primary font-bold ">
                {selected.highlight}
              </span>{" "}
              - {selected.desc1}
            </p>
            <p className="text-gray-600 text-xl">{selected.desc2}</p>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-8 ">
            {selected.object1.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
            <hr />
          <div className="space-y-6">
            <h1>Our Doctors</h1>
            <div className="grid grid-cols-2 gap-8 ">
              {selected.object2.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSnapshot;
