import Image from '../../assets/images/image-5.png';
import { TEXT_XS } from '../../commonStyles';
import Arrow from '../../assets/icons/arrow.svg';

export const Carousel = () => (
  <>
    <div className='flex justify-around'>
      <img
        src={Image}
        alt='slider-image'
        className='lg:w-[582px] sm:w-[425px] sm:block hidden
        lg:translate-x-[-186px] translate-x-[-127px]
        translate-y-[134px]
        rotate-[-22deg] opacity-[0.5]'
      />
      <img src={Image} alt='slider-image' className='lg:w-[582px] sm:w-[467px] w-full' />
      <img
        src={Image}
        alt='slider-image'
        className='lg:w-[582px] sm:w-[425px] sm:block hidden
        lg:translate-x-[186px] translate-x-[127px]
        translate-y-[134px]
        rotate-[22deg] opacity-[0.5]'
      />
    </div>
    <div className='flex flex-col items-center'>
      <span className={`${TEXT_XS} lg:w-[582px] sm:w-[467px] w-full mt-[24px]`}>
        Report on proposed imporevement of Duba Harbour by Sir William Hacrow and partners,January 1955.
        Images reproduced by permission of The National Archives, London, England
      </span>
      <div className='flex items-center lg:mt-[24px] mt-[32px]'>
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
