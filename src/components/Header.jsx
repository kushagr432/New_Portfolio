import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Brackets from '../assets/images/logo/brackets-dark.png';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Work', to: 'works' },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className='w-full mx-auto h-14 md:h-[70px] flex justify-between items-center px-5 md:px-10 bg-[rgba(32,32,35,0.55)] text-theme-white fixed backdrop-blur-[12px] z-10 border-b border-white/[0.06]'>
      {/* Logo */}
      <Link to='home' smooth={true} duration={600} className='cursor-pointer'>
        <div className='group flex items-center select-none gap-3'>
          <img
            className='w-7 h-auto group-hover:rotate-[25deg] duration-300'
            src={Brackets}
            alt='logo'
          />
          <span className='text-lg font-bold text-theme-white'>Kushagr Jain</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className='hidden md:flex items-center gap-7'>
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={600}
            className='cursor-pointer text-sm font-medium text-theme-white/70 hover:text-theme-white duration-200'>
            {label}
          </Link>
        ))}
        <Link to='contact' smooth={true} duration={600}>
          <button className='px-5 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg duration-200'>
            Get Free Audit
          </button>
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setNav(!nav)}
        className='flex md:hidden text-theme-white z-20'
        aria-label='Toggle menu'>
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile overlay */}
      {nav && (
        <div className='w-full h-screen md:hidden flex flex-col justify-center items-center fixed inset-0 bg-theme-black z-10'>
          <ul className='flex flex-col items-center gap-8 text-2xl font-semibold mb-10'>
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth={true}
                  duration={600}
                  onClick={() => setNav(false)}
                  className='cursor-pointer text-theme-white/80 hover:text-accent duration-200'>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to='contact' smooth={true} duration={600} onClick={() => setNav(false)}>
            <button className='px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-base duration-200'>
              Get Free Website Audit
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
