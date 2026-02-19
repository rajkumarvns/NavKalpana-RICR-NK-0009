import React from 'react';
import D_Nav from './D_Nav';
import SimpleImageSlider from './SimpleImageSlider';
import ImageSlider from './ImageSlider';
import Contents from './Contents';
import Story_d from './Story_dfly';
import ParticleController from './ParticleController';
import D_content from './d_content';
import D_Footer from './D_Footer';
import D_BuyPage from './D_BuyPage';

const D_home = () => {
  return (
    <div>
      <D_Nav/>
      <ImageSlider />
      <Contents />
      <Story_d />
      <ParticleController />
      <D_content />
      <D_Footer />
      <D_BuyPage />
      
    </div>
  );
};


export default D_home;


