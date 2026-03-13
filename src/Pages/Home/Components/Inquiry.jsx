import React from "react";
import LazyImage from "../../../Components/Ui/LazyImage";
import InquiryImg from "../../../assets/HomePage/InquiryImg.png";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import { FaArrowRight } from "react-icons/fa";
import PrimaryInput from "../../../Components/Ui/PrimaryInput";
import PrimaryTextarea from "../../../Components/Ui/PrimaryTextarea";
import PrimarySelect from "../../../Components/Ui/PrimarySelect";
import CircaleAnimation from "../../../Components/Ui/CircaleAnimation";

const Inquiry = () => {
  return (
    <section className="bg-primary/10 py-20">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="max-w-xl relative">
          <LazyImage
            src={InquiryImg}
            alt="Inquiry Image"
            className="h-full object-cover"
          />
          <div className="absolute top-1/2 -right-16 -translate-y-1/2 ">
            <CircaleAnimation />
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h1>Connect With Us</h1>
            <p>Fill in your details and let us know how we can assist you.</p>
          </div>

          <form className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PrimaryInput label="Name*" placeholder="Name*" type="text" />
              <PrimaryInput label="Email*" placeholder="Email*" type="email" />
              <PrimaryInput
                label="Mobile No*"
                placeholder="Mobile No*"
                type="number"
              />
              <PrimaryInput label="City*" placeholder="City*" type="text" />
              <PrimaryInput label="State*" placeholder="State*" type="text" />

              <PrimarySelect
                id="country"
                label="Purpose of inquiry*"
                options={[
                  { label: "Admission", value: "Admission" },
                  { label: "Hospital", value: "Hospital" },
                  { label: "Jobs", value: "Jobs" },
                  { label: "Any others", value: "Any others" },
                ]}
              />
            </div>

            <PrimaryTextarea label="Message" placeholder="Message*" />

            <PrimaryBtn
              type="submit"
              text="Send Message"
              icon={<FaArrowRight />}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
