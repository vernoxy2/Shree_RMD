import { useState } from "react";

const admissionData = [
  {
    year: "2023-2024",
    entries: [
      { id: 1, title: "Student Details" },
      { id: 2, title: "Student Details 2023-2024" },
      { id: 3, title: "Students Admitted in Academic Year 2023-24" },
    ],
  },
  {
    year: "2022-2023",
    entries: [{ id: 1, title: "Student Details" }],
  },
  {
    year: "2021-2022",
    entries: [
      { id: 1, title: "For Government Quota" },
      { id: 2, title: "For Management Quota" },
    ],
  },
];

function AdmissionSection({ year, entries }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="mb-14">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-0.5 h-8 rounded-full bg-primary"
          />
          <h2 className="text-3xl font-bold tracking-tight text-secondary font-poppins">
            Admission Updates <span className="text-primary">{year}</span>
          </h2>
        </div>
        <div
          className="h-px flex-1 border border-secondary/30"
        />
        <span
          className="text-sm font-inter px-2 py-1 rounded-md bg-secondary/10 text-secondary"
        >
          {entries.length} {entries.length === 1 ? "record" : "records"}
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2 ">
        {entries.map((item) => {
          const key = `${year}-${item.id}`;
          const isHovered = hovered === key;
          return (
            <div
              key={key}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-between px-6 py-4 rounded-xl border cursor-pointer
  transition-all duration-300 ease-out
  bg-white border-white
  hover:bg-secondary/5
  hover:border-secondary
  hover:translate-x-1.5"
            >
              {/* Left */}
              <div className="flex items-center gap-5">
                <span
                  className={`text-2xl font-black font-inter w-8 ${
                    isHovered ? "text-primary" : "text-secondary"
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </span>
                <p
                  className={` font-medium ${
                    isHovered ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.title}
                </p>
              </div>

              {/* Right */}
              <button
                className="
flex items-center gap-2 font-bold font-inter tracking-widest  
px-4 py-1.5 rounded-lg
transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
text-white bg-primary
group-hover:text-white
group-hover:bg-perimary
"
              >
                View
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  style={{
                    transform: isHovered ? "translateX(3px)" : "translateX(0)",
                    transition: "transform 0.25s",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AdmissionUpdates() {
  return (
    <div className="pt-20  py-16 bg-primary/10" style={{}}>
      <div className="w-full container">
        {/* Page Title */}
        {/* <div className="mb-12 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-12 bg-secondary" />
            <span
              className=" font-inter tracking-[0.3em] uppercase"
              style={{ color: "rgba(155,28,28,0.7)" }}
            >
              Academic Portal
            </span>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h1
            className=" text-primary"
            style={{ letterSpacing: "-1px" }}
          >
            Admission Updates
          </h1>
          <p className="mt-2">
            All Academic Years
          </p>
        </div> */}

        {/* Sections */}
        {admissionData.map((section) => (
          <AdmissionSection
            key={section.year}
            year={section.year}
            entries={section.entries}
          />
        ))}

        {/* Footer */}
        <div className="mt-4 pt-6 flex items-center justify-between border-t border-secondary t font-inter text-secondary">
          <span>
            {admissionData.reduce((acc, s) => acc + s.entries.length, 0)} total
            records
          </span>
          <span>Last updated: 2024</span>
        </div>
      </div>
    </div>
  );
}
