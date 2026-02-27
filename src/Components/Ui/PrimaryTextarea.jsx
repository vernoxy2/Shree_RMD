import React from "react";
import Down from "./../../assets/InputDown.svg";

const PrimaryTextarea = ({ label, placeholder, id, rows = 4 }) => {
  return (
    <div className="w-full space-y-2">
      <div className="relative flex flex-col-reverse gap-2">

        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          className="peer w-full outline-none border-b border-gray-300 
          focus:border-primary transition pr-8 resize-none"
        />

        <img
          src={Down}
          alt="Down"
          className="absolute right-2 bottom-3 
          transition-all duration-300
          grayscale opacity-60
          peer-focus:grayscale-0 peer-focus:opacity-100 "
        />

        {label && (
          <label
            htmlFor={id}
            className="font-bold text-secondary transition-colors 
            peer-focus:text-primary"
          >
            {label}
          </label>
        )}

      </div>
    </div>
  );
};

export default PrimaryTextarea;