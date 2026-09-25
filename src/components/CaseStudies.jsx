import React from 'react';
import { ArrowUpRight, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';
import { caseStudies } from '../data/content';

export default function CaseStudies({ onOpenContact }) {
  return (
    <section id="case-studies" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-white/10 text-xs font-semibold text-ruzo-cyan mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>PROVEN CLIENT RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Transformations Driven by <span className="text-gradient-cyan-indigo">Rigorous Engineering</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              We measure our success by tangible business outcomes: latency reductions, infrastructure cost savings, and flawless launch days.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('case-studies-header')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2"
          >
            <span>Read All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-ruzo-cyan" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-dark-850 border border-white/10 hover:border-ruzo-cyan/40 p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Sector Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-ruzo-cyan font-semibold">
                    {study.sector}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Production Verified
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ruzo-cyan transition-colors line-clamp-2">
                  {study.headline}
                </h3>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-dark-900 border border-white/5 mb-6">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base font-extrabold text-white group-hover:text-ruzo-cyan transition-colors">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client footer info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">{study.client}</span>
                <span className="text-ruzo-cyan font-mono text-[11px] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Deployed
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
