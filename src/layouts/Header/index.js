import logo from '../../assets/icons/logo.svg';

export const Header = () => (
  <header className='flex items-center justify-between lg:ps-14 lg:pe-16 ps-5 pe-8 py-4'>
    <img src={logo} alt='logo' className='lg:w-[242px] w-[165px]' />
    <nav className='text-white text-sm md:block hidden'>
      <a className='lg:mr-14 mr-12 text-main-gold' href='#'>Eng</a>
      <a className='lg:mr-14 mr-12' href='#'>The archives</a>
      <a className='lg:mr-14 mr-12' href='#'>Online Exhibitions</a>
      <a className='lg:mr-14 mr-12' href='#'>About us</a>
      <a href='#'>Register</a>
    </nav>
    <button className='w-[18px] block md:hidden'>
      <div className='bg-main-gold h-[1px] mb-1.5' />
      <div className='bg-main-gold h-[1px] mb-1.5' />
      <div className='bg-main-gold h-[1px]' />
    </button>
  </header>
);
