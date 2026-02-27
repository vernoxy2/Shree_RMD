import React from "react";
import Rajeshbhai from "../../../assets/AboutUsPageImg/Rajeshbhai.svg";
import Nimeshbhai from "../../../assets/AboutUsPageImg/Nimeshbhai.svg";

const Principal = () => {
  return (
    <div className="bg-primary/10 py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-5 xl:w-[92%]">
          <h1>Principal’s Message</h1>
          <p>
            {" "}
            <strong className="text-primary">The sphere of Ayurveda</strong> is
            moving fast and the entire health care systems existing in the world
            are getting benefitted from it. In this scenario the real
            Ayurvedians and real Ayurveda is observed to be missing at some
            level. Although these situation is for time being and the real
            Ayurveda will come with great potential and power as it is SHASHVAT
            (eternal). But before that a team of leaders, practitioners,
            physicians, researchers, etc with real zeal of Ayurveda has to be
            created with multi task performance and potentials.{" "}
          </p>
          <p>
            The institute is created and aimed with this vision and innovative
            move. By providing all material desired to create a supreme with
            great team of teachers, non-teaching members can be achieved.
            Empowerment of students for their all round development through
            education is our cherished motto. Along with this providing the best
            services to the needy, diseased individuals approaching to us will
            be the target. We believe and practised that excellence is a
            continuous process and in pursuit of creating successful new
            generations.
          </p>
        </div>
        {/* Image */}
        <div className=" grid md:grid-cols-2 gap-8 relative">
          <div>
            <div className="relative w-full h-fit overflow-hidden group">
              <img src={Rajeshbhai} alt="Rajeshbhai" className=" w-full" />
              <div
                className="absolute -bottom-20 group-hover:bottom-2 duration-500 left-1/2 -translate-x-1/2 
                  bg-white/80 backdrop-blur-lg 
                  px-6 py-3 rounded-lg text-center w-full mx-2"
              >
                <h2 className="text-xl">Dr. Rajesh Ratani</h2>
                <p>Principal</p>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div className="relative w-full h-fit overflow-hidden group">

            <img src={Nimeshbhai} alt="Nimeshbhai" className="w-full" />
            <div
                className="absolute -bottom-20 group-hover:bottom-2 duration-500 left-1/2 -translate-x-1/2 
                  bg-white/80 backdrop-blur-lg 
                  px-6 py-3 rounded-lg text-center w-full mx-2"
              >
                <h2 className="text-xl">Dr. Nimesh Thakor</h2>
                <p>Vice Principal</p>
              </div>
            </div>
          <div className="absolute border-2 border-primary p-28 py-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
