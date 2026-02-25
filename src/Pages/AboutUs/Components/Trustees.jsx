import React from "react";
import Dineshbhai from "../../../assets/AboutUsPageImg/TrusteeImgs/Dineshbhai.svg";
import Shobhanaben from "../../../assets/AboutUsPageImg/TrusteeImgs/Shobhanaben.svg";
import Gajendrabhai from "../../../assets/AboutUsPageImg/TrusteeImgs/Gajendrabhai.svg";
import Ajaybhai from "../../../assets/AboutUsPageImg/TrusteeImgs/Ajaybhai.svg";

const TrusteesList = [
  {
    id: 1,
    img: Dineshbhai,
    name: "Shri Dineshbhai Bastimalji Rathod",
    role: "Secretary",
  },
  {
    id: 2,
    img: Shobhanaben,
    name: "Smt. Shobhanaben R. Dhariwal",
    role: "Trustee",
  },
  {
    id: 3,
    img: Gajendrabhai,
    name: "Shree Gajendrabhai Mehta",
    role: "Trustee",
  },
  {
    id: 4,
    img: Ajaybhai,
    name: "Shri Ajaybhai Sarabhai Shah",
    role: "Trustee",
  },
];

const Trustees = () => {
  return (
    <div className="bg-primary/5 py-16 ">
      <div className="text-center container space-y-12">
        <h1> Meet Our Trustees</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TrusteesList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden items-center text-center hover:bg-white duration-300 rounded-3xl  group hover:shadow-xl relative "
            >
              <img
                src={item.img}
                alt="Globally"
                className=" object-cover w-full h-full scale-110 group-hover:scale-100 duration-700"
              />
              <div
                className="absolute bottom-5 left-5 right-5 
  bg-white/30 backdrop-blur-lg rounded-xl text-white 
  overflow-hidden
  transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
  max-h-14 group-hover:max-h-fit px-6 py-2"
              >
                <p className="text-3xl font-bol text-white">{item.role}</p>

                <p
                  className="opacity-0 translate-y-3 
    transition-all duration-1000 delay-50
    group-hover:opacity-100 group-hover:translate-y-0 text-white px-6"  
                >
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trustees;
