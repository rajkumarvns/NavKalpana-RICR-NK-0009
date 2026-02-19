
import React, { useState } from 'react';

import '../../styles/dfly/SimpleImageSlider.css';

const SimpleImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        ❮
      </button>
      <img src={images[current]} alt="slide" className="slide-image" />
      <button className="right-arrow" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default SimpleImageSlider;
