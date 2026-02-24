import React, { Children } from "react";

const NavLink = [
  { name: "Home", url: "/" },
  {
    name: "About Us",
    url: "/about-us",
    Children: [
      {
        name: "Admission",
        url: "/admission",
      },
    ],
  },
  {
    name: "Ayurved Collage",
    url: "/ayurveda-college",
    Children: [
      {
        name: "Admission",
        url: "/admission",
      },
    ],
  },
  {
    name: "Research & Development",
    url: "/research-and-development",
    Children: [
      {
        name: "Admission",
        url: "/admission",
      },
    ],
  },
  {
    name: "Press & Media",
    url: "/press-and-media",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  {
    name: "Vacancy",
    url: "/vacancy",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
  {
    name: "Enquiry",
    url: "/enquiry",
  },
];

const Navbar = () => {
  return (
    <div className="container">
      <div className="rounded-full container bg-primary py-4">
        <div className="flex items-center justify-between">
            {NavLink.map((item, index) => (
              <div key={index} className="hover:text-primary text-white transition">
                <a href={item.url}>{item.name}</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
