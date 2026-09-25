import React from 'react';
import { Eye, Target, Compass, CheckCircle2, Award, Users, Globe2, Briefcase } from 'lucide-react';
import { companyDetails } from '../data/content';

export default function AboutVision({ onOpenContact }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t" style={{ background: '#384959', borderColor: 'rgba(136,189,242,0.12)' }}>
      <div className="ambient-glow w-[500px] h-[500px] top-1/3 right-10" style={{ background: 'rgba(136,189,242,0.12)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4"
            style={{ background: 'rgba(56,73,89,0.80)', borderColor: 'rgba(136,189,242,0.20)', color: '#88BDF2' }}>
            <Compass className="w-3.5 h-3.5" />
            <span>{companyDetails.aboutHeading}</span>
          </div>
          
          <div className="text-xl sm:text-2xl font-light mb-2" style={{ color: '#BDDDFC' }}>
            {companyDetails.aboutSubHeading}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Innovative IT Solutions and <br />
            <span className="text-gradient-brand">Expert Consulting Services</span>
          </h2>
        </div>

        {/* About Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main narrative */}
          <div className="lg:col-span-8 rounded-2xl border p-8 sm:p-10 flex flex-col justify-between space-y-6"
            style={{ background: 'rgba(44,58,70,0.90)', borderColor: 'rgba(136,189,242,0.15)' }}>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: '#BDDDFC' }}>
              <p>{companyDetails.aboutParagraphs[0]}</p>
              <p>{companyDetails.aboutParagraphs[1]}</p>
              <p className="p-4 rounded-xl font-medium text-sm text-white border"
                style={{ background: 'rgba(136,189,242,0.08)', borderColor: 'rgba(136,189,242,0.25)' }}>
                "{companyDetails.aboutParagraphs[2]}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: 'rgba(136,189,242,0.12)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(136,189,242,0.12)', color: '#88BDF2' }}>
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: '#6A89A7' }}>Experience</div>
                  <div className="text-sm font-bold text-white">10+ Years</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(189,221,252,0.10)', color: '#BDDDFC' }}>
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: '#6A89A7' }}>Market Reach</div>
                  <div className="text-sm font-bold text-white">Global &amp; Regional</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(106,137,167,0.15)', color: '#6A89A7' }}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs" style={{ color: '#6A89A7' }}>Ethos Guarantee</div>
                  <div className="text-sm font-bold text-white">Will Not Disappoint</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight banner */}
          <div className="lg:col-span-4 rounded-2xl border p-8 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, rgba(44,58,70,0.95), rgba(56,73,89,0.90))', borderColor: 'rgba(136,189,242,0.30)' }}>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest font-bold block mb-3" style={{ color: '#88BDF2' }}>
                OUR COMMITMENT
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                Preferred Partner Across Industries
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#BDDDFC' }}>
                With a specialized skilled team of IT Consultants offering both international expertise and deep regional understanding, we ensure your technology deliverables exceed expectations every step of the way.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('about-consult')}
              className="w-full py-3 px-4 rounded-xl text-white font-semibold text-xs shadow-glow-sky text-center transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #88BDF2, #6A89A7)' }}
            >
              Consult with Our Team
            </button>
          </div>

        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="rounded-2xl p-8 sm:p-10 border shadow-xl relative transition-all hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, rgba(44,58,70,0.95), rgba(56,73,89,0.90))', borderColor: 'rgba(136,189,242,0.35)' }}>
            <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6"
              style={{ background: 'rgba(136,189,242,0.10)', borderColor: 'rgba(136,189,242,0.30)', color: '#88BDF2' }}>
              <Eye className="w-6 h-6" />
            </div>
            
            <span className="text-xs font-mono uppercase tracking-wider font-semibold block mb-2" style={{ color: '#88BDF2' }}>
              Our Vision
            </span>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#BDDDFC' }}>
              "{companyDetails.vision}"
            </p>

            <div className="mt-6 pt-6 border-t flex items-center gap-2 text-xs" style={{ borderColor: 'rgba(136,189,242,0.12)', color: '#6A89A7' }}>
              <CheckCircle2 className="w-4 h-4" style={{ color: '#88BDF2' }} />
              <span>Customer-Focused Global IT Organization</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl p-8 sm:p-10 border shadow-xl relative transition-all hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, rgba(44,58,70,0.95), rgba(56,73,89,0.90))', borderColor: 'rgba(106,137,167,0.40)' }}>
            <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6"
              style={{ background: 'rgba(106,137,167,0.12)', borderColor: 'rgba(106,137,167,0.30)', color: '#6A89A7' }}>
              <Target className="w-6 h-6" />
            </div>
            
            <span className="text-xs font-mono uppercase tracking-wider font-semibold block mb-2" style={{ color: '#6A89A7' }}>
              Our Mission
            </span>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#BDDDFC' }}>
              "{companyDetails.mission}"
            </p>

            <div className="mt-6 pt-6 border-t flex items-center gap-2 text-xs" style={{ borderColor: 'rgba(106,137,167,0.15)', color: '#6A89A7' }}>
              <CheckCircle2 className="w-4 h-4" style={{ color: '#6A89A7' }} />
              <span>Retaining Talent &amp; Reducing Overall Costs</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
