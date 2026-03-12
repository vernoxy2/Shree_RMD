import React from "react";
import Academic from "../../../assets/AyurvedCollage/AcademicCal.png";
import Student from "../../../assets/AyurvedCollage/StudentCal.png";
const Calendar = () => {
  return (
    <>
    <div className="bg-[#FFF6F6] py-20">
      <div className="container ">
        {/* Div-1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img src={Academic} alt="" />
          </div>
          <div className="space-y-4">
            <h1>Academic Calendar</h1>
            <p>
              <strong className="text-primary">The Academic Calendar</strong> of
              Shree RMD Ayurveda College provides a structured schedule of the
              BAMS program, including academic sessions, examinations, seminars,
              clinical training, and important institutional events. It ensures
              systematic learning, timely assessments, and effective academic
              planning throughout the year.
            </p>

            <div className="flex items-center pt-10">
              {/* Line */}
              <div className="flex-1 border-b border-primary relative max-w-lg ml-auto">
                {/* Circle */}
                <span className="absolute top-1/2 -translate-y-1/2 left-0 w-5 h-5 bg-primary rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#FFF6F6] py-20">
      <div className="container ">
        {/* Div-1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1>Student calendar</h1>
            <p>
              <strong className="text-primary">The Student Calendar</strong> The Student Calendar outlines key student activities, cultural programs, sports events, holidays, NSS initiatives, workshops, and campus celebrations. It promotes holistic development by balancing academic excellence with extracurricular engagement, scheduled holidays, and professional growth opportunities.
            </p>

            <div className="flex items-center pt-10">
              {/* Line */}
              <div className="flex-1 border-b border-primary relative max-w-lg mr-auto">
                {/* Circle */}
                <span className="absolute top-1/2 -translate-y-1/2 right-0 w-5 h-5 bg-primary rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img src={Student} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Calendar;
