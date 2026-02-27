import React from "react";
import PrimaryInput from "../../../../../Components/Ui/PrimaryInput";
import PrimaryTextarea from "../../../../../Components/Ui/PrimaryTextarea";
import PrimaryBtn from "../../../../../Components/Ui/PrimaryBtn";
import { FaPaperPlane } from "react-icons/fa";

const Forms = () => {
  return (
    <div className="bg-primary/10 py-20">
      <div className="container">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="order-2 lg:order-1">
            <form className="pt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PrimaryInput
                  placeholder="Name*"
                  type="text"
                  label={"Name of Applicant*"}
                />
                <PrimaryInput
                  placeholder="Designation*"
                  type="select"
                  label={"Designation*"}
                />
              </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <PrimaryInput
                  placeholder="Department/Class*"
                  type="text"
                  label={"Department/Class*"}
                />
                <PrimaryInput
                  placeholder="Event Occurred Date*"
                  type="date"
                  label={"Event Occurred Date*"}
                />
              </div>
              {/* <PrimaryTextarea placeholder="Message*" label={"Message*"} /> */}
              <PrimaryInput
                placeholder="Message*"
                type="text"
                label={"General Grievance*"}
              />
              <PrimaryBtn text={"Submit"} icon={<FaPaperPlane />} />
            </form>
          </div>
          <div className="text-right lg:max-w-lg pl-10 ml-auto space-y-6 order-1 lg:order-2">
            <h1 className="">
              General Grievance <br /> Form
            </h1>
            <p>
              This form allows students, faculty, hospital staff, and
              non-teaching staff to report academic, accommodation, hospital, or
              other concerns. By specifying designation, department/class, and
              event date, grievances are efficiently routed for prompt,
              transparent, and fair resolution at Shree RMD Ayurved College &
              Hospital.
            </p>
            <hr className="border-2 rounded-full w-40 border-primary ml-auto" />
          </div>
        </div>
        <hr className="border border-[#D9D9D9] rounded-full my-16" />
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
          <div className=" lg:max-w-lg space-y-6">
            <h1 className="">
              Specific Grievance <br />
              Form
            </h1>
            <p>
              This form helps applicants report specific grievances, including
              academic issues or cases of sexual harassment. By providing
              designation, department/class, grievance category, and event
              details, the system ensures accurate, timely, and confidential
              handling, promoting a safe and supportive environment.
            </p>
            <hr className="border-2 rounded-full w-40 border-primary" />
          </div>
          <div>
            <form className="pt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <PrimaryInput
                  placeholder="Name*"
                  type="text"
                  label={"Name of Applicant*"}
                />
                <PrimaryInput
                  placeholder="Department/Class*"
                  type="select"
                  label={"Department/Class*"}
                />
              </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <PrimaryInput
                  placeholder="Category*"
                  type="text"
                  label={"Category*"}
                />
                <PrimaryInput
                  placeholder="Event Occurred Date*"
                  type="date"
                  label={"Event Occurred Date*"}
                />
              </div>
              <PrimaryTextarea
                placeholder="Grievance Against Sexual Harrassment*"
                label={"Message*"}
              />
              {/* <PrimaryInput placeholder="Message*" type="text" label={"General Grievance*"} /> */}
              <PrimaryBtn text={"Submit"} icon={<FaPaperPlane />} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
