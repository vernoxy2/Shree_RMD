import React from 'react';
import ActivityReports from './Components/ActivityReports';
import PrimaryHeader from '../../../../Components/Ui/PrimaryHeader';
import StudDetaHead from "../../../../assets/AyurvedCollage/StudDetaImgs/StudDetaHead.webp"


const Activities = () => {
  return (
    <div className='bg-Bg'>
        <PrimaryHeader BgImg={StudDetaHead} HeadLine={"Activities"}/>
        <ActivityReports />
      
    </div>
  );
}

export default Activities;
