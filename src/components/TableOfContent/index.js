import CloseIcon from '../../assets/icons/close.svg';
import { TEXT_XS } from '../../commonStyles';

const SHADOW_STYLE = 'shadow-[0_16px_25px_0_rgba(0,0,0,0.3)]';

export const TableOfContent = () => (
  <div className={`${SHADOW_STYLE} background-[#202020] absolute xl:max-w-[234px] max-w-[205px] px-[16px] pt-[48px]`}>
    <button className='absolute xl:w-[23px] xl:h-[23px] w-[16px] h-[16px] top-[12px] right-[12px]'>
      <img src={CloseIcon} alt='close-action' />
    </button>
    <div className={`${TEXT_XS} flex flex-col`}>
      <span>TABLE OF CONTENT</span>
      <a href='#' className='xl:mb-[32px] mb-[24px]'>1.Intro</a>
      <a href='#' className='xl:mb-[32px] mb-[24px]'>2. Infrastructure Development in the 1950s</a>
      <a href='#' className='xl:mb-[32px] mb-[24px]'>3. Infrastructure Development in the 1960s</a>
      <a href='#' className='xl:mb-[32px] mb-[24px]'>4. Infrastructure Development in the 1970s</a>
    </div>
  </div>
);
