import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const RoundBtn = ({ to = "#", text }) => {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 bg-white pl-4 pr-2 py-2 text-secondary rounded-full font-medium overflow-hidden"
    >
      <span>{text}</span>

      <span className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-full overflow-hidden">
        
        {/* First Icon */}
        <IoIosArrowForward
          size={20}
          className="absolute text-white transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
        />

        {/* Second Icon */}
        <IoIosArrowForward
          size={20}
          className="absolute text-white -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
        
      </span>
    </Link>
  );
};

export default RoundBtn;