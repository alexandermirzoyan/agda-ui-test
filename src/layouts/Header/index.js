import logo from '../../assets/icons/logo.svg';
import { TEXT_XS } from '../../commonStyles';

const HEADER_PADDINGS = 'py-4 lg:ps-[54px] lg:pe-[64px] md:ps-[64px] md:pe-[64px] sm:ps-[21px] sm:pe-[32px] px-[16px]';

export const Header = () => (
  <header className={`flex items-center justify-between ${HEADER_PADDINGS}`}>
    <img src={logo} alt='logo' className='lg:w-[242px] w-[165px]' />
    <nav className={`${TEXT_XS} uppercase sm:block hidden`}>
      <a className='md:mr-[60px] mr-[48px] text-main-gold' href='#'>Eng</a>
      <a className='md:mr-[60px] mr-[48px]' href='#'>The archives</a>
      <a className='md:mr-[60px] mr-[48px]' href='#'>Online Exhibitions</a>
      <a className='md:mr-[60px] mr-[48px]' href='#'>About us</a>
      <a href='#'>Register</a>
    </nav>
    <button className='w-[18px] block sm:hidden'>
      <div className='bg-main-gold h-[1px] mb-1.5' />
      <div className='bg-main-gold h-[1px] mb-1.5' />
      <div className='bg-main-gold h-[1px]' />
    </button>
  </header>
);
