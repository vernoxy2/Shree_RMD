import React from "react";
import { useState } from "react";
import PDF from "../../../../PDFs/Mannat Brochure.pdf";

const years = [
  { label: "Students List 2025-26", pdf: PDF }, // reuse same PDF for now
  { label: "Students List 2024-25", pdf: PDF },
  { label: "Students List 2023-24", pdf: PDF },
  { label: "Students List 2022-23", pdf: PDF },
  { label: "Students List 2021-22", pdf: PDF },
  { label: "Students List 2020-21", pdf: PDF },
  { label: "Students List 2019-20", pdf: PDF },
  { label: "Students List 2018-19", pdf: PDF },
  { label: "Students List 2017-18", pdf: PDF },
  { label: "Students List 2016-17", pdf: PDF },
  { label: "Students List 2015-16", pdf: PDF },
];

const Enrollment = () => {
  const [selected, setSelected] = useState(years[0]);

  return (
    <div className="bg-Bg py-20 space-y-20">
      {/* Heading and Paragraph */}
      <div className="space-y-5 text-center container">
        <h1> Student Enrollment Details</h1>
        <p className="max-w-7xl mx-auto">
          The Student Details form collects essential information including
          student name, caste, gender, NEET score, mobile number, and email ID.
          This data ensures accurate admission records, transparent
          documentation, and effective communication throughout the BAMS
          admission and enrollment process.
        </p>
        <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
      </div>
      <div className="container flex gap-8">
        <div className="flex-1">
          <iframe
            key={selected.label}
            className="w-full h-full"
            src={selected.pdf}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading...
          </iframe>
        </div>
        {/* ── Sidebar ── */}
        <div className="custom-scroll w-5/12 flex-shrink-0 bg-white px-6 py-14 rounded-2xl shadow-md border border-pink-100 ">
          <div
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#a63a4b #f3f4f6",
              scrollbarGutter: "stable",
              scrollBehavior: "smooth",
            }}
            className=" space-y-5 h-[462px] overflow-y-auto"
          >
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelected(year)}
                className={`w-full rounded-xl  text-left px-5 py-4 text-xl border-b border-pink-50 last:border-0 transition-colors duration-150
                  ${
                    year.label === selected.label
                      ? "bg-primary text-white font-bold"
                      : "text-secondary bg-[#F6F6F6] hover:bg-primary/20 hover:text-primary font-medium"
                  }`}
              >
                {year.label}
              </button>
            ))}
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
