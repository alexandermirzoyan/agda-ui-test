import { ReactComponent as BorderPattern } from '../../assets/icons/pattern.svg';

// TODO - should ask for svg from designer
export const Button = ({ title }) => (
  <button className='relative inline-flex align-middle justify-center border-0'>
    <BorderPattern className='absolute inset-0 w-full h-full' />
    <span className='px-6'>
      {title}
    </span>
  </button>
);
