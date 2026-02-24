import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "./Head";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Head */}
      <Head/>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow ">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Layout;
