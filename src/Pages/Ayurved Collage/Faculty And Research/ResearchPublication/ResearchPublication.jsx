import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import TeachingStaffDetailsBg from "../../../../assets/AyurvedCollage/AyurvedCollageHead.webp";
import ResearchPublicationImg from "../../../../assets/AyurvedCollage/ResearchPublicationImg.svg";
const DepartmentList = [
  {
    id: 1,
    emp_name: "Swati Patel",
    emp_designation: "Librarian",
    emp_department: "Library",
  },
  {
    id: 2,
    emp_name: "Lataben Patel",
    emp_designation: "Librarian",
    emp_department: "Surekha Patel",
  },
  {
    id: 3,
    emp_name: "Surekha Patel",
    emp_designation: "Librarian",
    emp_department: "Attendant",
  },
  {
    id: 4,
    emp_name: "Mr. Mayur D Patel",
    emp_designation: "Collage",
    emp_department: "Office Staff-Clerk",
  },
  {
    id: 5,
    emp_name: "Mrs. Dharmishta Patel",
    emp_designation: "Collage",
    emp_department: "Office Staff-Clerk",
  },
];

const ResearchPublication = () => {
  return (
    <div className="bg-Bg">
      <PrimaryHeader
        BgImg={TeachingStaffDetailsBg}
        HeadLine={
          <>
            Research Work and <br /> Publication
          </>
        }
      />

      {/* Content */}
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        {/* <div className="space-y-5 text-center ">
          <h1 className="text-center">Research Work and Publication </h1>
          <p className="text-center  max-w-7xl mx-auto">
            Non teaching staff ensure smooth operations by managing
            administration, maintenance, finance, and support services. Their
            dedication and teamwork create a safe, organized, and welcoming
            environment for students, faculty, and visitors.
          </p>
          <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div> */}

        {/* Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20 items-stretch">
          {/* Said Menu */}
          <div className="w-1/3 h-fit bg-white rounded-2xl group shadow-[0_10px_20px_rgba(0,0,0,0.15)] overflow-hidden">
            <img
              src={ResearchPublicationImg}
              alt=""
              className="w-full rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] grayscale group-hover:grayscale-0 group-hover:scale-105 duration-700 transition-all"
            />
          </div>
          {/* Table */}
          <div className=" overflow-hidden ">
            <h1 className="pb-4">Research Work and Publication – 2018-2023 </h1>
            <div className="rounded-2x w-full rounded-full">
              <table className="w-full border-separate border-spacing-0 rounded-2xl">
                <thead>
                  <tr className="bg-primary text-white ">
                    <th className="px-4 py-3 border-r-2 border-white">Name</th>
                    <th className="px-4 py-3 border-r-2 border-white">
                      Designation
                    </th>
                    <th className="px-4 py-3">Department</th>
                  </tr>
                </thead>
                <tbody className="">
                  {DepartmentList.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition bg-white"
                    >
                      <td className="px-4 py-3 border-r-2 border-primary">
                        <p className="text-primary font-bold">
                          {item.emp_name}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-center border-r-2 border-primary">
                        <p>{item.emp_designation}</p>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <p>{item.emp_department}</p>
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

export default ResearchPublication;
