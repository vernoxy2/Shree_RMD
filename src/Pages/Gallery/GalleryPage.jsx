import { Children, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import GalleryBg from "../../assets/Gallery/GalleryBg.png";
import LazyImage from "../../Components/Ui/LazyImage";
import { GalleryItems } from "./GalleryItems";
import { IoArrowBackOutline } from "react-icons/io5";

const ALL_TAGS = [
  "All",
  "Academic",
  "Events & Culture",
  "Visits & Campus",
  "Community",
  "Health & Wellness",
];

function FilterChip({ label, active, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap transition-all hover:-translate-y-[1px]
  ${
    active
      ? "bg-primary text-white border-primary shadow-[0_4px_12px_rgba(166,58,75,0.3)]"
      : "bg-white text-gray-500 border-[#e5dede]"
  }`}
    >
      {label}
      <span
        className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active ? "text-white bg-white/20" : "text-primary bg-primary/10"}`}
      >
        {count}
      </span>
    </button>
  );
}

function GalleryCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl p-4 border hover:border-primary border-[#ede5e6]/70 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_16px_40px_rgba(166,58,75,0.18)]"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-28 h-28 p-6 rounded-xl flex items-center justify-center text-xl shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 bg-Bg"
          // style={{ background: tagStyle.bg }}
        >
          <img src={item.icon} alt="" />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className=" text-xl leading-snug mb-1.5">{item.name}</h2>

          <p className=" px-2 py-0.5 rounded-full border border-primary text-secondary bg-Bg w-fit text-sm">
            {item.tag}
          </p>
        </div>

        <div className="shrink-0 mt-1 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#fff5f6]">
            <FaChevronRight size={16} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryDetailView({ item, onBack }) {
  const images = item.images || [];
  const [active, setActive] = useState(null);

  return (
    <div
      className="bg-cover py-16 min-h-screen"
        style={{ backgroundImage: `url(${GalleryBg})` }}// keep your GalleryBg
    >
      <div className="container space-y-8">
        {/* ── Header ── */}
        <div className="space-y-4">
          {/* <h1 className="border-l-4 border-primary pl-5">{item.name}</h1> */}
          <button
            onClick={onBack}
            onSelectItem={onBack}
            className="flex items-center gap-1.5  font-semibold rounded-full px-3 py-1 border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors"
          >
            <IoArrowBackOutline />

            Back
          </button>
        </div>

        {/* ── Photo grid — mirrors image 2 layout ── */}
        {images.length === 0 ? (
          <h2 className="text-center text-gray-400 py-20">
            No images available.
          </h2>
        ) : (
          <div className="columns-2 sm:columns-3 gap-4 space-y-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setActive(src)}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-200 hover:shadow-lg"
              >
                <img
                  src={src}
                  alt={`${item.name} ${idx + 1}`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {active && (
        <div
          className="fixed  inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className=" max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-9 right-0 text-white text-lg font-bold opacity-70 hover:opacity-100"
            >
              ✕ Close
            </button>
            <img
              src={active}
              alt="preview"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// function GalleryCard2({ item }) {
//   return (
//     <div className="flex items-center gap-1.5 group">
//       <div className="flex-1 flex gap-3 p-4 border h-full rounded-3xl border-primary bg-white">
//         <div className="p-3">
//           <div className="border rounded-full h-12 w-12 p-1.5 felx items-center justify-center overflow-hidden bg-Bg">
//             <LazyImage
//               src={item.icon}
//               alt={item.name}
//               className="w-full inset-full object-cover "
//             />
//           </div>
//         </div>
//         <div className="py-4">
//           <h2 className="text-xl">{item.name}</h2>
//         </div>
//       </div>
//       <div className="w-2.5 cursor-pointer bg-primary py-20 rounded-3xl group-hover:w-20 duration-500 flex items-center justify-center text-white">
//         <FaChevronRight className="text-3xl opacity-0 group-hover:opacity-100 duration-500" />
//       </div>
//     </div>
//   );
// }

export default function GalleryPage({ onSelectItem }) {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelectItem?.(item?.name ?? null); // sends name up, null on back
  };

  if (selectedItem) {
    return (
      <GalleryDetailView
        item={selectedItem}
        onBack={() => handleSelect(null)}
      />
    );
  }

  const filtered = GalleryItems.filter((item) => {
    const tagMatch = activeTag === "All" || item.tag === activeTag;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    return tagMatch && searchMatch;
  });

  const tagCounts = {};
  GalleryItems.forEach((i) => {
    tagCounts[i.tag] = (tagCounts[i.tag] || 0) + 1;
  });

  return (
    <div className="py-14">
      {/* SEARCH + FILTER — unchanged */}
      <div className="container sticky top-0 bg-white border-b border-[#ede5e6] z-20">
        <div className="py-3 space-y-4">
          <input
            type="text"
            placeholder="Search gallery…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-primary/5 border border-[#ede5e6] outline-none placeholder:text-primary/50"
          />
          <div className="flex gap-2 overflow-x-auto pt-1">
            {ALL_TAGS.map((tag) => (
              <FilterChip
                key={tag}
                label={tag}
                active={activeTag === tag}
                count={tag === "All" ? GalleryItems.length : tagCounts[tag]}
                onClick={() => setActiveTag(tag)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <section
        className="bg-cover"
        style={{ backgroundImage: `url(${GalleryBg})` }}
      >
        <div className="container py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => handleSelect(item)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
