import React from "react";
import ResAndDevBg from "../../../assets/AyurvedCollage/ResAndDevImg/ResAndDevBg.png";
import Img1 from "../../../assets/AyurvedCollage/ResAndDevImg/Img1.svg";
import Img2 from "../../../assets/AyurvedCollage/ResAndDevImg/Img2.svg";
import Svg1 from "../../../assets/AyurvedCollage/ResAndDevImg/Svg1.svg";
import Svg2 from "../../../assets/AyurvedCollage/ResAndDevImg/Svg2.svg";
import LazyImage from "../../../Components/Ui/LazyImage";
import CommaPrimary from "../../../assets/CommaPrimary.svg";

const ResAndDev = () => {
  return (
    <div
      style={{ backgroundImage: `url(${ResAndDevBg})` }}
      className="bg-[#FFF6F6] py-20 bg-cover bg-center"
    >
      <div className="container space-y-6">
        <h1 data-aos="fade-right" data-aos-delay="100">
          Research <br /> & Development
        </h1>
        <hr className="border" />
        <p data-aos="fade-up" data-aos-delay="200" className="lg:w-[94%]">
          The Research & Development Center at Shree RMD Ayurved College &
          Hospital is dedicated to advanced Ayurvedic research, drug testing,
          and scientific innovation. The center integrates classical Ayurveda
          with modern sciences such as Microbiology, Biochemistry, and Pharmacy
          to ensure quality, safety, and evidence-based herbal formulations.
          Equipped with advanced laboratory infrastructure and modern
          technology, the center strives to establish itself as a leading hub of
          excellence in Ayurveda research and innovation.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="flex group">
          <div className="overflow-hidden">
            <img src={Img1} alt="" className="hover:scale-110 duration-500 " />
          </div>
          <div className="flex-1 bg-primary/10 group-hover:bg-primary duration-300 rounded-r-2xl flex items-end px-8 ">
           <div className="max-w-2xl mx-auto  space-y-2">
              <div className="flex gap-4">
                {/* Vertical Line */}
                <div className="w-1 bg-primary group-hover:bg-white duration-300"></div>

                {/* Text */}
                <p className="text-primary group-hover:text-white duration-300">
                  The High-Tech Ayurveda Research & Development Center was established to conduct basic and advanced research activities in Ayurveda.
                </p>
              </div>
              <div className="flex items-start justify-between">
                <img
                  src={Svg1}
                  alt=""
                  className="group-hover:brightness-0 group-hover:invert duration-200"
                />
                <img
                  src={CommaPrimary}
                  alt=""
                  className="rotate-180 h-12 group-hover:brightness-0 group-hover:invert group-hover:opacity-40 duration-200"
                />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="flex group ">
          <div className="overflow-hidden">
            <img src={Img2} alt="" className="hover:scale-110 duration-500 " />
          </div>
          <div className="flex-1 flex-col bg-primary/10 group-hover:bg-primary duration-300 rounded-r-2xl flex items-start px-8 justify-end pb-2">
            <div className="max-w-2xl mx-auto  space-y-2">
              <div className="flex gap-4">
                {/* Vertical Line */}
                <div className="w-1 bg-primary group-hover:bg-white duration-300"></div>

                {/* Text */}
                <p className="text-primary group-hover:text-white duration-300">
                  The center aims to become a center of excellence in Ayurveda
                  by using the latest technological gadgets and modern
                  scientific knowledge.
                </p>
              </div>
              <div className="flex items-start justify-between">
                <img
                  src={Svg2}
                  alt=""
                  className="group-hover:brightness-0 group-hover:invert duration-200"
                />
                <img
                  src={CommaPrimary}
                  alt=""
                  className="rotate-180 h-12 group-hover:brightness-0 group-hover:invert group-hover:opacity-40 duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResAndDev;
