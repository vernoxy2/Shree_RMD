import React from 'react';
import PrimaryHeader from '../../Components/Ui/PrimaryHeader';
import AboutTrsut from './Components/AboutTrsut';
import ImagesSlider from './Components/ImagesSlider';
import Institutes from './Components/Institutes';

const Trust = () => {
  return (
    <div className='bg-bg'> 
      <PrimaryHeader HeadLine={"Our Trust"}/>
      <AboutTrsut />
      <ImagesSlider />
      <Institutes/>
    </div>
  );
}

export default Trust;
