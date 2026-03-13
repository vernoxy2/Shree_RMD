import React from 'react';
import TellUs from './Components/TellUs';
import GetTouch from './Components/GetTouch';
import PrimaryHeader from '../../Components/Ui/PrimaryHeader';

const ConatactUs = () => {
  return (
    <div className='overflow-hidden'>
    <PrimaryHeader HeadLine={"Contact Us"}/>
    <GetTouch/>
    <TellUs/>
    </div>
  );
}

export default ConatactUs;
