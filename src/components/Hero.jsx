import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function Hero({ onOpenContact, onOpenCall }) {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden" style={{ background: '#2c3a46' }}>
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[550px] h-[550px] -top-32 left-1/2 -translate-x-1/2" style={{ background: 'rgba(136,189,242,0.20)' }}></div>
      <div className="ambient-glow w-[400px] h-[400px] top-40 right-[-10%]" style={{ background: 'rgba(189,221,252,0.15)' }}></div>
      <div className="ambient-glow w-[350px] h-[350px] top-60 left-[-5%]" style={{ background: 'rgba(106,137,167,0.18)' }}></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(189,221,252,0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Hero Layout */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold mb-6 backdrop-blur-md shadow-glow-sky"
            style={{ background: 'rgba(56,73,89,0.90)', borderColor: 'rgba(136,189,242,0.35)', color: '#88BDF2' }}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#88BDF2' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#88BDF2' }}></span>
            </span>
            <span>{companyDetails.name.toUpperCase()} TECHNOLOGY</span>
          </div>

          {/* Headline */}
          <div className="relative mb-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              Support Consultant <br />
              <span className="text-gradient-brand">for your Business</span>
            </h1>
            {/* Accent bar */}
            <div className="h-1.5 w-48 rounded-full mt-4 shadow-glow-sky"
              style={{ background: 'linear-gradient(90deg, #BDDDFC, #88BDF2, #6A89A7)' }}></div>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-xl max-w-3xl leading-relaxed mb-8" style={{ color: '#BDDDFC' }}>
            {companyDetails.heroDescription}
          </p>

          {/* Ethos Callout */}
          <div className="w-full max-w-2xl p-5 mb-8 rounded-2xl border backdrop-blur-sm flex items-center justify-center gap-4 shadow-xl"
            style={{ background: 'linear-gradient(135deg, rgba(56,73,89,0.90), rgba(44,58,70,0.95))', borderColor: 'rgba(136,189,242,0.30)' }}>
            <div className="p-3 rounded-xl shrink-0" style={{ background: 'rgba(136,189,242,0.12)', color: '#88BDF2' }}>
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-widest font-bold block mb-0.5" style={{ color: '#88BDF2' }}>
                {companyDetails.ethosHeading}
              </span>
              <p className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                "{companyDetails.ethos}"
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-sm shadow-glow-sky transition-all duration-300 flex items-center justify-center gap-2 group hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7)' }}
            >
              <span>Our Services &amp; Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              style={{ background: 'rgba(136,189,242,0.10)', color: '#88BDF2', borderColor: 'rgba(136,189,242,0.30)' }}
            >
              <Phone className="w-4 h-4" />
              <span>Call {companyDetails.phone}</span>
            </button>
          </div>

          {/* Core Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 pt-8 border-t w-full" style={{ borderColor: 'rgba(136,189,242,0.15)', color: '#6A89A7' }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: '#88BDF2' }} />
              <span>Experienced IT Consultants</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: '#BDDDFC' }} />
              <span>Cross-Industry Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: '#88BDF2' }} />
              <span>Client Satisfaction Guaranteed</span>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" style={{ borderColor: 'rgba(136,189,242,0.15)' }}>
          {companyDetails.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border transition-all duration-300 group text-center hover:-translate-y-1"
              style={{ background: 'rgba(44,58,70,0.60)', borderColor: 'rgba(136,189,242,0.12)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor='rgba(136,189,242,0.40)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(136,189,242,0.12)'}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight transition-colors group-hover:text-sky-200">
                {stat.value}
              </div>
              <div className="text-sm font-semibold mt-1" style={{ color: '#BDDDFC' }}>
                {stat.label}
              </div>
              <div className="text-xs mt-0.5" style={{ color: '#6A89A7' }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
