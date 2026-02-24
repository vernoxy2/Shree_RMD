import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import { ChevronDown } from "lucide-react";

const NavLinkData = [
  { name: "Home", url: "/" },
  {
    name: "About Us",
    url: "/about-us",
    children: [{ name: "Admission", url: "/about-us/admission" }],
  },
  {
    name: "Ayurved College",
    url: "/ayurveda-college",
    children: [
      {
        name: "About college",
        // url: "/ayurveda-college/admission",
        children: [
          {
            name: "Committee",
            url: "/ayurveda-college/admission",
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
      {
        name: "Academics",
        // url: "/ayurveda-college/admission",
        children: [
          { name: "Departments", url: "/ayurveda-college/admission" },
          { name: "Time Table", url: "/ayurveda-college/admission" },
          { name: "Admission Update", url: "/ayurveda-college/Admission-Update" },
          {
            name: "University Examination",
            url: "/ayurveda-college/University-Examination",
          },
        ],
      },
      { name: "Students", url: "/ayurveda-college/admission" },
      { name: "Faculty And Research", url: "/ayurveda-college/admission" },
      { name: "Medical And Updates", url: "/ayurveda-college/admission" },
    ],
  },
  {
    name: "Research & Development",
    url: "/research-and-development",
    children: [
      { name: "Admission", url: "/research-and-development/admission" },
    ],
  },
  { name: "Press & Media", url: "/press-and-media" },
  { name: "Gallery", url: "/gallery" },
  { name: "Vacancy", url: "/vacancy" },
  { name: "Contact us", url: "/contact-us" },
  { name: "Enquiry", url: "/enquiry" },
];

const DropdownItem = ({ item, depth = 0 }) => {
  return (
    <div className="relative group/item">

      {/* Main Link */}
      <NavLink
        to={item.url}
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-2 whitespace-nowrap transition
          ${
            isActive
              ? "bg-primary text-white font-semibold"
              : "text-gray-700 hover:bg-primary hover:text-white"
          }`
        }
      >
        {item.name}

        {item.children && (
          <FaChevronRight
            size={12}
            className="ml-2"
          />
        )}
      </NavLink>

      {/* Hover Dropdown */}
      {item.children && (
        <div
          className={`
            absolute
            ${depth === 0
              ? "left-0 top-full"
              : "left-full top-0"}
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
            <DropdownItem
              key={index}
              item={child}
              depth={depth + 1}
            />
          ))}
        </div>
      )}

    </div>
  );
};

const Navbar = () => {
  return (
    <div className="container xl:px-24 z-50">
      <div className="lg:rounded-full px-8 bg-primary">
        <div className="flex items-stretch justify-between h-16">

          {NavLinkData.map((item, index) => (
            <div key={index} className="relative group flex items-center">

              <NavLink
                to={item.url}
                end={item.url === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-4 h-full transition
                  ${isActive ? "font-bold text-white" : "text-white"}`
                }
              >
                {item.name}
                {item.children && <FaChevronDown size={14} />}
              </NavLink>

              {/* First Level Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px]">
                  {item.children.map((child, i) => (
                    <DropdownItem key={i} item={child} />
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
