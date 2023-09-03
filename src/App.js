import { Header } from './layouts/Header';
import {
  SECTION,
  TEXT_XL,
  TEXT_SM,
  TEXT_XS,
  TEXT_LG,
  TEXT_MD,
  SECTION_HORIZONTAL_SPACING,
} from './commonStyles';

import Image1 from './assets/images/image-1.jpeg';
import Image2 from './assets/images/image-2.jpeg';
import Image3 from './assets/images/image-3.jpg';
import Image4 from './assets/images/image-4.png';
import SwordPattern from './assets/icons/pattern-2.svg';
import { Carousel } from './components/Carousel';

const IMAGE_CARD_COMMON_STYLES = 'lg:w-[375px] md:w-[310px] w-[174px] lg:h-[481px] md:h-[398px] h-[222px]';

function App() {
  return (
    <>
      <Header />
      <div className={`${SECTION} ${SECTION_HORIZONTAL_SPACING}`}>
        <div className='flex justify-center lg:mb-[58px] md:mb-[81px] sm:mb[67px] mb-[38px]'>
          <img src={Image2} alt='image-1' className={`${IMAGE_CARD_COMMON_STYLES} z-[1] relative left-[150px] rotate-[-15deg] origin-bottom-right grayscale`} />
          <img src={Image1} alt='image-2' className={`${IMAGE_CARD_COMMON_STYLES} z-[2]`} />
          <img src={Image3} alt='image-3' className={`${IMAGE_CARD_COMMON_STYLES} z-[3] relative left-[-150px] rotate-[15deg] origin-bottom-left grayscale`} />
        </div>
        <article className='text-center text-main-gold'>
          <h2 className={`${TEXT_XL} font-amiri-regular`}>
            <span className='font-amiri-italic'>
              Historical overview on the {' '}
            </span>
            <span className='uppercase'>
              development of Infrastructure in the UAE
            </span>
          </h2>
          <p className={`${TEXT_MD}`}>
            <span className='font-amiri-italic'>Author: </span>
            <span>UAE National Library and Archives</span>
          </p>
        </article>
      </div>
      <div className={`${SECTION} ${SECTION_HORIZONTAL_SPACING}`}>
        <div className={`${TEXT_SM} grid sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-x-[32px] lg:gap-y-[32px] sm:gap-y-[24px] gap-y-[16px]`}>
          <p>
            The United Arab Emirates is famous at home and abroad for having developed its infrastructure
            at breakneck speed. Most of this development has taken place in recent years
            although it is worthy of note that it started even before the Trucial States became a
            country following the Union of the seven emirates.
          </p>
          <p>
            The discovery and export of oil from 1962 added a considerable boost to the efforts that were
            underway, with limited resources, in the 1950s and from then on, following the export of oil, the
            development and building took off at a huge pace.
          </p>
          <p>
            This online exhibition aims to showcase some of the early infrastructure projects from the 1950s up
            until the end of the 1970s and does so with documents, photographs, videos and newspaper articles.
          </p>
        </div>
      </div>
      <div className={`${SECTION} ${SECTION_HORIZONTAL_SPACING}`}>
        <img className='w-full' src={Image4} alt='cover-image' />
        <p className={`${TEXT_XS} xl:mt-[28px] mt-[16px]`}>
          Report on proposed imporevement of Duba Harbour
          by Sir William Hacrow and partners,January 1955.
          Images reproduced by permission of The National Archives, London, England
        </p>
      </div>
      <div className={`${SECTION} lg:px-[455px] md:px-[280px] sm:px-[209px] px-[16px]`}>
        <div className='relative flex justify-center'>
          <img className='lg:h-[800px] sm:h-[600px] h-[380px]' src={SwordPattern} alt='sword-pattern' />
          <div className='text-center absolute sm:bottom-0 bottom-[24px] left-0 right-0'>
            <h2 className={`${TEXT_LG} text-main-gold font-amiri-regular`}>Infrastructure Development in the 1950s</h2>
            <p className={TEXT_MD}>
              Early start of development initiatives, with the establishment of
              Sharjah and Dubai harbours, and the drilling of wells in Al Ain.
            </p>
          </div>
        </div>
      </div>
      <div className={`${SECTION} overflow-hidden`}>
        <div className={`${SECTION} bg-black overflow-hidden`}>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default App;
