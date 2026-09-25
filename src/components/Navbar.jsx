import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function Navbar({ onOpenContact, onOpenCall }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Technology & Solutions', href: '#services' },
    { name: 'Industries', href: '#industries' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl border-b shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
      style={isScrolled ? { background: 'rgba(44,58,70,0.92)', borderColor: 'rgba(136,189,242,0.15)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div
              className="relative w-10 h-10 rounded-xl flex items-center justify-center p-[2px] shadow-glow-sky group-hover:scale-105 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7, #384959)' }}
            >
              <div className="w-full h-full rounded-[10px] flex items-center justify-center" style={{ background: '#2c3a46' }}>
                <span className="font-extrabold text-xl" style={{ color: '#88BDF2' }}>
                  R
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-white">
                  {companyDetails.name}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-2 rounded-full border backdrop-blur-md"
            style={{ background: 'rgba(56,73,89,0.70)', borderColor: 'rgba(136,189,242,0.15)' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 hover:text-white hover:bg-white/5"
                style={{ color: '#BDDDFC' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCall}
              className="flex items-center gap-2 text-xs font-semibold border px-4 py-2 rounded-lg transition-colors cursor-pointer"
              style={{ color: '#88BDF2', background: 'rgba(136,189,242,0.10)', borderColor: 'rgba(136,189,242,0.30)' }}
              title="Click to view contact number"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact us: Call {companyDetails.phone}</span>
            </button>

            <button
              onClick={() => onOpenContact('navbar')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-lg transition-all duration-300 shadow-glow-sky hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7)' }}
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-200 rounded-[7px] flex items-center gap-2"
                style={{ background: '#2c3a46' }}
                onMouseEnter={e => e.currentTarget.style.background='transparent'}
                onMouseLeave={e => e.currentTarget.style.background='#2c3a46'}
              >
                <span>Inquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCall}
              className="p-2 rounded-lg border"
              style={{ color: '#88BDF2', background: 'rgba(136,189,242,0.10)', borderColor: 'rgba(136,189,242,0.25)' }}
              title="Call Us"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border"
              style={{ color: '#BDDDFC', background: 'rgba(56,73,89,0.80)', borderColor: 'rgba(136,189,242,0.15)' }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] backdrop-blur-2xl border-b p-6 shadow-2xl transition-all"
          style={{ background: 'rgba(44,58,70,0.97)', borderColor: 'rgba(136,189,242,0.15)' }}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium rounded-lg transition-colors hover:text-white hover:bg-white/5"
                style={{ color: '#BDDDFC' }}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t flex flex-col gap-3" style={{ borderColor: 'rgba(136,189,242,0.15)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCall();
                }}
                className="w-full py-3 px-4 rounded-xl text-white font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-lg"
                style={{ background: '#6A89A7' }}
              >
                <Phone className="w-4 h-4" />
                <span>Call {companyDetails.phone}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('mobile-menu');
                }}
                className="w-full py-3 px-4 rounded-xl text-white font-semibold text-center flex items-center justify-center gap-2 shadow-glow-sky"
                style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7)' }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Send Inquiry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
