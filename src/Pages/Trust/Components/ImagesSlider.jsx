import React from 'react';
import SliderBg from "../../../assets/Trust/SliderBg.png";


const ImagesSlider = () => {
  return (
    <section style={{backgroundImage: `url(${SliderBg})`}} className='bg-cover bg-center'>
        <div className='py-20 container '>
            <div className='py-40 border'></div>
        </div>
      
    </section>
  );
}

export default ImagesSlider;
