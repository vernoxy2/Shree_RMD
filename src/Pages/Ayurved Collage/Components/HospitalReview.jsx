import React from "react";
import SavbanPatel from "../../../assets/AyurvedCollage/HospitalReview/SavbanPatel.svg";
import CommaPrimaryOutLine from "../../../assets/CommaPrimaryOutLine.svg";

const HospitalReview = () => {
  return (
    <div className="bg-primary/10 py-20 relative">
      <div className=" grid grid-cols-12 gap-8 container items-stretch">
        <div data-aos="fade" data-aos-delay="200" className="col-span-4 overflow-hidden relative group">
          <img
            src={SavbanPatel}
            alt=""
            className="grayscale group-hover:grayscale-0 duration-500 group-hover:scale-110"
          />
          <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0 flex items-end px-6 py-9">
          <h2 className="text-white">Dr. Sandip Patil</h2>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div data-aos="fade-right" data-aos-delay="300" className="col-span-7 max-w-2xl space-y-4 flex flex-col gap-4 items-start justify-center">
          <img src={CommaPrimaryOutLine} alt="" />

          <h1>Trusted Ayurvedic College for Learning</h1>
          <p>
            Amazing Ayurvedic Center!! Authentic Ayurvedic treatment. Get ready
            for some awesome experience in your Ayurvedic treatment. If you are
            looking for some authentic treatment in low cost this is the place
            to go. Here doctors are from all over india, All doctors have very
            good knowledge of Ayurveda, The therapists are really good
            professionalists. Here food also preparing according to Ayurveda.
          </p>
        </div>
      <div className="border border-primary/50 h-96 w-96 rounded-full absolute bottom-0 translate-x-1/3 z-[-1]"></div>
      </div>
    </div>
  );
};

export default HospitalReview;
