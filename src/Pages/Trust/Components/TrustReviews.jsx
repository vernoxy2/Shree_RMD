import React, { useState } from "react";
import CommaPrimary from "../../../assets/CommaPrimary.svg";
import Comma100 from "../../../assets/Comma100.svg";
import DrSandip from "../../../assets/Trust/TrustReviews/DrSandip.svg";
import LazyImage from "../../../Components/Ui/LazyImage";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = [
  {
    id: 1,
    name: "Dr. Sandip Patil",
    review:
      "It's One of the Famous Ayurved College & Hospital in Valsad district and provide Ayurved treatment along with Panchakarma in Reasonable rates.",
    image: DrSandip,
  },
  {
    id: 2,
    name: "Dr. Sandip Patil",
    review:
      "It's One of the Famous Ayurved College & Hospital in Valsad district and provide Ayurved treatment along with Panchakarma in Reasonable rates.",
    image: DrSandip,
  },
  {
    id: 3,
    name: "Dr. Sandip Patil",
    review:
      "It's One of the Famous Ayurved College & Hospital in Valsad district and provide Ayurved treatment along with Panchakarma in Reasonable rates.",
    image: DrSandip,
  },
];

const TrustReviews = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? Reviews.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrent((prev) => (prev === Reviews.length - 1 ? 0 : prev + 1));

  const activeReview = Reviews[current];

  return (
    <section className="bg-primary/5">
      <div className="py-20 container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        {/* LEFT: Doctor Image Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl relative"
          >
            <div className="relative rounded-2xl">
              <LazyImage
                src={activeReview.image}
                alt={activeReview.name}
                className="w-full object-cover"
              />

              <div className="absolute bottom-12 left-6 px-4 py-3">
                <h2 className="font-semibold text-white">
                  {activeReview.name}
                </h2>
              </div>

              <div className="absolute bottom-3 -right-5 bg-primary rounded-full w-24 h-24 flex items-center justify-center z-20">
                <img src={Comma100} alt="quote" className="w-12 h-12" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT: Review Content */}
        <div className="flex flex-col justify-center gap-6">
          <h1 data-aos="fade-up">Client's Reviews</h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <img src={CommaPrimary} alt="quote" className="w-8 h-8" />

              <p className="max-w-lg">{activeReview.review}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Row */}
          <div data-aos="fade" data-aos-delay="300" className="flex items-center gap-4 pt-2">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full shadow flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Previous review"
            >
              <FaChevronLeft size={22} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full shadow flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Next review"
            >
              <FaChevronRight size={22} />
            </button>

            {/* Progress Line */}
            <div className="flex-1 h-px bg-gray-200 relative">
              <div
                className="absolute top-0 left-0 h-px bg-primary transition-all duration-300"
                style={{
                  width: `${((current + 1) / Reviews.length) * 100}%`,
                }}
              />
            </div>

            {/* Counter */}
            <div className="flex items-baseline gap-0.5">
              <h1>{String(current + 1).padStart(2, "0")}</h1>
              <p>/ {String(Reviews.length).padStart(2, "0")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustReviews;
