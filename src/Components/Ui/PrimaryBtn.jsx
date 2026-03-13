import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ to, text, icon, type = "button", onClick }) => {

  // If navigation link
  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-white hover:opacity-90 transition text-xl font-bold font-inter"
      >
        {text}
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  // If button (form submit etc.)
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex items-center gap-3 bg-primary px-5 py-3.5 text-white hover:opacity-90 transition text-xl font-bold font-inter"
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default PrimaryBtn;