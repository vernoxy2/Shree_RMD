import React from "react";
import HeadLogo from "../../assets/NavbarLogo.svg";
import LazyImage from "../Ui/LazyImage";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
const Head = () => {
  return (
    <div className="container mx-auto  py-6 shadow-inner md:flex items-start justify-between">
      <LazyImage src={HeadLogo} alt="Head Logo" className="max-h-14" />

      <div className="flex items-center gap-3">
        {/* Vertical Line */}
        <div className="w-[2px] h-8 bg-primary"></div>

        {/* Text Section */}
        <div className="text-sm font-medium">
          <p className="text-primary text-sm">
            Admission Process:
            <strong className="text-[#676767]"> RMD College Code: RMAY</strong>
          </p>
          <p className="text-primary text-sm">
            AISHE Code:<strong className="text-[#676767]"> C-56120</strong>
          </p>
        </div>
      </div>
      <p className="text-primary text-sm">
        Institutional code:
        <strong className="text-[#676767]"> NCISM - AYU 0397</strong>
      </p>
      <div className="flex gap-2.5">
        <div className="p-1.5 rounded-full bg-primary/30 w-fit border-s border-t border-b border-primary">
          <FaInstagramSquare className="text-primary text-xl rounded-xl" />
        </div>
        <div className="p-1.5 rounded-full bg-primary/30 w-fit border-s border-t border-b border-primary">
          <FaSquareXTwitter className="text-primary text-xl rounded-xl" />
        </div>
        <div className="p-1.5 rounded-full bg-primary/30 w-fit border-s border-t border-b border-primary">
          <BiLogoFacebookSquare className="text-primary text-xl rounded-xl" />
        </div>
        <div className="p-1.5 rounded-full bg-primary/30 w-fit border-s border-t border-b border-primary">
          <FaLinkedin className="text-primary text-xl rounded" />
        </div>
      </div>
    </div>
  );
};

export default Head;
