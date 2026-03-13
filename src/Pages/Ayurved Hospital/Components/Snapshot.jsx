import React from "react";
import Kayachikitsa from "../../../assets/AyurvedHospital/Snapshot/Kayachikitsa.svg";
import Panchakarma from "../../../assets/AyurvedHospital/Snapshot/Panchakarma.svg";
import Shalya from "../../../assets/AyurvedHospital/Snapshot/Shalya.svg";
import Shalakya from "../../../assets/AyurvedHospital/Snapshot/Shalakya.svg";
import StriRoga from "../../../assets/AyurvedHospital/Snapshot/StriRoga.svg";
import Kaumarbhritya from "../../../assets/AyurvedHospital/Snapshot/Kaumarbhritya.svg";
import Swasthavritta from "../../../assets/AyurvedHospital/Snapshot/Swasthavritta.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

// ✅ slugs must match SLUG_MAP keys in ServicesSnapshot
const SerSnapshotList = [
  {
    id: 1,
    img: Kayachikitsa,
    title: "Department of Kayachikitsa",
    link: "/ayurved-hospital/kayachikitsa",
    description:
      "The hospital's Yoga unit provides personalized guidance, where expert physicians teach patients tailored Yogic practices following a detailed consultation.",
  },
  {
    id: 2,
    img: Panchakarma,
    title: "Department of Panchakarma",
    link: "/ayurved-hospital/panchakarma",
    description:
      "Kayachikitsa restores Agni, balances body systems, and promotes holistic healing for lasting health and disease prevention.",
  },
  {
    id: 3,
    img: Shalya,
    title: "Department of Shalya Tantra",
    link: "/ayurved-hospital/shalya",
    description:
      "Shalyatantra offers advanced Ayurvedic surgical and para-surgical treatments for anorectal disorders, wound care, and holistic operative healthcare management.",
  },
  {
    id: 4,
    img: Shalakya,
    title: "Department of Shalakya Tantra",
    link: "/ayurved-hospital/shalakya",
    description:
      "Shalakya Tantra provides specialized Ayurvedic and modern ENT, eye, and dental care for holistic diagnosis, prevention, and treatment.",
  },
  {
    id: 5,
    img: StriRoga,
    title: "Department of Stri-Roga and Prasuti-Tantra",
    link: "/ayurved-hospital/stri-roga",
    description:
      "Prasuti Tantra and Streeroga provide comprehensive Ayurvedic women's healthcare, ensuring fertility support, safe pregnancy, healthy childbirth, and gynecological wellness.",
  },
  {
    id: 6,
    img: Kaumarbhritya,
    title: "Department of Kaumarbhritya",
    link: "/ayurved-hospital/kaumarbhritya",
    description:
      "Kaumarbhritya offers holistic Ayurvedic pediatric care, enhancing immunity, growth, and child development through preventive therapies and Suvarnaprashana immunization.",
  },
  {
    id: 7,
    img: Swasthavritta,
    title: "Department of Swasthavritta",
    link: "/ayurved-hospital/swasthavritta",
    description:
      "Swasthavritta promotes preventive healthcare through Ayurveda, yoga, nutrition, hygiene, and community wellness programs for sustainable healthy living.",
  },
];

const SerSnapshotCard = ({ item }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl h-full shadow-lg">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div
        className="absolute bottom-0 left-0 w-full p-6 
                   translate-y-16 group-hover:translate-y-0
                   transition-all duration-700 ease-in-out"
      >
        <h2 className="text-xl font-semibold text-white">{item.title}</h2>
        <hr className="my-3 border-white/60 w-12 group-hover:w-2/3 transition-all duration-500" />
        <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          {item.description}
        </p>
      </div>
      <Link
        to={item.link}
        className="p-2 text-primary group-hover:text-white duration-500 transition-colors text-2xl rounded-full bg-white group-hover:bg-primary absolute top-4 right-4"
      >
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

const Snapshot = () => {
  return (
    <div className="py-24 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-center justify-center bg-primary/20 rounded-2xl p-10 shadow-lg">
          <h1 className="leading-tight">
            Services <br /> Snapshot <br /> Section
          </h1>
        </div>
        {SerSnapshotList.map((item) => (
          <div
            key={item.id}
            className={`${item.id === 3 ? "lg:row-span-2 border" : ""} h-full`}
          >
            <SerSnapshotCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snapshot;