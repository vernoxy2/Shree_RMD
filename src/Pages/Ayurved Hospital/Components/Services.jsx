import React from "react";
import Physiotherapy from "../../../assets/AyurvedHospital/ServicesImg/Physiotherapy.svg";
import Yoga from "../../../assets/AyurvedHospital/ServicesImg/Yoga.svg";
import Suvarnaprashana from "../../../assets/AyurvedHospital/ServicesImg/Suvarnaprashana.svg";
import Medical from "../../../assets/AyurvedHospital/ServicesImg/Medical.svg";
import MedicalStore from "../../../assets/AyurvedHospital/ServicesImg/MedicalStore.svg";
import Transport from "../../../assets/AyurvedHospital/ServicesImg/Transport.svg";

const ServicesData = [
  {
    id: 1,
    img: Physiotherapy,
    title: "Physiotherapy",
    description:
      "The Physiotherapy Unit offers expert care with Short Wave Diathermy, traction, thermotherapy, fitness equipment, and rehabilitation tools for effective physical therapy and recovery.",
  },
  {
    id: 2,
    img: Yoga,
    title: "Yoga Unit",
    description:
      "The hospital’s Yoga unit provides personalized guidance, where expert physicians teach patients tailored Yogic practices following a detailed consultation.",
  },
  {
    id: 3,
    img: Suvarnaprashana,
    title: "Suvarnaprashana Program",
    description:
      "A monthly hospital program enhancing immunity and intellectual growth in children under 10, with over 50,000 children immunized so far.",
  },
  {
    id: 4,
    img: Medical,
    title: "Medical Camps",
    description:
      "Regular medical camps provide community healthcare via diagnostics, check-ups, treatments, and awareness, fostering prevention, early detection, education, and overall public health.",
  },
  {
    id: 5,
    img: MedicalStore,
    title: "Medical Store",
    description:
      "The hospital’s store provides a wide range of Ayurvedic and branded medicines, offering safe, quality, and affordable healthcare products on campus.",
  },
  {
    id: 6,
    img: Transport,
    title: "Transport Service / Ambulance",
    description:
      "The hospital’s store provides a wide range of Ayurvedic and branded medicines, offering safe, quality, and affordable healthcare products on campus.",
  },
];

const ServicesCard = ({ img, title, description, id }) => {
  return (
    <div
    data-aos="fade-up"
    data-aos-delay={id * 200}
     className="space-y-6 group hover:-translate-y-3 duration-500">
      <img src={img} alt={title} className="w-full" />
      <div className="flex items-center gap-4">
        <h1>0{id}</h1>
        <h2 className="">{title}</h2>
      </div>
      <div className="relative">
        <hr className="my-6 border-gray-300" />
        <hr className="absolute top-1/2 left-0 w-20 group-hover:w-full border-2 border-primary -translate-y-1/2 z-10 duration-700" />
      </div>
      <p className="text-xl">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className=" ">
      <div className="container py-20">
        <div className="space-y-6">
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-center">
            Services Offered
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-secondary text-center"
          >
            Comprehensive Ayurvedic & Healthcare Facilities
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-center">
            Shree RMD Ayurved College & Hospital offers advanced Physiotherapy,
            Yoga therapy, Suvarnaprashana immunization, medical camps, medical
            store services, and ambulance facilities. Equipped with modern
            therapeutic equipment and expert care, the hospital promotes
            holistic healing, preventive healthcare, child immunity development,
            and community wellness through integrated Ayurvedic and supportive
            medical services.
          </p>
          <hr
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            className=" max-w-xs border-primary border-2 rounded-full mx-auto"
          />
        </div>
        <div className="pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {ServicesData.map((item) => (
            <ServicesCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
