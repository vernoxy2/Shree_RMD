import { useState } from "react";

// Brand Colors
const C = {
  primary: "#A63A4B",
  sub: "#676767",
  primaryLight: "#fdf4f5",
  primaryMid: "#c2606e",
  primaryBorder: "#e8a8b0",
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const SPECIALITY_CLINIC = [
  {
    day: "Monday",
    dept: "Roga Nidana & Vikruta Vignana",
    doctor: "Dr. Nimesh Thakor",
    speciality: "Annavaha sroto vikara",
    under: "Kayachikitsa",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Monday",
    dept: "Roga Nidana & Vikruta Vignana",
    doctor: "Dr. Vishnu Mohan",
    speciality: "Raktavaha srotas (Thalassemia, Sickle cell anemia)",
    under: "Kaumarabhritya",
    timing: "1:30 PM – 5:00 PM",
  },
  {
    day: "Tuesday",
    dept: "Dravya Guna",
    doctor: "Dr. Rajesh Ratani",
    speciality: "Rasayana evum Manasik Vikara",
    under: "Kayachikitsa",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Tuesday",
    dept: "Dravya Guna",
    doctor: "Dr. Khushboo Desai",
    speciality: "Hair Care",
    under: "Shalakya Tantra",
    timing: "1:30 PM – 5:00 PM",
  },
  {
    day: "Wednesday",
    dept: "Rasa Shastra & Bhaishajya Kalpana",
    doctor: "Dr. Sandeep Sarode",
    speciality: "Vajikarana",
    under: "Kayachikitsa",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Wednesday",
    dept: "Samhita & Siddhanta",
    doctor: "Dr. Mayur Patel",
    speciality: "Vrikka Vikara",
    under: "Kayachikitsa",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Wednesday",
    dept: "Dravya Guna",
    doctor: "Dr. Yogesh Desai",
    speciality: "Ca Lungs",
    under: "Shalya Tantra",
    timing: "1:30 PM – 5:00 PM",
  },
  {
    day: "Thursday",
    dept: "Rachana Shareera",
    doctor: "Dr. Avni Parmar",
    speciality: "Ayurveda Dentistry",
    under: "Shalakya Tantra",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Thursday",
    dept: "Samhita & Siddhanta",
    doctor: "Dr. Dilip",
    speciality: "Sthana Granti (Fibroadenoma)",
    under: "Prasooti Tantra & Stree Roga",
    timing: "1:30 PM – 5:00 PM",
  },
  {
    day: "Friday",
    dept: "Kriya Shareera",
    doctor: "Dr. Yashesh Patel",
    speciality: "Twak Vikara",
    under: "Panchakarma",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Friday",
    dept: "Kriya Shareera",
    doctor: "Dr. Pritam",
    speciality: "Heel Fissures",
    under: "Shalya Tantra",
    timing: "1:30 PM – 5:00 PM",
  },
  {
    day: "Saturday",
    dept: "Rachana Shareera",
    doctor: "Dr. C.M. Vaghani",
    speciality: "Type 1 DM",
    under: "Kaumarabhritya",
    timing: "9:00 AM – 12:30 PM",
  },
  {
    day: "Saturday",
    dept: "Rasa Shastra & Bhaishajya Kalpana",
    doctor: "Dr. Sanjay Patel",
    speciality: "Uterine Fibroid (Garbhashaya Granti)",
    under: "Prasooti Tantra & Stree Roga",
    timing: "1:30 PM – 5:00 PM",
  },
];

const UNIT1 = [
  {
    dept: "Kayachikitsa",
    Mon: "Dr. Sujay Dhumal",
    Tue: "Dr. Nikunj Thakkar",
    Wed: "Dr. Sujay Dhumal",
    Thu: "Dr. Krishna Prabha",
    Fri: "Dr. Nikunj Thakkar",
    Sat: "Dr. Krishna Prabha",
  },
  {
    dept: "Panchakarma",
    Mon: "Dr. Shridhar Badgal",
    Tue: "Dr. Priya Mehta",
    Wed: "Dr. Mitali Patel",
    Thu: "Dr. Shridhar Badgal",
    Fri: "Dr. Priya Mehta",
    Sat: "Dr. Mitali Patel",
  },
  {
    dept: "Shalya Tantra",
    Mon: "Dr. Snehal Patel",
    Tue: "Dr. Vaibhavi Patel",
    Wed: "Dr. Nitin Patel",
    Thu: "Dr. Snehal Patel",
    Fri: "Dr. Vaibhavi Patel",
    Sat: "Dr. Nitin Patel",
  },
  {
    dept: "Shalakya Tantra",
    Mon: "Dr. Sonal Patel",
    Tue: "Dr. Unnati Desai",
    Wed: "Dr. Sonal Patel",
    Thu: "Dr. Jayakrishnan",
    Fri: "Dr. Unnati Desai",
    Sat: "Dr. Jayakrishnan",
  },
  {
    dept: "Prasuti Tantra",
    Mon: "Dr. Jeenal Patel",
    Tue: "Dr. Sonali Patel",
    Wed: "Dr. Hemant Patel",
    Thu: "Dr. Jeenal Patel",
    Fri: "Dr. Sonali Patel",
    Sat: "Dr. Hemant Patel",
  },
  {
    dept: "Kumarbhrutya",
    Mon: "Dr. Geetha Kumari",
    Tue: "Dr. Pina Patel",
    Wed: "Dr. Geetha Kumari",
    Thu: "Dr. Pina Patel",
    Fri: "Dr. Geetha Kumari",
    Sat: "Dr. Pina Patel",
  },
  {
    dept: "Swasthavrutta",
    Mon: "Dr. Aditya Bhat",
    Tue: "Dr. Prajakta Karale",
    Wed: "Dr. Aditya Bhat",
    Thu: "Dr. Prajakta Karale",
    Fri: "Dr. Aditya Bhat",
    Sat: "Dr. Prajakta Karale",
  },
  {
    dept: "Visha Chikitsa",
    Mon: "Dr. Hetal Patel",
    Tue: "Dr. Revathy V",
    Wed: "Dr. Hetal Patel",
    Thu: "Dr. Revathy V",
    Fri: "Dr. Hetal Patel",
    Sat: "Dr. Revathy V",
  },
];

const UNIT2 = [
  {
    dept: "Kayachikitsa",
    Mon: "Dr. Krishnaprabha",
    Tue: "Dr. Sujay Dhumal",
    Wed: "Dr. Krishnaprabha",
    Thu: "Dr. Nikunj Thakkar",
    Fri: "Dr. Sujay Dhumal",
    Sat: "Dr. Nikunj Thakkar",
  },
  {
    dept: "Shalya Tantra",
    Mon: "Dr. Nitin Patel",
    Tue: "Dr. Snehal Patel",
    Wed: "Dr. Vaibhavi Patel",
    Thu: "Dr. Nitin Patel",
    Fri: "Dr. Snehal Patel",
    Sat: "Dr. Vaibhavi Patel",
  },
  {
    dept: "Shalakya Tantra",
    Mon: "Dr. Jayakrishnan",
    Tue: "Dr. Sonal Patel",
    Wed: "Dr. Jayakrishnan",
    Thu: "Dr. Unnati Desai",
    Fri: "Dr. Sonal Patel",
    Sat: "Dr. Unnati Desai",
  },
  {
    dept: "Prasuti Tantra",
    Mon: "Dr. Hemant Patel",
    Tue: "Dr. Jeenal Patel",
    Wed: "Dr. Sonali Patel",
    Thu: "Dr. Hemant Patel",
    Fri: "Dr. Jeenal Patel",
    Sat: "Dr. Sonali Patel",
  },
];

const BED_DATA = [
  { dept: "Kayachikitsa", u1: 12, u2: 8, total: 20 },
  { dept: "Panchakarma", u1: 15, u2: 10, total: 25 },
  { dept: "Kaumarabhritya", u1: 6, u2: 4, total: 10 },
  { dept: "Visha Chikitsa", u1: 3, u2: 2, total: 5 },
  { dept: "Shalya Tantra", u1: 12, u2: 8, total: 20 },
  { dept: "Shalakya Tantra", u1: 6, u2: 4, total: 10 },
  { dept: "Prasooti Tantra", u1: 6, u2: 4, total: 10 },
];

const MODERN_STAFF = [
  { post: "Physiotherapist", name: "Dr. Drashti Patel", nature: "Regular" },
  { post: "Yoga Teacher", name: "Dr. Kamini Mistry", nature: "Part-Time" },
  { post: "Biostatistician", name: "Shri Suman Patel", nature: "Part-Time" },
  {
    post: "Analytical Chemist",
    name: "Shri Shailesh Luthar",
    nature: "Part-Time",
  },
  {
    post: "Pharmacognostic",
    name: "Shri Sachin Narkhede",
    nature: "Part-Time",
  },
  { post: "Surg Specialist", name: "Dr. Anil Patel", nature: "Part-Time" },
  { post: "Obs and Gynac", name: "Dr. Shahara Patel", nature: "Part-Time" },
  { post: "Pathologist", name: "Dr. Himanshu Patel", nature: "Part-Time" },
  { post: "Ophthalmologist", name: "Dr. Viralsinh Dodia", nature: "Part-Time" },
  { post: "Pediatrician", name: "Dr. Piyush Patel", nature: "Part-Time" },
  { post: "Radiologist", name: "Dr. Arpita Patel", nature: "Part-Time" },
  { post: "Dentist", name: "Dr. Meeli Patel", nature: "Part-Time" },
  { post: "Anesthetist", name: "Dr. Prashant Bhoya", nature: "Part-Time" },
  { post: "Ortho Surgeon", name: "Dr. Chintan Patel", nature: "Part-Time" },
  { post: "General Physician", name: "Dr. Pradeep Patel", nature: "Part-Time" },
];

const deptColorMap = {
  Kayachikitsa: { bg: "#f0faf4", color: "#2d7a4f", border: "#a7d9ba" },
  Panchakarma: { bg: "#f3f0fb", color: "#5b3ea6", border: "#c0aee8" },
  "Shalya Tantra": { bg: "#fdf4f5", color: "#A63A4B", border: "#e8a8b0" },
  "Shalakya Tantra": { bg: "#eff6ff", color: "#1e5fa8", border: "#93c5fd" },
  "Prasuti Tantra": { bg: "#fdf2f8", color: "#9d174d", border: "#f0abcc" },
  "Prasooti Tantra": { bg: "#fdf2f8", color: "#9d174d", border: "#f0abcc" },
  Kumarbhrutya: { bg: "#fffbeb", color: "#92400e", border: "#fcd34d" },
  Kaumarabhritya: { bg: "#fffbeb", color: "#92400e", border: "#fcd34d" },
  Swasthavrutta: { bg: "#f0fdfa", color: "#0f766e", border: "#99f6e4" },
  "Visha Chikitsa": { bg: "#fff7ed", color: "#9a3412", border: "#fdba74" },
};

const getDeptStyle = (dept) => {
  for (const key of Object.keys(deptColorMap)) {
    if (dept?.toLowerCase().includes(key.toLowerCase()))
      return deptColorMap[key];
  }
  return { bg: "#f8fafc", color: C.sub, border: "#cbd5e1" };
};

const dayShort = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};

const TAB_ICONS = {
  "Speciality Clinic": (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  ),
  "Unit I": (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  "Unit II": (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  "Bed Allocation": (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7h18M3 12h18M3 17h18"
      />
    </svg>
  ),
  "Support Staff": (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

const DAY_COLORS = {
  Monday: "#3b82f6",
  Tuesday: "#6366f1",
  Wednesday: "#8b5cf6",
  Thursday: "#A63A4B",
  Friday: "#ec4899",
  Saturday: "#f59e0b",
};

function DayBadge({ day }) {
  return (
    <span
      // style={{ background: DAY_COLORS[day] || C.primary }}
      className="inline-block text-primary text-sm font-bold px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20"
    >
      {day}
    </span>
  );
}

function TimingBadge({ timing }) {
  const isMorning = timing.includes("9");
  return (
    <span
      // style={{
      //   background: isMorning ? "#fffbeb" : C.primaryLight,
      //   color: isMorning ? "#92400e" : C.primary,
      //   border: `1px solid ${isMorning ? "#fcd34d" : C.primaryBorder}`,
      // }}
      className="text-sm font-medium px-2 py-0.5 rounded-full whitespace-nowrap bg-secondary/10 border border-secondary/20 "
    >
      {timing}
    </span>
  );
}

function DeptTag({ label }) {
  const s = getDeptStyle(label);
  return (
    <span
      // style={{
      //   background: s.bg,
      //   color: s.color,
      //   border: `1px solid ${s.border}`,
      // }}
      className="text-sm font-medium px-2 py-0.5 rounded-full bg-primary/60 border border-primary/20 text-white"
    >
      {label}
    </span>
  );
}

function Avatar({ name }) {
  const letter = name.replace(/Dr\.|Shri/g, "").trim()[0] || "D";
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${C.primaryMid}, ${C.primary})`,
      }}
      className="w-10 h-10 text-xl rounded-full flex items-center justify-center text-white font-bold shrink-0"
    >
      {letter}
    </div>
  );
}

function SpecialityClinicTab({ activeDay }) {
  const filtered =
    activeDay === "All"
      ? SPECIALITY_CLINIC
      : SPECIALITY_CLINIC.filter((r) => r.day === activeDay);
  return (
    <div className="grid gap-3">
      {filtered.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col gap-2"
          style={{ border: `1px solid #ede8e9` }}
        >
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <DayBadge day={item.day} />
              <span style={{ color: C.sub }} className="text-sm font-medium">
                {item.dept}
              </span>
            </div>
            <TimingBadge timing={item.timing} />
          </div>
          <div className="flex items-center gap-2">
            <Avatar name={item.doctor} />
            <div>
              <p className="font-extrabold text-xl" style={{ color: C.primary }}>
                {item.doctor}
              </p>
              <p className="text-sm" style={{ color: C.sub }}>
                {item.speciality}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-sm" style={{ color: C.sub }}>
              Under:
            </span>
            <DeptTag label={item.under} />
          </div>
        </div>
      ))}
    </div>
  );
}

function UnitScheduleTab({ data }) {
  const [activeDay, setActiveDay] = useState("Mon");
  const dayKeys = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div>
      <div
        className="flex gap-1 mb-4 p-1 rounded-lg overflow-x-auto"
        style={{ background: "#f5eeef" }}
      >
        {dayKeys.map((d) => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            style={activeDay === d ? { color: C.primary } : { color: C.sub }}
            className={`flex-1 min-w-[44px] py-1.5 font-semibold rounded-md transition-all ${activeDay === d ? "bg-white shadow" : "hover:bg-white/60"}`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="grid gap-2">
        {data.map((row, i) => {
          const s = getDeptStyle(row.dept);
          return (
            <div
              key={i}
              className="bg-white rounded-xl p-4  flex items-center gap-3 hover:shadow-sm transition-shadow"
              style={{ border: "1px solid #ede8e9" }}
            >
              <span
                // style={{
                //   background: s.bg,
                //   color: s.color,
                //   border: `1px solid ${s.border}`,
                // }}
                className="text-sm font-bold px-2 py-1 rounded-lg shrink-0 w-32 text-center bg-primary/20 border border-primary/20 text-primary"
              >
                {row.dept}
              </span>
              <div className="flex items-center gap-2">
                <Avatar name={row[activeDay] || "?"} />
                <span
                  className="text-lg font-medium text-secondary"
                  // style={{ color: "#1e293b" }}
                >
                  {row[activeDay] || "—"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BedAllocationTab() {
  const medDepts = BED_DATA.slice(0, 4);
  const surgDepts = BED_DATA.slice(4);

  const BedBar = ({ value, max = 25 }) => (
    <div className="flex items-center gap-4 w-full">
      <div
        className="flex-1 h-2 rounded-full overflow-hidden"
        style={{ background: "#f1e9ea" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${(value / max) * 100}%`,
            background: `linear-gradient(90deg, ${C.primaryMid}, ${C.primary})`,
          }}
        />
      </div>
      <span
        className=" font-bold w-5 text-right"
        style={{ color: C.primary }}
      >
        {value}
      </span>
    </div>
  );

  const TableSec = ({ title, rows }) => (
    <div className="mb-6">
      <p
        className=" font-bold uppercase tracking-widest mb-3 text-secondary"
        // style={{ color: C.sub }}
      >
        {title}
      </p>
      <div
        className="bg-white rounded-xl overflow-hidden"
        style={{ border: "1px solid #ede8e9" }}
      >
        <table className="w-full ">
          <thead >
            <tr
              style={{
                background: C.primaryLight,
                borderBottom: `1px solid ${C.primaryBorder}`,
              }}
            >
              <th
                className="text-left py-2 px-3 font-semibold bg-primary text-white"
                // style={{ color: C.sub }}
              >
                Department
              </th>
              <th
                className="text-center py-2 px-2  font-semibold bg-primary text-white"
                // style={{ color: C.sub }}
              >
                Unit I
              </th>
              <th
                className="text-center py-2 px-2 font-semibold bg-primary text-white"
                // style={{ color: C.sub }}
              >
                Unit II
              </th>
              <th
                className="py-2 px-3 font-semibold bg-primary text-white text-center"
                // style={{ color: C.sub }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b last:border-0 "
                style={{ borderColor: "#f5eeef" }}
              >
                <td
                  className="py-3 px-3 font-medium "
                  style={{ color: "#334155" }}
                >
                  {row.dept}
                </td>
                <td className="py-2 px-2 text-center">
                  <span
                    className="text-sm font-bold"
                    style={{ color: C.primary }}
                  >
                    {row.u1}
                  </span>
                </td>
                <td className="py-2 px-2 text-center">
                  <span className="text-sm font-bold" style={{ color: C.sub }}>
                    {row.u2}
                  </span>
                </td>
                <td className="py-2 px-3">
                  <BedBar value={row.total} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div>
      <TableSec title="Medical IP Section" rows={medDepts} />
      <TableSec title="Surgical IP Section" rows={surgDepts} />
      <div
        className="rounded-xl p-4 flex items-center justify-between border border-primary/20"
        
      >
        <span className="text-primary font-bold" >
          Grand Total Beds
        </span>
        <div className="flex items-center gap-4 font-bold">
          <span className="text-primary" >
            Unit I: 60
          </span>
          <span className="" style={{ color: C.sub }}>
            Unit II: 40
          </span>
          <span className="text-primary" >
            100
          </span>
        </div>
      </div>
    </div>
  );
}

function SupportStaffTab() {
  return (
    <div className="grid grid-cols-1 gap-2">
      {MODERN_STAFF.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-3 flex items-center gap-3 hover:shadow-sm transition-shadow"
          style={{ border: "1px solid #ede8e9" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
            style={{ background: `linear-gradient(135deg, #8a8a8a, ${C.sub})` }}
          >
            {s.name.replace(/Dr\.|Shri/g, "").trim()[0] || "S"}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-bold text-lg truncate"
              style={{ color: C.primary }}
            >
              {s.name}
            </p>
            <p className="text-sm" style={{ color: C.sub }}>
              {s.post}
            </p>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium border"
            style={
              s.nature === "Regular"
                ? {
                    background: "#f0faf4",
                    color: "#2d7a4f",
                    borderColor: "#a7d9ba",
                  }
                : {
                    background: C.primaryLight,
                    color: C.primary,
                    borderColor: C.primaryBorder,
                  }
            }
          >
            {s.nature}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function HospitalSchedule() {
  const [activeTab, setActiveTab] = useState("Speciality Clinic");
  const [activeDay, setActiveDay] = useState("All");
  const tabs = [
    "Speciality Clinic",
    "Unit I",
    "Unit II",
    "Bed Allocation",
    "Support Staff",
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-bg container">
        <div className="">
          <div className="grid grid-cols-3 gap-8 my-5">
            {[
              { label: "Departments", value: "8+" },
              { label: "Total Beds", value: "100" },
              { label: "Support Staff", value: "15" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-3 py-10 text-center bg-primary/10 border-2 border-transparent hover:border-primary transition-all duration-300 hover:-translate-y-1"
                // style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <h1 className=" font-extrabold">{s.value}</h1>
                <p
                  className="text-secondary font-semibold"
                  // style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:flex gap-8 container mt-10">
        {/* Side Bar */}
        <div className="lg:sticky top-0 z-10 bg-white lg:w-5/12 rounded-3xl px-9 py-8 pb-14 space-y-9 h-fit">
          <h1>Doctors Schedule</h1>
          <div className="space-y-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex w-full items-center gap-1.5 px-5 py-4 rounded-2xl  whitespace-nowrap text-xl transition-all hover:opacity-80 ${activeTab === tab ? "text-white bg-primary font-bold" : "bg-[#f6f6f6] text-secondary border-transparent font-semibold"}`}
              >
                {/* {TAB_ICONS[tab]} */}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-7/12 py-5">
          {activeTab === "Speciality Clinic" && (
            <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
              {["All", ...DAYS].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDay(d)}
                  className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap border transition-all
    ${
      activeDay === d
        ? `bg-primary text-white border-scondary`
        : `bg-white text-secondary border-[#ddd5d6]`
    }`}
                >
                  {d === "All" ? "All Days" : dayShort[d]}
                </button>
              ))}
            </div>
          )}

          {activeTab === "Speciality Clinic" && (
            <SpecialityClinicTab activeDay={activeDay} />
          )}

          {activeTab === "Unit I" && (
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: C.primary }}
                ></span>
                <span
                  className="text-secondary font-bold uppercase tracking-wide"
                  // style={{ color: C.sub }}
                >
                  Unit I · 9 AM – 5 PM
                </span>
              </div>
              <UnitScheduleTab data={UNIT1} />
            </div>
          )}

          {activeTab === "Unit II" && (
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: C.sub }}
                ></span>
                <span
                  className="text-secondary font-bold uppercase tracking-wide"
                  // style={{ color: C.sub }}
                >
                  Unit II · 9 AM – 5 PM
                </span>
              </div>
              <UnitScheduleTab data={UNIT2} />
            </div>
          )}

          {activeTab === "Bed Allocation" && <BedAllocationTab />}
          {activeTab === "Support Staff" && <SupportStaffTab />}
        </div>
      </div>
    </div>
  );
}
