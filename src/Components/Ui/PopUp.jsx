import React from "react";
import PopupBg from "../../assets/PopupImg/PopupBg.png";
import PopupBoy from "../../assets/PopupImg/PopupBoy.svg";
import Comma50 from "../../assets/Comma50.svg";
import PrimaryBtn from "./PrimaryBtn";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import PrimaryInput from "./PrimaryInput";
import PrimarySelect from "./PrimarySelect";
import PrimaryTextarea from "./PrimaryTextarea";

const PopUp = ({ setOpen }) => {
    const [form, setForm] = React.useState({
  name: "",
  email: "",
  phone: "",
  purpose: "",
  message: "",
});

const update = (field) => (e) => {
  setForm({ ...form, [field]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(form);
setOpen(false)
};
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div
        style={{ backgroundImage: `url(${PopupBg})` }}
        className=" bg-white bg-cover bg-center rounded-3xl max-w-6xl w-full grid xl:grid-cols-2 relative"
      >
        <IoCloseCircleOutline onClick={() => setOpen(false)}className="absolute -top-4 -right-4 text-4xl text-white bg-primary rounded-full cursor-pointer" />
        <div className="space-y-8 max-w-xs py-12 ps-10 relative">
          <h1>
            Get <br /> in Touch
          </h1>
          <p>
            Shree RMD Ayurved College, Waghadhara is a leading institution in
            Gujarat dedicated to quality Ayurvedic medical education. With
            experienced faculty, modern facilities, and a well-equipped
            hospital, the college provides students with excellent academic
            knowledge and practical clinical training in a holistic learning
            environment.
            <span className="w-full ">
              <img src={Comma50} alt="" className="ml-auto mr-6" />
            </span>
          </p>
          <PrimaryBtn
            type="submit"
            text="Send Message"
            icon={<FaTelegramPlane />}
            onClick={handleSubmit}
          />
          <img
            src={PopupBoy}
            alt=""
            className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <form onSubmit={handleSubmit} className="bg-primary px-12 pb-16 flex flex-col justify-end gap-5">
  <PrimaryInput
    name="name"
    placeholder="Name*"
    type="text"
    value={form.name}
    onChange={update("name")}
    className="pt-2 pb-5 placeholder:text-primary"
  />

  <PrimaryInput
    name="email"
    placeholder="Email address*"
    type="email"
    value={form.email}
    onChange={update("email")}
    className="pt-2 pb-5 placeholder:text-primary"
  />

  <PrimaryInput
    name="phone"
    placeholder="Phone Number*"
    type="tel"
    value={form.phone}
    onChange={update("phone")}
    className="pt-2 pb-5 placeholder:text-primary"
  />

  <PrimarySelect
    id="purpose"
    value={form.purpose}
    onChange={update("purpose")}
    className="pt-2 pb-5 text-primary"
    options={[
      { label: "Admission", value: "Admission" },
      { label: "Hospital", value: "Hospital" },
      { label: "Jobs", value: "Jobs" },
      { label: "Any others", value: "Any others" },
    ]}
  />

  <PrimaryTextarea
    name="message"
    placeholder="Message*"
    value={form.message}
    onChange={update("message")}
    className="pt-2 pb-5 placeholder:text-primary"
  />

  <PrimaryBtn type="submit" text="Send Message" />
</form>
      </div>
    </div>
  );
};

export default PopUp;
