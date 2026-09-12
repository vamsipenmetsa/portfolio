import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Mail, Linkedin, Github, BookOpen, Instagram, Users, Award, ArrowRight, Megaphone, Rss } from 'lucide-react';

function Links() {
  return (
    <div className="min-h-screen bg-ali-cream text-ali-text">

      {/* ── SECTION 1: HOOK ── */}
      <div className="pt-12 pb-6 px-4 max-w-lg mx-auto text-center">
        <img
          src="./vamsi-profile.jpg"
          alt="Vamsi Penmetsa"
          width={480}
          height={617}
          fetchPriority="high"
          decoding="async"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto object-cover object-[center_20%] mb-4"
        />

        {/* Pre-headline */}
        <p className="text-xs font-bold tracking-widest uppercase text-ali-orange mb-2">
          For Cloud, DevOps &amp; AI Engineers...
        </p>

        {/* Main headline */}
        <h1 className="text-2xl font-serif font-bold text-ali-heading leading-tight mb-3">
          From Manual Tester to AI Systems Architect —{' '}
          <span className="text-ali-orange relative inline-block">
            I'll Show You The Roadmap
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue-dark" viewBox="0 0 260 9" fill="none" aria-hidden="true">
              <path d="M2 7C60 3.7 205 -2.3 258 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-sm mx-auto">
          I've helped <strong className="text-ali-heading">150+ engineers</strong> crack cloud interviews, land EU tech jobs, and break into AI.
        </p>

        {/* Credibility bar */}
        <div className="flex justify-center gap-4 text-center mb-5">
          <div>
            <p className="text-sm font-bold text-ali-heading">30.5K</p>
            <p className="text-[10px] text-gray-400">LinkedIn</p>
          </div>
          <div className="border-x border-gray-200 px-4">
            <p className="text-sm font-bold text-ali-heading">150+</p>
            <p className="text-[10px] text-gray-400">Mentored</p>
          </div>
          <div>
            <p className="text-sm font-bold text-ali-heading">7x</p>
            <p className="text-[10px] text-gray-400">Azure Certified</p>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pb-16 space-y-3">

        {/* Primary hero CTA */}
        <a href="https://vamsipenmetsa.gumroad.com/l/claude" target="_blank" rel="noopener noreferrer"
          className="block w-full text-center py-4 bg-ali-orange text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity shadow-md">
          Get My Free Claude Code Playbook →
        </a>
        <p className="text-center text-xs text-gray-400 -mt-1">
          Or{' '}
          <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer"
            className="underline hover:text-ali-orange transition-colors">
            book a 1:1 session ↓
          </a>
        </p>


        {/* ── SECTION 3: SOCIAL PROOF (before paid CTAs) ── */}
        <div className="pt-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 relative inline-block">
            Engineers Who've Been Where You Are
            <svg className="absolute w-full h-3 -bottom-0.5 left-0 text-ali-orange" viewBox="0 0 260 9" fill="none" aria-hidden="true">
              <path d="M2 7C60 3.7 205 -2.3 258 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </p>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 space-y-4 mt-2">
            <div>
              <p className="text-xs text-ali-orange mb-1">⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-bold text-ali-heading mb-0.5">Passed her DevOps interview</p>
              <p className="text-sm text-gray-600 italic">"I successfully passed my technical interview. I am so excited and grateful!"</p>
              <p className="text-xs text-gray-400 mt-1.5"><strong className="text-ali-heading">Mariia</strong> · DevOps Engineer</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs text-ali-orange mb-1">⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-bold text-ali-heading mb-0.5">Got his EU job search roadmap</p>
              <p className="text-sm text-gray-600 italic">"Clear 5-phase roadmap for my EU job search. Structured, no-fluff guidance. Highly recommend."</p>
              <p className="text-xs text-gray-400 mt-1.5"><strong className="text-ali-heading">Ram Kumar R</strong> · Cloud/DevOps</p>
            </div>
          </div>
        </div>


        {/* ── SECTION 4: WORK WITH ME (1:1 services) ── */}
        <div className="pt-3">
          <p className="text-xs font-bold text-ali-heading uppercase tracking-widest mb-1">Accelerate With 1:1 Guidance</p>
          <p className="text-xs text-gray-400 mb-3">150+ engineers have used these sessions to land interviews, get offers, and level up</p>

          <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all mb-3">
            <div className="w-10 h-10 bg-ali-orange rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">Land Your Next Cloud Interview</p>
              <p className="text-xs text-gray-500">Mock session using the exact format EU companies use</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>

          <a href="https://topmate.io/vamsipenmetsa/137043?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all mb-3">
            <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
              <Linkedin size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">Build Your EU Tech Job Roadmap</p>
              <p className="text-xs text-gray-500">Custom 90-day plan based on your background</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>

          <a href="https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 bg-ali-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">Resume That Gets Callbacks</p>
              <p className="text-xs text-gray-500">Rewritten to pass ATS filters for EU tech roles</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>

          {/* Proof after services CTA */}
          <div className="mt-3 bg-ali-orange/5 border border-ali-orange/20 rounded-2xl p-4">
            <p className="text-xs text-ali-orange mb-0.5">⭐⭐⭐⭐⭐ Verified session</p>
            <p className="text-sm text-gray-600 italic">"His insights regarding DevOps tools and technologies are very valuable."</p>
            <p className="text-xs text-gray-400 mt-1"><strong className="text-ali-heading">Sumeet K.</strong> · Dec 2025</p>
          </div>
        </div>


        {/* ── SECTION 6: FOLLOW-UP FUNNEL (newsletters) ── */}
        <div className="pt-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Stay in the Loop — Free Weekly Insights</p>
          <p className="text-xs text-gray-400 mb-3">Not ready to book yet? Join 4,500+ engineers who get weekly field notes.</p>

          <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7460975088108978176" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-[#0A66C2]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all mb-3">
            <div className="w-10 h-10 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
              <Linkedin size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">The Architect's Edge</p>
              <p className="text-xs text-gray-500">4,500+ subscribers · Weekly cloud &amp; AI deep-dives</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>

          <a href="https://brokenpipeline.substack.com/subscribe" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-[#FF6719]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 bg-[#FF6719] rounded-xl flex items-center justify-center flex-shrink-0">
              <Rss size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">Broken Pipeline</p>
              <p className="text-xs text-gray-500">Where Systems Meet Humanity — Substack</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>
        </div>


        {/* ── SECTION 7: PARTNER WITH ME (brand collab) ── */}
        <div className="pt-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Partner With Me</p>

          <a href="https://www.passionfroot.me/vamsipenmetsa" target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-2xl p-4 bg-gradient-to-r from-ali-orange to-purple-600 text-white hover:opacity-95 hover:-translate-y-0.5 transition-all shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Megaphone size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm relative inline-block pb-2">
                  Brand Collaborations
                  <svg className="absolute w-full h-3 bottom-0 left-0 text-ali-blue" viewBox="0 0 120 9" fill="none" aria-hidden="true">
                    <path d="M2 7C28 3.7 95 -2.3 118 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </p>
                <p className="text-xs text-white/80">Sponsorships · Partnerships · Promos</p>
              </div>
            </div>
            <p className="text-xs text-white/90 pl-12">30.5K LinkedIn followers · 4.5K newsletter subscribers · <span className="font-bold">$300/package</span></p>
            <div className="flex items-center gap-1 pl-12 mt-2 text-xs font-bold text-white/90">
              View on Passionfroot <ArrowRight size={13} />
            </div>
          </a>
        </div>


        {/* ── SECTION 8: VIEW PORTFOLIO ── */}
        <a href="/vamsipenmetsa-portfolio"
          className="block w-full text-center py-3 bg-white text-ali-heading rounded-2xl font-bold text-sm border-2 border-gray-200 hover:border-ali-orange transition-colors">
          View Full Portfolio
        </a>


        {/* ── SECTION 9: CONNECT ── */}
        <div className="pt-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Connect</p>

          <div className="grid grid-cols-2 gap-3">
            <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
              <Linkedin size={18} className="text-[#0A66C2]" />
              <span className="text-sm font-bold text-ali-heading">LinkedIn</span>
            </a>
            <a href="https://github.com/vamsipenmetsa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
              <Github size={18} className="text-gray-800" />
              <span className="text-sm font-bold text-ali-heading">GitHub</span>
            </a>
            <a href="https://medium.com/@vamsipenmetsa" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
              <BookOpen size={18} className="text-gray-800" />
              <span className="text-sm font-bold text-ali-heading">Medium</span>
            </a>
            <a href="mailto:vamsivarmapenmatsa@gmail.com"
              className="flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-gray-100 hover:shadow-md transition-all">
              <Mail size={18} className="text-ali-orange" />
              <span className="text-sm font-bold text-ali-heading">Email</span>
            </a>
          </div>
        </div>


        {/* ── SECTION 10: COMMUNITIES ── */}
        <div className="pt-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Communities</p>

          <a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all mb-3">
            <div className="w-10 h-10 bg-ali-blue-dark rounded-xl flex items-center justify-center flex-shrink-0">
              <Users size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">DevOps Professionals Group</p>
              <p className="text-xs text-gray-500">30K+ DevOps professionals</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>

          <a href="https://www.instagram.com/poland_streets" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all mb-3">
            <div className="w-10 h-10 bg-[#E4405F] rounded-xl flex items-center justify-center flex-shrink-0">
              <Instagram size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">Poland Streets</p>
              <p className="text-xs text-gray-500">Street photography · 3M+ views</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>

          <a href="https://www.instagram.com/international_friends_wawa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 bg-[#E4405F] rounded-xl flex items-center justify-center flex-shrink-0">
              <Instagram size={20} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-ali-heading">International Friends Warsaw</p>
              <p className="text-xs text-gray-500">Community events &amp; meetups</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
          </a>
        </div>


        {/* Back */}
        <div className="text-center pt-6">
          <a href="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-ali-orange transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </a>
        </div>

      </div>
    </div>
  );
}

export default Links;
