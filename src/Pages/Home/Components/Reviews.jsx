import React, { useState, useEffect } from "react";
import ReviewsBg from "../../../assets/HomePage/Reviews/ReviewsBg.webp";
import comma from "../../../assets/HomePage/Reviews/comma.svg";
import { Clints } from "./Clints";
import LazyImage from "../../../Components/Ui/LazyImage";

const orbitalSlots = [
  { top: "4%",  left: "66%", w: 80, h: 80 },
  { top: "25%", left: "85%", w: 80, h: 80 },
  { top: "55%", left: "85%", w: 80, h: 80 },
  { top: "82%", left: "66%", w: 80, h: 80 },
];

const Reviews = () => {
  const [active, setActive]       = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const t = setInterval(() => change((active + 1) % Clints.length), 4000);
    return () => clearInterval(t);
  }, [active]);

  const change = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(idx);
      setActive(idx);
      setAnimating(false);
    }, 300);
  };

  return (
    <section
      className="relative bg-cover bg-center mb-14 overflow-hidden"
      style={{ backgroundImage: `url(${ReviewsBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative container py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* ── LEFT: Orbital Avatar Cluster ── */}
        <div className="">
          <div className="relative w-[500px] h-[500px]">

            {/* Dashed orbit ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-white/25 pointer-events-none" />

            {/* Main center avatar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[350px] h-[350px] rounded-full overflow-hidden">
              <img
                src={Clints[displayed].profile}
                alt={Clints[displayed].name}
                className={`w-full h-full object-cover object-top transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
              />
            </div>

            {/* Orbital mini avatars */}
            {Clints.slice(0, 4).map((client, i) => (
              <button
                key={client.id ?? i}
                onClick={() => change(i)}
                className={`absolute rounded-full overflow-hidden cursor-pointer focus:outline-none transition-all duration-300 hover:scale-110 z-50
                  ${active === i
                    ? "border-[3px] border-primary"
                    : "border-[3px] border-white shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
                  }`}
                style={{
                  top:    orbitalSlots[i].top,
                  left:   orbitalSlots[i].left,
                  width:  orbitalSlots[i].w,
                  height: orbitalSlots[i].h,
                }}
                title={client.name}
              >
                <img
                  src={client.profile}
                  alt={client.name}
                  className={`w-full h-full object-cover object-top `}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Review Content ── */}
        <div className="mt-10 space-y-6">

          

          {/* Heading */}
          <h1 className="text-white">
            Client's Reviews
          </h1>

          {/* Accent bar */}
          <div className="w-44 h-0.5 rounded-full bg-gradient-to-r from-white to-transparent" />

          {/* Review text */}
          <p className={`text-white max-w-md transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
            {Clints[displayed].reviewsText}
          </p>

          {/* Comma icon + Name */}
          <div className="flex gap-5 items-center pt-5">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-rose-500/20 border border-rose-500/30 flex-shrink-0">
              <LazyImage src={comma} alt={Clints[displayed].name} className="" />
            </div>
            <h2 className={`text-white tracking-wide transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
              {Clints[displayed].name}
            </h2>
          </div>

          {/* Dot navigation */}
          <div className="flex items-center gap-2 pt-2">
            {Clints.slice(0, 4).map((_, i) => (
              <button
                key={i}
                onClick={() => change(i)}
                className={`border-none cursor-pointer focus:outline-none p-0 h-2 transition-all duration-300
                  ${active === i
                    ? "w-[22px] rounded bg-primary"
                    : "w-2 rounded-full bg-white/35"
                  }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;