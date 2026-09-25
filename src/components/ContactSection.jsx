import React, { useState } from 'react';
import { Mail, Phone, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyDetails, servicesData } from '../data/content';
import confetti from 'canvas-confetti';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: prefilledService || 'Managed IT Service',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#88BDF2', '#BDDDFC', '#6A89A7']
    });
    setIsSubmitted(true);
  };

  const inputStyle = {
    background: 'rgba(44,58,70,0.80)',
    border: '1px solid rgba(136,189,242,0.18)',
    color: '#fff',
  };

  return (
    <section id="contact" className="py-24 relative border-t" style={{ background: '#384959', borderColor: 'rgba(136,189,242,0.12)' }}>
      <div className="ambient-glow w-[500px] h-[500px] top-10 right-1/4" style={{ background: 'rgba(136,189,242,0.12)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4"
              style={{ background: 'rgba(56,73,89,0.80)', borderColor: 'rgba(136,189,242,0.20)', color: '#88BDF2' }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTACT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Connect with <span className="text-gradient-brand">{companyDetails.name}</span>
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#BDDDFC' }}>
              Our team of experienced consultants is assisting clients across all industries to successfully achieve technology goals. Reach out today for specialized consulting or immediate project support.
            </p>

            {/* Ethos Reminder */}
            <div className="p-4 rounded-xl border mb-8" style={{ background: 'rgba(56,73,89,0.60)', borderColor: 'rgba(136,189,242,0.25)' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#88BDF2' }}>
                {companyDetails.ethosHeading}
              </div>
              <div className="text-base font-bold text-white">
                "{companyDetails.ethos}"
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href={companyDetails.telLink}
                className="p-4 rounded-xl border transition-all flex items-center gap-4 group hover:-translate-y-0.5"
                style={{ background: 'rgba(136,189,242,0.08)', borderColor: 'rgba(136,189,242,0.25)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                  style={{ background: 'rgba(136,189,242,0.15)', color: '#88BDF2' }}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#88BDF2' }}>
                    Direct Phone Support
                  </div>
                  <div className="text-base font-extrabold text-white">
                    Call {companyDetails.phone}
                  </div>
                  <div className="text-[11px]" style={{ color: '#6A89A7' }}>Click to dial directly</div>
                </div>
              </a>

              <div className="p-4 rounded-xl border flex items-center gap-4"
                style={{ background: 'rgba(56,73,89,0.60)', borderColor: 'rgba(136,189,242,0.12)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(189,221,252,0.10)', color: '#BDDDFC' }}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#6A89A7' }}>
                    Email Inquiry
                  </div>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-sm font-semibold text-white hover:underline transition-colors"
                  >
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 rounded-2xl border p-6 sm:p-10 shadow-2xl"
            style={{ background: 'rgba(44,58,70,0.90)', borderColor: 'rgba(136,189,242,0.20)' }}>
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(136,189,242,0.15)', color: '#88BDF2' }}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-sm max-w-md mx-auto mb-6" style={{ color: '#BDDDFC' }}>
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our IT consulting team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white transition-colors"
                  style={{ background: 'rgba(136,189,242,0.15)', border: '1px solid rgba(136,189,242,0.25)' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#BDDDFC' }}>
                      Your Name *
                    </label>
                    <input
                      type="text" required placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors placeholder-slate-500"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#BDDDFC' }}>
                      Email Address *
                    </label>
                    <input
                      type="email" required placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors placeholder-slate-500"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#BDDDFC' }}>
                      Company Name
                    </label>
                    <input
                      type="text" placeholder="Your Company / Business"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors placeholder-slate-500"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#BDDDFC' }}>
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                      style={inputStyle}
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General IT Consulting">General IT Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#BDDDFC' }}>
                    How Can We Assist Your Business?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your technology requirements, project scope, or staffing needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors placeholder-slate-500"
                    style={inputStyle}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-white font-bold text-sm shadow-glow-sky transition-all duration-300 flex items-center justify-center gap-2 group hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7)' }}
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
