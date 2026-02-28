import React from "react";
import PrimaryHeader from "../../../../Components/Ui/PrimaryHeader";
import TeachingStaffDetailsBg from "../../../../assets/AyurvedCollage/AyurvedCollageHead.webp";

const DepartmentList = [
  "Dravyaguna Vidnyan",
  "Kayachikitsa",
  "Shalyatantra",
  "Strirog and Prasuti Tantra",
  "Stree Roga Evum Prsutitantra",
  "Panchkarma",
  "Kaumarbhritya",
  "Kaumarbhritya- Balroga",
  "Agadtantra ,Vyavahar Ayurveda Evum Vidhi Vaidyak",
  "Agadtantra Avum Vidhivaidyaka",
  "Rog Nidan Vikriti Vidnyan",
  "Rasashsatra & Bhaishajya Kalpana",
  "Rachana Shareera",
  "Rachana Sharir",
  "Sharira Department",
  "Kriya Sharira",
  "Samhita & Siddhanta",
  "Ayurveda Samhita siddhant",
  "Sanskrit Ayurved samhita siddhant",
];

const TeachingStaffDetails = () => {
  const [activeTeb, setActiveTeb] = React.useState(DepartmentList[0]);

  return (
    <div className="bg-Bg">
      <PrimaryHeader
        BgImg={TeachingStaffDetailsBg}
        HeadLine={"Teaching Staff "}
      />

      {/* Content */}
      <section className="py-20 container">
        {/* Heading and Paragraph */}
        <div className="space-y-5 text-center ">
          <h1 className="text-center">Teaching Staff </h1>
          <p className="text-center  max-w-7xl mx-auto">
            The Staff Details section showcases the dedicated Teaching Staff and
            Non-Teaching Staff of Shree RMD Ayurved College & Hospital. Our
            qualified faculty members ensure academic excellence in Ayurveda
            education, while experienced administrative and support staff
            maintain efficient operations and quality healthcare services across
            the institution.
          </p>
          <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
        </div>

        {/* Attendance Table */}
        <div className="flex gap-8 flex-grow-0 pt-20 items-stretch">
          {/* Said Menu */}
          <div className="w-5/12 h-fit py-10 px-9 pb-16 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
            <h2>Department Name</h2>
            <ul
              className="mt-5 space-y-5 max-h-[455px] overflow-auto rounded-2xl"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#a63a4b #f3f4f6",
                scrollbarGutter: "stable",
                scrollBehavior: "smooth",
              }}
            >
              {DepartmentList.map((item, i) => (
                <button
                  key={i}
                  className={`py-4 px-5 w-full text-start bg-[#F6F6F6] rounded-2xl group duration-300 transition-colors ${
                    item === activeTeb
                      ? "bg-primary text-white "
                      : "text-secondary hover:bg-primary/20"
                  }`}
                  onClick={() => setActiveTeb(item)}
                >
                  <p
                    className={`text-xl duration-300 transition-colors ${item === activeTeb ? "text-white font-bold" : "group-hover:text-primary"}`}
                  >
                    {item}
                  </p>
                </button>
              ))}
            </ul>
          </div>
          {/* Table */}
          <div className="flex-1 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.15)] p-10 flex flex-col rounded-2xl">
            <div className="flex-1 overflow-y-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingStaffDetails;
