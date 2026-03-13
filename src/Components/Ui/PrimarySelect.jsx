import { FaChevronDown } from "react-icons/fa";
import Down from "./../../assets/InputDown.svg";

const PrimarySelect = ({ label, id, options = [], value, onChange, className="" }) => {
  return (
    <div className="w-full space-y-2">
      <div className="relative flex flex-col-reverse gap-2">
        <div className="relative">
  <select
    id={id}
    value={value}
    onChange={onChange}
    className={`peer outline-none focus:border-primary appearance-none pr-8 cursor-default ${className}`}
  >
    <option value="" disabled>
      Select Course
    </option>

    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>

  <FaChevronDown className="text-gray-400 text-xs peer-focus:text-primary transition-colors absolute top-1/2 -translate-y-1/2 right-6 pointer-events-none" />
</div>

        <img
          src={Down}
          alt="Down"
          className="pointer-events-none transition-all grayscale opacity-60 peer-focus:grayscale-0 peer-focus:opacity-100 absolute right-2 bottom-2"
        />
        {/* <FaChevronDown className="text-gray-400 text-xs peer-focus:text-primary transition-colors absolute top-1/2 -translate-y-1/2 right-6 pointer-events-none " /> */}

        {label && (
          <label
            htmlFor={id}
            className="font-bold text-secondary transition-colors peer-focus:text-primary"
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default PrimarySelect;