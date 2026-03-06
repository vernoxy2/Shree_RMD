import { useState } from "react";

const C = {
  primary: "#A63A4B",
  sub: "#676767",
  dark: "#1a0a0d",
  light: "#fff5f6",
  cream: "#fdf8f8",
};

const GALLERY_ITEMS = [
  { id: 1, name: "Punarnava Visit", icon: "🌿", tag: "Visits & Campus" },
  { id: 2, name: "NSS Activity", icon: "🤝", tag: "Community" },
  { id: 3, name: "Medical Camp", icon: "🏕️", tag: "Community" },
  { id: 4, name: "Wellness Program", icon: "💆", tag: "Health & Wellness" },
  { id: 5, name: "Seminar", icon: "🎤", tag: "Academic" },
  { id: 6, name: "Cultural Activities", icon: "🎭", tag: "Events & Culture" },
  { id: 7, name: "Sport Activities", icon: "⚽", tag: "Events & Culture" },
  { id: 8, name: "Campus", icon: "🏛️", tag: "Visits & Campus" },
];

const ALL_TAGS = [
  "All",
  "Academic",
  "Events & Culture",
  "Visits & Campus",
  "Community",
  "Health & Wellness",
];

const TAG_COLORS = {
  Academic: { bg: "#f3f0fb", color: "#5b3ea6", border: "#c0aee8" },
  "Events & Culture": { bg: "#fdf2f8", color: "#9d174d", border: "#f0abcc" },
  "Visits & Campus": { bg: "#f0faf4", color: "#2d7a4f", border: "#a7d9ba" },
  Community: { bg: "#eff6ff", color: "#1e5fa8", border: "#93c5fd" },
  "Health & Wellness": { bg: "#f0fdfa", color: "#0f766e", border: "#99f6e4" },
};

const getTagStyle = (tag) =>
  TAG_COLORS[tag] || { bg: "#f8fafc", color: "#475569", border: "#cbd5e1" };

function FilterChip({ label, active, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap transition-all hover:-translate-y-[1px]"
      style={
        active
          ? {
              background: C.primary,
              color: "#fff",
              borderColor: C.primary,
              boxShadow: "0 4px 12px rgba(166,58,75,0.3)",
            }
          : { background: "#fff", color: C.sub, borderColor: "#e5dede" }
      }
    >
      {label}
      <span
        className="text-xs px-1.5 py-0.5 rounded-full font-bold"
        style={
          active
            ? { background: "rgba(255,255,255,0.25)", color: "#fff" }
            : { background: "#f5eeee", color: C.primary }
        }
      >
        {count}
      </span>
    </button>
  );
}

function GalleryCard({ item }) {
  const tagStyle = getTagStyle(item.tag);

  return (
    <div className="group bg-white rounded-2xl p-4 border border-[#ede5e6] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_16px_40px_rgba(166,58,75,0.18)]">
      <div className="flex items-start gap-3">
        <div
          className="w-24 h-24 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3"
          style={{ background: tagStyle.bg }}
        >
          {item.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm leading-snug mb-1.5 text-[#1a0a0d]">
            {item.name}
          </p>

          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full border"
            style={{
              background: tagStyle.bg,
              color: tagStyle.color,
              borderColor: tagStyle.border,
            }}
          >
            {item.tag}
          </span>
        </div>

        <div className="shrink-0 mt-1 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#fff5f6]">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke={C.primary}
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = GALLERY_ITEMS.filter((item) => {
    const tagMatch = activeTag === "All" || item.tag === activeTag;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    return tagMatch && searchMatch;
  });

  const tagCounts = {};
  GALLERY_ITEMS.forEach((i) => {
    tagCounts[i.tag] = (tagCounts[i.tag] || 0) + 1;
  });

  return (
    <div className="py-14 container ">
      {/* HERO */}

      {/* SEARCH + FILTER */}
      <div className="sticky top-0 bg-white border-b border-[#ede5e6]  z-20 ">
        <div className="py-3 space-y-4">
          {/* <div className="flex items-center justify-between gap-6 "> */}
            <input
              type="text"
              placeholder="Search gallery…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full  px-4 py-2 rounded-lg text-sm font-medium bg-primary/5 border border-[#ede5e6] outline-none placeholder:text-primary/50"
            />
            {/* <div className="flex justify-center gap-6 ">
              {[
                { n: GALLERY_ITEMS.length, label: "Albums" },
                { n: ALL_TAGS.length - 1, label: "Categories" },
                { n: "2019–", label: "Since" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center px-5 py-3 rounded-2xl bg-primary"
                >
                  <p className="text-2xl font-black text-white">{s.n}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div> */}
          {/* </div> */}

          <div className="flex gap-2 overflow-x-auto pt-1">
            {ALL_TAGS.map((tag) => (
              <FilterChip
                key={tag}
                label={tag}
                active={activeTag === tag}
                count={tag === "All" ? GALLERY_ITEMS.length : tagCounts[tag]}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="container py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* BACK TO TOP */}
      {/* <div className="flex justify-center pb-10">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          style={{ background: C.primary }}
        >
          ↑ Back to top
        </button>
      </div> */}
    </div>
  );
}
