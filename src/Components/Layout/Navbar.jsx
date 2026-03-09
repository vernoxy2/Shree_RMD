import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import { ChevronDown } from "lucide-react";

const NavLinkData = [
  // Home Page
  { name: "Home", url: "/" },
  // About Us
  {
    name: "About Us",
    url: "/about-us",
  },
  // Ayurveda College
  {
    name: "Ayurved College",
    url: "/ayurveda-college",
    // Ayurveda College // About College
    children: [
      {
        name: "About college",
        children: [
          {
            name: "Committee",
            url: "/ayurveda-college/committee",
          },
          {
            name: "Grievance and  redressal",
            url: "/ayurveda-college/admission",
          },
          {
            name: "Important link",
            url: "/ayurveda-college/admission",
          },
        ],
      },
      // Academics of Ayurveda College
      {
        name: "Academics",
        // url: "/ayurveda-college/admission",
        children: [
          {
            name: "Departments",
            url: "/ayurveda-college/categories-department",
          },
          { name: "Time Table", url: "/ayurveda-college/admission" },
          {
            name: "Admission Update",
            url: "/ayurveda-college/Admission-Update",
          },
          {
            name: "University Examination",
            url: "/ayurveda-college/University-Examination",
          },
        ],
      },
      // Students of Ayurveda College
      {
        name: "Students",
        children: [
          {
            name: "Students Details",
            url: "/ayurveda-college/students-details",
          },
          { name: "Activities", url: "/ayurveda-college/activities" },
        ],
      },
      // Attendance of Ayurveda College
      {
        name: "Attendance",
        children: [
          {
            name: "Students Attendance",
            url: "/ayurveda-college/students-attendance",
          },
          {
            name: "Staff Attendance",
            url: "/ayurveda-college/staff-attendance",
          },
        ],
      },
      // Faculty of Ayurveda College
      {
        name: "Faculty",
        children: [
          {
            name: "Staff Details",
            children: [
              {
                name: "Teaching Staff",
                url: "/ayurveda-college/Teaching-staff-details",
              },
              {
                name: "Non Teaching Staff",
                url: "/ayurveda-college/Non-Teaching-staff-details",
              },
            ],
          },
          {
            name: "Research Work  And Publication",
            url: "/ayurveda-college/research-work-and-publication",
          },
        ],
      },
      // Medical And Updates
      {
        name: "Medical And Updates",
        children: [
          {
            name: "gallery",
            url: "/ayurveda-college/gallery",
          },
        ],
      },
    ],
  },
  // Ayurveda Hospital
  {
    name: "Ayurved Hospital",
    url: "/ayurved-Hospital",
    children: [
      // Hospital overview
      {
        name: "Hospital overview",
        children: [
          {
            name: "Our Team",
            url: "/ayurved-Hospital/About-Hospital",
          },
          {
            name: "Center of Excellence",
            url: "/ayurved-Hospital/Departments",
          },
          {
            name: "Institutional Events",
            url: "/ayurved-Hospital/Facilities",
          },
          {
            name: "Azadi Ka Amrit Mahotsav",
            url: "/ayurved-Hospital/Facilities",
          },
        ],
      },
      // Medical Services of Ayurveda Hospital
      {
        name: "Medical Services",
        children: [
          {
            name: "Services Offered",
            url: "/ayurved-Hospital/About-Hospital",
          },
          {
            name: "Clinical Material",
            url: "/ayurved-Hospital/Departments",
          },
          {
            name: "Diagnostics",
            url: "/ayurved-Hospital/Facilities",
          },
        ],
      },
      // Patient Services of Ayurveda Hospital
      {
        name: "Patient Services",
        children: [
          {
            name: "Doctors Schedule",
            url: "/ayurved-hospital/doctors-schedule",
          },
          {
            name: "Hospital Attendance",
            url: "/ayurved-Hospital/attendance",
          },
          {
            name: "Patients Feedback",
            url: "/ayurved-Hospital/",
          },
        ],
      },
      // Events And Activities of Ayurveda Hospital
      {
        name: "Events And Activities",
        children: [
          {
            name: "Hospital Activities",
            url: "/ayurved-hospital/activities",
          },
        ],
      },
    ],
  },
  // Research & Development
  {
    name: "Research & Development",
    url: "/research-and-development",
    // children: [
    //   { name: "Admission", url: "/research-and-development/admission" },
    // ],
  },
  // { name: "Press & Media", url: "/press-and-media" },
  { name: "Trust", url: "/trust" },
  { name: "Pharmacy", url: "/press-and-media" },
  { name: "Gallery", url: "/gallery" },
  // { name: "Vacancy", url: "/vacancy" },
  { name: "Enquiry", url: "/enquiry" },
  { name: "Contact us", url: "/contact-us" },
];

const DropdownItem = ({ item, depth = 0 }) => {
  return (
    <div className="relative group/item">
      {/* Main Link */}
      {item.url ? (
        <NavLink
          to={item.url}
          className={({ isActive }) =>
            `flex items-center justify-between px-4 py-2 whitespace-nowrap transition
            ${
              isActive
                ? "bg-primary text-white font-semibold"
                : "text-gray-700 hover:bg-gray-100 hover:text-primary"
            }
            ${item.children ? "" : ""}
            `
          }
        >
          {item.name}
          {item.children && <FaChevronRight size={12} className="ml-2" />}
        </NavLink>
      ) : (
        // For items WITHOUT a url (like "About college"), render a div instead
        <div
          className={`flex items-center justify-between px-4 py-2 whitespace-nowrap cursor-pointer transition text-gray-700
            ${item.children ? "group-hover/item:border-b-2 group-hover/item:border-primary group-hover/item:font-semibold group-hover/item:text-primary" : "hover:bg-primary hover:text-white"}
          `}
        >
          {item.name}
          {item.children && <FaChevronRight size={12} className="ml-2" />}
        </div>
      )}

      {/* Hover Dropdown */}
      {item.children && (
        <div
          className={`
            absolute
            ${depth === 0 ? "left-0 -top-full" : "left-[calc(100%+6px)] top-2"}
            min-w-[220px]
            bg-white rounded-md shadow-lg
            opacity-0 invisible
            group-hover/item:opacity-100
            group-hover/item:visible
            transition-all duration-200
            z-50
          `}
        >
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
      <div className=" bg-primary">
        <div className="flex items-center justify-between h-16 container">
          {NavLinkData.map((item, index) => (
            <div key={index} className="relative group flex items-center">
              <NavLink
                to={item.url}
                end={item.url === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-4 h-full transition text-sm
                  ${isActive ? "font-bold text-white" : "text-white"}`
                }
              >
                {item.name}
                {item.children && <FaChevronDown size={14} />}
              </NavLink>

              {/* First Level Dropdown */}
              {item.children && (
                <div className="absolute top-[48px] left-0  bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px]">
                  {item.children.map((child, i) => (
                    <DropdownItem key={i} item={child} depth={1} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default Navbar;
