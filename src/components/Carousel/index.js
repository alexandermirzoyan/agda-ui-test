import Slider from 'react-slick';
import Image from '../../assets/images/image-5.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const Carousel = () => (
  <Slider {...settings}>
    <img src={Image} alt='1' />
    <img src={Image} alt='2' />
    <img src={Image} alt='3' />
    <img src={Image} alt='4' />
    <img src={Image} alt='5' />
    <img src={Image} alt='6' />
  </Slider>
);
