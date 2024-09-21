import React from 'react';
import './Banner.css';
 

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <img src='/utils/cropped-pistaciafood_111.png' alt="Banner" />
      <div className="banner-text">
        <span>Food Diary</span>
      </div>
    </div>
  );
};

export default Banner;
