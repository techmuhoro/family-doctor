import { useState } from 'react';
export function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());
  return (
    <div className='lg:w-3/4 mx-auto px-3 md:px-0'>
      <div className='md:flex md:justify-between'>
        <div className='w-52 mx-auto mb-8 md:mx-0'>
          <p className='text-2xl font-bold mb-4'>
            <span className='text-primary font-mono'>Infi</span>
            <span>Health</span>
          </p>
          <p className='text-sm mb-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <div className='flex w-2/4 justify-between'>
            <p className=''>
              <i className='fab fa-facebook'></i>
            </p>
            <p className=''>
              <i className='fab fa-twitter'></i>
            </p>
            <p className=''>
              <i className='fab fa-youtube'></i>
            </p>
          </div>
        </div>
        <div className='mx-auto md:mx-0 w-52 mb-8'>
          <p className='font-semibold mb-4'>Quick links</p>
          <ul>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                About us
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                Services
              </a>
            </li>
            <li className=''>
              <a href='#' className='hover:underline'>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className='mx-auto md:mx-0 w-52 mb-8'>
          <p className='font-semibold mb-4'>Help & support</p>
          <ul>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                Customer care
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                Appointment
              </a>
            </li>
            <li className=''>
              <a href='#' className='hover:underline'>
                Visit
              </a>
            </li>
          </ul>
        </div>
        <div className='mx-auto md:mx-0 w-52 mb-8'>
          <p className='font-semibold mb-4'>Contacts</p>
          <ul>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                <span className='mr-1 lg:mr-2'>
                  <i className='fas fa-phone'></i>
                </span>
                <span>+25476 567 907</span>
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                <span className='mr-1 lg:mr-2'>
                  <i className='fas fa-envelope'></i>
                </span>
                <span className='text-sm'>doctor.muhoro@gmail.com</span>
              </a>
            </li>
            <li className=''>
              <a href='#' className='hover:underline'>
                <span className='mr-1 lg:mr-2'>
                  <i className='fas fa-map-marker-alt'></i>
                </span>
                <span>Empire building 4th floor</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-center text-gray-600 py-4'>
        &copy;{currentYear} Web horizon agencies, all rights reserved
      </p>
    </div>
  );
}
