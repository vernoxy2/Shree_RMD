import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ to, text, icon }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-white  hover:opacity-90 transition text-xl font-bold"
    >
      {text}
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default PrimaryBtn;