import { useState } from "react";

const C = {
  primary: "#A63A4B",
  sub: "#676767",
  dark: "#1a0a0d",
  light: "#fff5f6",
  cream: "#fdf8f8",
  border: "#ede5e6",
};

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const ATTENDANCE_DATA = [
  { year: 2026, type: "Biometric", months: ["January"] },
  { year: 2025, type: "Biometric", months: MONTHS },
  { year: 2024, type: "Biometric", months: MONTHS },
  {
    year: 2023, type: "Biometric", months: MONTHS,
    extra: [
      { name: "January 2023 Hospital Staff" },
      { name: "February 2023 Hospital Staff" },
    ],
  },
  {
    year: 2022, type: "Manual",
    months: ["January","February","March","April","May","June","July","September","December"],
  },
  { year: 2021, type: "Manual", months: MONTHS },
  { year: 2020, type: "Manual", months: MONTHS },
];

const MONTH_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const YEAR_COLORS = {
  2026: { accent: "#A63A4B", light: "#fdf4f5", border: "#e8a8b0", label: "Current" },
  2025: { accent: "#2d7a4f", light: "#f0faf4", border: "#a7d9ba", label: "Last Year" },
  2024: { accent: "#1e5fa8", light: "#eff6ff", border: "#93c5fd", label: "" },
  2023: { accent: "#5b3ea6", light: "#f3f0fb", border: "#c0aee8", label: "" },
  2022: { accent: "#92400e", light: "#fffbeb", border: "#fcd34d", label: "" },
  2021: { accent: "#0f766e", light: "#f0fdfa", border: "#99f6e4", label: "" },
  2020: { accent: "#676767", light: "#f8fafc", border: "#cbd5e1", label: "Archive" },
};

function MonthGrid({ months, accent }) {
  const available = new Set(months.map((m) => m.toLowerCase().split(" ")[0]));
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
      {MONTH_SHORT.map((short, i) => {
        const full = MONTHS[i];
        const isAvailable = available.has(full.toLowerCase());
        return (
          <div
            key={short}
            className={[
              "relative rounded-xl text-center py-3 px-1 border",
              "transition-all duration-200 ease-out",
              isAvailable
                ? "cursor-pointer hover:-translate-y-0.5 hover:scale-105 hover:shadow-md"
                : "opacity-40 cursor-default",
            ].join(" ")}
            style={
              isAvailable
                ? { background: accent + "14", borderColor: accent + "55" }
                : { background: "#f8f8f8", borderColor: "#e5e5e5" }
            }
          >
            <p className="text-xs font-bold" style={{ color: isAvailable ? accent : "#aaa" }}>
              {short}
            </p>
            {isAvailable ? (
              <div className="mt-1 flex justify-center">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
              </div>
            ) : (
              <p className="text-xs mt-0.5" style={{ color: "#ccc" }}>—</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function RecordRow({ name, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl border"
      style={{ background: "#fff", borderColor: C.border }}
    >
      <div className="flex items-center gap-3">
        <span
          className="w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center shrink-0"
          style={{ background: C.light, color: C.primary }}
        >
          {index + 1}
        </span>
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 shrink-0" fill="none" stroke={C.sub} strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className=" font-medium" style={{ color: C.dark }}>{name}</span>
        </div>
      </div>
      <button
        className="text-sm font-semibold px-4 py-1 rounded-full border transition-all duration-150"
        style={{
          color: hovered ? "#fff" : C.primary,
          borderColor: C.primary,
          background: hovered ? C.primary : C.light,
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        View
      </button>
    </div>
  );
}

function YearAccordion({ data, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const [headerHovered, setHeaderHovered] = useState(false);
  const col = YEAR_COLORS[data.year] || YEAR_COLORS[2020];
  const totalDocs = data.months.length + (data.extra?.length || 0);

  const headerBg = open ? col.light : headerHovered ? "#fdf0f1" : "#fff";

  return (
    <div
      className="rounded-2xl overflow-hidden border transition-shadow duration-200 hover:shadow-lg border-secondary/20"
      // style={{ borderColor: col.border }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 cursor-pointer select-none transition-colors duration-200"
        style={{ background: headerBg }}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-sm bg-primary"
            
          >
            <span className="text-white font-black text-lg leading-none">{data.year}</span>
            <span className="text-white text-xs font-light opacity-70 leading-none mt-0.5">
              {String(data.year).slice(2)}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-bold text-xl" >
                Hospital Biometric Attendance
              </h2>
              {col.label && (
                <span
                  className="text-sm font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: col.accent + "20", color: col.accent }}
                >
                  {col.label}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-sm" style={{ color: C.sub }}>
                {totalDocs} record{totalDocs !== 1 ? "s" : ""} · {data.type}
              </span>
              <div className="flex gap-0.5">
                {data.months.slice(0, 12).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-3 rounded-sm"
                    style={{ background: col.accent, opacity: 0.6 + (i % 3) * 0.13 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chevron */}
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 border-primary"
          style={{
            // borderColor: col.border,
            background: open ? col.accent : "#fff",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke={open ? "#fff" : col.accent} strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Panel */}
      {open && (
        <div
          className="px-5 pb-5 pt-2"
          style={{ borderTop: `1px solid ${col.border}`, background: "#fafafa" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 mt-2" style={{ color: C.sub }}>
            Monthly Records
          </p>
          <MonthGrid months={data.months} accent={col.accent} />

          <p className="text-sm font-semibold uppercase tracking-widest mt-5 mb-2" style={{ color: C.sub }}>
            Files
          </p>
          <div className="grid gap-1.5">
            {data.months.map((m, i) => {
              const name = m.includes(String(data.year))
                ? `${m} Hospital Staff Biometric Attendance`
                : `${m} ${data.year} Hospital Staff Biometric Attendance`;
              return <RecordRow key={i} name={name} index={i} />;
            })}
            {data.extra?.map((e, i) => (
              <RecordRow key={`ex-${i}`} name={e.name} index={data.months.length + i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function HospitalAttendance() {
  const [search, setSearch] = useState("");
  const totalRecords = ATTENDANCE_DATA.reduce(
    (s, y) => s + y.months.length + (y.extra?.length || 0),
    0
  );
  const filtered = search
    ? ATTENDANCE_DATA.map((y) => ({
        ...y,
        months: y.months.filter((m) =>
          `${m} ${y.year}`.toLowerCase().includes(search.toLowerCase())
        ),
        extra: (y.extra || []).filter((e) =>
          e.name.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((y) => y.months.length > 0 || (y.extra?.length || 0) > 0)
    : ATTENDANCE_DATA;

  return (
    <div>
      {/* Header row */}
      <div className="container pt-12 pb-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          {/* Search */}
          <div className="sticky top-0 z-20 bg-white w-full">
            <div className="w-full py-3">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  fill="none" stroke={C.sub} strokeWidth={2} viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by month or year…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-10 py-2 rounded-xl text-sm font-medium outline-none transition-shadow duration-150"
                  style={{
                    background: "#faf5f5",
                    border: `1px solid ${C.border}`,
                    color: C.dark,
                  }}
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity duration-150"
                    style={{ color: C.sub }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Summary cards */}
          {/* <div className="flex gap-3 flex-wrap">
            {[
              { n: ATTENDANCE_DATA.length, label: "Years" },
              { n: totalRecords, label: "Records" },
              { n: "2020–26", label: "Period" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center px-4 py-3 rounded-2xl"
                style={{ background: C.primary }}
              >
                <p className="text-2xl font-black text-white">{s.n}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Year Accordions */}
      <div className="container  pb-20 grid gap-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">📂</p>
            <p className="font-semibold" style={{ color: C.sub }}>
              No records found for "{search}"
            </p>
          </div>
        ) : (
          filtered.map((data) => (
            <YearAccordion key={data.year} data={data} defaultOpen={false} />
          ))
        )}
      </div>
    </div>
  );
}