import React from "react";
import CategoryImg1 from "../../../assets/AyurvedCollage/CategoriesImg/Cat1.png";
import CategoryImg2 from "../../../assets/AyurvedCollage/CategoriesImg/Cat2.png";
import CategoryImg3 from "../../../assets/AyurvedCollage/CategoriesImg/Cat3.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";

const Department = () => {
  const [active, setActive] = React.useState(0);

  const categories = [
    {
      id: 0,
      img: CategoryImg1,
      link: "/ayurveda-college/categories-department",
      title: "I -Professional",
      subTitale: "Ayurvedic Education & Training",
      text: "This department is dedicated to providing comprehensive Ayurvedic education, combining traditional wisdom with modern healthcare practices. Students receive in-depth theoretical knowledge, practical hands-on training, and exposure to clinical procedures. The curriculum emphasizes holistic understanding, ethical medical practices, and professional development to prepare skilled Ayurvedic doctors ready to serve communities with excellence.",
    },
    {
      id: 1,
      img: CategoryImg2,
      link: "/ayurveda-college/categories-department",

      title: "II -Professional",
      subTitale: "Clinical Practice & Patient Care",
      text: "Focused on advanced clinical training, this department equips students with expertise in patient assessment, diagnosis, and Ayurvedic treatment planning. Students gain experience in Panchakarma therapies, herbal treatments, and integrated healthcare techniques. Emphasis is placed on compassionate patient care, safety, and effective therapeutic outcomes, ensuring graduates are confident and competent in both traditional and modern Ayurvedic practices.",
    },
    {
      id: 2,
      img: CategoryImg3,
      link: "/ayurveda-college/categories-department",

      title: "III -Professional",
      subTitale: "Ayurvedic Medicine Preparation",
      text: "This department teaches students how to prepare and handle Ayurvedic medicines safely and effectively. Using both herbal and traditional mineral-based methods, students learn to create authentic Ayurvedic treatments. The focus is on combining classical knowledge with modern techniques, ensuring graduates are skilled in making quality medicines for clinical use and patient care.",
    },
  ];

  return (
    <div className="bg-primary/10 py-20">
      <div className="container space-y-12">
        <h1 className="text-center">Categories Department</h1>

        <div className="flex gap-6 h-[520px]">
          {categories.map((item) => {
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActive(item.id)}
                className={`
                  relative overflow-hidden rounded-xl cursor-pointer
                  transition-all duration-500
                  ${isActive ? "flex-[4]" : "flex-1"}
                `}
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      : "bg-gradient-to-t from-primary/70 to-primary/40"
                  }`}
                />

                {/* ACTIVE CONTENT */}
                {isActive ? (
                  <div className="relative h-full flex flex-col justify-end p-8 text-white space-y-3">
                    <h3 className="text-3xl font-bold -mb-2">{item.title}</h3>

                    <h2 className="text-3xl font-medium">{item.subTitale}</h2>

                    <hr className=" border-white border-b rounded-full" />

                    <p className="text-white">{item.text}</p>
                  </div>
                ) : (
                  /* INACTIVE VERTICAL TEXT */
                  <div className="relative h-full flex flex-col items-center justify-center rotate-[-90deg]">
                    <h2 className="text-white text-3xl font-bold tracking-wide  whitespace-nowrap ">
                      {item.title}
                    </h2>
                    <h2 className="text-white text-3xl font-medium">
                      {item.subTitale}
                    </h2>
                  </div>
                )}
                <Link to={item.link} className="p-2 text-white text-3xl rounded-full bg-primary absolute top-4 right-4">
                  <IoIosArrowForward />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Department;
