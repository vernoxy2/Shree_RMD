import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import StudDetaHead from "../../../../assets/AyurvedCollage/StudDetaImgs/StudDetaHead.webp";
import PrimaryBtn from "../../../../Components/Ui/PrimaryBtn";
import { StudentAttendanceData } from "./StudentAttendanceData";

const StudentAttendance = () => {
  const [sected, setSected] = React.useState(StudentAttendanceData[0]);

  const selectedItem = StudentAttendanceData.find(
    (item) => item.id === sected.id,
  );

  return (
    <div className="bg-Bg">
      <PrimaryHeader BgImg={StudDetaHead} HeadLine={"Student Attendance"} />
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        <div className="space-y-5 text-center">
          <h1 className="text-center">Student Attendance</h1>
          <p className="text-center max-w-7xl mx-auto">
            Student attendance tracking ensures accurate records of presence,
            punctuality, and participation. It helps institutions monitor
            academic engagement, identify irregularities, and support student
            success. Transparent attendance data promotes accountability,
            improves discipline, and enables timely communication between
            faculty, administration, students, and parents.
          </p>
          <hr className="max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div>

        {/* Attendance Table */}
        <div className="flex gap-8 pt-20 items-stretch">
          {/* Side Menu */}
          <div className="w-5/12 h-fit py-10 px-9 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
            <h2>
              Month Wise Attendance <br /> of Student
            </h2>
            <ul className="pt-5 space-y-4">
              {StudentAttendanceData.map((item, i) => (
                <button
                  key={i}
                  className={`w-full py-4 px-5 text-start rounded-2xl group duration-300 transition-colors ${
                    item.id === sected.id
                      ? "bg-primary text-white"
                      : "bg-[#F6F6F6] text-secondary hover:bg-primary/20"
                  }`}
                  onClick={() => setSected(item)}
                >
                  <p
                    className={`text-xl duration-300 transition-colors ${
                      item.id === sected.id
                        ? "text-white font-bold"
                        : "group-hover:text-primary"
                    }`}
                  >
                    {item.menuData}
                  </p>
                </button>
              ))}
            </ul>
          </div>

          {/* Table */}
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left px-6 py-4 border-r border-white/20">
                      <h2 className="text-xl text-white font-semibold">
                        Details of Months
                      </h2>
                    </th>
                    <th className="px-6 py-4 w-52">
                      <h2 className="text-xl text-white font-semibold">View</h2>
                    </th>
                  </tr>
                </thead>
                <tbody className="max-h-11">
                  {selectedItem?.attendanceData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-rose-50 transition-colors"
                    >
                      <td className="px-6 py-5 border-r border-gray-100">
                        <div className="flex items-start gap-2">
                          <span className="text-primary mt-0.5 text-3xl">▸</span>
                          <p className="text-xl">
                            <span className="text-primary font-bold">
                              {row.batchName} –{" "}
                            </span>
                            <span className="text-gray-500">{row.year}</span>
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex justify-center">
                          <PrimaryBtn text={"Know more"} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentAttendance;