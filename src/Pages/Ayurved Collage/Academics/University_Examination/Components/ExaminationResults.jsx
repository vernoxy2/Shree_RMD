/**
 * ExaminationResults.jsx
 * ══════════════════════════════════════════════════════════════════
 * Unified Examination Results + Academic Calendar
 * Dhanvantari Ayurveda College — cream / maroon / green theme
 *
 * 📦 REQUIRED LIBRARIES
 * ────────────────────
 *   npm install dayjs
 *   yarn add dayjs
 *
 * 🔌 USAGE
 * ─────────
 *   import ExaminationResults from "./ExaminationResults";
 *   <ExaminationResults />
 * ══════════════════════════════════════════════════════════════════
 */

import { useState, useMemo } from "react";
import dayjs from "dayjs";

// ─── CALENDAR CATEGORY CONFIG ─────────────────────────────────────────────────
const CAT = {
  academic:  { label: "Academic",  dot: "#1B4FC4", bg: "#EBF0FC", color: "#1B4FC4"  },
  holiday:   { label: "Holiday",   dot: "#2D5E3A", bg: "#EAF2EB", color: "#2D5E3A"  },
  activity:  { label: "Activity",  dot: "#B8922A", bg: "#FEF3E2", color: "#9A6010"  },
  important: { label: "Important", dot: "#6B1A2A", bg: "#F9EDEF", color: "#6B1A2A"  },
};

// ─── DATA: QUICK LINKS ────────────────────────────────────────────────────────
const quickLinks = [
  { id: "syllabus",   icon: "📖", label: "Syllabus Details",          sub: "Know more", colorClass: "bg-[#6B1A2A] hover:bg-[#8B2439]" },
  { id: "qp",         icon: "📄", label: "GAU Question Papers",        sub: "Know more", colorClass: "bg-[#2D5E3A] hover:bg-[#3D7A4E]" },
  { id: "theory",     icon: "🗓️", label: "Forthcoming Theory Exam",    sub: "Know more", colorClass: "bg-[#6B1A2A] hover:bg-[#8B2439]" },
  { id: "practical",  icon: "🔬", label: "Forthcoming Practical Exam", sub: "Know more", colorClass: "bg-[#2D5E3A] hover:bg-[#3D7A4E]" },
  { id: "results",    icon: "🏆", label: "University Results",          sub: "Know more", colorClass: "bg-[#B8922A] hover:bg-[#C8A23A]" },
];

// ─── DATA: TIMETABLE ─────────────────────────────────────────────────────────
const timetableData = {
  year: "2025",
  items: [
    { sr: 1, description: "BAMS December 2025 New Syllabus Written Exam TimeTable", link: "#" },
    { sr: 2, description: "I – Professional BAMS (NEW) 2024 Batch 2nd Term Timetable", link: "#" },
    { sr: 3, description: "II – Professional BAMS 2023 Batch Timetable", link: "#" },
    { sr: 4, description: "II – Professional BAMS (OLD) 2022 Batch Timetable", link: "#" },
    { sr: 5, description: "III – Professional BAMS (NEW) 2021 Batch Timetable", link: "#" },
  ],
};

// ─── DATA: RESULTS ────────────────────────────────────────────────────────────
const resultsData = [
  { year: "2024", items: [
    { sr: 1, description: "1st Year B.A.M.S Result – June 2024", link: "#" },
  ]},
  { year: "2023", items: [
    { sr: 1, description: "Fourth Professional Examination – October 2023", link: "#" },
    { sr: 2, description: "Circular", link: "#" },
    { sr: 3, description: "Fourth Professional Examination – March 2023", link: "#" },
    { sr: 4, description: "Fourth Professional Examination – March 2023 (Supplementary)", link: "#" },
  ]},
  { year: "2022", items: [
    { sr: 1, description: "First Professional Examination – February 2022", link: "#" },
    { sr: 2, description: "First Professional Examination – September 2022", link: "#" },
    { sr: 3, description: "Second Professional Examination – February 2022", link: "#" },
    { sr: 4, description: "Second Professional Examination – September 2022", link: "#" },
    { sr: 5, description: "Third Professional Examination – February 2022", link: "#" },
    { sr: 6, description: "Third Professional Examination – September 2022", link: "#" },
    { sr: 7, description: "Fourth Professional Examination – February 2022", link: "#" },
    { sr: 8, description: "Fourth Professional Examination – September 2022", link: "#" },
  ]},
  { year: "2021", items: [
    { sr: 1, description: "First Professional Examination – February 2021", link: "#" },
    { sr: 2, description: "Second Professional Examination – February 2021", link: "#" },
    { sr: 3, description: "Third Professional Examination – February 2021", link: "#" },
  ]},
  { year: "2019", items: [
    { sr: 1, description: "First Professional Examination – April 2019", link: "#" },
    { sr: 2, description: "First Professional Examination – October 2019", link: "#" },
    { sr: 3, description: "Second Professional Examination – April 2019", link: "#" },
    { sr: 4, description: "Second Professional Examination – October 2019", link: "#" },
    { sr: 5, description: "Third Professional Examination – October 2019", link: "#" },
    { sr: 6, description: "B.A.M.S. April-2019 College Year Wise Result Percentage", link: "#" },
  ]},
  { year: "Internal Exam", isInternal: true, items: [
    { sr: 1, description: "III BAMS (2018-19 Batch) – Mark Sheet April 2019 Examination", link: "#" },
    { sr: 2, description: "I BAMS – Mark Sheet September 2019 Examination", link: "#" },
  ]},
  { year: "2018", items: [
    { sr: 1, description: "First Professional Examination – April 2018", link: "#" },
    { sr: 2, description: "First Professional Examination – October 2018", link: "#" },
    { sr: 3, description: "Second Professional Examination – October 2018", link: "#" },
  ]},
];

// ─── DATA: CALENDAR EVENTS ────────────────────────────────────────────────────
const calendarEvents = [
  { date: "2025-11-01", title: "Diwali Holiday",                          category: "holiday"   },
  { date: "2025-11-05", title: "Internal Assessment Submission",           category: "important" },
  { date: "2025-11-12", title: "Ayurveda Day Seminar",                     category: "activity"  },
  { date: "2025-11-20", title: "2nd Term Lectures Begin",                  category: "academic"  },
  { date: "2025-11-25", title: "Practical Viva – 2nd Year",                category: "important" },
  { date: "2025-12-01", title: "BAMS Written Exam (New Syllabus)",         category: "important" },
  { date: "2025-12-10", title: "Guest Lecture – AIIA Delhi",               category: "activity"  },
  { date: "2025-12-15", title: "Term-End Practical Exam",                  category: "important" },
  { date: "2025-12-25", title: "Christmas Holiday",                        category: "holiday"   },
  { date: "2025-12-31", title: "New Year Eve – Office Closed",             category: "holiday"   },
  { date: "2026-01-01", title: "New Year's Day Holiday",                   category: "holiday"   },
  { date: "2026-01-06", title: "Second Term Begins",                       category: "academic"  },
  { date: "2026-01-15", title: "Makar Sankranti Holiday",                  category: "holiday"   },
  { date: "2026-01-26", title: "Republic Day Celebration",                 category: "activity"  },
  { date: "2026-01-30", title: "Internal Assessment Deadline",             category: "important" },
  { date: "2026-02-10", title: "Third Term Begins",                        category: "academic"  },
  { date: "2026-02-19", title: "Shivaji Maharaj Jayanti – Holiday",        category: "holiday"   },
  { date: "2026-02-23", title: "Today – Session Active",                   category: "academic"  },
  { date: "2026-02-25", title: "Internal Exam – Theory (3rd & Final Yr)",  category: "important" },
  { date: "2026-02-28", title: "Mahashivratri Holiday",                    category: "holiday"   },
  { date: "2026-03-05", title: "Ayurveda Awareness Day Workshop",          category: "activity"  },
  { date: "2026-03-10", title: "Term-End Practical Exam – All Years",      category: "important" },
  { date: "2026-03-14", title: "Holi Holiday",                             category: "holiday"   },
  { date: "2026-03-16", title: "New Academic Term Begins",                 category: "academic"  },
  { date: "2026-03-25", title: "Herb Garden Walk & Documentation",         category: "activity"  },
  { date: "2026-04-03", title: "Good Friday – Holiday",                    category: "holiday"   },
  { date: "2026-04-14", title: "Dr. Ambedkar Jayanti – Holiday",           category: "holiday"   },
  { date: "2026-04-15", title: "University Exam – Final Year BAMS",        category: "important" },
  { date: "2026-04-18", title: "Ram Navami – Holiday",                     category: "holiday"   },
  { date: "2026-04-30", title: "Term Ends",                                category: "academic"  },
];

// ─── CALENDAR HELPER ──────────────────────────────────────────────────────────
function buildGrid(month) {
  const start    = month.startOf("month");
  const startDOW = start.day();
  const total    = month.daysInMonth();
  const cells    = [];
  for (let i = 0; i < startDOW; i++) cells.push(start.subtract(startDOW - i, "day"));
  for (let d = 1; d <= total; d++) cells.push(start.date(d));
  const rem = 42 - cells.length;
  for (let i = 1; i <= rem; i++) cells.push(start.date(total).add(i, "day"));
  return cells;
}

// ══════════════════════════════════════════════════════════════════════════════
// SHARED SMALL COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════

function ViewButton({ href = "#" }) {
  return (
    <a
      href={href}
      onClick={(e) => e.preventDefault()}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium font-inter
                 bg-primary text-[#F8F0E3] no-underline whitespace-nowrap
                 shadow-sm hover:bg-[#8B2439] hover:shadow-md hover:-translate-y-px
                 transition-all duration-150"
    >
      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
      View
    </a>
  );
}

function QuickLinkCard({ ql }) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className={`flex flex-col gap-1.5 p-3 pb-2.5 rounded-xl text-white no-underline cursor-pointer
                  transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]
                  shadow-md hover:shadow-xl ${ql.colorClass}`}
    >
      <span className="text-xl leading-none">{ql.icon}</span>
      <span className="text-xs font-semibold leading-snug">{ql.label}</span>
      <span className="text-[11px] font-medium text-white/60 flex items-center gap-0.5">
        {ql.sub}
        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </span>
    </a>
  );
}

function DownloadBtn({ label }) {
  return (
    <button
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[10px]
                 border border-[#DDD0BC] bg-white text-[#5C4A40] text-xs font-semibold
                 hover:border-[#6B1A2A] hover:text-[#6B1A2A] cursor-pointer
                 transition-all duration-150 font-[inherit]"
    >
      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
      </svg>
      {label}
    </button>
  );
}

function CatTag({ category }) {
  const cfg = CAT[category] || CAT.academic;
  return (
    <span
      className="inline-block px-2 py-px rounded-full text-[10px] font-bold tracking-wide uppercase"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// RESULTS TABLE COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════

function ResultRow({ item }) {
  const [h, setH] = useState(false);
  return (
    <tr
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="border-t border-[#EDE5D8] transition-colors duration-150"
      style={{ background: h ? "#F8F3EC" : "#FFFFFF" }}
    >
      <td className="px-4 py-3 text-center text-[#8C7A70] font-semibold text-xs">{item.sr}</td>
      <td
        className="px-4 py-3 font-medium leading-relaxed text-sm transition-colors duration-150"
        style={{ color: h ? "#6B1A2A" : "#2A1F1A" }}
      >
        {item.description}
      </td>
      <td className="px-4 py-3 text-center">
        <ViewButton href={item.link} />
      </td>
    </tr>
  );
}

function ResultTable({ items }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#DDD0BC] shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#EDE5D8]">
            {[["Sr.", "w-[52px]", "text-left"], ["Description", "w-auto", "text-left"], ["View", "w-[72px]", "text-center"]].map(([lbl, w, align]) => (
              <th key={lbl} className={`px-4 py-2.5 ${align} text-[10px] font-bold tracking-widest uppercase text-[#8C7A70] ${w}`}>
                {lbl}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => <ResultRow key={i} item={item} />)}
        </tbody>
      </table>
    </div>
  );
}

function TimetableRow({ item }) {
  const [h, setH] = useState(false);
  return (
    <tr
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="border-t border-[#EDE5D8] transition-colors duration-150"
      style={{ background: h ? "#F8F3EC" : "#FFFFFF" }}
    >
      <td className="px-5 py-3 text-center">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F9EDEF] text-[#6B1A2A] text-[11px] font-bold">
          {item.sr}
        </span>
      </td>
      <td
        className="px-5 py-3 font-medium leading-relaxed text-sm transition-colors duration-150"
        style={{ color: h ? "#6B1A2A" : "#2A1F1A" }}
      >
        <span className="inline-flex items-center gap-2">
          <svg
            className="shrink-0 transition-colors duration-150"
            style={{ color: h ? "rgba(107,26,42,.3)" : "#DDD0BC" }}
            width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          {item.description}
        </span>
      </td>
      <td className="px-5 py-3 text-center">
        <ViewButton href={item.link} />
      </td>
    </tr>
  );
}

function YearSection({ group, isOpen, onToggle }) {
  const internal = !!group.isInternal;
  const openBg   = internal ? "#2D5E3A" : "#6B1A2A";

  return (
    <div className="rounded-2xl border border-[#DDD0BC] overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 border-none cursor-pointer text-left transition-colors duration-200 font-[inherit]"
        style={{ background: isOpen ? openBg : "#FFFFFF" }}
      >
        <span className="flex items-center gap-3">
          <span
            className="font-[Cormorant_Garamond,Georgia,serif] text-[22px] font-bold leading-none"
            style={{ color: isOpen ? "#F8F0E3" : (internal ? "#2D5E3A" : "#6B1A2A") }}
          >
            {group.year}
          </span>
          <span
            className="text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wide"
            style={{
              background: isOpen ? "rgba(255,255,255,.18)" : (internal ? "#EAF2EB" : "#F9EDEF"),
              color:      isOpen ? "#F8F0E3"               : (internal ? "#2D5E3A"  : "#6B1A2A"),
            }}
          >
            {group.items.length} {group.items.length === 1 ? "record" : "records"}
          </span>
        </span>
        <svg
          className="w-[18px] h-[18px] transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "none",
            opacity: isOpen ? 0.65 : 0.35,
          }}
          fill="none"
          stroke={isOpen ? "#F8F0E3" : "#5C4A40"}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div
        className="overflow-hidden transition-all duration-[380ms] ease-in-out"
        style={{
          maxHeight: isOpen ? "1400px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-3.5 bg-[#FDFAF6]">
          <ResultTable items={group.items} />
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CALENDAR COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════

function CalNavBtn({ onClick, children, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="w-[34px] h-[34px] flex items-center justify-center rounded-[9px]
                 border border-[#DDD0BC] bg-white text-[#5C4A40] cursor-pointer
                 hover:border-[#6B1A2A] hover:bg-[#F9EDEF] hover:text-[#6B1A2A]
                 transition-all duration-150 font-[inherit]"
    >
      {children}
    </button>
  );
}

function DayCell({ day, currentMonth, events, isToday, selected, onClick }) {
  const [h, setH] = useState(false);
  const inMonth = day.month() === currentMonth.month() && day.year() === currentMonth.year();
  const isSun   = day.day() === 0;
  const isSel   = selected && day.isSame(selected, "day");
  const visible = events.slice(0, 2);
  const more    = events.length - 2;

  let bg = "#FFFFFF";
  if (isSel)               bg = "#6B1A2A";
  else if (isToday)        bg = "#F9EDEF";
  else if (h && inMonth)   bg = "#F8F3EC";

  const dateColor = isSel
    ? "#FFFFFF"
    : !inMonth ? "#DDD0BC"
    : isToday   ? "#6B1A2A"
    : isSun     ? "#6B1A2A"
    : "#2A1F1A";

  return (
    <div
      onClick={() => inMonth && onClick(day)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="min-h-[82px] border-r border-b border-[#DDD0BC] px-1.5 pt-1.5 pb-1 transition-colors duration-150 select-none"
      style={{ background: bg, cursor: inMonth ? "pointer" : "default" }}
    >
      {/* Date number */}
      <div
        className="w-[26px] h-[26px] flex items-center justify-center rounded-full mb-1 text-xs"
        style={{
          background: isToday && !isSel ? "#6B1A2A" : "transparent",
          color: isToday && !isSel ? "#FFFFFF" : dateColor,
          fontWeight: isToday || isSel ? 700 : 500,
        }}
      >
        {day.date()}
      </div>

      {/* Event pills */}
      {inMonth && visible.map((ev, i) => {
        const cfg = CAT[ev.category] || CAT.academic;
        return (
          <div
            key={i}
            className="text-[9px] font-semibold px-1 py-0.5 rounded mb-0.5 leading-snug truncate"
            style={{
              background: isSel ? "rgba(255,255,255,.18)" : cfg.bg,
              color:      isSel ? "rgba(255,255,255,.9)"   : cfg.color,
            }}
          >
            {ev.title}
          </div>
        );
      })}
      {inMonth && more > 0 && (
        <div
          className="text-[9px] font-semibold mt-0.5"
          style={{ color: isSel ? "rgba(255,255,255,.6)" : "#8C7A70" }}
        >
          +{more} more
        </div>
      )}
    </div>
  );
}

function EventDetailPanel({ day, events, onClose }) {
  if (!day) return null;
  return (
    <div className="bg-white rounded-2xl border border-[#DDD0BC] shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#6B1A2A] to-[#8B2439] px-4 py-3.5 flex items-center justify-between">
        <div>
          <div className="text-[#F8F0E3]/55 text-[11px] font-semibold tracking-widest uppercase">
            {day.format("dddd")}
          </div>
          <div className="text-[#F8F0E3] text-xl font-bold font-[Cormorant_Garamond,serif] leading-snug">
            {day.format("D MMMM YYYY")}
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-white/15 border-none rounded-full w-7 h-7 text-[#F8F0E3] cursor-pointer
                     flex items-center justify-center text-base hover:bg-white/25 transition-colors"
        >
          ✕
        </button>
      </div>
      <div className="px-4 py-3.5 max-h-[260px] overflow-y-auto">
        {events.length === 0 ? (
          <div className="text-center py-6 text-[#8C7A70]">
            <div className="text-[26px] mb-1.5">📭</div>
            <div className="text-sm font-medium">No events on this day</div>
          </div>
        ) : events.map((ev, i) => {
          const cfg = CAT[ev.category] || CAT.academic;
          return (
            <div
              key={i}
              className="flex items-start gap-3 px-3.5 py-2.5 rounded-[10px] mb-2 border"
              style={{ background: cfg.bg, borderColor: cfg.dot + "22" }}
            >
              <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: cfg.dot }}/>
              <div>
                <div className="text-sm font-semibold text-[#2A1F1A] mb-0.5 leading-snug">{ev.title}</div>
                <CatTag category={ev.category} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// CALENDAR TAB
// ══════════════════════════════════════════════════════════════════════════════

function CalendarSection() {
  const today   = dayjs();
  const [current,  setCurrent]  = useState(today.startOf("month"));
  const [selected, setSelected] = useState(null);

  const grid = useMemo(() => buildGrid(current), [current]);

  const eventMap = useMemo(() => {
    const m = {};
    calendarEvents.forEach((ev) => { if (!m[ev.date]) m[ev.date] = []; m[ev.date].push(ev); });
    return m;
  }, []);

  const selEvents   = selected ? (eventMap[selected.format("YYYY-MM-DD")] || []) : [];
  const monthEvents = calendarEvents.filter((e) => e.date.startsWith(current.format("YYYY-MM")));
  const counts      = Object.entries(CAT)
    .map(([key, cfg]) => ({ ...cfg, key, count: monthEvents.filter((e) => e.category === key).length }))
    .filter((c) => c.count > 0);
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {/* Header row */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <h2 className="font-[Cormorant_Garamond,serif] text-2xl font-bold text-[#6B1A2A] m-0 flex-1">
          {current.format("MMMM YYYY")}
        </h2>
        <button
          onClick={() => { setCurrent(today.startOf("month")); setSelected(today); }}
          className="px-4 py-[7px] rounded-[9px] border border-[#DDD0BC] bg-white text-[#5C4A40]
                     text-xs font-semibold cursor-pointer font-[inherit] hover:border-[#6B1A2A]
                     hover:text-[#6B1A2A] transition-colors"
        >
          Today
        </button>
        <DownloadBtn label="Download PDF" />
        <div className="flex gap-1.5">
          <CalNavBtn onClick={() => { setCurrent((c) => c.subtract(1, "month")); setSelected(null); }} title="Previous month">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </CalNavBtn>
          <CalNavBtn onClick={() => { setCurrent((c) => c.add(1, "month")); setSelected(null); }} title="Next month">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </CalNavBtn>
        </div>
      </div>

      {/* Two-column layout: calendar + sidebar */}
      <div className="grid gap-5 items-start" style={{ gridTemplateColumns: "1fr 264px" }}>

        {/* LEFT — Calendar grid */}
        <div>
          <div className="bg-white rounded-2xl border border-[#DDD0BC] overflow-hidden shadow-md">
            {/* Day name header */}
            <div className="grid grid-cols-7 bg-primary">
              {DAYS.map((d, i) => (
                <div
                  key={d}
                  className="py-[11px] px-1 text-center text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: i === 0 ? "#FFB3B3" : "rgba(248,240,227,.7)" }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Grid cells */}
            <div className="grid grid-cols-7">
              {grid.map((day, idx) => {
                const key = day.format("YYYY-MM-DD");
                const evs = eventMap[key] || [];
                const isTd = day.isSame(today, "day");
                return (
                  <DayCell
                    key={idx}
                    day={day}
                    currentMonth={current}
                    events={evs}
                    isToday={isTd}
                    selected={selected}
                    onClick={setSelected}
                  />
                );
              })}
            </div>
          </div>

          {/* Month summary pills */}
          {counts.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {counts.map((c) => (
                <div
                  key={c.key}
                  className="flex items-center gap-1.5 bg-white border border-[#DDD0BC] rounded-lg px-3 py-1.5 text-xs text-[#5C4A40]"
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: c.dot }}/>
                  <span className="font-bold" style={{ color: c.color }}>{c.count}</span>
                  <span>{c.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 bg-white border border-[#DDD0BC] rounded-lg px-3 py-1.5 text-xs text-[#5C4A40]">
                <span className="font-bold text-[#2A1F1A]">{monthEvents.length}</span>
                <span>total this month</span>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — Sidebar */}
        <div className="flex flex-col gap-3.5 sticky top-16">

          {/* Event detail / prompt */}
          {selected ? (
            <EventDetailPanel day={selected} events={selEvents} onClose={() => setSelected(null)} />
          ) : (
            <div className="bg-white rounded-2xl border border-[#DDD0BC] px-4 py-5 text-center shadow-sm">
              <div className="text-[30px] mb-2">📅</div>
              <div className="text-sm font-semibold text-[#2A1F1A] mb-1">Select a date</div>
              <div className="text-xs text-[#8C7A70] leading-relaxed">Click any date to see events for that day.</div>
            </div>
          )}

          {/* Legend */}
          <div className="bg-white rounded-2xl border border-[#DDD0BC] overflow-hidden">
            <div className="px-4 py-[11px] bg-[#EDE5D8] border-b border-[#DDD0BC]">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C7A70]">Legend</span>
            </div>
            <div className="px-4 py-3 flex flex-col gap-2.5">
              {Object.entries(CAT).map(([key, cfg]) => (
                <div key={key} className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-[3px] shrink-0"
                    style={{ background: cfg.bg, border: `1.5px solid ${cfg.dot}` }}
                  />
                  <span className="text-xs text-[#5C4A40] font-medium">{cfg.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Up */}
          <div className="bg-white rounded-2xl border border-[#DDD0BC] overflow-hidden">
            <div className="px-4 py-[11px] bg-[#EDE5D8] border-b border-[#DDD0BC]">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C7A70]">Coming Up</span>
            </div>
            <div className="px-3 py-2.5 flex flex-col gap-1">
              {calendarEvents
                .filter((e) => dayjs(e.date).isSame(today, "day") || dayjs(e.date).isAfter(today, "day"))
                .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))
                .slice(0, 5)
                .map((ev, i) => {
                  const cfg = CAT[ev.category] || CAT.academic;
                  const d   = dayjs(ev.date);
                  return (
                    <div
                      key={i}
                      onClick={() => { setCurrent(d.startOf("month")); setSelected(d); }}
                      className="flex gap-2.5 items-start cursor-pointer px-2 py-2 rounded-[9px] transition-colors duration-150 hover:bg-[#F8F3EC]"
                    >
                      <div
                        className="shrink-0 text-center min-w-[38px] rounded-lg py-1"
                        style={{ background: cfg.bg }}
                      >
                        <div
                          className="text-[15px] font-bold font-[Cormorant_Garamond,serif] leading-none"
                          style={{ color: cfg.color }}
                        >
                          {d.format("D")}
                        </div>
                        <div
                          className="text-[9px] font-bold tracking-widest uppercase"
                          style={{ color: cfg.color }}
                        >
                          {d.format("MMM")}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#2A1F1A] leading-snug mb-0.5">{ev.title}</div>
                        <CatTag category={ev.category} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ══════════════════════════════════════════════════════════════════════════════

export default function ExaminationResults() {
  const [activeTab, setActiveTab] = useState("timetable");
  const [openYear,  setOpenYear]  = useState("2024");
  const [search,    setSearch]    = useState("");

  const tabs = [
    { id: "timetable", label: "📅 Exam Timetable",    badge: "2025"      },
    { id: "results",   label: "🏆 University Results", badge: "All Years" },
    { id: "calendar",  label: "🗓️ Academic Calendar",  badge: "2025–26"   },
  ];

  const filtered = search
    ? resultsData
        .map((g) => ({ ...g, items: g.items.filter((i) => i.description.toLowerCase().includes(search.toLowerCase())) }))
        .filter((g) => g.items.length > 0)
    : resultsData;

  const toggleYear = (y) => setOpenYear((p) => (p === y ? null : y));

  return (
    <section className="min-h-screen bg-[#F8F3EC] font-[DM_Sans,sans-serif]">

      {/* Global styles */}
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes erFadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
        .er-fade { animation: erFadeUp .28s ease both; }
        .er-search:focus { outline:none; border-color:#6B1A2A !important; box-shadow:0 0 0 3px rgba(107,26,42,.1) !important; }
        * { box-sizing: border-box; }
      `}</style> */}

      {/* ══ HERO ══ */}
      <div className="relative overflow-hidden bg-primary/10" >
        {/* grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px)"
          }}
        />
        {/* Om symbol */}
        <div className="absolute right-12 top-3 text-[120px] opacity-[0.04] text-white font-serif leading-none select-none">
          ॐ
        </div>

        <div className="container py-10 pb-9 relative">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#E8C870] text-[10px] font-bold tracking-[2px] uppercase px-3.5 py-1.5 rounded-full mb-3.5">
            <span className="w-[7px] h-[7px] rounded-full bg-[#E8C870] inline-block"/>
            NAAC A+ Accredited
          </div> */}

          <h1 className="font-poppins font-bold text-primary leading-tight mb-2">
            Examination &amp; Results
          </h1>
          <p className="  max-w-[460px] leading-relaxed m-0">
            Timetables, university results, internal exam mark sheets, and the academic calendar — all in one place.
          </p>

          {/* Quick links grid */}
          <div className="mt-7 grid gap-2.5" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(144px,1fr))" }}>
            {quickLinks.map((ql) => <QuickLinkCard key={ql.id} ql={ql} />)}
          </div>
        </div>
      </div>

      {/* ══ TAB BAR ══ */}
      <div className="bg-white border-b border-[#DDD0BC] sticky top-0 z-20 shadow-[0_1px_6px_rgba(42,31,26,.07)]">
        <div className="container flex overflow-x-auto">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-[18px] py-[14px] bg-transparent border-none cursor-pointer
                           flex items-center gap-2 whitespace-nowrap font-[inherit]
                           text-[13px] font-semibold transition-all duration-200"
                style={{
                  borderBottom: `2.5px solid ${active ? "#6B1A2A" : "transparent"}`,
                  color: active ? "#6B1A2A" : "#8C7A70",
                }}
              >
                {tab.label}
                <span
                  className="text-[10px] font-bold px-[7px] py-0.5 rounded-md"
                  style={{
                    background: active ? "#F9EDEF" : "#EDE5D8",
                    color: active ? "#6B1A2A" : "#8C7A70",
                  }}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══ CONTENT ══ */}
      <div className="container py-8 pb-20">

        {/* ── TIMETABLE ── */}
        {activeTab === "timetable" && (
          <div className="er-fade">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
              <div>
                <h2 className=" font-bold text-Primary m-0">
                  Exam Timetable — {timetableData.year}
                </h2>
                <p className=" mt-0.5 mb-0">
                  Official examination schedules for all professional years
                </p>
              </div>
              <DownloadBtn label="Download All" />
            </div>

            <div className="bg-white rounded-2xl border border-[#DDD0BC] overflow-hidden shadow-md">
              {/* Table header bar */}
              <div
                className="flex items-center gap-2.5 px-5 py-3.5"
                style={{ background: "linear-gradient(to right,#6B1A2A,#8B2439)" }}
              >
                <svg width="16" height="16" fill="none" stroke="rgba(248,240,227,.7)" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <span className="text-[#F8F0E3] text-[13px] font-semibold">BAMS Examination Timetable – 2025</span>
                <span className="ml-auto text-[#F8F0E3]/50 text-xs">{timetableData.items.length} entries</span>
              </div>

              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#EDE5D8] border-b border-[#DDD0BC]">
                    {[["Sr.", "w-[52px]", "text-left"], ["Description", "w-auto", "text-left"], ["View", "w-20", "text-center"]].map(([lbl, w, align]) => (
                      <th key={lbl} className={`px-5 py-[11px] ${align} text-[10px] font-bold tracking-[1.5px] uppercase text-[#8C7A70] ${w}`}>
                        {lbl}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timetableData.items.map((item, i) => <TimetableRow key={i} item={item} />)}
                </tbody>
              </table>
            </div>

            <p className="mt-3.5 text-secondary bg-white border border-[#DDD0BC] rounded-xl px-4 py-3">
              <strong className="text-[#6B1A2A]">Note: </strong>
              Timetable is subject to change as per MUHS notification.
            </p>
          </div>
        )}

        {/* ── RESULTS ── */}
        {activeTab === "results" && (
          <div className="er-fade">
            <div className="flex items-start justify-between flex-wrap gap-3.5 mb-5">
              <div>
                <h2 className="font-[Cormorant_Garamond,serif] text-2xl font-bold text-[#6B1A2A] m-0">
                  University Results
                </h2>
                <p className="text-xs text-[#8C7A70] mt-0.5 mb-0">
                  Click any year to expand — all BAMS professional examinations
                </p>
              </div>
              <div className="relative">
                <svg
                  className="absolute left-[11px] top-1/2 -translate-y-1/2 pointer-events-none"
                  width="13" height="13" fill="none" stroke="#8C7A70" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  className="er-search pl-8 pr-3.5 py-2 text-[13px] rounded-[10px] border border-[#DDD0BC]
                             bg-white text-[#2A1F1A] w-[210px] font-[inherit] transition-all duration-200"
                  type="text"
                  placeholder="Search results…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {filtered.map((group) => (
                <YearSection
                  key={group.year}
                  group={group}
                  isOpen={openYear === group.year}
                  onToggle={() => toggleYear(group.year)}
                />
              ))}
              {search && filtered.length === 0 && (
                <div className="text-center py-16 text-[#8C7A70]">
                  <div className="text-4xl mb-2.5">🔍</div>
                  <div className="font-semibold text-sm">No results found for "{search}"</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── CALENDAR ── */}
        {activeTab === "calendar" && (
          <div className="er-fade">
            <CalendarSection />
          </div>
        )}
      </div>

      {/* ══ FOOTER ══ */}
      {/* <div className="bg-[#2A1F1A] text-center px-6 py-[18px]">
        <p className="m-0 text-[11px] text-white/30">
          © 2026 <span className="text-[#B8922A]">Dhanvantari Ayurveda College &amp; Hospital</span>
          &nbsp;|&nbsp; Affiliated to MUHS &nbsp;|&nbsp; NAAC A+ Accredited
        </p>
      </div> */}
    </section>
  );
}
