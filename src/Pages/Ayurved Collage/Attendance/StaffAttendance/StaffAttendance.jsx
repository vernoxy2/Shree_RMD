import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import StudDetaHead from "../../../../assets/AyurvedCollage/StudDetaImgs/StudDetaHead.webp";
import PrimaryBtn from "../../../../Components/Ui/PrimaryBtn";
import { StaffAttendanceList } from "../../../../Data/StaffAttendanceList.js";
import { NonStaffAttendance } from "../../../../Data/NonStaffAttendance.js";

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
  const [sected, setSected] = React.useState(StaffAttendanceList[0]);
  const [sected2, setSected2] = React.useState(NonStaffAttendance[0]);

  const selectedItem = StaffAttendanceList.find(
    (item) => item.id === sected.id,
  );
  const selectedItem2 = NonStaffAttendance.find(
    (item) => item.id === sected2.id,
  );

  return (
    <div className="bg-Bg">
      <PrimaryHeader BgImg={StudDetaHead} HeadLine={"Staff Attendance"} />
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        <div className="space-y-5 text-center ">
          <h1 className="text-center">Staff Attendance</h1>
          <p className="text-center max-w-6xl mx-auto">
            This section provides updated attendance records for students,
            teaching staff, and non-teaching staff. It ensures transparency,
            academic discipline, and administrative monitoring at Shree RMD
            Ayurved College & Hospital. Access detailed attendance information
            to track regularity, performance, and institutional compliance
            efficiently.
          </p>
          <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div>

        {/* Teaching Staff Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20">
          {/* Said Menu */}
          <div className="w-5/12 py-10 px-9 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] h-fit">
            <h2>
              Teaching Staff <br /> Attendance
            </h2>
            <ul className="pt-5 space-y-4">
              {StaffAttendanceList.map((item, i) => (
                <button
                  key={i}
                  className={`py-4 px-5 text-start w-full bg-[#F6F6F6] rounded-2xl group duration-300 transition-colors ${
                    item === sected
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-primary/20"
                  }`}
                  onClick={() => setSected(item)}
                >
                  <p
                    className={`text-xl duration-300 transition-colors ${item === sected ? "text-white font-bold" : "group-hover:text-primary"}`}
                  >
                    {item.year}
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
                        Name of Teaching Staff Biometric Attendance
                      </h2>
                    </th>
                    <th className="px-6 py-4 w-52">
                      <h2 className="text-xl text-white font-semibold">View</h2>
                    </th>
                  </tr>
                </thead>
                <tbody className="max-h-11">
                  {selectedItem?.months.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-rose-50 transition-colors"
                    >
                      <td className="px-6 py-5 border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="text-primary mt-0.5 text-3xl">
                            ▸
                          </span>
                          <p className="text-xl">
                            <span className="text-primary font-bold">
                              {row.monName}
                            </span>
                            {/* <span className="text-gray-500">{row.year}</span> */}
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

        {/* Non Teaching Staff Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20">
          {/* Said Menu */}
          <div className="w-5/12 py-10 px-9 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] h-fit">
            <h2>
              Non Teaching Staff <br /> Attendance
            </h2>
            <ul className="pt-5 space-y-4">
              {NonStaffAttendance.map((item, i) => (
                <button
                  key={i}
                  className={`py-4 px-5 text-start w-full bg-[#F6F6F6] rounded-2xl group duration-300 transition-colors ${
                    item === sected2
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-primary/20"
                  }`}
                  onClick={() => setSected2(item)}
                >
                  <p
                    className={`text-xl duration-300 transition-colors ${item === sected2 ? "text-white Font-bold" : "group-hover:text-primary"}`}
                  >
                    {item.year}
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
                        Name of Teaching Staff Biometric Attendance
                      </h2>
                    </th>
                    <th className="px-6 py-4 w-52">
                      <h2 className="text-xl text-white font-semibold">View</h2>
                    </th>
                  </tr>
                </thead>
                <tbody className="max-h-11">
                  {selectedItem2?.months.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-rose-50 transition-colors"
                    >
                      <td className="px-6 py-5 border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="text-primary mt-0.5 text-3xl">
                            ▸
                          </span>
                          <p className="text-xl">
                            <span className="text-primary font-bold">
                              {row.monName}
                            </span>
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

export default StaffAttendance;
