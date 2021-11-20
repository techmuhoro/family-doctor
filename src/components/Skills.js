export function Skills() {
  const skills = [
    {
      id: 1,
      head: 'Dental care',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?',
      icon: 'fas fa-tooth',
      main: false,
    },
    {
      id: 2,
      head: 'Cardiology',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?',
      icon: 'fas fa-heart',
      main: true,
    },
    {
      id: 3,
      head: 'Eye care',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?',
      icon: 'fas fa-eye',
      main: false,
    },
    {
      id: 4,
      head: 'Pulmonary',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?',
      icon: 'fas fa-hand-holding-heart',
      main: false,
    },
  ];
  return (
    <div className='mb-20 lg:w-3/4 mx-auto px-3'>
      <p className='text-center font-bold text-4xl mb-8'>What i can offer</p>
      <div className='flex flex-wrap w-auto mx-auto items-center justify-center md:justify-between'>
        {skills.map(item => (
          <div
            className={
              'w-56 shadow-md rounded-lg mb-8 mr-6 p-4 border border-rd-500 hover:shadow-xl transition-all duration-200'
            }
            key={item.id}
          >
            <p className='mx-auto text-center mb-4 text-6xl text-primary'>
              <i className={item.icon}></i>
            </p>
            <p className='font-bold text-lg text-center'>{item.head}</p>
            <p className='text-gray-600 text-center text-sm'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
