import React from "react";
import Img1 from "../../../assets/AyurvedCollage/ResAndDevImg/Img1.svg";
import Img2 from "../../../assets/AyurvedCollage/ResAndDevImg/Img2.svg";
import LazyImage from "../../../Components/Ui/LazyImage";

const ResAndDev = () => {
  return (
    <div className="bg-[#FFF6F6] py-20">
      <div className="container space-y-6">
        <h1>
          Research <br /> & Development
        </h1>
        <hr className="border" />
        <p className="lg:w-[94%]">
          The Research & Development Center at Shree RMD Ayurved College &
          Hospital is dedicated to advanced Ayurvedic research, drug testing,
          and scientific innovation. The center integrates classical Ayurveda
          with modern sciences such as Microbiology, Biochemistry, and Pharmacy
          to ensure quality, safety, and evidence-based herbal formulations.
          Equipped with advanced laboratory infrastructure and modern
          technology, the center strives to establish itself as a leading hub of
          excellence in Ayurveda research and innovation.
        </p>

        <div className="flex group">
          <LazyImage src={Img1} alt="" className="" />
          <div className="flex-1 bg-primary/10 group-hover:bg-primary duration-300 rounded-r-2xl flex items-center px-8 py-16">
            <div className="max-w-2xl mx-auto flex gap-4 ">
              {/* Vertical Line */}
              <div className="w-1 bg-primary group-hover:bg-white duration-300"></div>

              {/* Text */}
              <p className="text-primary group-hover:text-white duration-300">
                The High-Tech Ayurveda Research & Development Center was
                established to conduct basic and advanced research activities in
                Ayurveda.
              </p>
            </div>
          </div>
        </div>
        <div className="flex group">
          <LazyImage src={Img2} alt="" className="" />
          <div className="flex-1 bg-primary/10 group-hover:bg-primary duration-300 rounded-r-2xl flex items-center px-8 py-16">
            <div className="max-w-2xl mx-auto flex gap-4 ">
              {/* Vertical Line */}
              <div className="w-1 bg-primary group-hover:bg-white duration-300"></div>

              {/* Text */}
              <p className="text-primary group-hover:text-white duration-300">
                The center aims to become a center of excellence in Ayurveda by using the latest technological gadgets and modern scientific knowledge.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ResAndDev;
