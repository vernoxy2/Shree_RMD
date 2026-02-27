import React from "react";
import PrimaryHeader from "../../../Components/Ui/PrimaryHeader";
import CategoriesHead from"../../../assets/AyurvedCollage/CategoriesDepartmentImgs/CategoriesHead.webp"
import Professional from "./Components/Professional";
import { Department1 } from "./Components/DepartMentdata";
import { Department2 } from "./Components/DepartMentdata";
import { Department3 } from "./Components/DepartMentdata";

const CategoriesDepartment = () => {
  return (
    <div className="bg-[#FFF6F6]">
      <PrimaryHeader
      BgImg={CategoriesHead}
        HeadLine={
          <>
            Professional <br />
            Categories Department
          </>
        }
      />
      <div className="container space-y-12 py-20">
        <h1 className="text-center">Departments</h1>
        <hr className="border-b rounded-full" />
        <Professional HeadLine={"I - Professional"} Data={Department1} />
        <Professional HeadLine={"II - Professional"} Data={Department2} />
        <Professional HeadLine={"III - Professional"} Data={Department3} />
      </div>
    </div>
  );
};

export default CategoriesDepartment;
