import Slider from 'react-slick';
import Image from '../../assets/images/image-5.png';
import Arrow from '../../assets/icons/arrow.svg';
import { TEXT_XS } from '../../commonStyles';

const settings = {
  dots: false,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
};

export const Carousel = () => (
  <>
    <Slider {...settings}>
      <img src={Image} alt='1' />
      <img src={Image} alt='2' />
      <img src={Image} alt='3' />
      <img src={Image} alt='4' />
      <img src={Image} alt='5' />
      <img src={Image} alt='6' />
    </Slider>
    <div className='flex flex-col items-center'>
      <span className={`${TEXT_XS} lg:w-[582px] sm:w-[467px] w-full mt-[24px]`}>
        Report on proposed imporevement of Duba Harbour by Sir William Hacrow and partners,January 1955.
        Images reproduced by permission of The National Archives, London, England
      </span>
      <div className='flex items-center mt-[24px]'>
        <button>
          <img src={Arrow} alt='arrow-back' />
        </button>
        <span className={`${TEXT_XS} mx-[22px]`}>02/30</span>
        <button>
          <img src={Arrow} className='rotate-[180deg]' alt='arrow-back' />
        </button>
      </div>
    </div>
  </>
);
