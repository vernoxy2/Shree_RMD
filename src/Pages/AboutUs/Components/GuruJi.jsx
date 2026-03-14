import React from "react";
import Guruji1 from "../../../assets/AboutUsPageImg/GuriJiImg/Guruji1.svg";
import Guruji2 from "../../../assets/AboutUsPageImg/GuriJiImg/Guruji2.svg";
import GurujiBg from "../../../assets/AboutUsPageImg/GuriJiImg/GurujiBg.png";
import CircaleAnimation from "../../../Components/Ui/CircaleAnimation";

const GuruJi = () => {
  return (
    <>
      <div className="bg-primary  ">
        <div className="relative grid grid-cols-1 md:grid-cols-2 2xl:container 2xl:px-0">
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <CircaleAnimation />
          </div>
          <div className="flex py-16 flex-col gap-3 items-center justify-center text-center">
            <h1 data-aos="fade-up" data-aos-delay="100" className="text-white">प्रेरणादाता</h1>
            <h2 data-aos="fade-up" data-aos-delay="200" className="text-white font-normal tracking-wide leading-snug">
              {" "}
              परम पूज्य ग आ भ श्री विजय <br />
              हेमप्रभसूरीश्वरजी महाराजा
            </h2>
          </div>
          <div data-aos="fade-right" data-aos-delay="200" className="overflow-hidden">

          <img  src={Guruji1} alt="" className="object-cover w-full h-full transition-all duration-700 ease-in-out hover:scale-110 grayscale hover:grayscale-0" />
          </div>
          <div data-aos="fade-left" data-aos-delay="200" className="overflow-hidden">

          <img  src={Guruji2} alt="" className="object-cover w-full h-full transition-all duration-700 ease-in-out hover:scale-110 grayscale hover:grayscale-0" />
          </div>
          <div className="flex py-16 flex-col gap-3 items-center justify-center text-center">
            <h1 data-aos="fade-up" data-aos-delay="100" className="text-white">मार्गदर्शक</h1>
            <h2 data-aos="fade-up" data-aos-delay="200" className="text-white font-normal tracking-wide leading-snug">
              {" "}
              वर्तमान गच्छाधिपती आ भ श्री विजय <br />
              विज्ञानप्रभसूरीश्वरजी महाराजा
            </h2>
          </div>
        </div>
      </div>
      {/* Text Section */}
      <div style={{ backgroundImage: `url(${GurujiBg})` }}>
        <div className="py-14 space-y-6 max-w-4xl mx-auto px-5 ">
          <p data-aos="fade-down" data-aos-delay="200" className="text-center">
            Ayurveda system of medicine is one of the world’s oldest medical
            systems which was originated in India more than{" "}
            <span className="text-primary">3,000 years ago</span> and ruins the
            country’s traditional health care systems. The knowledge
            incorporated in the system and the way it was propagated among the
            people of country in the form of traditions, rituals, culture, food,
            etc was amazing. It is the time to preserve it, popularize it and
            use it for the benefit of humanity, animal kingdom and protection of
            entire earth. Ayurveda will be the best option to serve the society.
          </p>
          <hr data-aos="zoom-out" data-aos-delay="200" className="border-primary border-2 w-1/3 mx-auto rounded-full" />
        </div>
      </div>
    </>
  );
};

export default GuruJi;
