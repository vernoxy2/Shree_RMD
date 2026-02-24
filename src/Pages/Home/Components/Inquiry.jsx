import React from "react";
import LazyImage from "../../../Components/Ui/LazyImage";
import InquiryImg from "../../../assets/HomePage/InquiryImg.png";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import { FaArrowRight } from "react-icons/fa";

const Inquiry = () => {
  return (
    <section className="bg-primary/10 py-14 pb-20">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <LazyImage src={InquiryImg} alt="Inquiry Image" className="w-fit" />
        </div>
        <div className="space-y-5">
          <div></div>
          <h1>Inquiry Now Form</h1>

          <form className="pt-6 space-y-4">
            <div className="flex gap-8">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              type="text"
              placeholder="Message*"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </form>
          <PrimaryBtn
            to="/contact"
            text="Send Message"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
