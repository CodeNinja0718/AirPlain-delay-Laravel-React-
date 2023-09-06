import React from "react";
import Slider, { Settings } from "react-slick";

interface Props {
  images: string[];
}

const Mycarousel: React.FC<Props> = ({ images }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt="carouselImage" />
        </div>
      ))}
    </Slider>
  );
};

export default Mycarousel;