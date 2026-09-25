import React, { useState } from 'react';
import { 
  Users, UserCheck, Settings, Code2, Server, Cloud, ShieldAlert, Headphones,
  ArrowRight, Check, Sparkles, ExternalLink, X
} from 'lucide-react';
import { servicesData, companyDetails } from '../data/content';

const iconMap = {
  Users, UserCheck, Settings, Code2, Server, Cloud, ShieldAlert, Headphones,
};

export default function Services({ onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = ['All', 'Talent Solutions', 'Infrastructure', 'Software Engineering', 'Cloud & Mobility', 'Security & Governance', 'Support Services'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 relative" style={{ background: '#2c3a46' }}>
      <div className="ambient-glow w-[500px] h-[500px] top-10 left-1/3" style={{ background: 'rgba(136,189,242,0.12)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4"
            style={{ background: 'rgba(56,73,89,0.80)', borderColor: 'rgba(136,189,242,0.20)', color: '#88BDF2' }}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNOLOGY &amp; SOLUTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-gradient-brand">Services</span>
          </h2>
          
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#BDDDFC' }}>
            {companyDetails.aboutOverview}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200"
                style={
                  selectedCategory === cat
                    ? { background: 'linear-gradient(135deg, #88BDF2, #6A89A7)', color: '#fff', boxShadow: '0 0 20px -5px rgba(136,189,242,0.45)' }
                    : { background: 'rgba(56,73,89,0.70)', color: '#BDDDFC', border: '1px solid rgba(136,189,242,0.12)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Cloud;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: 'rgba(56,73,89,0.70)', borderColor: 'rgba(136,189,242,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(136,189,242,0.45)'; e.currentTarget.style.boxShadow='0 20px 40px -10px rgba(136,189,242,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(136,189,242,0.15)'; e.currentTarget.style.boxShadow='none'; }}
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl border p-3 transition-all duration-300 flex items-center justify-center shadow-md"
                      style={{ background: 'rgba(44,58,70,0.80)', borderColor: 'rgba(136,189,242,0.20)', color: '#88BDF2' }}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                      style={{ background: 'rgba(136,189,242,0.10)', color: '#88BDF2', borderColor: 'rgba(136,189,242,0.25)' }}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors group-hover:text-sky-200">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#BDDDFC' }}>
                    {service.shortDesc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t" style={{ borderColor: 'rgba(136,189,242,0.10)' }}>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px]" style={{ color: '#BDDDFC' }}>
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#88BDF2' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-3 border-t" style={{ borderColor: 'rgba(136,189,242,0.10)' }}>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded border"
                        style={{ background: 'rgba(44,58,70,0.80)', color: '#6A89A7', borderColor: 'rgba(136,189,242,0.10)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-medium flex items-center gap-1 transition-colors hover:text-white"
                      style={{ color: '#6A89A7' }}
                    >
                      <span>Overview</span>
                      <ExternalLink className="w-3 h-3" style={{ color: '#88BDF2' }} />
                    </button>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="px-2.5 py-1 rounded-lg border text-xs font-semibold text-white transition-all flex items-center gap-1"
                      style={{ background: 'rgba(136,189,242,0.10)', borderColor: 'rgba(136,189,242,0.25)' }}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" style={{ color: '#88BDF2' }} />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{ background: '#2c3a46', borderColor: 'rgba(136,189,242,0.25)' }}>
            
            {/* Close */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg transition-colors"
              style={{ color: '#6A89A7', background: 'rgba(56,73,89,0.60)' }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border"
                style={{ background: 'rgba(136,189,242,0.10)', color: '#88BDF2', borderColor: 'rgba(136,189,242,0.25)' }}>
                {activeModalService.category}
              </span>
              <span className="text-xs font-semibold" style={{ color: '#6A89A7' }}>
                Ruzo Enterprises
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{activeModalService.title}</h3>

            <p className="text-sm leading-relaxed mb-6" style={{ color: '#BDDDFC' }}>
              {activeModalService.fullDesc}
            </p>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: '#6A89A7' }}>
                Service Capabilities &amp; Deliverables
              </h4>
              <div className="space-y-2.5 p-4 rounded-xl border" style={{ background: 'rgba(56,73,89,0.60)', borderColor: 'rgba(136,189,242,0.12)' }}>
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm" style={{ color: '#BDDDFC' }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#88BDF2' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold mb-3" style={{ color: '#6A89A7' }}>
                Core Domains
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono border"
                    style={{ background: 'rgba(44,58,70,0.80)', color: '#88BDF2', borderColor: 'rgba(136,189,242,0.15)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t" style={{ borderColor: 'rgba(136,189,242,0.12)' }}>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 text-xs font-medium transition-colors hover:text-white"
                style={{ color: '#6A89A7' }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sTitle = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(sTitle);
                }}
                className="px-5 py-2.5 rounded-xl text-white text-xs font-semibold shadow-glow-sky flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7)' }}
              >
                <span>Inquire About {activeModalService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
