import { Header } from './layouts/Header';
import Image1 from './assets/images/image-1.jpeg';
import Image2 from './assets/images/image-2.jpeg';
import Image3 from './assets/images/image-3.jpg';
import Image4 from './assets/images/image-4.png';
import SwordPattern from './assets/icons/pattern-2.svg';
import { Carousel } from './components/Carousel';

const IMAGE_CARD_COMMON_STYLES = 'lg:w-[350px] md:w-[310px] w-[174px]';

function App() {
  return (
    <>
      <Header />
      <div className='flex justify-center mt-14 mb-24'>
        <img src={Image2} alt='image-1' className={`${IMAGE_CARD_COMMON_STYLES} z-[1] relative left-[150px] rotate-[-15deg] origin-bottom-right grayscale`} />
        <img src={Image1} alt='image-2' className={`${IMAGE_CARD_COMMON_STYLES} z-[2]`} />
        <img src={Image3} alt='image-3' className={`${IMAGE_CARD_COMMON_STYLES} z-[3] relative left-[-150px] rotate-[15deg] origin-bottom-left grayscale`} />
      </div>
      <div className='xl:w-[1088px] lg:w-[880px] w-[377px] m-auto text-main-gold'>
        <h2 className='xl:text-[100px] lg:text-[80px] text-[32px] text-center font-amiri-regular'>
          <span className='font-amiri-italic'>
            Historical overview on the {' '}
          </span>
          <span className='uppercase'>
            development of Infrastructure in the UAE
          </span>
        </h2>
        <p className='text-[32px] text-center'>
          <span className='font-amiri-italic'>Author: </span>
          <span>UAE National Library and Archives</span>
        </p>
      </div>
      <div className='lg:px-[280px] md:px-[120px] px-[16px] text-white text-[24px] mt-[123px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-8'>
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
        <img className='w-full xl:mt-[60px] md:mt-[40px] mt-[20px]' src={Image4} alt='cover-image' />
        <p className='xl:mt-[28px] mt-[16px]'>
          Report on proposed imporevement of Duba Harbour
          by Sir William Hacrow and partners,January 1955.
          Images reproduced by permission of The National Archives, London, England
        </p>
      </div>
      <div className='relative mt-[60px]'>
        <img className='lg:w-[417px] md:w-[324px] w-[205px] m-auto' src={SwordPattern} alt='sword-pattern' />
        <div className='lg:w-[820px] m-auto text-center absolute bottom-0 left-0 right-0'>
          <h2 className='text-main-gold lg:text-[60px] text-[24px] font-amiri-regular'>Infrastructure Development in the 1950s</h2>
          <p className='text-white'>
            Early start of development initiatives, with the establishment of
            Sharjah and Dubai harbours, and the drilling of wells in Al Ain.
          </p>
        </div>
      </div>
      <div className='my-[40px] py-[76px]'>
        <Carousel />
      </div>
    </>
  );
}

export default App;
