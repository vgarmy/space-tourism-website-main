import React, { useState } from 'react';
import logo from '../assets/images/shared/logo.svg';

type NavKey = 'home' | 'destination' | 'crew' | 'technology';

interface HeaderProps {
  onNavigate?: (key: NavKey) => void;
}

const navItems: { number: string; label: string; key: NavKey }[] = [
  { number: '00', label: 'Home', key: 'home' },
  { number: '01', label: 'Destination', key: 'destination' },
  { number: '02', label: 'Crew', key: 'crew' },
  { number: '03', label: 'Technology', key: 'technology' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (index: number, key: NavKey) => {
    setActiveIndex(index);
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(key);
    }
  };

  return (
    <header className="navbar flex flex-row justify-between lg:justify-start p-5 lg:pl-[50px] lg:py-[40px] items-center relative">
      <div className="navbar__logo z-20">
        <img src={logo} alt="Space logo" />
      </div>

      <div className="navbar__line hidden lg:flex items-center w-1/2 ml-20 relative z-20">
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      <ul className="navbar__list hidden md:flex px-10 lg:ml-[-40px] flex-row gap-10 lg:w-1/2 bg-gray-500/10 backdrop-blur-3xl py-12 rounded-md justify-center relative z-10">
        {navItems.map((item, index) => (
          <li
            key={item.key}
            className={`text-white uppercase text-sm cursor-pointer tracking-widest relative flex flex-col items-center h-full`}
            onClick={() => handleNavClick(index, item.key)}
          >
            <div className="flex items-center">
              <b className="mr-1 hidden lg:block">{item.number}</b> {item.label}
            </div>
            {activeIndex === index && (
              <span className="absolute top-[71px] left-0 w-full h-[4px] rounded bg-white"></span>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger — endast på små skärmar */}
      <div className="md:hidden relative z-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl p-2"
        >
          &#9776;
        </button>

        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-gray-900 bg-opacity-95 rounded-md shadow-lg w-48 z-30">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li
                  key={item.key}
                  className="px-4 py-3 text-white uppercase text-sm cursor-pointer hover:bg-gray-700 border-b border-gray-600"
                  onClick={() => handleNavClick(index, item.key)}
                >
                  {item.number} {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
