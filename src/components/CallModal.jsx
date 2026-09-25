import React, { useState } from 'react';
import { Phone, X, Copy, Check, Sparkles } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(companyDetails.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl text-center">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Phone Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
          <Phone className="w-8 h-8 animate-bounce" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-[11px] font-semibold text-ruzo-cyan mb-3">
          <Sparkles className="w-3 h-3" />
          <span>DIRECT CONTACT</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Contact Our Team
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mb-6">
          Reach out directly to our senior consultants. We are ready to assist your business across all technology goals.
        </p>

        {/* Highlighted Phone Box */}
        <div className="p-4 rounded-xl bg-dark-850 border border-emerald-500/30 mb-6">
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block mb-1">
            Official Contact Number
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider font-mono text-emerald-400">
            {companyDetails.phone}
          </div>
        </div>

        {/* Actions: Direct Dial & Copy */}
        <div className="space-y-3">
          <a
            href={companyDetails.telLink}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {companyDetails.phone}</span>
          </a>

          <button
            onClick={handleCopy}
            className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Number Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Phone Number</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500">
          Our Ethos: <span className="text-slate-300 font-semibold">{companyDetails.ethos}</span>
        </div>

      </div>
    </div>
  );
}
