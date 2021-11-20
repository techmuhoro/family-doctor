import { useState } from 'react';

export function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navBaseClassName =
    'transition-all duration-300 fixed left-0 bg-pink-200 w-screen md:static md:bg-white md:w-auto md:transition-none ';
  const navClassName = showMobileMenu
    ? navBaseClassName + 'top-0'
    : navBaseClassName + '-top-full';
  const liClassName =
    'cursor-pointer mb-4 bg-pink-100 w-5/6 m-auto py-2 rounded-md transition-all hover:bg-pink-50 md:w-auto md:py-0 md:mb-0 md:pb-0 md:bg-white md:mr-16 md:hover:bg-white';
  return (
    <div className=' flex items-center py-4 px-3 lg:w-3/4 m-auto'>
      <div>
        <p className='text-2xl font-bold'>
          <span className='text-primary font-mono'>Infi</span>
          <span>Health</span>
        </p>
      </div>
      <div className='flex ml-auto items-center'>
        <div className={navClassName}>
          <ul className=' text-center mb-6 md:text-right md:mb-0 md:flex'>
            <li className={liClassName + ' mt-8 md:mt-0'}>
              <span className='text-gray-600 mr-1'>
                <i className='fas fa-home'></i>
              </span>
              Home
            </li>
            <li className={liClassName}>
              <span className='mr-1 text-gray-600'>
                <i className='fa fa-info-circle'></i>
              </span>
              About
            </li>
            <li className={liClassName}>
              <span className='mr-1 text-gray-600'>
                <i className='fa fa-phone'></i>
              </span>
              Contact
            </li>
          </ul>
          <p
            className='bg-pink-100 cursor-pointer transition-all hover:bg-pink-50 flex items-center justify-center  w-10 h-10 m-auto  rounded-full mb-6 md:hidden'
            onClick={() => setShowMobileMenu(false)}
          >
            X
          </p>
        </div>
        <button className='bg-primary hover:bg-hover transition-all duration-300 text-white uppercase px-6 py-2 text-sm font-bold rounded-md mr-4'>
          Book Now!
        </button>
        <div
          className='w-8 cursor-pointer  md:hidden'
          onClick={() => setShowMobileMenu(true)}
        >
          <p className='h-1 bg-primary w-full mb-2'></p>
          <p className='h-1 w-3/4 bg-black mb-2'></p>
          <p className='h-1 bg-primary w-full'></p>
        </div>
      </div>
    </div>
  );
}
