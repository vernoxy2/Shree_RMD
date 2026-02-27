import { useState, useMemo } from "react";

const FileIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TAG_STYLES = {
  Sports: "bg-green-100 text-green-800",
  Health: "bg-blue-100 text-blue-800",
  Cultural: "bg-orange-100 text-orange-800",
  Seminar: "bg-purple-100 text-purple-800",
  Civic: "bg-indigo-100 text-indigo-800",
  Admin: "bg-pink-100 text-pink-800",
  General: "bg-lime-100 text-lime-800",
};

const REPORTS = [
  { name: "SPORTS DAY REPORT Utkarsha Utsava – 2K25", tag: "Sports" },
  {
    name: "Report of Celebration of World Breastfeeding Week 2025",
    tag: "Health",
  },
  {
    name: "Post Event Report on National Doctor's Day Celebration",
    tag: "Health",
  },
  {
    name: "Post Event Report — 27th Intercollege Youth Festival of Gujarat Ayurved University, Jamnagar",
    tag: "Cultural",
  },
  {
    name: "Post Event Report Regarding Cultural Events and Hemotsav",
    tag: "Cultural",
  },
  {
    name: "Post Event Report Regarding Vasant Panchami Celebrations",
    tag: "Cultural",
  },
  { name: "Celebrating the 75th Republic Day", tag: "Civic" },
  { name: "Orientation Program for NAAC/NABH", tag: "Admin" },
  { name: 'Seminar on "Nadi Pariksha"', tag: "Seminar" },
];

const CATEGORIES = [
  "All Categories",
  "Sports",
  "Health",
  "Cultural",
  "Seminar",
  "Civic",
  "Admin",
  "General",
];

export default function ActivityReports() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const filtered = useMemo(() => {
    return REPORTS.filter((r) => {
      const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All Categories" || r.tag === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <div className=" bg-[#FFF6F6] font-sans pt-8 ">
      {/* Google Fonts */}
      <div className="container">
        {/* Page Header */}
        {/* <div className="bg-white border-b border-gray-200 px-12 pt-8 pb-6">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">
          Institution Portal &rsaquo;{" "}
          <span style={{ color: "#8B1A2B" }}>Activity Reports</span>
        </p>
        <h1 className="font-playfair text-3xl font-medium text-gray-900 tracking-tight">
          Activity Reports
        </h1>
        <p className="text-sm text-gray-400 mt-1 font-light">
          Post-event documentation and institutional activity records
        </p>
      </div> */}

        {/* Toolbar */}
        <div className=" border-b border-gray-200 px-12 py-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative flex items-center">
              <span className="absolute left-3 text-secondary pointer-events-none">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search reports…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 w-72 border border-gray-200 rounded-lg text-sm text-gray-900 bg-gray-50 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-red-900/10"
              />
            </div>

            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 bg-gray-50 outline-none cursor-pointer transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-red-900/10"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <p className=" text-secondary ">
            <span className="font-medium ">{filtered.length}</span> reports
            found
          </p>
        </div>

        {/* Table */}
        <div className="px-12 py-6 pb-12">
          {filtered.length > 0 ? (
            <div className="w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left text-white font-inter font-medium tracking-widest px-5 py-3.5">
                      Report Name
                    </th>
                    <th className="text-left text-white font-inter font-medium tracking-widest px-5 py-3.5 w-36">
                      Category
                    </th>
                    <th className="text-center text-white font-inter font-medium tracking-widest px-5 py-3.5 w-28">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((report, i) => (
                    <tr
                      key={i}
                      className="row-animate border-t border-gray-100 transition-colors duration-150 hover:bg-red-50/40"
                      style={{ animationDelay: `${i * 0.04}s` }}
                    >
                      {/* Report Name */}
                      <td className="px-5 py-4">
                        <div className="flex items-start gap-3">
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                            style={{
                              backgroundColor: "#f8f0f1",
                              color: "#8B1A2B",
                            }}
                          >
                            <FileIcon />
                          </div>
                          <span className="font-inter font-medium text-gray-800 leading-snug">
                            {report.name}
                          </span>
                        </div>
                      </td>

                      {/* Tag */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block font-inter px-2.5 py-0.5 rounded-full font-normal ${TAG_STYLES[report.tag] || "bg-gray-100 text-gray-600"}`}
                        >
                          {report.tag}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-4 text-center">
                        <button
                          className="
      inline-flex items-center gap-1.5
      px-4 py-1.5 rounded-lg text-xs font-medium
      border border-primary
      text-primary
      transition-all duration-200
      hover:bg-primary
      hover:text-white
      hover:scale-105
    "
                        >
                          <EyeIcon />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <SearchIcon />
              <p className="mt-3 text-sm">No reports match your search.</p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-end gap-1.5 mt-5">
            <button
              disabled
              className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-300 cursor-not-allowed"
            >
              <ChevronLeftIcon />
            </button>
            <button className="w-8 h-8 rounded-lg border text-white text-sm font-medium flex items-center justify-center bg-primary">
              1
            </button>
            <button className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-red-800 hover:text-red-800 transition-colors">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
