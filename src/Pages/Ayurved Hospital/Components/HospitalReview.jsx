import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DrSandip from "../../../assets/AyurvedHospital/HospitalReviewImgs/DeepChand.svg";
import Comma50 from "../../../assets/Comma50.svg";
import { motion, AnimatePresence } from "framer-motion";

const Reviews = [
  {
    id: 1,
    name: "Dr. Sandip Patil",
    review:
      "Three Stars are for treatment & food service only. Staying arrangements are very unhygienic and untidy. Hot water supply is not available here in tap but on order you can avail from caretaker. Hospital compound is not well cleaned. Bedding should be change on alternate days. Here you can go for Ayurveda treatment. Price for treatment are very affordable Array1.",
    image: DrSandip,
  },
  {
    id: 2,
    name: "Dr. Sandip Patil",
    review:
      "Three Stars are for treatment & food service only. Staying arrangements are very unhygienic and untidy. Hot water supply is not available here in tap but on order you can avail from caretaker. Hospital compound is not well cleaned. Bedding should be change on alternate days. Here you can go for Ayurveda treatment. Price for treatment are very affordable. Array2",
    image: DrSandip,
  },
  {
    id: 3,
    name: "Dr. Sandip Patil",
    review:
      "Three Stars are for treatment & food service only. Staying arrangements are very unhygienic and untidy. Hot water supply is not available here in tap but on order you can avail from caretaker. Hospital compound is not well cleaned. Bedding should be change on alternate days. Here you can go for Ayurveda treatment. Price for treatment are very affordable. Array3",
    image: DrSandip,
  },
];

const HospitalReview = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? Reviews.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrent((prev) => (prev === Reviews.length - 1 ? 0 : prev + 1));

  const activeReview = Reviews[current];
  return (
    <div className="bg-primary/5 py-16 relative">
      <div className="relative container space-y-6">
        <img
          src={Comma50}
          alt=""
          className="absolute -top-32 right-24 h-44 animate-bounce"
        />
        <h1>What they say about us</h1>
        <div
          className="flex gap-8 pt-8
        "
        >
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full shadow flex items-center justify-center text-primary bg-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Previous review"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full shadow flex items-center justify-center text-primary bg-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Next review"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 ">
          <div className=" relative ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeReview.id}
                src={activeReview.image}
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto object-cover max-w-sm"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-primary text-center py-10 max-w-sm"
              >
                <h2 className="text-white">{activeReview.name}</h2>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className="py-5 px-6 bg-white/50 backdrop-blur-xl absolute max-w-lg backdrop-opacity-50 -top-12 -right-40 rounded-xl"
              >
                {activeReview.review}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col justify-end">
            <span className="border-2 border-primary rounded-3xl w-fit px-5 py-1">
              <p>
                {current + 1} / {Reviews.length}
              </p>
            </span>
            <div className="grid grid-cols-3 justify-end gap-8">
              {Reviews.map((review, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="relative p-3 mt-auto"
                >
                  {/* Top Right Border */}
                  <span
                    className={`absolute top-0 right-0 w-1/6 h-1/6 border-t-2 border-r-2 ${
                      current === index ? "border-primary" : "border-gray-300"
                    }`}
                  ></span>

                  {/* Bottom Left Border */}
                  <span
                    className={`absolute bottom-0 left-0 w-1/6 h-1/6 border-b-2 border-l-2 ${
                      current === index ? "border-primary" : "border-gray-300"
                    }`}
                  ></span>

                  <img
                    src={review.image}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalReview;
