import React from "react";
import Guruji1 from "../../../assets/AboutUsPageImg/GuriJiImg/Guruji1.svg";
import Guruji2 from "../../../assets/AboutUsPageImg/GuriJiImg/Guruji2.svg";

const GuruJi = () => {
  return (
    <>
    <div className="bg-primary  ">
      <div className=" grid grid-cols-1 md:grid-cols-2 2xl:container px-0">
        <div></div>
        <img src={Guruji1} alt="" className="w-full" />
        <img src={Guruji2} alt="" className="w-full" />
        <div></div>
      </div>
    </div>
      {/* Text Section */}
      <div className="py-16 space-y-6 max-w-4xl mx-auto px-5 bg-white">
        <p className="text-center">
          Ayurveda system of medicine is one of the world’s oldest medical
          systems which was originated in India more than{" "}
          <span className="text-primary">3,000 years ago</span> and ruins the
          country’s traditional health care systems. The knowledge incorporated
          in the system and the way it was propagated among the people of
          country in the form of traditions, rituals, culture, food, etc was
          amazing. It is the time to preserve it, popularize it and use it for
          the benefit of humanity, animal kingdom and protection of entire
          earth. Ayurveda will be the best option to serve the society.
        </p>
        <hr className="border-primary border-2 w-1/3 mx-auto rounded-full" />
      </div>
    </>
  );
};

export default GuruJi;
