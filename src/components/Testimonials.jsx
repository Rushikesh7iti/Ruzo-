import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { testimonials, partnerBadges } from '../data/content';

export default function Testimonials() {
  return (
    <section className="py-24 relative border-t" style={{ background: '#384959', borderColor: 'rgba(136,189,242,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4"
            style={{ background: 'rgba(56,73,89,0.80)', borderColor: 'rgba(136,189,242,0.20)', color: '#88BDF2' }}>
            <Quote className="w-3.5 h-3.5" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Leaders at <span className="text-gradient-brand">High-Growth Tech &amp; Enterprises</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#BDDDFC' }}>
            Hear directly from engineering vice presidents, chief technology officers, and infrastructure leads who rely on Ruzo Enterprises.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1"
              style={{ background: 'rgba(44,58,70,0.90)', borderColor: 'rgba(136,189,242,0.15)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor='rgba(136,189,242,0.40)'}
              onMouseLeave={e => e.currentTarget.style.borderColor='rgba(136,189,242,0.15)'}
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6" style={{ color: '#88BDF2' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed italic mb-8" style={{ color: '#BDDDFC' }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: 'rgba(136,189,242,0.12)' }}>
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: 'rgba(136,189,242,0.40)' }}
                />
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs font-medium" style={{ color: '#88BDF2' }}>{t.role}</div>
                  <div className="text-[11px]" style={{ color: '#6A89A7' }}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner & Certifications Strip */}
        <div className="pt-12 border-t" style={{ borderColor: 'rgba(136,189,242,0.12)' }}>
          <div className="text-center text-xs uppercase tracking-widest font-semibold mb-8" style={{ color: '#6A89A7' }}>
            Certified Cloud &amp; Security Compliance Standards
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border text-center flex flex-col items-center justify-center transition-colors hover:-translate-y-0.5"
                style={{ background: 'rgba(44,58,70,0.70)', borderColor: 'rgba(136,189,242,0.12)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(136,189,242,0.35)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='rgba(136,189,242,0.12)'}
              >
                <ShieldCheck className="w-6 h-6 mb-2" style={{ color: '#88BDF2' }} />
                <div className="text-xs font-bold text-white">{badge.name}</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#6A89A7' }}>{badge.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
