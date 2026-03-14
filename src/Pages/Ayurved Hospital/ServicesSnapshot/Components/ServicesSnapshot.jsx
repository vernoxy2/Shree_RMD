import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import TeamBg from "../../../../assets/AyurvedHospital/TeamBg.webp";
import { DepartmentsList } from "./DepartmentsList";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ URL slug  →  DepartmentsList id (string)
// Slugs match the `link` values in SerSnapshotList (last segment)
const SLUG_MAP = {
  kayachikitsa: "Kayachikitsa",
  panchakarma: "Panchakarma",
  shalya: "Shalya",
  shalakya: "Shalakya",
  "stri-roga": "StriRoga",
  kaumarbhritya: "Kaumarbhritya",
  swasthavritta: "Swasthavritta",
};

const Card = ({ item, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 200}
    className="relative rounded-3xl"
  >
    <img
      src={item.img}
      alt={item.name}
      className="w-full object-cover rounded-2xl"
    />
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-lg px-6 py-3 rounded-lg text-center w-[calc(100%-5rem)]">
      <h2>{item.name}</h2>
    </div>
  </div>
);

const ServicesSnapshot = () => {
  const { department } = useParams(); // e.g. "kayachikitsa"
  const contentRef = useRef(null);

  const getDeptFromSlug = () => {
    const deptId = SLUG_MAP[department]; // "Kayachikitsa"
    return (
      DepartmentsList.find((d) => d.id === deptId) ?? // find by string id
      DepartmentsList[0]
    ); // fallback
  };

  const [selected, setSelected] = React.useState(getDeptFromSlug);

  React.useEffect(() => {
    AOS.refreshHard();
  }, [selected]);

  // Re-sync when URL param changes (back/forward navigation)
  React.useEffect(() => {
    setSelected(getDeptFromSlug());
  }, [department]);

  // Scroll to top of section on selection change
  React.useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selected]);

  return (
    <div className="bg-Bg">
      <PrimaryHeader
        BgImg={TeamBg}
        HeadLine={
          <>
            Our Team / Services <br /> snapshot section
          </>
        }
      />
      <section ref={contentRef} className="container py-24 flex gap-8">
        {/* LEFT SIDEBAR */}
        <div data-aos="fade-up" data-aos-delay="200" className="w-4/12 bg-white rounded-2xl shadow-2xl py-9 px-5 h-full sticky top-12">
          <ul className="space-y-4">
            {DepartmentsList.map((item) => (
              <li
                key={item.id}
                onClick={() => setSelected(item)}
                className={`py-4 px-5 text-xl text-start w-full rounded-xl cursor-pointer duration-300 transition-all
                  ${
                    item.id === selected.id
                      ? "bg-primary text-white font-poppins font-bold"
                      : "bg-[#F6F6F6] text-secondary hover:bg-primary/20 font-inter font-medium"
                  }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-8/12 space-y-8">
          <h1 data-aos="fade-up" data-aos-delay="100">
            {selected.title}
          </h1>
          <div>
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl mb-4">
              <span className="text-primary font-bold">
                {selected.highlight}
              </span>{" "}
              - {selected.desc1}
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-600 text-xl"
            >
              {selected.desc2}
            </p>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-8">
            {selected.object1.map((item) => (
              <Card index={item.id} key={item.id} item={item} />
            ))}
          </div>
          <hr />
          <div className="space-y-6">
            <h1>Our Doctors</h1>
            <div className="grid grid-cols-2 gap-8">
              {selected.object2.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSnapshot;
