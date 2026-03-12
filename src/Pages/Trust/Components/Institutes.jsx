import React from "react";
import InstitutesBg from "../../../assets/Trust/InstitutesBg.webp";
import Hospital from "../../../assets/Trust/InstitutesImgs/Hospital.png";
import HospitalSvg from "../../../assets/Trust/InstitutesImgs/Hospital.svg";
import College from "../../../assets/Trust/InstitutesImgs/College.png";
import CollegeSvg from "../../../assets/Trust/InstitutesImgs/College.svg";
import Gaushala from "../../../assets/Trust/InstitutesImgs/Gaushala.png";
import GaushalaSvg from "../../../assets/Trust/InstitutesImgs/Gaushala.svg";
import Annakshetra from "../../../assets/Trust/InstitutesImgs/Annakshetra.png";
import AnnakshetraSvg from "../../../assets/Trust/InstitutesImgs/Annakshetra.svg";

const institutes = [
  {
    id: 0,
    icon: CollegeSvg,
    title: "Ayurveda College & Hospital",
    img: College,
    subtext:
      "Shree RMD Ayurved College and 150-bed Hospital offer BAMS education, clinical training, Panchakarma, yoga, physiotherapy, OPD-IPD services, and affordable patient-centric Ayurvedic healthcare rooted in authentic classical principles. ",
  },
  {
    id: 1,
    icon: HospitalSvg,
    title: "Super Specialty Hospital",
    img: Hospital,
    subtext:
      "Shree RMD Super Specialty Ayurveda Hospital, Gujarat provides holistic Ayurvedic treatment, Panchakarma therapy, specialized cancer care, and compassionate, affordable patient-centered healthcare with integrated modern diagnostic support.",
  },
  {
    id: 2,
    icon: GaushalaSvg,
    title: "Gaushala",
    img: Gaushala,
    subtext:
      "Established in 2009 at Waghaldhara and 2011 in Palitana, Gujarat, the Gaushala houses 400+ Gir cows, producing medicinal cow-based products for Ayurvedic cancer treatment and holistic healthcare use only.",
  },
  {
    id: 3,
    icon: AnnakshetraSvg,
    title: "Annakshetra",
    img: Annakshetra,
    subtext:
      "Established in 2008 at Palitana, Gujarat, Annakshetra serves subsidized meals at Rs.1 to all visitors without discrimination, benefiting 450–500 people daily through inclusive community food service and humanitarian support.",
  },
];

const Institutes = () => {
  const [selected, setSelected] = React.useState(institutes[0]);
  return (
    <section
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${InstitutesBg})` }}
    >
      <div className="container py-20">
        <h1 className="text-white pb-12">
          Institutes <br /> Under The Trust
        </h1>
        <div className="flex flex-col-reverse lg:flex-row rounded-3xl border border-white/40 overflow-hidden">
          {/* Menu */}
          <div className="lg:w-5/12">
            <div className="h-full">
              {institutes.map((item) => (
                <div
                  key={item.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selected.id === item.id
                      ? "bg-white/50 border-l-4 border-white/60"
                      : "bg-white/20"
                  }  cursor-pointer`}
                  onClick={() => setSelected(item)}
                >
                  <div className="flex items-center gap-5 px-7 py-8">
                    <img src={item.icon} alt="" />
                    <h2 className="text-white text-xl">{item.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dispaly */}
          <div
            key={selected.id}
            className="flex-1 w-full bg-cover bg-center space-y-2 px-8 py-7 flex flex-col justify-end animate-[fadeIn_.5s_ease] min-h-[500px]"
            style={{ backgroundImage: `url(${selected.img})` }}
          >
            <h2 className="text-white animate-[fadeIn_.5s_ease]">
              {selected.title}
            </h2>
            <hr className="border animate-[fadeIn_.5s_ease]" />
            <p className="text-white max-w-xl animate-[fadeIn_.5s_ease]">
              {selected.subtext}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutes;
