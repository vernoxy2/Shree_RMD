import { useState } from "react";
import PrimaryInput from "../../Components/Ui/PrimaryInput";
import PrimaryTextarea from "../../Components/Ui/PrimaryTextarea";
import PrimaryBtn from "../../Components/Ui/PrimaryBtn";
import { FaArrowRight, FaRibbon } from "react-icons/fa";
import { MdOutlineCall, MdOutlineMail } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";
import { BsHospital } from "react-icons/bs";
import { TbMicroscope } from "react-icons/tb";

const C = {
  primary: "#A63A4B",
  sub: "#676767",
  dark: "#1a0a0d",
  light: "#fff5f6",
  cream: "#fdf8f8",
  border: "#ede5e6",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  .enq-root { font-family: 'Poppins', sans-serif; }

  .enq-hero-bg {
    background: linear-gradient(135deg, #1a0a0d 0%, #2e0f17 50%, #A63A4B 100%);
    position: relative; overflow: hidden;
  }
  .enq-hero-bg::after {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 24px 24px;
  }

  .enq-tab {
    transition: all 0.2s ease;
    cursor: pointer;
    white-space: nowrap;
  }
  .enq-tab:hover { background: #fdf0f1; }

  .enq-input {
    width: 100%;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }
  .enq-input:focus {
    border-color: #A63A4B !important;
    box-shadow: 0 0 0 3px rgba(166,58,75,0.12);
  }
  .enq-input::placeholder { color: #bbb; }

  .enq-submit {
    transition: all 0.2s cubic-bezier(.34,1.56,.64,1);
  }
  .enq-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(166,58,75,0.35);
  }
  .enq-submit:active { transform: scale(0.97); }

  .enq-contact-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .enq-contact-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 32px rgba(166,58,75,0.12);
  }

  .enq-info-pill {
    transition: background 0.15s;
  }
  .enq-info-pill:hover { background: #fdf0f1; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.4s ease both; }
  .d1 { animation-delay: 0.05s; }
  .d2 { animation-delay: 0.1s; }
  .d3 { animation-delay: 0.15s; }

  .enq-success {
    animation: fadeUp 0.4s ease both;
  }
`;

const ENQUIRY_TABS = [
  {
    id: "college",
    label: "College",
    icon: <PiGraduationCapBold size={24} />,
    color: "#5b3ea6",
    bg: "#f3f0fb",
    border: "#c0aee8",
  },
  {
    id: "hospital",
    label: "Hospital",
    icon: <BsHospital size={24} />,
    color: "#A63A4B",
    bg: "#fdf4f5",
    border: "#e8a8b0",
  },
  {
    id: "research",
    label: "Research",
    icon: <TbMicroscope size={24} />,
    color: "#1e5fa8",
    bg: "#eff6ff",
    border: "#93c5fd",
  },
  {
    id: "cancer",
    label: "Extension Unit",
    icon: <FaRibbon size={24} />,
    color: "#2d7a4f",
    bg: "#f0faf4",
    border: "#a7d9ba",
  },
];

const CONTACT_BLOCKS = [
  {
    title: "Hospital",
    icon: <BsHospital size={30} />,
    color: "#A63A4B",
    bg: "#fdf4f5",
    border: "#e8a8b0",
    items: [
      { icon: <MdOutlineCall size={26} />, label: "Gen Enquiry", value: "8141007556" },
      { icon: <MdOutlineCall size={26} />, label: "Gen Enquiry", value: "74350 80560" },
      { icon: <MdOutlineMail size={26} />, label: "Email", value: "rmdayuhospital@gmail.com" },
    ],
  },
  {
    title: "Extension Unit (Cancer Hospital)",
    icon: <FaRibbon size={30} />,
    color: "#2d7a4f",
    bg: "#f0faf4",
    border: "#a7d9ba",
    items: [
      { icon: <MdOutlineCall size={26} />, label: "Gen Enquiry", value: "6352339690" },
      {
        icon: <MdOutlineMail size={26} />,
        label: "Email",
        value: "giriviharcancerhospital@gmail.com",
      },
    ],
  },
];

function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold" style={{ color: C.sub }}>
        {label} {required && <span style={{ color: C.primary }}>*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          className="enq-input rounded-xl px-4 py-3 text-sm border resize-none"
          style={{
            borderColor: C.border,
            background: "#fff",
            color: C.dark,
            minHeight: "100px",
          }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
        />
      ) : (
        <input
          type={type}
          className="enq-input rounded-xl px-4 py-3 text-sm border"
          style={{ borderColor: C.border, background: "#fff", color: C.dark }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

function EnquiryForm({ tab }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3500);
  };

  if (submitted) {
    return (
      <div className="enq-success text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-bold text-xl mb-1 text-primary">
          Enquiry Submitted!
        </h3>
        <p className="" style={{ color: C.sub }}>
          We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <PrimaryInput
          label="Your Name"
          placeholder="Full name"
          value={form.name}
          onChange={update("name")}
          required
        />
        <PrimaryInput
          label="Your Email"
          type="email"
          placeholder="email@example.com"
          value={form.email}
          onChange={update("email")}
          required
        />
      </div>
      <PrimaryInput
        label="Contact No."
        type="tel"
        placeholder="+91 00000 00000"
        value={form.phone}
        onChange={update("phone")}
        required
      />
      <PrimaryTextarea
        label="Your Message"
        type="textarea"
        placeholder="Write your enquiry here…"
        value={form.message}
        onChange={update("message")}
      />

      {/* <button
        onClick={handleSubmit}
        className="enq-submit w-full py-3 rounded-xl font-semibold text-sm text-white mt-1"
        style={{
          background: `linear-gradient(135deg, ${tab.color}, ${C.primary})`,
        }}
      >
        Send {tab.label} Enquiry →
      </button> */}
      <div className="w-fit ml-auto">
        <PrimaryBtn type="submit" text="Send Message" icon={<FaArrowRight />} />
      </div>
    </div>
  );
}

export default function EnquiryPage() {
  const [activeTab, setActiveTab] = useState("college");
  const tab = ENQUIRY_TABS.find((t) => t.id === activeTab);

  return (
    <div className="bg-Bg">
      <style>{css}</style>

      {/* Hero */}
      {/* <div className="bg-primary/40 pt-12 pb-10">
        <div className="relative z-10 container">
          <nav className="flex items-center gap-1.5 text-xs mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
            <span>Home</span>
            <span>›</span>
            <span className="text-primary font-semibold">Enquiry</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
            style={{ color: "rgba(255,255,255,0.5)" }}>
            Shree RMD Ayurveda College &amp; Hospital
          </p>
          <h1 className="text-4xl font-black text-primary tracking-tight leading-none mb-2">
            Get in <span style={{ color: "#f4b8c0" }}>Touch</span>
          </h1>
          <div className="w-10 h-1 rounded-full mb-3" style={{ background: C.primary }} />
          <p className=" font-light" >
            Reach us for college admissions, hospital services, research or cancer unit queries
          </p>
        </div>
      </div> */}

      <div className="container py-14 grid gap-8">
        {/* Online Consultation Banner */}
        {/* <div className="fade-up rounded-2xl p-5 flex items-center gap-4 flex-wrap"
          style={{ background: "linear-gradient(135deg, #1a0a0d, #A63A4B)", border: `1px solid ${C.primary}` }}>
          <div className="text-3xl">💻</div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-sm">Online Consultation Available</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
              Connect with our Ayurveda specialists from the comfort of your home
            </p>
          </div>
          <button className="enq-submit px-5 py-2 rounded-xl text-sm font-semibold text-white border"
            style={{ borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.15)" }}>
            Book Now →
          </button>
        </div> */}

        {/* Contact Cards */}
        <div className="fade-up ">
          <p className="mb-3 font-bold">Quick Contact</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {CONTACT_BLOCKS.map((block, i) => (
              <div
                key={i}
                className="enq-contact-card  p-5 border-2 hover:border-primary duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg text-primary">
                    {block.icon}
                  </div>
                  <div>
                    <h2 className="font-bold text-xl leading-tight">
                      {block.title}
                    </h2>
                  </div>
                </div>
                <div className="grid gap-2">
                  {block.items.map((item, j) => (
                    <div
                      key={j}
                      className=" flex items-center gap-2.5 p-2.5 rounded-xl"
                    >
                      <div className="text-primary">

                      {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p
                          className="font-bold"
                          // style={{ color: C.sub }}
                        >
                          {item.label}
                        </p>
                        <p
                          className=" text-primary truncate"
                          // style={{ color: block.color }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Forms */}
        <div className="fade-up d2">
          <p
            className="mb-3 font-bold"
            // style={{ color: C.sub }}
          >
            Send an Enquiry
          </p>
          <div
            className=""
            // style={{ borderColor: C.border }}
          >
            {/* Tabs */}
            <div
              className="flex overflow-x-auto"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              {ENQUIRY_TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className="enq-tab flex items-center gap-2 px-5 py-3.5 font-medium border-b-2 flex-1 justify-center"
                  style={
                    activeTab === t.id
                      ? {
                          borderBottomColor: t.color,
                          color: t.color,
                          background: t.bg,
                        }
                      : {
                          borderBottomColor: "transparent",
                          color: C.sub,
                          background: "#fff",
                        }
                  }
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              ))}
            </div>

            {/* Active tab label */}
            <div className="px-6 pt-5 pb-1 flex items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary text-white"
                // style={{ background: tab.bg }}
              >
                
                {tab.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl" style={{ color: C.dark }}>
                  {tab.label} Enquiry
                </h3>
                <p className="" style={{ color: C.sub }}>
                  Fill in the form and we'll respond within 24 hours
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="px-6 pb-6 pt-3">
              <EnquiryForm key={activeTab} tab={tab} />
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        {/* <div
          className="fade-up d3 rounded-2xl overflow-hidden border"
          style={{ borderColor: C.border }}
        >
          <div
            className="px-5 py-4 flex items-center gap-2 bg-white"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <span className="text-lg">📍</span>
            <div>
              <p className="font-bold text-sm" style={{ color: C.dark }}>
                Find Us
              </p>
              <p className="text-xs" style={{ color: C.sub }}>
                Shree RMD Ayurveda College &amp; Hospital, Gujarat
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center py-14"
            style={{ background: "linear-gradient(135deg, #fdf4f5, #fff5f6)" }}
          >
            <div className="text-center">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="font-semibold text-sm" style={{ color: C.sub }}>
                Map Embed Area
              </p>
              <p className="text-xs mt-1" style={{ color: "#bbb" }}>
                Google Maps iframe goes here
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Footer scroll */}
      {/* <div className="flex justify-center pb-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="enq-submit flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
          style={{ background: C.primary }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          Back to top
        </button>
      </div> */}
    </div>
  );
}
