import React from 'react';
import PrimaryHeader from '../../Components/Ui/PrimaryHeader';
import AboutTrsut from './Components/AboutTrsut';
import ImagesSlider from './Components/ImagesSlider';
import Institutes from './Components/Institutes';
import TrustReviews from './Components/TrustReviews';

const Trust = () => {
  return (
    <div className='bg-Bg'> 
      <PrimaryHeader HeadLine={"Our Trust"}/>
      <AboutTrsut />
      <ImagesSlider />
      <Institutes/>
      <TrustReviews/>
    </div>
  );
}

export default Trust;
