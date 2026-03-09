import React from "react";
import Background from "../../assets/FooterBg.webp";
import FooterLogo from "../../assets/FooterLogo.svg";
import LazyImage from "../Ui/LazyImage";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";

const QuickData = [
  {
    id: 1,
    Name: "About Us",
    url: "/about-us",
  },
  {
    id: 2,
    Name: "Ayurveda College",
    url: "/ayurveda-college",
  },
  {
    id: 3,
    Name: "Ayurveda Hospital",
    url: "/ayurved-Hospital",
  },
  {
    id: 4,
    Name: "Trust",
    url: "/trust",
  },
  {
    id: 5,
    Name: "Gallery",
    url: "/gallery",
  }
]

const AcademicsData = [
  {
    id: 0,
    Name: "Departments",
    url: "/departments",
  },
  {
    id: 1,
    Name: "Time Table",
    url: "/time-table",
  },
  {
    id: 2,
    Name: "Admission Update",
    url: "/admission-update",
  },
  {
    id: 3,
    Name: "University Examination",
    url: "/university-examination",
  },

]

const MedicalServicesdata = [
  {
    id: 0,
    Name: "Services Offered",
    url: "/services-offered",
  },
  {
    id: 1,
    Name: "Clinical Material",
    url: "/clinical-material",
  },
  {
    id: 2,
    Name: "Diagnostics",
    url: "/diagnostics",
  },
]

const PatientServicesdata = [
  {
    id: 0,
    Name: "Doctors Schedule",
    url: "/doctors-schedule",
  },
  {
    id: 1,
    Name: "Hospital Attendance",
    url: "/hospital-attendance",
  },
  {
    id: 2,
    Name: "Patients Feedback",
    url: "/patients-feedback",
  },
]

const QuickLinks = () => (
  <div className="text-white space-y-4">
    <h2 className="text-xl font-bold text-primary">Quick Links</h2>
    <ul className="space-y-2 text-sm font-medium">
      {QuickData.map((item) => (
        <p
          key={item.id}
          className="text-white hover:text-primary transition cursor-pointer "
        >
          {item.Name}
        </p>
      ))}
    </ul>
  </div>
);

const Academics = () => (
  <div className="text-white space-y-4">
    <h2 className="text-xl font-bold text-primary">Academics</h2>
    <ul className="space-y-2 text-sm font-medium">
      {AcademicsData.map((item) => (
        <p
          key={item.id}
          className="text-white hover:text-primary transition cursor-pointer "
        >
          {item.Name}
        </p>
      ))}
    </ul>
  </div>
);

const MedicalServices = () => (
  <div className="text-white space-y-4">
    <h2 className="text-xl font-bold text-primary">Medical Services</h2>
    <ul className="space-y-2 text-sm font-medium">
      {MedicalServicesdata.map((item) => (
        <p
          key={item.id}
          className="text-white hover:text-primary transition cursor-pointer "
        >
          {item.Name}
        </p>
      ))}
    </ul>
  </div>
);
const PatientServices = () => (
  <div className="text-white space-y-4">
    <h2 className="text-xl font-bold text-primary">Medical Services</h2>
    <ul className="space-y-2 text-sm font-medium">
      {PatientServicesdata.map((item) => (
        <p
          key={item.id}
          className=" text-white hover:text-primary transition cursor-pointer "
        >
          {item.Name}
        </p>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center pt-16 pb-20"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container  space-y-12">
        {/* Top CTA Section */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-5xl font-bold text-white">
            Looking for Natural Healing{" "}
            <span className="text-primary">Solutions?</span>
          </h2>
          <p className="text-white font-medium md:text-base max-w-xs">
            Discover holistic Ayurvedic treatments combining traditional wisdom
            and expert care for natural, long-lasting health and wellness.
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* About Section */}
          <div className="lg:col-span-4 space-y-6">
            <LazyImage src={FooterLogo} alt="Footer Logo" className="" />

            <p className="text-white font-medium max-w-xs">
              Shree RMD Ayurveda College and Hospital, Waghaldhar is dedicated
              to authentic Ayurvedic education, holistic healthcare, and natural
              healing for all.
            </p>
            <div className="flex gap-2.5">
              <div className="p-1.5 rounded-full bg-white/30 w-fit border-s border-t border-b border-white">
                <FaInstagramSquare className="text-white text-xl rounded-xl" />
              </div>
              <div className="p-1.5 rounded-full bg-white/30 w-fit border-s border-t border-b border-white">
                <FaSquareXTwitter className="text-white text-xl rounded-xl" />
              </div>
              <div className="p-1.5 rounded-full bg-white/30 w-fit border-s border-t border-b border-white">
                <BiLogoFacebookSquare className="text-white text-xl rounded-xl" />
              </div>
              <div className="p-1.5 rounded-full bg-white/30 w-fit border-s border-t border-b border-white">
                <FaLinkedin className="text-white text-xl rounded" />
              </div>
            </div>

            <hr className="border-gray-500 border rounded-full max-w-xs" />

            <div className="flex items-start gap-3 max-w-xs">
              <CiLocationOn className="text-primary text-3xl  shrink-0" />

              <p className="text-white font-medium leading-relaxed text-sm">
                Shree RMD Ayurveda College & Hospital, National Highway No.8,
                Waghaldhara, Dist- Valsad-396375, Gujarat
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 sm:gap-6 text-white text-sm font-medium">
              <span className="hover:text-primary transition cursor-pointer flex gap-4 items-center">
                <GoMail className="text-primary text-xl  shrink-0" />
                rmdayucollege@gmail.com
              </span>
              {/* <span className="hidden sm:block w-[2px] h-6 bg-primary"></span> */}
              <span className="hover:text-primary transition cursor-pointer flex gap-4 items-center">
                <MdOutlineCall className="text-primary text-xl shrink-0" />
                +91-9512288550
              </span>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <QuickLinks />
          </div>

          <div className="lg:col-span-2">
            <Academics />
          </div>

          <div className="lg:col-span-2">
            <MedicalServices />
          </div>
          <div className="lg:col-span-2">
            <PatientServices />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
