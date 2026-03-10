import Down from "./../../assets/InputDown.svg";

const PrimarySelect = ({ label, id, options = [], value, onChange }) => {
  return (
    <div className="w-full space-y-2">
      <div className="relative flex flex-col-reverse gap-2">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="peer outline-none focus:border-primary appearance-none pr-8 cursor-default"
        >
          <option value="" disabled>
            Select option
          </option>

          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <img
          src={Down}
          alt="Down"
          className="pointer-events-none transition-all grayscale opacity-60 peer-focus:grayscale-0 peer-focus:opacity-100 absolute right-2 bottom-2"
        />

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