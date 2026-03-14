import React from "react";
import EstablishedImg from "../../../assets/AyurvedCollage/EstablishedImg.svg";
import LazyImage from "../../../Components/Ui/LazyImage";
import Comma50 from "../../../assets/Comma50.svg"

const Established = () => {
  return (
    <div className="bg-[#FFF6F6] py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
            <LazyImage src={EstablishedImg} alt="EstablishedImg" className="w-fit" />
        </div>
        <div className="space-y-8">
          <h1 data-aos="fade-right" data-aos-delay="100" className="flex items-start gap-4">
            Institutional Overview
            <img src={Comma50} alt="Comma50" className="mt-5 -mb-5"/>
          </h1>
          <p data-aos="fade-right" data-aos-delay="200" className="text-primary font-bold ">
            Shree Rasiklal Manikchand Dhariwal Ayurveda College,
            
          </p>
          <p data-aos="fade-right" data-aos-delay="300">
            Established in 2016, is a leading institution dedicated to quality
            Ayurvedic medical education. Affiliated with Gujarat Ayurved
            University, Jamnagar and recognized by the National Commission for
            Indian System of Medicine (NCISM), New Delhi, the college offers the
            Bachelor of Ayurveda Medicine and Surgery (B.A.M.S.) program. With
            modern infrastructure, experienced faculty, and a strong academic
            foundation, the institution is committed to nurturing skilled
            Ayurvedic professionals rooted in traditional wisdom and
            contemporary healthcare practices.
          </p>
          <div data-aos="fade-right" data-aos-delay="400" className="flex items-center gap-5">
            <h1 className="bg-primary py-2.5 px-4 text-white text-3xl rounded-xl flex items-center gap-3 w-fit">
              {" "}
              <span><hr className="border h-5" /></span>2016
            </h1>
            <h1 className="text-3xl text-[#676767]">Established</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Established;
