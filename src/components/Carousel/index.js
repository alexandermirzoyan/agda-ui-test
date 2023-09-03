import Image from '../../assets/images/image-5.png';
import { TEXT_XS } from '../../commonStyles';
import Arrow from '../../assets/icons/arrow.svg';

const CAROUSEL_ARROW_BTN_SIZES = 'lg:w-[75px] w-[52px]';
const CAROUSEL_IMAGE_HEIGHTS = 'lg:h-[798px] sm:h-[640px] h-full';
const CAROUSEL_SECONDARY_IMAGE_WIDTHS = 'lg:w-[582px] sm:w-[425px]';

export const Carousel = () => (
  <div className='sm:px-0 px-[16px]'>
    <div className='flex justify-around'>
      <img
        src={Image}
        alt='slider-1'
        className={`${CAROUSEL_IMAGE_HEIGHTS} ${CAROUSEL_SECONDARY_IMAGE_WIDTHS}
        sm:block hidden
        lg:translate-x-[-186px] translate-x-[-160px]
        translate-y-[134px]
        rotate-[-22deg] opacity-[0.5]`}
      />
      <img
        src={Image}
        alt='slider-2'
        className={`${CAROUSEL_IMAGE_HEIGHTS} lg:w-[582px] lg:min-w-[582px] sm:w-[467px] w-full`}
      />
      <img
        src={Image}
        alt='slider-3'
        className={`${CAROUSEL_IMAGE_HEIGHTS} ${CAROUSEL_SECONDARY_IMAGE_WIDTHS}
        sm:block hidden
        lg:translate-x-[186px] translate-x-[160px]
        translate-y-[134px]
        rotate-[22deg] opacity-[0.5]`}
      />
    </div>
    <div className='flex flex-col items-center'>
      <span className={`${TEXT_XS} lg:w-[582px] sm:w-[467px] w-full mt-[24px]`}>
        Report on proposed imporevement of Duba Harbour by Sir William Hacrow and partners,January 1955.
        Images reproduced by permission of The National Archives, London, England
      </span>
      <div className='flex items-center lg:mt-[24px] mt-[32px]'>
        <button className={CAROUSEL_ARROW_BTN_SIZES}>
          <img src={Arrow} alt='arrow-back' />
        </button>
        <span className={`${TEXT_XS} mx-[22px]`}>02/30</span>
        <button className={CAROUSEL_ARROW_BTN_SIZES}>
          <img src={Arrow} className='rotate-[180deg]' alt='arrow-back' />
        </button>
      </div>
    </div>
  </div>
);
