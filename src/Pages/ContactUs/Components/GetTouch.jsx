import React from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";

const Address_Hours = [
  {
    title: "Address",
    icon: <CiLocationOn size={22} />,
    value:
      "Shree RMD Ayurved College & Hospital Kesarsuri Gyanvihar Sankul NH 48, A/P Waghaldhara Tal/Dist: Valsad Gujarat State.",
  },
  {
    title: "Opening Hours",
    icon: <CiClock2 size={22} />,
    value: [
      {
        strong: "Hospital",
        value: "10:00 AM to 06:00 PM",
      },
      {
        strong: "College",
        value: "09:00 AM to 05:00 PM",
      },
      {
        strong: "[ Third Saturday Holiday ]",
      },
    ],
  },
];

const ContactData = [
  {
    strong: "Contact No.",
    value: ["02632299700", "6352343065", "Mob No: 9512288550"],
  },
  {
    strong: "Contact No.",
    value: ["Contact No: 6358817577", "6358818577"],
  },
  {
    strong: "Cancer Hospital",
    value: ["Contact No: 02632299701", "6352339690", "Mob No: 8141880808"],
  },
  {
    strong: "Research Center",
    value: ["Contact No: 02632299701"],
  },
];

const GetTouch = () => {
  return (
    <div className="bg-[#FFF6F6] pb-14 pt-24">
      <div className="container space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center">
            <h1 className="md:col-span-2 ">Get In Touch</h1>
          </div>

          {Address_Hours.map((item, index) => (
            <div
              key={index}
              className=" py-7 pb-12 px-5 pr-16 border-2 border-[#DEDEDE] hover:border-primary duration-500"
            >
              <h2 className="flex items-center gap-2 font-bold text-3xl text-primary mb-2">
                {item.title}
                <span className="text-primary text-2xl">{item.icon}</span>
              </h2>

              {/* If value is string */}
              {typeof item.value === "string" && (
                <p className="text-gray-600 leading-relaxed">{item.value}</p>
              )}

              {/* If value is array */}
              {Array.isArray(item.value) && (
                <div className="space-y-1 text-gray-600">
                  {item.value.map((val, i) => (
                    <p key={i}>
                      {val.strong && (
                        <strong className="text-[#676767]">
                          {val.strong} :
                        </strong>
                      )}{" "}
                      {val.value}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {ContactData.map((item, index) => (
            <div
              key={index}
              className="mb-6 py-7 pb-12 px-5 pr-16 border-2 border-[#DEDEDE] hover:border-primary duration-500"
            >
              <h2 className="flex items-center gap-2 font-bold text-3xl text-primary mb-2">
                Conatact
                <span className="text-primary">
                  <MdOutlineCall size={24} />
                </span>
              </h2>
              <strong className="text-[#676767]">{item.strong}</strong>
              <div className="flex flex-col  text-gray-700">
                {item.value.map((num, i) => (
                  <span key={i}>{num}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
