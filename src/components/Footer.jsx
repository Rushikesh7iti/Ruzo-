import React from 'react';
import { 
  ArrowRight, Mail, Phone, 
  MapPin, MessageSquareCode, ExternalLink 
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/content';

export default function Footer() {
  return (
    <footer id="footer" className="border-t text-sm" style={{ background: '#2c3a46', borderColor: 'rgba(136,189,242,0.15)', color: '#6A89A7' }}>
      
      {/* Top Email/Phone Bar */}
      <div className="border-b py-4" style={{ background: 'rgba(44,58,70,0.80)', borderColor: 'rgba(136,189,242,0.10)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(136,189,242,0.12)', color: '#88BDF2' }}>
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white">Email: </span>
              <a href={`mailto:${companyDetails.email}`} className="text-xs sm:text-sm hover:underline" style={{ color: '#88BDF2' }}>
                {companyDetails.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(189,221,252,0.10)', color: '#BDDDFC' }}>
              <MessageSquareCode className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-white">WhatsApp &amp; Phone: </span>
              <a href={companyDetails.whatsappUrl} target="_blank" rel="noreferrer" className="text-xs sm:text-sm hover:underline" style={{ color: '#BDDDFC' }}>
                {companyDetails.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b" style={{ borderColor: 'rgba(136,189,242,0.10)' }}>
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center p-[2px]"
                style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7, #384959)' }}>
                <div className="w-full h-full rounded-[9px] flex items-center justify-center font-extrabold text-lg"
                  style={{ background: '#2c3a46', color: '#88BDF2' }}>
                  R
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  {companyDetails.name}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#BDDDFC' }}>
              {companyDetails.heroDescription}
            </p>

            <div className="p-4 rounded-xl border mb-6 text-xs" style={{ background: 'rgba(56,73,89,0.60)', borderColor: 'rgba(136,189,242,0.20)', color: '#BDDDFC' }}>
              <div className="font-bold mb-1" style={{ color: '#88BDF2' }}>Our Ethos:</div>
              <div className="italic font-medium text-white">"{companyDetails.ethos}"</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href={companyDetails.whatsappUrl} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'rgba(189,221,252,0.08)', color: '#BDDDFC', borderColor: 'rgba(189,221,252,0.20)' }}
                aria-label="WhatsApp">
                <MessageSquareCode className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'rgba(56,73,89,0.60)', color: '#6A89A7', borderColor: 'rgba(136,189,242,0.10)' }}
                aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'rgba(56,73,89,0.60)', color: '#6A89A7', borderColor: 'rgba(136,189,242,0.10)' }}
                aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'rgba(56,73,89,0.60)', color: '#6A89A7', borderColor: 'rgba(136,189,242,0.10)' }}
                aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={`mailto:${companyDetails.email}`}
                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: 'rgba(56,73,89,0.60)', color: '#6A89A7', borderColor: 'rgba(136,189,242,0.10)' }}
                aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4">Useful Links</h4>
            <ul className="space-y-3 text-xs">
              {['Home:#home','About Us:#about','Services:#services'].map(item => {
                const [label, href] = item.split(':');
                return (
                  <li key={label}>
                    <a href={href} className="hover:underline transition-colors hover:text-white" style={{ color: '#BDDDFC' }}>
                      {label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href={companyDetails.whatsappUrl} target="_blank" rel="noreferrer"
                  className="hover:underline transition-colors flex items-center gap-1" style={{ color: '#88BDF2' }}>
                  <span>Contact Us</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:underline transition-colors flex items-center gap-1.5 hover:text-white" style={{ color: '#BDDDFC' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#88BDF2' }}></span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: '#506880' }}>
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {companyDetails.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#88BDF2' }}></span>
            <span className="font-mono text-[11px]" style={{ color: '#88BDF2' }}>
              Our Ethos: {companyDetails.ethos}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
