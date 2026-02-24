/**
 * ExaminationResults.jsx
 * ══════════════════════════════════════════════════════════════════
 * Unified Examination Results + Academic Calendar
 * Dhanvantari Ayurveda College — cream / maroon / green theme
 *
 * 📦 REQUIRED LIBRARY
 * ────────────────────
 *   npm install dayjs
 *   yarn add dayjs
 *
 *   dayjs (2 kB) — used for calendar grid math:
 *   .startOf() · .daysInMonth() · .add() · .format() · .isSame() · .diff()
 *
 * 🔌 USAGE
 * ─────────
 *   import ExaminationResults from "./ExaminationResults";
 *   <ExaminationResults />
 * ══════════════════════════════════════════════════════════════════
 */

import { useState, useMemo } from "react";
import dayjs from "dayjs";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  cream:       "#F8F3EC",
  creamDark:   "#EDE5D8",
  creamBorder: "#DDD0BC",
  maroon:      "#6B1A2A",
  maroonLight: "#8B2439",
  maroonPale:  "#F9EDEF",
  green:       "#2D5E3A",
  greenLight:  "#3D7A4E",
  greenPale:   "#EAF2EB",
  gold:        "#B8922A",
  goldPale:    "#FEF3E2",
  blue:        "#1B4FC4",
  bluePale:    "#EBF0FC",
  textDark:    "#2A1F1A",
  textMid:     "#5C4A40",
  textLight:   "#8C7A70",
  white:       "#FFFFFF",
};

// ─── CALENDAR CATEGORY CONFIG ─────────────────────────────────────────────────
const CAT = {
  academic:  { label: "Academic",  dot: C.blue,   bg: C.bluePale,   color: C.blue    },
  holiday:   { label: "Holiday",   dot: C.green,  bg: C.greenPale,  color: C.green   },
  activity:  { label: "Activity",  dot: C.gold,   bg: C.goldPale,   color: "#9A6010" },
  important: { label: "Important", dot: C.maroon, bg: C.maroonPale, color: C.maroon  },
};

// ─── DATA: QUICK LINKS ────────────────────────────────────────────────────────
const quickLinks = [
  { id: "syllabus",  icon: "📖", label: "Syllabus Details",          sub: "Know more", bg: "#6B1A2A", bgHover: "#8B2439" },
  { id: "qp",        icon: "📄", label: "GAU Question Papers",        sub: "Know more", bg: "#2D5E3A", bgHover: "#3D7A4E" },
  { id: "theory",    icon: "🗓️", label: "Forthcoming Theory Exam",    sub: "Know more", bg: "#6B1A2A", bgHover: "#8B2439" },
  { id: "practical", icon: "🔬", label: "Forthcoming Practical Exam", sub: "Know more", bg: "#2D5E3A", bgHover: "#3D7A4E" },
  { id: "results",   icon: "🏆", label: "University Results",          sub: "Know more", bg: "#B8922A", bgHover: "#C8A23A" },
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
  const [h, setH] = useState(false);
  return (
    <a href={href} onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        padding: "5px 13px", borderRadius: 8, fontSize: 12, fontWeight: 600,
        background: h ? C.maroonLight : C.maroon, color: "#F8F0E3",
        textDecoration: "none",
        boxShadow: h ? "0 4px 12px rgba(107,26,42,.35)" : "0 1px 4px rgba(107,26,42,.2)",
        transform: h ? "translateY(-1px)" : "none",
        transition: "all .18s ease", whiteSpace: "nowrap",
      }}>
      <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
      View
    </a>
  );
}

function QuickLinkCard({ ql }) {
  const [h, setH] = useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "flex", flexDirection: "column", gap: 5,
        padding: "13px 13px 11px", borderRadius: 12,
        background: h ? ql.bgHover : ql.bg, textDecoration: "none",
        transform: h ? "translateY(-3px) scale(1.02)" : "none",
        boxShadow: h ? "0 8px 24px rgba(0,0,0,.22)" : "0 2px 8px rgba(0,0,0,.14)",
        transition: "all .2s ease", cursor: "pointer",
      }}>
      <span style={{ fontSize: 20, lineHeight: 1 }}>{ql.icon}</span>
      <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.35 }}>{ql.label}</span>
      <span style={{ color: "rgba(255,255,255,.6)", fontSize: 11, fontWeight: 500, display: "flex", alignItems: "center", gap: 3 }}>
        {ql.sub}
        <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
      </span>
    </a>
  );
}

function DownloadBtn({ label }) {
  const [h, setH] = useState(false);
  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "8px 16px", borderRadius: 10,
        border: `1.5px solid ${h ? C.maroon : C.creamBorder}`,
        background: C.white, color: h ? C.maroon : C.textMid,
        fontSize: 12, fontWeight: 600, cursor: "pointer",
        transition: "all .18s", fontFamily: "inherit",
      }}>
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
    <span style={{
      display: "inline-block", padding: "1px 8px", borderRadius: 20,
      fontSize: 10, fontWeight: 700, letterSpacing: ".6px", textTransform: "uppercase",
      background: cfg.bg, color: cfg.color,
    }}>{cfg.label}</span>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// RESULTS TABLE COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════

function ResultRow({ item }) {
  const [h, setH] = useState(false);
  return (
    <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? C.cream : C.white, borderTop: `1px solid ${C.creamDark}`, transition: "background .15s" }}>
      <td style={{ padding: "12px 16px", textAlign: "center", color: C.textLight, fontWeight: 600, fontSize: 12 }}>{item.sr}</td>
      <td style={{ padding: "12px 16px", color: h ? C.maroon : C.textDark, fontWeight: 500, lineHeight: 1.5, transition: "color .15s" }}>{item.description}</td>
      <td style={{ padding: "12px 16px", textAlign: "center" }}><ViewButton href={item.link} /></td>
    </tr>
  );
}

function ResultTable({ items }) {
  return (
    <div style={{ overflow: "hidden", borderRadius: 12, border: `1px solid ${C.creamBorder}`, boxShadow: "0 1px 4px rgba(0,0,0,.05)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: C.creamDark }}>
            {[["Sr.", "52px", "left"], ["Description", "auto", "left"], ["View", "72px", "center"]].map(([lbl, w, a]) => (
              <th key={lbl} style={{ padding: "10px 16px", textAlign: a, fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.textLight, width: w }}>{lbl}</th>
            ))}
          </tr>
        </thead>
        <tbody>{items.map((item, i) => <ResultRow key={i} item={item} />)}</tbody>
      </table>
    </div>
  );
}

function TimetableRow({ item }) {
  const [h, setH] = useState(false);
  return (
    <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? C.cream : C.white, borderTop: `1px solid ${C.creamDark}`, transition: "background .15s" }}>
      <td style={{ padding: "13px 20px", textAlign: "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 27, height: 27, borderRadius: "50%", background: C.maroonPale, color: C.maroon, fontSize: 11, fontWeight: 700 }}>{item.sr}</span>
      </td>
      <td style={{ padding: "13px 20px", color: h ? C.maroon : C.textDark, fontWeight: 500, lineHeight: 1.5, transition: "color .15s" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <svg style={{ flexShrink: 0, color: h ? "rgba(107,26,42,.3)" : C.creamBorder, transition: "color .15s" }} width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          {item.description}
        </span>
      </td>
      <td style={{ padding: "13px 20px", textAlign: "center" }}><ViewButton href={item.link} /></td>
    </tr>
  );
}

function YearSection({ group, isOpen, onToggle }) {
  const internal  = !!group.isInternal;
  const openBg    = internal ? C.green : C.maroon;
  const badgeBg   = isOpen ? "rgba(255,255,255,.18)" : internal ? C.greenPale  : C.maroonPale;
  const badgeCol  = isOpen ? "#F8F0E3"               : internal ? C.green      : C.maroon;
  const yearCol   = isOpen ? "#F8F0E3"               : internal ? C.green      : C.maroon;

  return (
    <div style={{ borderRadius: 16, border: `1px solid ${C.creamBorder}`, overflow: "hidden", boxShadow: "0 1px 6px rgba(42,31,26,.06)" }}>
      <button onClick={onToggle}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: isOpen ? openBg : C.white, border: "none", cursor: "pointer", textAlign: "left", transition: "background .22s" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 22, fontWeight: 700, color: yearCol, lineHeight: 1 }}>{group.year}</span>
          <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 20, background: badgeBg, color: badgeCol, letterSpacing: ".5px" }}>
            {group.items.length} {group.items.length === 1 ? "record" : "records"}
          </span>
        </span>
        <svg style={{ width: 18, height: 18, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .3s", opacity: isOpen ? .65 : .35 }}
          fill="none" stroke={isOpen ? "#F8F0E3" : C.textMid} strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div style={{ maxHeight: isOpen ? "1400px" : "0px", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height .38s ease, opacity .25s ease" }}>
        <div style={{ padding: 14, background: "#FDFAF6" }}>
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
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} title={title}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 9, border: `1.5px solid ${h ? C.maroon : C.creamBorder}`,
        background: h ? C.maroonPale : C.white, color: h ? C.maroon : C.textMid,
        cursor: "pointer", transition: "all .18s", fontFamily: "inherit",
      }}>{children}</button>
  );
}

function DayCell({ day, currentMonth, events, isToday, selected, onClick }) {
  const [h, setH] = useState(false);
  const inMonth  = day.month() === currentMonth.month() && day.year() === currentMonth.year();
  const isSun    = day.day() === 0;
  const isSel    = selected && day.isSame(selected, "day");
  const visible  = events.slice(0, 2);
  const more     = events.length - 2;

  let bg = C.white;
  if (isSel) bg = C.maroon;
  else if (isToday) bg = C.maroonPale;
  else if (h && inMonth) bg = C.cream;

  const dateColor = isSel ? C.white : !inMonth ? C.creamBorder : isToday ? C.maroon : isSun ? C.maroon : C.textDark;

  return (
    <div onClick={() => inMonth && onClick(day)}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        minHeight: 82, borderRight: `1px solid ${C.creamBorder}`, borderBottom: `1px solid ${C.creamBorder}`,
        padding: "7px 6px 5px", background: bg,
        cursor: inMonth ? "pointer" : "default", transition: "background .15s", userSelect: "none",
      }}>
      {/* date number */}
      <div style={{
        width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: "50%", marginBottom: 4,
        background: isToday && !isSel ? C.maroon : "transparent",
        color: isToday && !isSel ? C.white : dateColor,
        fontSize: 12, fontWeight: isToday || isSel ? 700 : 500,
      }}>{day.date()}</div>

      {/* event pills */}
      {inMonth && visible.map((ev, i) => {
        const cfg = CAT[ev.category] || CAT.academic;
        return (
          <div key={i} style={{
            fontSize: 9, fontWeight: 600, padding: "2px 5px", borderRadius: 4, marginBottom: 2,
            background: isSel ? "rgba(255,255,255,.18)" : cfg.bg,
            color: isSel ? "rgba(255,255,255,.9)" : cfg.color,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: 1.5,
          }}>{ev.title}</div>
        );
      })}
      {inMonth && more > 0 && (
        <div style={{ fontSize: 9, color: isSel ? "rgba(255,255,255,.6)" : C.textLight, fontWeight: 600, marginTop: 1 }}>+{more} more</div>
      )}
    </div>
  );
}

function EventDetailPanel({ day, events, onClose }) {
  if (!day) return null;
  return (
    <div style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.creamBorder}`, boxShadow: "0 4px 24px rgba(42,31,26,.10)", overflow: "hidden" }}>
      <div style={{ background: `linear-gradient(to right,${C.maroon},${C.maroonLight})`, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ color: "rgba(248,240,227,.55)", fontSize: 11, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>{day.format("dddd")}</div>
          <div style={{ color: "#F8F0E3", fontSize: 20, fontWeight: 700, fontFamily: "'Cormorant Garamond',serif", lineHeight: 1.2 }}>{day.format("D MMMM YYYY")}</div>
        </div>
        <button onClick={onClose} style={{ background: "rgba(255,255,255,.15)", border: "none", borderRadius: "50%", width: 28, height: 28, color: "#F8F0E3", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✕</button>
      </div>
      <div style={{ padding: "14px 16px", maxHeight: 260, overflowY: "auto" }}>
        {events.length === 0 ? (
          <div style={{ textAlign: "center", padding: "24px 0", color: C.textLight }}>
            <div style={{ fontSize: 26, marginBottom: 6 }}>📭</div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>No events on this day</div>
          </div>
        ) : events.map((ev, i) => {
          const cfg = CAT[ev.category] || CAT.academic;
          return (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", borderRadius: 10, background: cfg.bg, marginBottom: 8, border: `1px solid ${cfg.dot}22` }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: cfg.dot, marginTop: 5, flexShrink: 0 }}/>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.textDark, marginBottom: 3 }}>{ev.title}</div>
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
// CALENDAR TAB — full inline calendar section
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

  const selEvents    = selected ? (eventMap[selected.format("YYYY-MM-DD")] || []) : [];
  const monthEvents  = calendarEvents.filter((e) => e.date.startsWith(current.format("YYYY-MM")));
  const counts       = Object.entries(CAT).map(([key, cfg]) => ({ ...cfg, key, count: monthEvents.filter((e) => e.category === key).length })).filter((c) => c.count > 0);
  const DAYS         = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: C.maroon, margin: 0, flex: 1 }}>
          {current.format("MMMM YYYY")}
        </h2>
        <button onClick={() => { setCurrent(today.startOf("month")); setSelected(today); }}
          style={{ padding: "7px 16px", borderRadius: 9, border: `1.5px solid ${C.creamBorder}`, background: C.white, color: C.textMid, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
          Today
        </button>
        <DownloadBtn label="Download PDF" />
        <div style={{ display: "flex", gap: 6 }}>
          <CalNavBtn onClick={() => { setCurrent((c) => c.subtract(1, "month")); setSelected(null); }} title="Previous month">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </CalNavBtn>
          <CalNavBtn onClick={() => { setCurrent((c) => c.add(1, "month")); setSelected(null); }} title="Next month">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </CalNavBtn>
        </div>
      </div>

      {/* Two-column layout: calendar + sidebar */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 264px", gap: 20, alignItems: "start" }}>

        {/* LEFT — Calendar grid */}
        <div>
          <div style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.creamBorder}`, overflow: "hidden", boxShadow: "0 2px 18px rgba(42,31,26,.08)" }}>
            {/* Day name header */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", background: C.maroon }}>
              {DAYS.map((d, i) => (
                <div key={d} style={{ padding: "11px 4px", textAlign: "center", fontSize: 10, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: i === 0 ? "#FFB3B3" : "rgba(248,240,227,.7)" }}>{d}</div>
              ))}
            </div>

            {/* Grid cells */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
              {grid.map((day, idx) => {
                const key = day.format("YYYY-MM-DD");
                const evs = eventMap[key] || [];
                const isTd = day.isSame(today, "day");
                // remove right border on every 7th cell, bottom border on last row
                const isLastCol  = (idx + 1) % 7 === 0;
                const isLastRow  = idx >= 35;
                return (
                  <div key={idx} style={{ display: "contents" }}>
                    <div style={{
                      minHeight: 82,
                      borderRight: isLastCol ? "none" : `1px solid ${C.creamBorder}`,
                      borderBottom: isLastRow ? "none" : `1px solid ${C.creamBorder}`,
                    }}>
                      <DayCell day={day} currentMonth={current} events={evs} isToday={isTd} selected={selected} onClick={setSelected} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Month summary pills */}
          {counts.length > 0 && (
            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {counts.map((c) => (
                <div key={c.key} style={{ display: "flex", alignItems: "center", gap: 6, background: C.white, border: `1px solid ${C.creamBorder}`, borderRadius: 8, padding: "5px 12px", fontSize: 12, color: C.textMid }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot }}/>
                  <span style={{ fontWeight: 700, color: c.color }}>{c.count}</span>
                  <span>{c.label}</span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: C.white, border: `1px solid ${C.creamBorder}`, borderRadius: 8, padding: "5px 12px", fontSize: 12, color: C.textMid }}>
                <span style={{ fontWeight: 700, color: C.textDark }}>{monthEvents.length}</span>
                <span>total this month</span>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 64 }}>

          {/* Event detail / prompt */}
          {selected ? (
            <EventDetailPanel day={selected} events={selEvents} onClose={() => setSelected(null)} />
          ) : (
            <div style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.creamBorder}`, padding: "20px 16px", textAlign: "center", boxShadow: "0 2px 12px rgba(42,31,26,.06)" }}>
              <div style={{ fontSize: 30, marginBottom: 8 }}>📅</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.textDark, marginBottom: 4 }}>Select a date</div>
              <div style={{ fontSize: 12, color: C.textLight, lineHeight: 1.5 }}>Click any date to see events for that day.</div>
            </div>
          )}

          {/* Legend */}
          <div style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.creamBorder}`, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", background: C.creamDark, borderBottom: `1px solid ${C.creamBorder}` }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: C.textLight }}>Legend</span>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 9 }}>
              {Object.entries(CAT).map(([key, cfg]) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 3, background: cfg.bg, border: `1.5px solid ${cfg.dot}`, flexShrink: 0 }}/>
                  <span style={{ fontSize: 12, color: C.textMid, fontWeight: 500 }}>{cfg.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Up */}
          <div style={{ background: C.white, borderRadius: 14, border: `1px solid ${C.creamBorder}`, overflow: "hidden" }}>
            <div style={{ padding: "11px 16px", background: C.creamDark, borderBottom: `1px solid ${C.creamBorder}` }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: C.textLight }}>Coming Up</span>
            </div>
            <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
              {calendarEvents
                .filter((e) => dayjs(e.date).isSame(today, "day") || dayjs(e.date).isAfter(today, "day"))
                .sort((a, b) => dayjs(a.date).diff(dayjs(b.date)))
                .slice(0, 5)
                .map((ev, i) => {
                  const cfg = CAT[ev.category] || CAT.academic;
                  const d   = dayjs(ev.date);
                  return (
                    <div key={i}
                      onClick={() => { setCurrent(d.startOf("month")); setSelected(d); }}
                      onMouseEnter={(e) => e.currentTarget.style.background = C.cream}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                      style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", padding: "8px 8px", borderRadius: 9, transition: "background .15s" }}>
                      <div style={{ flexShrink: 0, textAlign: "center", minWidth: 38, background: cfg.bg, borderRadius: 8, padding: "4px 0" }}>
                        <div style={{ fontSize: 15, fontWeight: 700, color: cfg.color, fontFamily: "'Cormorant Garamond',serif", lineHeight: 1 }}>{d.format("D")}</div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: cfg.color, letterSpacing: "1px", textTransform: "uppercase" }}>{d.format("MMM")}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: C.textDark, lineHeight: 1.35, marginBottom: 2 }}>{ev.title}</div>
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
    ? resultsData.map((g) => ({ ...g, items: g.items.filter((i) => i.description.toLowerCase().includes(search.toLowerCase())) })).filter((g) => g.items.length > 0)
    : resultsData;

  const toggleYear = (y) => setOpenYear((p) => (p === y ? null : y));

  return (
    <section style={{ minHeight: "100vh", background: C.cream, fontFamily: "'DM Sans',sans-serif" }}>

      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes erFadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
        .er-fade { animation: erFadeUp .28s ease both; }
        .er-search:focus { outline:none; border-color:#6B1A2A !important; box-shadow:0 0 0 3px rgba(107,26,42,.1) !important; }
        * { box-sizing: border-box; }
      `}</style>

      {/* ══ HERO ══ */}
      <div style={{ background: "linear-gradient(135deg,#6B1A2A 0%,#4A1020 55%,#2D1A0E 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .04, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.5) 39px,rgba(255,255,255,.5) 40px)" }}/>
        <div style={{ position: "absolute", right: 48, top: 12, fontSize: 120, opacity: .04, color: "#fff", fontFamily: "serif", lineHeight: 1, userSelect: "none" }}>ॐ</div>
        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "40px 24px 36px", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.20)", color: "#E8C870", fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", padding: "5px 14px", borderRadius: 20, marginBottom: 14 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8C870", display: "inline-block" }}/>
            NAAC A+ Accredited
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, color: "#F8F0E3", lineHeight: 1.2, margin: "0 0 8px" }}>
            Examination &amp; Results
          </h1>
          <p style={{ color: "rgba(248,240,227,.55)", fontSize: 13, maxWidth: 460, lineHeight: 1.6, margin: 0 }}>
            Timetables, university results, internal exam mark sheets, and the academic calendar — all in one place.
          </p>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(144px,1fr))", gap: 10 }}>
            {quickLinks.map((ql) => <QuickLinkCard key={ql.id} ql={ql} />)}
          </div>
        </div>
      </div>

      {/* ══ TAB BAR ══ */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.creamBorder}`, position: "sticky", top: 0, zIndex: 20, boxShadow: "0 1px 6px rgba(42,31,26,.07)" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto" }}>
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "14px 18px", background: "none", border: "none",
                  borderBottom: `2.5px solid ${active ? C.maroon : "transparent"}`,
                  color: active ? C.maroon : C.textLight, fontFamily: "inherit",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all .2s",
                  display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap",
                }}>
                {tab.label}
                <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 6, background: active ? C.maroonPale : C.creamDark, color: active ? C.maroon : C.textLight }}>{tab.badge}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══ CONTENT ══ */}
      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 24px 80px" }}>

        {/* ── TIMETABLE ── */}
        {activeTab === "timetable" && (
          <div className="er-fade">
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: C.maroon, margin: 0 }}>Exam Timetable — {timetableData.year}</h2>
                <p style={{ fontSize: 12, color: C.textLight, marginTop: 3, marginBottom: 0 }}>Official examination schedules for all professional years</p>
              </div>
              <DownloadBtn label="Download All" />
            </div>
            <div style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.creamBorder}`, overflow: "hidden", boxShadow: "0 2px 16px rgba(42,31,26,.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 20px", background: `linear-gradient(to right,${C.maroon},${C.maroonLight})` }}>
                <svg width="16" height="16" fill="none" stroke="rgba(248,240,227,.7)" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                <span style={{ color: "#F8F0E3", fontSize: 13, fontWeight: 600 }}>BAMS Examination Timetable – 2025</span>
                <span style={{ marginLeft: "auto", color: "rgba(248,240,227,.5)", fontSize: 12 }}>{timetableData.items.length} entries</span>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: C.creamDark, borderBottom: `1px solid ${C.creamBorder}` }}>
                    {[["Sr.", "52px", "left"], ["Description", "auto", "left"], ["View", "80px", "center"]].map(([lbl, w, a]) => (
                      <th key={lbl} style={{ padding: "11px 20px", textAlign: a, fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: C.textLight, width: w }}>{lbl}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>{timetableData.items.map((item, i) => <TimetableRow key={i} item={item} />)}</tbody>
              </table>
            </div>
            <p style={{ marginTop: 14, fontSize: 12, color: C.textLight, background: C.white, border: `1px solid ${C.creamBorder}`, borderRadius: 12, padding: "12px 18px" }}>
              <strong style={{ color: C.maroon }}>Note: </strong>Timetable is subject to change as per MUHS notification.
            </p>
          </div>
        )}

        {/* ── RESULTS ── */}
        {activeTab === "results" && (
          <div className="er-fade">
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 22 }}>
              <div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: C.maroon, margin: 0 }}>University Results</h2>
                <p style={{ fontSize: 12, color: C.textLight, marginTop: 3, marginBottom: 0 }}>Click any year to expand — all BAMS professional examinations</p>
              </div>
              <div style={{ position: "relative" }}>
                <svg style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="13" height="13" fill="none" stroke={C.textLight} strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input className="er-search" type="text" placeholder="Search results…" value={search} onChange={(e) => setSearch(e.target.value)}
                  style={{ paddingLeft: 32, paddingRight: 14, paddingTop: 8, paddingBottom: 8, fontSize: 13, borderRadius: 10, border: `1.5px solid ${C.creamBorder}`, background: C.white, color: C.textDark, width: 210, fontFamily: "inherit", transition: "border-color .2s, box-shadow .2s" }}/>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {filtered.map((group) => <YearSection key={group.year} group={group} isOpen={openYear === group.year} onToggle={() => toggleYear(group.year)} />)}
              {search && filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 0", color: C.textLight }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>🔍</div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>No results found for "{search}"</div>
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
      <div style={{ background: C.textDark, textAlign: "center", padding: "18px 24px" }}>
        <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,.3)" }}>
          © 2026 <span style={{ color: C.gold }}>Dhanvantari Ayurveda College &amp; Hospital</span> &nbsp;|&nbsp; Affiliated to MUHS &nbsp;|&nbsp; NAAC A+ Accredited
        </p>
      </div>
    </section>
  );
}
