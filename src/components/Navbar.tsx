import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        scrolled 
          ? 'bg-[#FFFFFF]/95 dark:bg-[#18243A]/95 border-[#DDE2EB] dark:border-[#30405B] shadow-sm backdrop-blur-xs' 
          : 'bg-[#F8F7F4]/90 dark:bg-[#101827]/90 border-[#DDE2EB]/60 dark:border-[#30405B]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] flex items-center justify-center font-mono font-semibold text-xs text-[#17243B] dark:text-[#F8F7F4] group-hover:border-[#315DDC] transition-colors">
              MK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[#17243B] dark:text-[#F8F7F4] tracking-tight text-base group-hover:text-[#315DDC] transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-[#59677C] dark:text-[#ACB9CE] hidden sm:inline-block">
                BSc Computer Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs uppercase tracking-wider font-medium text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] rounded hover:bg-[#DDE2EB]/30 dark:hover:bg-[#30405B]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Placement Status Badge & Action Controls */}
          <div className="hidden xl:flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FFFFFF] dark:bg-[#18243A] border border-[#DDE2EB] dark:border-[#30405B] text-[#17243B] dark:text-[#F8F7F4] text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315DDC]"></span>
              <span>12-Mo Placement 25/26</span>
            </div>

            {/* CV Button */}
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#315DDC] hover:bg-[#2448B2] text-white transition-colors"
              title="Download or inspect CV"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-1.5 rounded border border-[#DDE2EB] dark:border-[#30405B] bg-[#FFFFFF] dark:bg-[#18243A] text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:border-[#315DDC] transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F8F7F4]" />
              ) : (
                <Moon className="w-4 h-4 text-[#17243B]" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Theme + Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded border border-[#DDE2EB] dark:border-[#30405B] bg-[#FFFFFF] dark:bg-[#18243A] text-[#59677C] dark:text-[#ACB9CE]"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-[#DDE2EB] dark:border-[#30405B] text-[#17243B] dark:text-[#F8F7F4] hover:border-[#315DDC] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="mobile-navigation xl:hidden border-b border-[#DDE2EB] dark:border-[#30405B] bg-[#FFFFFF] dark:bg-[#18243A] px-4 pt-4 pb-6 space-y-3 shadow-md">
          <div className="px-3 py-1.5 rounded bg-[#F8F7F4] dark:bg-[#101827] border border-[#DDE2EB] dark:border-[#30405B] text-[#17243B] dark:text-[#F8F7F4] text-xs font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#315DDC]"></span>
            <span>Seeking 12-Month UK Industrial Placement</span>
          </div>
          
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-xs uppercase tracking-wider font-medium text-[#59677C] dark:text-[#ACB9CE] hover:text-[#17243B] dark:hover:text-[#F8F7F4] hover:bg-[#F8F7F4] dark:hover:bg-[#101827] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#DDE2EB] dark:border-[#30405B]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded bg-[#315DDC] hover:bg-[#2448B2] text-white font-medium text-xs transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download / View CV</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
