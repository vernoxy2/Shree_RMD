import React from 'react';
import TellUs from './Components/TellUs';
import GetTouch from './Components/GetTouch';
import PrimaryHeader from '../../Components/Ui/PrimaryHeader';

const ConatactUs = () => {
  return (
    <>
    <PrimaryHeader HeadLine={"Contact Us"}/>
    <GetTouch/>
    <TellUs/>
    </>
  );
}

export default ConatactUs;
