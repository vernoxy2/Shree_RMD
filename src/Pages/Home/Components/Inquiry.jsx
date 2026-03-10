import React from "react";
import LazyImage from "../../../Components/Ui/LazyImage";
import InquiryImg from "../../../assets/HomePage/InquiryImg.png";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import { FaArrowRight } from "react-icons/fa";
import PrimaryInput from "../../../Components/Ui/PrimaryInput";
import PrimaryTextarea from "../../../Components/Ui/PrimaryTextarea";
import PrimarySelect from "../../../Components/Ui/PrimarySelect";

const Inquiry = () => {
  return (
    <section className="bg-primary/10 py-14 pb-20">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="max-w-xl">
          <LazyImage src={InquiryImg} alt="Inquiry Image" className="h-full object-cover" />
        </div>
        <div className="space-y-5">
          <div></div>
          <h1>Need More Information? Send Your Inquiry</h1>

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
                label="Country"
                // value={country}
                // onChange={(e) => setCountry(e.target.value)}
                options={[
                  { label: "Admission", value: "Admission" },
                  { label: "Hospital", value: "Hospital" },
                  { label: "Jobs", value: "Jobs" },
                  { label: "Any others", value: "Any others" },
                ]}
              />
            </div>

            <PrimaryTextarea label="Message" placeholder={"Message*"} />
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
