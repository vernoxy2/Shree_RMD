import { useState } from "react";

const C = {
  primary: "#A63A4B",
  sub: "#676767",
  cream: "#FDF8F3",
  parchment: "#F5EDE0",
  border: "#E8D9C8",
  darkText: "#2C1810",
};

const TRAINING_MATERIALS = [
  { id: 1, name: "Ayu Samvad Training Materials", icon: "📋" },
  { id: 2, name: "Annexures AYU SAMVAD", icon: "📎" },
  { id: 3, name: "AYUSAMVAD", icon: "📄" },
  { id: 4, name: "Ayurveda for Covid-19", icon: "🌿" },
  { id: 5, name: "Letter AYU SAMVAD", icon: "✉️" },
];

const ACTIVITIES = [
  {
    id: 1,
    name: "Medical Camp",
    description:
      "RMD ACH and Gayatri Parivar jointly organised Servrog Nidan medical camp",
    tag: "Community",
    color: "#2d7a4f",
    bg: "#f0faf4",
    border: "#a7d9ba",
    icon: "🏕️",
  },
  {
    id: 2,
    name: "CME",
    description: "RMD and Association of ISMV organised in June 2019",
    tag: "Education",
    color: "#1e5fa8",
    bg: "#eff6ff",
    border: "#93c5fd",
    icon: "🎓",
  },
  {
    id: 3,
    name: "Awareness Camp",
    description: "Report of Health and Nutrition Awareness Camp",
    tag: "Awareness",
    color: "#92400e",
    bg: "#fffbeb",
    border: "#fcd34d",
    icon: "💡",
  },
  {
    id: 4,
    name: "Woman Empowerment Program",
    description: "Report of Health Awareness & Woman Empowerment Program",
    tag: "Empowerment",
    color: "#A63A4B",
    bg: "#fdf4f5",
    border: "#e8a8b0",
    icon: "💪",
  },
  {
    id: 5,
    name: "Distribution of Nutrition Kit",
    description:
      "Report of Nutrition Awareness Rally and Distribution of Nutrition Kit",
    tag: "Outreach",
    color: "#5b3ea6",
    bg: "#f3f0fb",
    border: "#c0aee8",
    icon: "🎁",
  },
];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

  .ha-root { font-family: 'Lora', Georgia, serif; }
  .ha-display { font-family: 'Playfair Display', Georgia, serif; }

  .ha-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .ha-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(166,58,75,0.13);
  }

  .ha-doc-row {
    transition: background 0.15s ease, transform 0.15s ease;
  }
  .ha-doc-row:hover {
    background: #fdf4f5 !important;
    transform: translateX(4px);
  }

  .ha-btn {
    transition: background 0.15s, color 0.15s, transform 0.15s;
  }
  .ha-btn:hover {
    transform: scale(1.04);
  }

  .ha-ornament {
    background: repeating-linear-gradient(
      90deg,
      #A63A4B 0px, #A63A4B 6px,
      transparent 6px, transparent 12px,
      #E8D9C8 12px, #E8D9C8 18px,
      transparent 18px, transparent 24px
    );
    height: 3px;
  }

  .ha-section-line::before {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(90deg, #A63A4B, #E8D9C8 60%, transparent);
    margin-bottom: 20px;
  }

  .ha-num {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: #A63A4B;
    opacity: 0.25;
    font-size: 2.5rem;
    line-height: 1;
    font-weight: 900;
    user-select: none;
  }

  .breadcrumb-sep::after {
    content: '›';
    margin: 0 6px;
    color: #E8D9C8;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.5s ease both; }
  .delay-1 { animation-delay: 0.08s; }
  .delay-2 { animation-delay: 0.16s; }
  .delay-3 { animation-delay: 0.24s; }
  .delay-4 { animation-delay: 0.32s; }
  .delay-5 { animation-delay: 0.40s; }
`;

function ViewButton({ label = "View" }) {
  return (
    <button
      className="ha-btn flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
      style={{ background: C.primary, color: "#fff", letterSpacing: "0.04em" }}
    >
      {label}
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function HospitalActivitiesPage() {
  const [activeSection, setActiveSection] = useState("all");

  return (
    <div className="container py-16">
      {/* <style>{style}</style> */}

      {/* Top stripe */}
      <div className="ha-ornament w-full" />

      {/* Header */}
      <header
        className="   border-primary"
        style={{
         
          // borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="">
          {/* Breadcrumb */}
          {/* <nav
            className="flex items-center text-xs mb-4"
            style={{ color: C.sub }}
          >
            <span
              className="breadcrumb-sep font-medium"
              style={{ color: C.primary }}
            >
              Home
            </span>
            <span className="breadcrumb-sep" style={{ color: C.sub }}>
              Hospital Activities
            </span>
            <span style={{ color: C.darkText, fontWeight: 600 }}>
              Hospital Activities
            </span>
          </nav> */}

          {/* Title block */}
          {/* <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] mb-1"
                style={{ color: C.primary }}
              >
                Shree RMD Ayurveda College &amp; Hospital
              </p>
              <h1
                className="ha-display text-3xl font-black leading-tight"
                style={{ color: C.darkText }}
              >
                Hospital
                <br />
                <span style={{ color: C.primary, fontStyle: "italic" }}>
                  Activities
                </span>
              </h1>
              <p
                className="text-sm mt-2"
                style={{ color: C.sub, fontStyle: "italic" }}
              >
                Outreach, awareness &amp; education initiatives
              </p>
            </div>

            Stats pill cluster
            <div className="flex gap-3 mt-1">
              {[
                { n: "5", label: "Documents" },
                { n: "5", label: "Programs" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center px-4 py-3 rounded-2xl"
                  style={{
                    background: "#fff",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <p
                    className="ha-display text-2xl font-black"
                    style={{ color: C.primary }}
                  >
                    {s.n}
                  </p>
                  <p className="text-xs" style={{ color: C.sub }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Filter tabs */}
          {/* <div className="flex gap-2 mt-5 overflow-x-auto pb-0.5">
            {[
              { key: "all", label: "All" },
              { key: "docs", label: "Training Materials" },
              { key: "activities", label: "Programs & Camps" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveSection(t.key)}
                className="ha-btn font-semibold px-4 py-1.5 rounded-full whitespace-nowrap border"
                style={
                  activeSection === t.key
                    ? {
                        background: C.primary,
                        color: "#fff",
                        borderColor: C.primary,
                      }
                    : {
                        background: "#fff",
                        color: C.sub,
                        borderColor: C.border,
                      }
                }
              >
                {t.label}
              </button>
            ))}
          </div> */}
        </div>
      </header>

      {/* Body */}
      <main className=" py-8 grid gap-10 lg:grid-cols-2 ">
        {/* Training Materials Section */}
        {/* {(activeSection === "all" || activeSection === "docs") && ( */}
          <section className="ha-section-line fade-up">
            <div className="flex items-baseline gap-3 mb-5">
              <h2>
                Training Materials
              </h2>
              <span
                className="text-sm px-2 py-0.5 rounded-full font-medium bg-primary/20 border border-primary/20 text-primary"
                // style={{
                //   background: C.parchment,
                //   color: C.sub,
                //   border: `1px solid ${C.border}`,
                // }}
              >
                Ayu Samvad Series
              </span>
            </div>

            <div
              className="rounded-2xl overflow-hidden bg-white border border-secondary/20"
            >
              {/* Table header */}
              <div
                className="grid grid-cols-12 px-5 py-2.5  font-bold bg-primary text-white"
                style={{
                  // background: C.parchment,
                  borderBottom: `1px solid ${C.border}`,
                  // color: C.sub,
                }}
              >
                <span className="col-span-1 text-center">#</span>
                <span className="col-span-9">Document Name</span>
                <span className="col-span-2 text-right">Action</span>
              </div>

              {TRAINING_MATERIALS.map((doc, i) => (
                <div
                  key={doc.id}
                  className={`ha-doc-row grid grid-cols-12 items-center px-5 py-3.5 ${i < TRAINING_MATERIALS.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: C.border }}
                >
                  <span className="col-span-1 ha-num text-center">{doc.id}</span>
                  <div className="col-span-9 flex items-center gap-3">
                    {/* <span className="text-base">{doc.icon}</span> */}
                    <span
                      className="text-sm font-medium"
                      style={{ color: C.darkText }}
                    >
                      {doc.name}
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <ViewButton />
                  </div>
                </div>
              ))}
            </div>
          </section>
        {/* )} */}

        {/* Activities Section */}
        {/* {(activeSection === "all" || activeSection === "activities") && ( */}
          <section className="ha-section-line fade-up delay-2">
            <div className="flex items-baseline gap-3 mb-5">
              <h2
                
              >
                Programs &amp; Camps
              </h2>
              <span
                className="text-sm px-2 py-0.5 rounded-full font-medium bg-primary/20 border border-primary/20 text-primary"
                // style={{
                //   background: C.parchment,
                //   color: C.sub,
                //   border: `1px solid ${C.border}`,
                // }}
              >
                Community Outreach
              </span>
            </div>

            <div className="grid gap-4">
              {ACTIVITIES.map((act, i) => (
                <div
                  key={act.id}
                  className={`ha-card rounded-2xl overflow-hidden fade-up delay-${Math.min(i + 1, 5)}`}
                  style={{
                    border: `1px solid ${act.border}`,
                    background: "#fff",
                  }}
                >
                  <div className="flex items-stretch">
                    {/* Left accent bar */}
                    <div
                      className="w-1.5 shrink-0 rounded-l-2xl"
                      style={{ background: act.color }}
                    />

                    {/* Icon column */}
                    <div
                      className="flex items-center justify-center w-14 shrink-0 py-4"
                      style={{ background: act.bg }}
                    >
                      <span className="text-2xl">{act.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-4 py-4 min-w-0">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{
                                background: act.bg,
                                color: act.color,
                                border: `1px solid ${act.border}`,
                              }}
                            >
                              {act.tag}
                            </span>
                            <span
                              className="ha-display text-xs italic"
                              style={{ color: C.sub }}
                            >
                              Report #{String(act.id).padStart(2, "0")}
                            </span>
                          </div>
                          <h3
                            className="ha-display font-bold text-base leading-snug"
                            style={{ color: C.darkText }}
                          >
                            {act.name}
                          </h3>
                          <p
                            className="text-xs mt-1 leading-relaxed"
                            style={{ color: C.sub, fontStyle: "italic" }}
                          >
                            {act.description}
                          </p>
                        </div>
                        <div className="shrink-0 mt-1">
                          <ViewButton label="Read Report" />
                        </div>
                      </div>
                    </div>

                    {/* Right number */}
                    <div className="flex items-center pr-4 shrink-0">
                      <span className="ha-num">{act.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        {/* )} */}

        {/* Footer rule */}
        
      </main>
    </div>
  );
}
