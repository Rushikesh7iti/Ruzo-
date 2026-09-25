import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Clock, Users2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const projectTypes = [
  { id: 'recruitment-staffing', name: 'Recruitment & Staff Augmentation', baseWeeks: 1, team: 'Dedicated IT Consultants & Technical Recruiters', icon: '👥' },
  { id: 'software-impl', name: 'Software Implementations (Web/Mobile/AR)', baseWeeks: 6, team: 'Lead Software Engineers, Mobile Developers & QA', icon: '💻' },
  { id: 'managed-it', name: 'Managed IT & Desktop Support', baseWeeks: 2, team: 'Systems Administrators & Support Engineers', icon: '⚙️' },
  { id: 'datacenter', name: 'Data Centre Solutions & Server Support', baseWeeks: 4, team: 'Data Centre Architects & Network Engineers', icon: '🖥️' },
  { id: 'cloud-mobility', name: 'Cloud Computing & Mobility Applications', baseWeeks: 5, team: 'Cloud Architects & Mobility Specialists', icon: '☁️' },
  { id: 'disaster-recovery', name: 'Disaster Recovery Planning & Security', baseWeeks: 3, team: 'Disaster Recovery Planners & Security Leads', icon: '🛡️' },
];

const projectScales = [
  { id: 'standard', name: 'Standard Implementation', multiplier: 1, desc: 'Single business unit or project-specific consulting' },
  { id: 'enterprise', name: 'Enterprise Deployment', multiplier: 1.8, desc: 'Multi-departmental infrastructure or company-wide rollout' },
  { id: 'mission-critical', name: 'Mission-Critical Operations', multiplier: 2.5, desc: 'High-availability 24/7 SLA with cross-vertical coverage' },
];

const engagementModels = [
  { id: 'contract', name: 'IT Contract Consulting', speedBonus: 'Flexible Milestone Sprints' },
  { id: 'managed', name: 'Managed Service Retainer', speedBonus: 'Continuous 24/7 Support' },
  { id: 'staffing', name: 'Staff Augmentation', speedBonus: 'Immediate Consultant Deployment' },
];

export default function Estimator({ onBookBlueprint }) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedScale, setSelectedScale] = useState(projectScales[0]);
  const [selectedModel, setSelectedModel] = useState(engagementModels[0]);
  const [submittedBlueprint, setSubmittedBlueprint] = useState(false);

  const estimatedWeeks = Math.max(1, Math.round(selectedType.baseWeeks * selectedScale.multiplier));

  const handleCreateBlueprint = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06B6D4', '#6366F1', '#F59E0B']
    });
    setSubmittedBlueprint(true);
    setTimeout(() => {
      onBookBlueprint({
        service: selectedType.name,
        scale: selectedScale.name,
        timeline: selectedModel.name,
        estimatedWeeks,
        recommendedTeam: selectedType.team
      });
      setSubmittedBlueprint(false);
    }, 400);
  };

  return (
    <section id="estimator" className="py-24 bg-dark-950 relative overflow-hidden border-t border-b border-white/5">
      <div className="ambient-glow w-[600px] h-[600px] top-1/4 -right-20 bg-ruzo-cyan/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-ruzo-cyan/30 text-xs font-semibold text-ruzo-cyan mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE CONSULTING &amp; SCOPE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tailor Your <span className="text-gradient-cyan-indigo">Technology Engagement</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Select your technology domain and engagement scope to get an instant blueprint and consult with our experienced team.
          </p>
        </div>

        {/* Estimator Interactive Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Controls */}
          <div className="lg:col-span-7 space-y-8 bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
            
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                1. Select Consulting &amp; Technology Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`p-3.5 rounded-xl text-left border transition-all flex items-center gap-3 ${
                      selectedType.id === type.id
                        ? 'bg-gradient-to-r from-ruzo-indigo/30 to-ruzo-cyan/20 border-ruzo-cyan text-white shadow-glow-cyan'
                        : 'bg-dark-850 border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <div>
                      <div className="text-xs font-bold">{type.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Base: ~{type.baseWeeks} wks</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                2. Select Implementation Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projectScales.map((scale) => (
                  <button
                    key={scale.id}
                    onClick={() => setSelectedScale(scale)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedScale.id === scale.id
                        ? 'bg-ruzo-indigo/20 border-ruzo-indigo text-white shadow-glow-indigo'
                        : 'bg-dark-850 border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{scale.name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{scale.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Engagement Model */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                3. Engagement Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {engagementModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedModel.id === model.id
                        ? 'bg-emerald-500/15 border-emerald-400 text-white'
                        : 'bg-dark-850 border-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{model.name}</div>
                    <div className="text-[11px] text-emerald-400 font-mono mt-1">{model.speedBonus}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Calculated Blueprint */}
          <div className="lg:col-span-5 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-950 border border-ruzo-cyan/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-ruzo-cyan" />
                <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Generated Service Blueprint
                </span>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 font-mono">
                Ethos Backed
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-ruzo-cyan" />
                  <span>Est. Timeline</span>
                </div>
                <div className="text-2xl font-black text-white">
                  ~{estimatedWeeks} <span className="text-xs font-normal text-slate-400">Weeks</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 font-mono">Agile Milestones</div>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ethos Promise</span>
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  We Will Not Disappoint!
                </div>
                <div className="text-[10px] text-ruzo-cyan mt-1 font-mono">Client Satisfaction KPI</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-2">
                <Users2 className="w-4 h-4 text-ruzo-indigo" />
                <span>Recommended Team Composition</span>
              </div>
              <div className="text-sm font-mono text-ruzo-cyan">
                {selectedType.team}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                International expertise with deep local market knowledge.
              </div>
            </div>

            <div className="space-y-2 mb-8 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ruzo-cyan" />
                <span>Service: {selectedType.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ruzo-cyan" />
                <span>Scale: {selectedScale.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-ruzo-cyan" />
                <span>Model: {selectedModel.name}</span>
              </div>
            </div>

            <button
              onClick={handleCreateBlueprint}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-ruzo-cyan via-ruzo-indigo to-ruzo-purple text-white font-bold text-sm shadow-glow-cyan hover:shadow-glow-indigo transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>{submittedBlueprint ? 'Generating...' : 'Inquire with This Blueprint'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
