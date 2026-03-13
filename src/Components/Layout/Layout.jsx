import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "./Head";
import PopUp from "../Ui/PopUp";

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");

    if (location.pathname === "/" && popupShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("popupShown", "true");
      }, 100); // delay popup 1s

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {open && <PopUp setOpen={setOpen} />}
    </div>
  );
};

export default Layout;