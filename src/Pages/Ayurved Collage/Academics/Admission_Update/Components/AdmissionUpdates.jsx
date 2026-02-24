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
    entries: [
      { id: 1, title: "Student Details" },
    ],
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
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 rounded-full" style={{ background: "#9B1C1C" }} />
          <h2 className="text-xl font-black tracking-tight text-white">
            Admission Updates{" "}
            <span style={{ color: "#9B1C1C" }}>{year}</span>
          </h2>
        </div>
        <div className="h-px flex-1" style={{ background: "rgba(155,28,28,0.2)" }} />
        <span
          className="text-xs font-mono px-2 py-1 rounded-md"
          style={{ background: "rgba(155,28,28,0.15)", color: "#9B1C1C" }}
        >
          {entries.length} {entries.length === 1 ? "record" : "records"}
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2">
        {entries.map((item) => {
          const key = `${year}-${item.id}`;
          const isHovered = hovered === key;
          return (
            <div
              key={key}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-between px-6 py-4 rounded-xl border cursor-pointer"
              style={{
                background: isHovered
                  ? "rgba(155, 28, 28, 0.14)"
                  : "rgba(255,255,255,0.04)",
                borderColor: isHovered
                  ? "rgba(155, 28, 28, 0.55)"
                  : "rgba(255,255,255,0.07)",
                transform: isHovered ? "translateX(6px)" : "translateX(0)",
                transition: "all 0.25s ease",
              }}
            >
              {/* Left */}
              <div className="flex items-center gap-5">
                <span
                  className="text-2xl font-black font-mono w-8"
                  style={{
                    color: isHovered ? "#9B1C1C" : "rgba(255,255,255,0.15)",
                    transition: "color 0.25s",
                  }}
                >
                  {String(item.id).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium" style={{ color: isHovered ? "#fff" : "rgba(255,255,255,0.7)" }}>
                  {item.title}
                </p>
              </div>

              {/* Right */}
              <button
                className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-lg"
                style={{
                  color: isHovered ? "#9B1C1C" : "rgba(255,255,255,0.25)",
                  background: isHovered ? "rgba(155,28,28,0.18)" : "transparent",
                  transition: "all 0.25s",
                }}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
    <div
      className="min-h-screen px-6 py-16"
      style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #1a0a0a 100%)" }}
    >
      <div className="w-full max-w-3xl mx-auto">

        {/* Page Title */}
        <div className="mb-12 text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-12" style={{ background: "rgba(155,28,28,0.4)" }} />
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "rgba(155,28,28,0.7)" }}>
              Academic Portal
            </span>
            <div className="h-px w-12" style={{ background: "rgba(155,28,28,0.4)" }} />
          </div>
          <h1
            className="text-4xl font-black text-white"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-1px" }}
          >
            Admission <span style={{ color: "#9B1C1C" }}>Updates</span>
          </h1>
          <p className="mt-2 text-xs font-mono tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
            All Academic Years
          </p>
        </div>

        {/* Sections */}
        {admissionData.map((section) => (
          <AdmissionSection key={section.year} year={section.year} entries={section.entries} />
        ))}

        {/* Footer */}
        <div
          className="mt-4 pt-6 flex items-center justify-between border-t text-xs font-mono"
          style={{ borderColor: "rgba(155,28,28,0.15)", color: "rgba(255,255,255,0.2)" }}
        >
          <span>
            {admissionData.reduce((acc, s) => acc + s.entries.length, 0)} total records
          </span>
          <span>Last updated: 2024</span>
        </div>
      </div>
    </div>
  );
}
