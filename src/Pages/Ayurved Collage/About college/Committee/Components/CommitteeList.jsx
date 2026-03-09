import React from "react";
import { useState } from "react";

const sidebarItems = [
  { label: "Human Resource Development cell", active: true },
  { label: "Research Innovation & entrepreneurship development Cell" },
  { label: "INTERNAL QUALITY ASSURANCE CELL (COMMITTEE)." },
  { label: "College Council Cell" },
  { label: "Academic Committee" },
  { label: "SANSKRIT CLUB PROGRAM COMMITTE" },
  { label: "Students Council" },
  { label: "Student Support, Career Guidance & Placement Cell" },
  { label: "CO-Curricular & Extra-Curricular Activity Cell" },
  { label: "Grievances Redressal Cell" },
  { label: "Cell against Sexual Harassment" },
  { label: "Anti Ragging Committee" },
];

const coreMembers = [
  {
    num: "01",
    role: "CHAIRPERSON",
    name: "Dr.RajeshRatani",
    dept: "Dravyaguna",
    desc: "smooth administration. These committees oversee curriculum development, research activities,",
  },
  {
    num: "02",
    role: "COORDINATOR",
    name: "Dr.Jaykrishna",
    dept: "Shalakyatantra",
  },
  { num: "03", role: "MEMBER", name: "Dr.Usha Sonatake", dept: "Hospital" },
];

const professionalMembers = [
  {
    num: "01",
    role: "1-PROFESSIONAL",
    name: "Dr. Avani",
    dept: "Rachana Sharir",
  },
  {
    num: "02",
    role: "2-PROFESSIONAL",
    name: "Dr. Sandeep Sarode",
    dept: "Rasasastra",
  },
  {
    num: "03",
    role: "3-PROFESSIONAL",
    name: "Dr.Shridhar Bagdal",
    dept: "Panchakarma",
  },
  {
    num: "04",
    role: "3-PROFESSIONAL",
    name: "Dr.Krishnaprabha",
    dept: "Kayachikitsa",
  },
];

const sectionMembers = [
  {
    num: "01",
    role: "SECTION",
    name: "Mr. Alkesh Patel",
    dept: "Administration Section",
  },
];

function MemberCard({ num, role, name, dept, desc }) {
  return (
    <div className="flex gap-4 py-5 border-b border-pink-100 last:border-0">
      {/* Number Badge */}
      <h2 className="flex-shrink-0 w-16 h-16 bg-primary/40 rounded-full flex items-center justify-center font-bold text-primary ">
        {num}
      </h2>
      {/* Info */}
      <div className="flex-1 min-w-0">
        <h2 >
          {role}
        </h2>
        <p className="text-xl font-bold mt-0.5">{name}</p>
        <p className="text-sm">[{dept}]</p>
      </div>
      {/* Description */}
      {desc && (
        <p className="hidden md:block  max-w-[260px]  flex-shrink-0">
          {desc}
        </p>
      )}
    </div>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="flex flex-col items-center my-6">
      <h2 className="text-secondary">
        {title}
      </h2>
      <div className="mt-2 w-16 h-0.5 bg-[#9b2335] rounded-full opacity-40" />
    </div>
  );
}
const CommitteeList = () => {
  const [active, setActive] = useState(0);

  return (
    <div className=" bg-[#FFF6F6]  py-12">
      <div className="flex gap-8 w-full container">
        {/* ── Sidebar ── */}
        <div className="w-5/12 bg-white backdrop-blur-md rounded-xl shadow-md p-8 py-14 space-y-5 overflow-hidden h-fit">
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full text-left px-4 py-3 text-xl transition-colors duration-150 border-b border-pink-50 last:border-0 rounded-xl
                ${
                  i === active
                    ? "bg-primary text-white font-bold"
                    : "text-gray-600 bg-[#F6F6F6] hover:bg-primary/20 hover:text-primary font-medium"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 ">
          {/* Title */}
          <h2 className="mb-3">
            Human Resource Development cell
          </h2>
          <div className="w-full h-0.5 bg-[#D9D9D9] mb-2" />

          {/* Core Members */}
          <div>
            {coreMembers.map((m, i) => (
              <MemberCard key={i} {...m} />
            ))}
          </div>

          {/* Professional Members */}
          <SectionHeading title="Professional Members" />
          <div>
            {professionalMembers.map((m, i) => (
              <MemberCard key={i} {...m} />
            ))}
          </div>

          {/* Section Members */}
          <div className="mt-2">
            {sectionMembers.map((m, i) => (
              <MemberCard key={i} {...m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeList;
