import React, { useState } from 'react';
import { Landmark, Wifi, Building2, Flame, Truck, Home, Factory, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { industriesData, companyDetails } from '../data/content';

const iconMap = { Landmark, Wifi, Building2, Flame, Truck, Home, Factory };

export default function Industries({ onIndustryInquire }) {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);
  const activeIndustry = industriesData.find(i => i.id === activeTab) || industriesData[0];
  const IconComponent = iconMap[activeIndustry.icon] || Landmark;

  return (
    <section id="industries" className="py-24 relative border-t" style={{ background: '#2c3a46', borderColor: 'rgba(136,189,242,0.12)' }}>
      <div className="ambient-glow w-[450px] h-[450px] bottom-10 left-10" style={{ background: 'rgba(106,137,167,0.15)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4"
            style={{ background: 'rgba(56,73,89,0.80)', borderColor: 'rgba(136,189,242,0.20)', color: '#88BDF2' }}>
            <Shield className="w-3.5 h-3.5" />
            <span>INDUSTRY VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Assisting Clients Across <span className="text-gradient-brand">All Key Industries</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#BDDDFC' }}>
            We deliver Information Technology Solutions and Professional Consulting Services across major verticals to help you successfully achieve your technology goals.
          </p>
        </div>

        {/* Industry Nav Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {industriesData.map((ind) => {
            const TabIcon = iconMap[ind.icon] || Landmark;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all"
                style={
                  isActive
                    ? { background: 'linear-gradient(135deg, #88BDF2, #6A89A7)', color: '#fff', boxShadow: '0 0 20px -5px rgba(136,189,242,0.40)', border: '1px solid rgba(189,221,252,0.20)', transform: 'scale(1.05)' }
                    : { background: 'rgba(56,73,89,0.70)', color: '#BDDDFC', border: '1px solid rgba(136,189,242,0.12)' }
                }
              >
                <TabIcon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="rounded-2xl border p-8 lg:p-12 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(56,73,89,0.80), rgba(44,58,70,0.90))', borderColor: 'rgba(136,189,242,0.20)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl border flex items-center justify-center"
                  style={{ background: 'rgba(136,189,242,0.10)', borderColor: 'rgba(136,189,242,0.25)', color: '#88BDF2' }}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold block" style={{ color: '#88BDF2' }}>
                    Core Industry Vertical
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{activeIndustry.name}</h3>
                </div>
              </div>

              <p className="text-base mb-6 leading-relaxed" style={{ color: '#BDDDFC' }}>
                {activeIndustry.summary}
              </p>

              {/* Ethos */}
              <div className="p-4 rounded-xl border mb-6 flex items-center gap-3"
                style={{ background: 'rgba(44,58,70,0.80)', borderColor: 'rgba(136,189,242,0.20)' }}>
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: '#88BDF2' }}></div>
                <div className="text-sm font-semibold" style={{ color: '#BDDDFC' }}>
                  <span style={{ color: '#88BDF2' }}>Our Ethos: </span>"{companyDetails.ethos}"
                </div>
              </div>

              {/* Points */}
              <div className="space-y-3 mb-8">
                {activeIndustry.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm" style={{ color: '#BDDDFC' }}>
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#88BDF2' }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onIndustryInquire(activeIndustry.name)}
                className="px-6 py-3 rounded-xl border text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 group hover:-translate-y-0.5"
                style={{ background: 'rgba(136,189,242,0.10)', borderColor: 'rgba(136,189,242,0.30)' }}
              >
                <span>Consult for {activeIndustry.name}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column: Capabilities */}
            <div className="lg:col-span-5 p-6 rounded-xl border relative overflow-hidden"
              style={{ background: 'rgba(44,58,70,0.90)', borderColor: 'rgba(136,189,242,0.15)' }}>
              <div className="text-xs font-mono uppercase tracking-wider mb-4 flex items-center justify-between" style={{ color: '#6A89A7' }}>
                <span>Domain Service Capabilities</span>
                <span style={{ color: '#88BDF2' }}>Supported</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { label: 'IT Solutions', value: 'Software & Web/Mobile', color: '#88BDF2' },
                  { label: 'Infrastructure', value: 'Data Centre & Cloud', color: '#BDDDFC' },
                  { label: 'Disaster Recovery', value: 'Business Continuity', color: '#6A89A7' },
                  { label: 'Staff Augmentation', value: 'Contract IT Staffing', color: '#fff' },
                ].map((row, i) => (
                  <div key={i} className="p-3 rounded-lg border flex items-center justify-between"
                    style={{ background: 'rgba(56,73,89,0.60)', borderColor: 'rgba(136,189,242,0.10)' }}>
                    <span style={{ color: '#BDDDFC' }}>{row.label}</span>
                    <span className="font-semibold" style={{ color: row.color }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t text-[11px] text-center" style={{ borderColor: 'rgba(136,189,242,0.10)', color: '#6A89A7' }}>
                Dedicated team of experienced consultants delivering both international &amp; local market expertise.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
