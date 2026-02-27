import React from "react";
import Kantilal from "../../../assets/AboutUsPageImg/Director.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const Director = () => {
  return (
    <div>
      <div className="container py-28 space-y-4">
        <div className="relative lg:w-fit lg:float-left lg:pr-8 pb-4">
          <LazyImage
            src={Kantilal}
            alt="Kantilal"
            className="w-full lg:w-fit"
          />

          {/* Overlay */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 
                  bg-white/80 backdrop-blur-lg 
                  px-6 py-3 rounded-lg text-center"
          >
            <h2>Yogesh Desai</h2>
            <p>Campus Director</p>
          </div>
          <div className="absolute border-2 border-primary p-28 -top-8 -left-8 z-[-1]"></div>
        </div>
        <h1 className="text-4xl ">Desk of Director Campus</h1>
        <h1 className="text-3xl font-normal text-[#676767]">
          ( Director Message )
        </h1>
        <p className="text-primary font-bold lg:pr-20">
          IGNORENCE IS AT THE VERY ROOT OF ALL THE DISEASES (OF BOTH THE BODY
          AND MIND). KNOWLEDGE (ULTIMATE REALIZATION) LEADS TO HAPPINESS.
        </p>
        <p>
          It gives me immense pleasure to invite you all to the Official Website
          of “SHREE RMD AYURVEDA COLLEGE AND HOSPITAL, WAGALDHARA” in order to
          know more about the varied activities of this Institute. This
          Institute was established in 2016 by the “SHREE PRABHAV HEM KAMDHENU
          GIRIVIHAAR TRUST, PALITANA” as an Institute for promoting the growth
          and development of Ayurveda as an evolving high standards of teaching,
          research and patient care and also to invoke scientific outlook to the
          knowledge of Ayurvedic System of Medicine.
        </p>
        <p>
          The institute has a well developed research center, Speciality
          Hospital (Cancer Hospital), Gaushala and mega Herbal
          Garden.Accreditation of our Hospitals with NABH & Accreditation of our
          College with NAAC are in process.
        </p>
        <p>
          I am happy to inform that our trust is extending its full financial
          and other supports for the enrichment and progress of the Institute in
          all its spheres. We will not leave any stone unturned in achieving
          various goals of the Institute and our trust is for the welfare of
          mankind and propagation and globalization of Ayurveda. We have a very
          dedicated and highly qualified Faculty Members with a number of good
          supporting staff in different categories.
        </p>
        <p>
          With these humble words, I once again welcome you to our Website. I
          shall be very happy to receive any suggestion/comment to make any
          addition/alteration in our Website. Very soon we are coming with a
          newly updated modern version of our Website. Please watch for it.
        </p>
        <h1 className="text-center pt-8">Thank You</h1>
      </div>
    </div>
  );
};

export default Director;
