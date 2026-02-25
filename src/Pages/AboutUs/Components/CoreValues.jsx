import React from "react";
import Authentic from "../../../assets/AboutUsPageImg/CoreValuesImg/Authentic.png";
import AuthenticIcon from "../../../assets/AboutUsPageImg/CoreValuesImg/Authentic.svg";
import AuPatientth from "../../../assets/AboutUsPageImg/CoreValuesImg/Patient.png";
import AuPatientthIcon from "../../../assets/AboutUsPageImg/CoreValuesImg/Patient.svg";
import Academic from "../../../assets/AboutUsPageImg/CoreValuesImg/Academic.png";
import AcademicIcon from "../../../assets/AboutUsPageImg/CoreValuesImg/Academic.svg";
import Research from "../../../assets/AboutUsPageImg/CoreValuesImg/Research.png";
import ResearchIcon from "../../../assets/AboutUsPageImg/CoreValuesImg/Research.svg";
import Integrity from "../../../assets/AboutUsPageImg/CoreValuesImg/Integrity.png";
import IntegrityIcon from "../../../assets/AboutUsPageImg/CoreValuesImg/Integrity.svg";
import Service from "../../../assets/AboutUsPageImg/CoreValuesImg/Service.png";
import ServiceIcon from "../../../assets/AboutUsPageImg/CoreValuesImg/Service.svg";
import Mission from "../../../assets/AboutUsPageImg/CoreValuesImg/Mission.svg";
import Vision from "../../../assets/AboutUsPageImg/CoreValuesImg/Vision.svg";

const ValueData = [
  {
    Icon: AuthenticIcon,
    title: "Authentic Ayurveda",
    subtext:
      "We practice Authentic Ayurveda, preserving classical principles with purity and scientific relevance, offering traditional therapies and holistic treatments.",
    subtext2:
      "Our commitment ensures the ancient wisdom of Ayurveda continues to benefit modern healthcare, promoting wellness, balance, and sustainable living globally.",
    img: Authentic,
  },
  {
    Icon: AuPatientthIcon,
    title: "Patient-Centered Care",
    subtext:
      "We deliver Patient-Centered Care with compassion, empathy, and affordability. Focusing on holistic wellness, our healthcare services prioritize individual needs, long-term health, and comfort, ensuring patients receive high-quality, personalized Ayurvedic treatments in a supportive and caring environment.",
    subtext2: "",
    img: AuPatientth,
  },
  {
    Icon: AcademicIcon,
    title: "Academic Excellence",
    subtext:
      "Our Academic Excellence ensures high-quality Ayurvedic education, clinical training, and skill development. Students gain practical experience and deep theoretical knowledge, preparing competent healthcare professionals ready to uphold traditional Ayurveda while meeting modern medical standards and global healthcare demands.",
    subtext2: "",
    img: Academic,
  },
  {
    Icon: ResearchIcon,
    title: "Research & Innovation",
    subtext:
      "We foster Research & Innovation, promoting evidence-based Ayurvedic studies and integrating modern diagnostic tools with traditional wisdom. Our research advances clinical practices, enhances therapy effectiveness, and supports scientific validation of classical treatments for contemporary healthcare solutions.",
    subtext2: "",
    img: Research,
  },
  {
    Icon: IntegrityIcon,
    title: "Integrity & Ethics",
    subtext:
      "We uphold Integrity & Ethics, maintaining transparency, responsibility, and ethical practices in both education and patient care. Our commitment ensures trust, accountability, and professional conduct, fostering a reliable and morally sound environment for students, patients, and the wider community.",
    subtext2: "",
    img: Integrity,
  },
  {
    Icon: ServiceIcon,
    title: "Service to Society",
    subtext:
      "We uphold Integrity & Ethics, maintaining transparency, responsibility, and ethical practices in both education and patient care. Our commitment ensures trust, accountability, and professional conduct, fostering a reliable and morally sound environment for students, patients, and the wider community.",
    subtext2: "",
    img: Service,
  },
];

const VisionMission = [
  {
    id: 1,
    icons: Vision,
    title: "Our Vision",
    text: "To emerge as a leading center of excellence in Ayurvedic education and hospital services, developing globally competent Ayurveda professionals by integrating ancient healing wisdom with modern science for sustainable healthcare and global wellness.",
  },
  {
    id: 2,
    icons: Mission,
    title: "Our Mission",
    text: "To nurture ethically responsible and highly skilled Ayurvedic practitioners grounded in classical principles, advance evidence-based research, and deliver affordable, holistic healthcare services that uplift society and strengthen traditional Indian medicine.",
  },
];

let stepCount = 0;
const ValueDataWithStep = ValueData.map((item) => {
  if (item.title && item.text) {
    stepCount += 1;
    return {
      ...item,
      Step: (
        <>
          <span className="text-white font-bold">step</span>
          <br />
          <span className="text-primary font-bold">
            {String(stepCount).padStart(2, "0")}
          </span>
        </>
      ),
    };
  }
  return item;
});

const CoreValues = () => {
  return (
    <div className="py-20 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container pb-10">
        {VisionMission.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center gap-3 bg-primary/20 hover:bg-primary duration-300 p-8 pt-8 pb-24 text-[#676767] group relative"
          >
            <img src={item.icons} alt="Globally" className="group-hover:brightness-0 group-hover:invert" />
            <hr className="border rounded-full w-full border-primary group-hover:border-white duration-300" />
            <p className="group-hover:text-white max-w-[78%]">{item.text}</p>
            <h1 className="text-7xl text-transparent group-hover:text-outline absolute left-0 -bottom-1 translate-y-16 group-hover:translate-y-0 duration-700">{item.title}</h1>
          </div>
        ))}
      </div>
      <h1 className="text-center">Core Values</h1>

      <div className="container mx-auto ">
        {ValueData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 items-center group"
          >
            {/* TEXT SECTION */}
            <div
              className={`lg:p-10 py-10 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <img src={item.Icon} alt={item.title} className=" mb-2 " />

              <h2 className="text-3xl font-bold text-primary mb-4">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-3">{item.subtext}</p>

              <p className="text-gray-600">{item.subtext2}</p>
            </div>

            {/* IMAGE SECTION */}
            <div
              className={`overflow-hidden ${
                index % 2 !== 0 ? "lg:order-1" : ""
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
