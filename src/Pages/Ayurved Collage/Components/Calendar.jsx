import React from "react";

const Calendar = () => {
  return (
    <>
    <div className="bg-[#FFF6F6] py-20">
      <div className="container ">
        {/* Div-1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div></div>
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
                <span className="absolute -top-3 left-0 w-5 h-5 bg-primary rounded-full"></span>
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
              <div className="flex-1 border-b border-primary relative max-w-lg mr-auto">
                {/* Circle */}
                <span className="absolute -top-3 right-0 w-5 h-5 bg-primary rounded-full"></span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Calendar;
