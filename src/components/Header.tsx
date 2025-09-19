import { useState } from 'react';
import logo from '../assets/images/shared/logo.svg';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { number: '00', label: 'Home' },
    { number: '01', label: 'Destination' },
    { number: '02', label: 'Crew' },
    { number: '03', label: 'Technology' },
  ];

  return (
    <header className="navbar flex flex-row justify-between lg:justify-start pl-10 lg:pl-[50px] lg:py-[40px] items-center">
      <div className='navbar__logo'>
        <img src={logo} alt="Space logo" />
      </div>

      <div className='navbar__line hidden lg:flex items-center w-1/2 ml-20 relative z-20'>
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      <ul className='navbar__list flex px-10 lg:ml-[-50px] flex-row gap-10 lg:w-1/2 bg-gray-500/10 backdrop-blur-3xl py-12 rounded-md justify-center relative z-10'>
        {navItems.map((item, index) => (
          <li
            key={index}
            className='text-white uppercase text-sm cursor-pointer tracking-widest relative flex flex-col items-center h-full'
            onClick={() => setActiveIndex(index)}
          >
            <div className='flex items-center'>
              <b className='mr-1 hidden lg:block'>{item.number}</b> {item.label}
            </div>
            {activeIndex === index && (
              <span className='absolute top-[71px] left-0 w-full h-[4px] rounded bg-white'></span>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
