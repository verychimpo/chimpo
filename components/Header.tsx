
import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-sky-600">
            ALCS
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
              <Bars3Icon className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <XMarkIcon className="h-6 w-6 text-slate-700" />
            </button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-sky-600 transition-colors duration-300 font-medium text-lg">
                {link.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
