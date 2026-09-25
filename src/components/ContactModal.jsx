import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquareCode, Sparkles } from 'lucide-react';
import { companyDetails, servicesData } from '../data/content';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Managed IT Service',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData?.service) {
      setFormData(prev => ({
        ...prev,
        service: initialData.service,
        message: initialData.scale
          ? `Blueprint Requested:\n- Service: ${initialData.service}\n- Scale: ${initialData.scale}\n- Model: ${initialData.timeline}\n- Est. Weeks: ~${initialData.estimatedWeeks} weeks\n- Team: ${initialData.recommendedTeam}`
          : prev.message
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#06B6D4', '#6366F1', '#F59E0B']
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl max-h-[95vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Inquiry Sent!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Our consulting team will review your requirements and respond promptly. “{companyDetails.ethos}”
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-ruzo-cyan to-ruzo-indigo text-white text-xs font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ruzo-cyan mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{companyDetails.name} Technology • Consulting</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Inquire with Our Consultants
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              {companyDetails.heroDescription}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-ruzo-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-ruzo-cyan"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Interested Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white text-sm focus:outline-none focus:border-ruzo-cyan"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General IT Consulting">General IT Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Project Notes / Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements or consulting needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-ruzo-cyan font-sans"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-ruzo-cyan via-ruzo-indigo to-ruzo-purple text-white font-bold text-sm shadow-glow-cyan flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Contact:</span>
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <MessageSquareCode className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
