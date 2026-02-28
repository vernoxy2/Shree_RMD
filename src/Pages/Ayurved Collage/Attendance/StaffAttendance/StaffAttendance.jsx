import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import StudDetaHead from "../../../../assets/AyurvedCollage/StudDetaImgs/StudDetaHead.webp";

const TeachingMenu = [
  "Teaching Staff Biometric Attendance Year 2026",
  "Teaching Staff Biometric Attendance Year 2025",
  "Teaching Staff Biometric Attendance Year 2024",
  "Teaching Staff Biometric Attendance Year 2023",
  "Teaching Staff Attendance Year 2022",
  "Teaching Staff Attendance Year 2020",
  "Teaching Staff Attendance Year 2019",
];

const NonTeachingMenu = [
  "Non Teaching Staff Biometric Attendance Year 2026",
  "Non Teaching Staff Biometric Attendance Year 2025",
  "Non Teaching Staff Biometric Attendance Year 2024",
  "Non Teaching Staff Biometric Attendance Year 2023",
  "Non Teaching Staff Attendance Year 2022",
  "Non Teaching Staff Attendance Year 2020",
  "Non Teaching Staff Attendance Year 2019",
];

const StaffAttendance = () => {
  const [sected, setSected] = React.useState(TeachingMenu[0]);
  const [sected2, setSected2] = React.useState(NonTeachingMenu[0]);
  return (
    <div className="bg-Bg">
      <PrimaryHeader BgImg={StudDetaHead} HeadLine={"Staff Attendance"} />
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        <div className="space-y-5 text-center ">
          <h1 className="text-center">Staff Attendance</h1>
          <p className="text-center max-w-6xl mx-auto">
            This section provides updated attendance records for students, teaching staff, and non-teaching staff. It ensures transparency, academic discipline, and administrative monitoring at Shree RMD Ayurved College & Hospital. Access detailed attendance information to track regularity, performance, and institutional compliance efficiently.
          </p>
          <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div>

        {/* Teaching Staff Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20">
          {/* Said Menu */}
          <div className="w-5/12 py-10 px-9 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
            <h2>
              Teaching Staff <br /> Attendance
            </h2>
            <ul className="pt-5 space-y-4">
              {TeachingMenu.map((item, i) => (
                <button
                  key={i}
                  className={`py-4 px-5 text-start w-full bg-[#F6F6F6] rounded-2xl group duration-300 transition-colors ${
                    item === sected ? "bg-primary text-white" : "text-secondary hover:bg-primary/20"
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
          <div className="flex-1 h-fit bg-white"></div>
        </div>
        {/* Non Teaching Staff Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20">
          {/* Said Menu */}
          <div className="w-5/12 py-10 px-9 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
            <h2>
              Non Teaching Staff <br /> Attendance
            </h2>
            <ul className="pt-5 space-y-4">
              {NonTeachingMenu.map((item, i) => (
                <button
                  key={i}
                  className={`py-4 px-5 text-start w-full bg-[#F6F6F6] rounded-2xl group duration-300 transition-colors ${
                    item === sected2 ? "bg-primary text-white" : "text-secondary hover:bg-primary/20"
                  }`}
                  onClick={() => setSected2(item)}
                >
                  <p
                    className={`text-xl duration-300 transition-colors ${item === sected2 ? "text-white Font-bold" : "group-hover:text-primary"}`}
                  >
                    {item}
                  </p>
                </button>
              ))}
            </ul>
          </div>
          {/* Table */}
          <div className="flex-1 h-fit bg-white"></div>
        </div>
      </section>
    </div>
  );
};

export default StaffAttendance;
