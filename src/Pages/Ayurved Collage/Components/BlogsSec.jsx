import React from "react";
import Blog1 from "../../../assets/AyurvedCollage/BlogImg/Blog1.svg";
import Blog2 from "../../../assets/AyurvedCollage/BlogImg/Blog2.svg";
import Blog3 from "../../../assets/AyurvedCollage/BlogImg/Blog3.svg";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";

const BlogData = [
  {
    id: 1,
    img: Blog1,
    mainTitle: "Student Engagement & Extracurricular Activities",
    subTitle: "Holistic Development through Campus Events",
    text: "Shree RMD Ayurved College actively organizes sports weeks, cultural festivals, wellness programs, and celebrations like Onam, Independence Day, and International Yoga Day. These initiatives foster teamwork, leadership, and a balanced lifestyle among students.",
  },
  {
    id: 2,
    img: Blog2,
    mainTitle: " Academic Excellence & Learning Opportunities",
    subTitle: "Enriching Knowledge Beyond Classroom",
    text: "The institute hosts seminars, guest lectures, workshops, and educational visits such as Nadi Pariksha seminars, Dravyaguna tours, and departmental model exhibitions. These events enhance practical learning, research skills, and professional development.",
  },
  {
    id: 3,
    img: Blog3,
    mainTitle: "Health & Community Outreach Programs",
    subTitle: "Promoting Ayurveda & Public Health Awareness",
    text: "Through medical camps, health awareness programs, thalassemia screenings, anti-ragging drives, and Poshan Mah initiatives, Shree RMD bridges Ayurvedic knowledge with community service, empowering students to make a positive societal impact.",
  },
];

const BlogsSec = () => {
  return (
    <div className="bg-[#FFF6F6] py-20">
      <div className="container space-y-12">
        <h1 className="text-center">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogData.map((item) => (
            <div key={item.id} className="flex flex-col h-full">
              <h3 className="w-full bg-primary text-xl text-center text-white font-black font-poppins px-14 py-2">
                {item.mainTitle}
              </h3>
              <img src={item.img} alt="Blog Image" className="w-full" />
              <div className="py-4 space-y-4">
                <h3 className="text-xl text-primary font-bold font-inter pr-24">{item.subTitle}</h3>
                <p className="pr-6">{item.text}</p>
                <PrimaryBtn text="Read More" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSec;
