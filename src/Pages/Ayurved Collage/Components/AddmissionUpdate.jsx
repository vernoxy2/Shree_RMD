import React, { useEffect, useRef } from "react";
import PrimaryBtn from "../../../Components/Ui/PrimaryBtn";
import UpdateGirl from "../../../assets/AyurvedCollage/UpdateGirl.png";
import AddUpdateBg from "../../../assets/AyurvedCollage/AddUpdateBg.png";

const AddmissionUpdate = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el) => {
                el.classList.add("animate-visible");
              });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Inject keyframe styles once */}
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .animate-on-scroll.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.25s; }
        .delay-3 { transition-delay: 0.4s; }
        .delay-4 { transition-delay: 0.55s; }
        .animate-img {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.3s;
        }
        .animate-img.animate-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div ref={sectionRef}>
        <div
          style={{ backgroundImage: `url(${AddUpdateBg})` }}
          className="bg-cover bg-center pt-20"
        >
          <div className="container relative py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h1 className="animate-on-scroll delay-1">Admission Update</h1>

              <h2 className="animate-on-scroll delay-2 text-3xl font-normal max-w-lg leading-9">
                Apply Now for BAMS Admissions 2025-2026
              </h2>

              <p className="animate-on-scroll delay-3">
                Shree RMD Ayurveda College invites applications for the Bachelor
                of Ayurveda Medicine & Surgery (B.A.M.S.) program. The college,
                affiliated with Gujarat Ayurved University, Jamnagar and
                recognized by NCISM, New Delhi, offers quality education with
                modern infrastructure, experienced faculty, and practical
                clinical training. Prospective students can stay updated on
                admissions, eligibility criteria, seat availability, and
                application deadlines to join this premier Ayurveda institute.
              </p>

              <div className="animate-on-scroll delay-4">
                <PrimaryBtn text="Contact Now" />
              </div>
            </div>

            {/* Image slides in from the right */}
            <img
              src={UpdateGirl}
              alt=""
              className="animate-img animate-on-scroll ml-auto absolute -bottom-5 right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddmissionUpdate;