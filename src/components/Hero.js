import heroAvatar from '../images/hero-avatar.png';

export function Hero() {
  return (
    <div className='px-4 pt-16 md:flex lg:w-3/4 mx-auto'>
      {/** Left */}
      <div className='mb-8 md:w-1/2'>
        <p
          className='text-primary font-mono mb-3 text-2xl'
          style={{ fontFamily: "'Ephesis', cursive " }}
        >
          Online consultant
        </p>
        <div className='text-3xl font-bold mb-4'>
          <p>Hi, I'm Dr. Mary Taylor</p>
          <p>
            Family <span className='text-primary'>Doctor</span>
          </p>
        </div>
        <p className='mb-6 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate dignissimos qui nesciunt soluta nostrum impedit placeat
          laborum cumque explicabo!
        </p>
        <button className='bg-primary text-white px-6 py-2 font-bold rounded-md mr-4 hover:bg-hover transition-all duration-300'>
          Book an appointment
        </button>
      </div>

      <div className='md:w-1/2 md:flex md:justify-end'>
        <div className='transform -rotate-6 w-max-96 h-80 md:w-96'>
          <div className='w-full h-full bg-gray-50 rounded-3xl'>
            <div
              className='w-full h-full bg-blue-300 rounded-3xl'
              style={{ transform: 'scale(-0.9)' }}
            >
              <img
                src={heroAvatar}
                alt='avatar-hero'
                style={{ transform: 'rotate(180deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
