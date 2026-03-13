import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import TeachingStaffDetailsBg from "../../../../assets/AyurvedCollage/AyurvedCollageHead.webp";
import StaffDetailsImg from "../../../../assets/AyurvedCollage/StaffDetailsImg.svg";
import { NonTeachingStaff } from "../../../../Data/NonTeachingStaff";

const NonTeachingStaffDetails = () => {
  return (
    <div className="bg-Bg">
      <PrimaryHeader
        BgImg={TeachingStaffDetailsBg}
        HeadLine={"Non Teaching Staff "}
      />

      {/* Content */}
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        <div className="space-y-5 text-center ">
          <h1 className="text-center">Non Teaching Staff </h1>
          <p className="text-center  max-w-7xl mx-auto">
            Non teaching staff ensure smooth operations by managing
            administration, maintenance, finance, and support services. Their
            dedication and teamwork create a safe, organized, and welcoming
            environment for students, faculty, and visitors.
          </p>
          <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div>

        {/* Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20 items-stretch ">
          {/* Said Menu */}
          <div className="w-1/3 h-fit bg-white rounded-2xl group shadow-[0_10px_20px_rgba(0,0,0,0.15)] overflow-hidden">
            <img
              src={StaffDetailsImg}
              alt=""
              className="w-full e group-hover:grayscale-0 group-hover:scale-105 duration-700 transition-all"
            />
          </div>

          {/* Table */}
          <div className="flex-1 overflow-y-auto">
            <div className="h-full rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
              <table className="w-full border-separate border-spacing-0 h-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 border-r-2 border-white">
                      <h2 className="text-xl text-white">Name of Employee</h2>
                    </th>
                    <th className="px-4 py-3 border-r-2 border-white">
                      <h2 className="text-xl text-white">
                        Name of working <br />
                        department
                      </h2>
                    </th>
                    <th className="px-4 py-3">
                      <h2 className="text-xl text-white">Department</h2>
                    </th>
                  </tr>
                </thead>
                <tbody className="h-full">
                  {NonTeachingStaff.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-primary/10 transition bg-white"
                    >
                      <td className="px-4 py-4 border-r-2 border-primary">
                        <p className="text-primary font-bold text-xl">
                          {item.name}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-center border-r-2 border-primary">
                        <p className="text-xl">{item.dept_name}</p>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <p className="text-xl">{item.designation}</p>
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

export default NonTeachingStaffDetails;
