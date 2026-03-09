import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import TeachingStaffDetailsBg from "../../../../assets/AyurvedCollage/AyurvedCollageHead.webp";
import ResearchPublicationImg from "../../../../assets/AyurvedCollage/ResearchPublicationImg.svg";
import PrimaryBtn from "../../../../Components/Ui/PrimaryBtn";
const DepartmentList = [
  {
    id: 1,
    Details : "Concept of distinctive dietics – An Ayurvedic perspective"
  },
  {
    id: 2,
    Details : "A conceptual review on mind as per Ayurveda"
  },
  {
    id: 3,
    Details : "Physiology of muscle contraction understanding"
  },
  {
    id: 4,
    Details : "A physiological understanding on the concept of Tarpaka Karna"
  },
  {
    id: 5,
    Details : "Critical analysis on physiology of reflex mechanism with special reference to Vata Dosha"
  },
  {
    id: 6,
    Details : "Critical analysis on Loka Purusha Samya Siddhanta"
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
            <div className="rounded-2x w-full rounded-2xl overflow-hidden">
              <table className="w-full border-separate border-spacing-0 rounded-2xl">
                <thead>
                  <tr className="bg-primary text-white ">
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
                <tbody className="">
                  {DepartmentList.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition bg-white"
                    >
                      
                      <td className="px-4 py-3 text-xl border-r-2 border-primary">
                        <p>{item.Details}</p>
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

export default ResearchPublication;
