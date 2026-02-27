import React from "react";
import Kantilal from "../../../assets/AboutUsPageImg/TrusteeImgs/Kantilal.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const Trustee = () => {
  return (
    <div>
      <div className="container py-28 space-y-4">
        <div className="relative">

        <LazyImage
          src={Kantilal}
          alt="Kantilal"
          className="w-full lg:w-1/2 lg:float-left lg:pr-8 pb-4"
        />
          <div className="absolute border-2 border-primary p-28 -top-8 -left-8 z-[-1]"></div>
        </div>

        <h1 className="text-4xl ">Shri Kantilal Hastimalji Oswal</h1>
        <h1 className="text-3xl font-normal text-[#676767]">( Trustee )</h1>
        <p className="text-primary font-bold">Dear all</p>
        <p>
          The Girivihartrust’s RMD Ayurveda college and hospital and Cancer
          Hospital is a pillar of strength and encouragement for anyone looking
          for high-quality, reasonably priced Medical & cancer care. Beyond
          providing only medical care, we also provide patients with the extra
          comfort of having a companion accompany them on their healing
          path.Here, we practice holistic medicine and offer a wide range of
          traditional Ayurvedic treatments to meet a variety of needs.
        </p>
        <p>
          Our RMD Ayurvedic College boasts a comprehensive range of therapies,
          including Pizhichil, Abhyanga, Nasyam, and many others. Skilled
          practitioners with deep-rooted knowledge in ancient therapeutic
          practices administer these treatments, tailoring them to individual
          needs for optimal outcomes.
        </p>
        <p>
          Established under the Shree Prabhav Hem Kamdhenu Girivihar Trust, ,
          the RMD Ayurveda college & Hospital Institute is a symbol of
          unwavering dedication to human service. The cornerstone of this
          hospital is our commitment to serve humanity. In keeping with this
          admirable undertaking, we are dedicated to the hospital in Palitana,
          which was established with the same spirit of helping mankind.
        </p>
        <p>
          The combination of an Ayurvedic hospital and college demonstrates our
          commitment to fostering the next wave of Ayurvedic practitioners while
          safeguarding this age-old therapeutic technique.
        </p>
        <p>
          A holistic treatment strategy, affordable prices, and excellent
          standards are all combined at the Girivihartrust Cancer Hospital & RMD
          Ayurved College and Hospital to provide exceptional medical care.
        </p>
        <p>
          We are your trusted healthcare partner, whether you are looking for
          cutting-edge cancer therapy or ancient Ayurvedic medicines.Girivihar
          Cancer Hospital and RMD Ayurveda Hospital and College combine the best
          of both worlds under one roof. Going forward, our undying commitment
          will be to carrying with this noble cause and making sure that our
          efforts continue to improve people’s lives by providing healthcare
          services. With Best regards
        </p>
      </div>
    </div>
  );
};

export default Trustee;
