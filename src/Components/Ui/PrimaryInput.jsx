import Down from "./../../assets/InputDown.svg";

const PrimaryInput = ({ label, placeholder, type = "text", id }) => {
  return (
    <div className="w-full space-y-2">
      <div className="relative flex flex-col-reverse gap-2">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="peer outline-none focus:border-primary relative"
        />

        <img
          src={Down}
          alt="Down"
          className="transition-all grayscale opacity-60 peer-focus:grayscale-0 peer-focus:opacity-100 absolute right-2 bottom-2"
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

export default PrimaryInput;