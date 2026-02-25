import React from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import { FaArrowRight } from "react-icons/fa";

const TellUs = () => {
  return (
    <div className="bg-primary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
        <div>
          <h1>Tell Us Anything here.</h1>
          <div className="space-y-5">
            <div></div>

            <form className="pt-6 space-y-4">
              <div className="flex gap-8">
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="Email"
                  placeholder="Email*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-8">
                <input
                  type="number"
                  placeholder="phone*"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Subject*"
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
        {/* Map Image */}
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56680.186894563805!2d72.96393280497315!3d20.709062693858208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ebff2dc0d393%3A0x892119123710fc19!2sSHREE%20RMD%20AYURVED%20COLLEGE%20%26%20HOSPITAL!5e1!3m2!1sen!2sin!4v1771926413927!5m2!1sen!2sin"
            className="w-full h-[450px] "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TellUs;
