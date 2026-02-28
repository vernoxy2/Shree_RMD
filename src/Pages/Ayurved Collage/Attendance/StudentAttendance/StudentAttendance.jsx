import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import StudDetaHead from "../../../../assets/AyurvedCollage/StudDetaImgs/StudDetaHead.webp";

const MenuList = [
  "Month Wise Attendance of Student of Academic year 2026",
  "Month Wise Attendance of Student of Academic year 2025",
  "Month Wise Attendance of Student of Academic year 2024",
  "Month Wise Attendance of Student of Academic year 2023",
  "Month Wise Attendance of Student of Academic year 2022",
  "Month Wise Attendance of Student of Academic year 2021",
  "Month Wise Attendance of Student of Academic year 2019- 2020",
  "Month Wise Attendance of Student of Academic year 2018- 2019",
];

const StudentAttendance = () => {
  const [sected, setSected] = React.useState(MenuList[0]);
  return (
    <div className="bg-Bg">
      <PrimaryHeader BgImg={StudDetaHead} HeadLine={"Student Attendance"} />
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        <div className="space-y-5 text-center ">
          <h1 className="text-center">Student Attendance</h1>
          <p className="text-center  max-w-7xl mx-auto">
            Student attendance tracking ensures accurate records of presence,
            punctuality, and participation. It helps institutions monitor
            academic engagement, identify irregularities, and support student
            success. Transparent attendance data promotes accountability,
            improves discipline, and enables timely communication between
            faculty, administration, students, and parents.
          </p>
          <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div>

        {/* Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20 items-stretch">
          {/* Said Menu */}
          <div className="w-5/12 h-fit py-10 px-9 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
            <h2>
              Month Wise Attendance <br /> of Student
            </h2>
            <ul className="pt-5 space-y-4">
              {MenuList.map((item, i) => (
                <button
                  key={i}
                  className={`py-4 px-5 text-start bg-[#F6F6F6] rounded-2xl group duration-300 transition-colors ${
                    item === sected
                      ? "bg-primary text-white "
                      : "text-secondary hover:bg-primary/20"
                  }`}
                  onClick={() => setSected(item)}
                >
                  <p
                    className={`text-xl duration-300 transition-colors ${item === sected ? "text-white font-bold" : "group-hover:text-primary"}`}
                  >
                    {item}
                  </p>
                </button>
              ))}
            </ul>
          </div>
          {/* Table */}
          <div className="flex-1 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] p-10 flex flex-col rounded-2xl">
            <div className="flex-1 overflow-y-auto">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentAttendance;
