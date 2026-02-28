import React from 'react';
import PrimaryHeader from '../../../../Components/Ui/PrimaryHeader';
import StudDetaHead from "../../../../assets/AyurvedCollage/StudDetaImgs/StudDetaHead.webp"
import Enrollment from './Enrollment';

const StudentsDetails = () => {
  return (
    <>
    <PrimaryHeader BgImg={StudDetaHead} HeadLine={"Students Details"}/>
      <Enrollment />
    </>
  );
}

export default StudentsDetails;
