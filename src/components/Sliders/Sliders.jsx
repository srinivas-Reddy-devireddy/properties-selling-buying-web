// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="image-slider">
      <div>
        <img src="http://www.harper-adams.ac.uk/img/banner/landscape/LandProperty.jpg" alt="" className='img' />
      </div>
      <div>
        <img src="http://craigsmithandassoc.com/wp-content/uploads/2016/05/residential.jpg" alt="" className='img' />
      </div>   
      <div>
        <img src="https://tse3.mm.bing.net/th?id=OIP._uApzmyYG-LrVRxE5yvdrgHaCr&pid=Api&P=0&h=180" alt="" className='img'  />
      </div>
     
    </Slider>
  );
};

export default Sliders 
