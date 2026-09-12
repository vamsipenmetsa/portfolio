import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, BookOpen, Cloud, Terminal, Code, Instagram, Calendar, Mic, Users, MapPin, Quote, Megaphone, Rss } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-ali-cream text-ali-text selection:bg-ali-orange selection:text-white">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-ali-orange via-purple-500 to-ali-blue-dark" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight">Vamsi Penmetsa</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-sans font-medium hover:text-ali-orange transition-colors">Services</a>
            <a href="#talks" className="font-sans font-medium hover:text-ali-orange transition-colors">Talks</a>
            <a href="#about" className="font-sans font-medium hover:text-ali-orange transition-colors">About</a>
            <a href="#products" className="font-sans font-medium hover:text-ali-orange transition-colors">Products</a>
            <a href="#collaborate" className="font-sans font-medium hover:text-ali-orange transition-colors">Collaborate</a>
            <a href="/portfolio/links" className="font-sans font-medium hover:text-ali-blue-dark transition-colors">Links</a>
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-lg transition-all transform hover:scale-105 shadow-sm">
              Book a Session
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-ali-heading">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl z-50 border-t border-gray-100">
            <div className="p-4 space-y-4">
              <a href="#services" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Services</a>
              <a href="#talks" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Talks</a>
              <a href="#about" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>About</a>
              <a href="#products" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Products</a>
              <a href="#collaborate" className="block font-medium p-2 hover:bg-ali-cream rounded" onClick={toggleMenu}>Collaborate</a>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="block font-bold text-ali-orange p-2" onClick={toggleMenu}>Book a Session</a>
            </div>
          </div>
        )}
      </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none" aria-hidden="true" />
        {/* Aurora blobs */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-ali-orange/10 to-purple-400/8 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-ali-blue/12 to-ali-yellow/8 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

          {/* Image Side */}
          <div className="relative w-full md:w-5/12 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
              {/* Portrait glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-ali-orange/20 via-purple-400/10 to-ali-blue/15 rounded-full blur-2xl scale-110 pointer-events-none" aria-hidden="true" />
              <img
                src="./vamsiPenmetsa.webp"
                alt="Vamsi Penmetsa — AI Systems Architect"
                width={900}
                height={1157}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-contain z-10 relative"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-7/12 text-center md:text-left space-y-5">
            <p className="text-sm font-bold tracking-widest uppercase text-ali-blue-dark">AI Systems Architect · LSEG × Microsoft</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-ali-heading leading-tight">
              From Manual Tester to AI Systems Architect —
              <span className="block text-ali-orange relative">
                And Helping 150+ Engineers Do The Same
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue-dark" viewBox="0 0 580 9" fill="none" aria-hidden="true">
                  <path d="M2 7C134 3.7 459 -2.3 578 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans max-w-xl">
              I build ML/LLM platforms at <span className="font-bold text-ali-heading">LSEG × Microsoft UK</span>. On the side, I help Cloud &amp; DevOps engineers <span className="font-bold text-ali-heading relative inline-block">crack interviews, land EU jobs,
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-orange" viewBox="0 0 310 9" fill="none" aria-hidden="true">
                  <path d="M2 7C72 3.7 244 -2.3 308 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span> and future-proof their careers with AI.
            </p>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-blue/15 text-ali-blue-dark rounded-full">7X Azure Certified</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-orange/15 text-ali-orange rounded-full">150+ Technical Interviews</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-yellow/20 text-yellow-700 rounded-full">EPAM AI Ambassador</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full">Breaking Down Claude in 30 Days</span>
              <span className="text-xs font-bold px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full">GitHub Copilot Certified (GH-300)</span>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark transition-all glow-cta">
                Book a 1:1 Session <ArrowRight size={18} className="inline ml-1 -mt-0.5" />
              </a>
              <a href="#products" className="px-8 py-3.5 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:shadow-lg transition-all">
                📚 Products & Resources
              </a>
            </div>
          </div>
        </div>
        </div>{/* end max-w-7xl */}
      </section>

      {/* Section divider */}
      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">
              Work With Me — <span className="relative inline-block">
                1:1 Guidance
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue" viewBox="0 0 200 9" fill="none" aria-hidden="true">
                  <path d="M2 7C45.9 3.7 156.7 -2.3 198 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">150+ engineers have used these sessions to land interviews, get offers, and level up — from someone who made the full journey from Manual Tester to AI Systems Architect.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Career Mentorship */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-blue hover:bg-ali-blue/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-ali-blue/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ali-blue group-hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-ali-blue-dark group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-ali-blue-dark transition-colors">Land Your Next Cloud Role</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Struggling to crack cloud interviews? I run the exact mock interview format top EU companies use — you'll walk out knowing precisely what to fix.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ali-blue-dark text-white rounded-full font-bold text-sm hover:bg-ali-orange hover:gap-3 hover:shadow-lg transition-all">
                Book session <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 2: LinkedIn & Career Transition */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-orange hover:bg-ali-orange/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-ali-orange/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ali-orange group-hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-ali-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-ali-orange transition-colors">Transition to Cloud/DevOps</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Don't know how to transition to Cloud/DevOps? I'll map the exact 90-day roadmap based on your background, including LinkedIn optimization and networking strategy.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/137043?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ali-orange text-white rounded-full font-bold text-sm hover:bg-ali-blue-dark hover:gap-3 hover:shadow-lg transition-all">
                Book session <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 3: Resume Review */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-ali-yellow hover:bg-ali-yellow/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-ali-yellow/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-ali-yellow group-hover:scale-110 transition-all">
                <svg className="w-8 h-8 text-yellow-700 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-yellow-700 transition-colors">Resume That Gets Interviews</h3>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                Getting ignored on job applications? I rewrite resumes to pass ATS filters and catch the eye of EU hiring managers — for Cloud &amp; DevOps roles specifically.
              </p>
              <a href="https://topmate.io/vamsipenmetsa/1804944?utm_source=public_profile&utm_campaign=vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-ali-yellow text-ali-heading rounded-full font-bold text-sm hover:bg-ali-blue-dark hover:text-white hover:gap-3 hover:shadow-lg transition-all">
                Book session <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Social Proof / Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-center">
            What <span className="relative inline-block">Engineers
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-orange" viewBox="0 0 100 9" fill="none" aria-hidden="true">
                <path d="M2 7C23 3.7 79 -2.3 98 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> Say After Working With Me
          </h2>
          <p className="text-gray-500 text-center mb-10">Real results from 1:1 sessions — interviews passed, jobs landed, careers unlocked</p>

          {/* Mentorship Testimonials */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-ali-blue-dark mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-ali-blue-dark"></span> Mentorship & Coaching
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Testimonial 1 - Sumeet */}
            <div className="bg-ali-cream/30 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 text-ali-orange text-sm mb-3">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-gray-600 italic border-l-4 border-ali-blue pl-4 py-2 leading-relaxed text-sm mb-4">
                "I had a wonderful session with Vamsi, his insights regarding DevOps and associated tools and technologies are very valuable."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-orange rounded-full flex items-center justify-center text-white font-bold text-sm">SK</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Sumeet Khastgir</p>
                  <p className="text-xs text-gray-500">Dec 2025</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Mariia */}
            <div className="bg-ali-cream/30 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 text-ali-orange text-sm mb-3">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-gray-600 italic border-l-4 border-ali-orange pl-4 py-2 leading-relaxed text-sm mb-4">
                "I successfully passed last technical interview. Thank you for your recommendation to try to behave as I am already middle... I am so excited and grateful!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Mariia</p>
                  <p className="text-xs text-gray-500">Aspiring DevOps Engineer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Ram Kumar */}
            <div className="bg-ali-cream/30 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2">
              <div className="flex items-center gap-1 text-ali-orange text-sm mb-3">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-gray-600 italic border-l-4 border-ali-yellow pl-4 py-2 leading-relaxed text-sm mb-4 max-w-3xl">
                "The session provided a clear 5-phase roadmap for my EU job search—resume refocus, LinkedIn strategy, intentional skill building, smart job tactics, and realistic market entry. Structured, no-fluff guidance. Highly recommend connecting with Vamsi."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ali-yellow rounded-full flex items-center justify-center text-ali-heading font-bold text-sm">RK</div>
                <div>
                  <p className="font-bold text-ali-heading text-sm">Ram Kumar R</p>
                  <p className="text-xs text-gray-500">Cloud/DevOps · EU Job Search</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Feedback */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-ali-orange mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-ali-orange"></span> Interview Feedback · 150+ Technical Interviews (Azure, DevOps, SRE, AWS)
            </p>
          </div>

          <div className="bg-gradient-to-r from-ali-orange/5 to-ali-blue/5 rounded-2xl p-6 border border-ali-orange/15 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-ali-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">MB</div>
                  <div>
                    <blockquote className="text-gray-600 italic leading-relaxed text-sm mb-3">
                      “The interview was honestly one of the best I’ve had the pleasure of attending. The questions were well thought out and the tasks actually tested real skills, which I really appreciated. It left me with a very good impression of the company, and I’m definitely keen to move forward.”
                    </blockquote>
                    <div>
                      <p className="font-bold text-ali-heading text-sm">Mikolaj B.</p>
                      <p className="text-xs text-gray-500">Interview Candidate · Feedback shared via HR · April 2026</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-80 flex-shrink-0">
                <img
                  src="./Interview_feedback_sharedbyHR.webp"
                  alt="Interview feedback from Mikolaj B. shared via HR"
                  width={700}
                  height={139}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={(e) => window.open(e.target.src, '_blank')}
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://topmate.io/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all">
              Start your journey <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Featured Talk Section */}
      <section id="talks" className="py-20 bg-gradient-to-br from-ali-blue/5 via-white to-ali-orange/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-ali-orange/10 text-ali-orange rounded-full text-sm font-bold mb-4">
              <Mic size={16} /> Featured Talk
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Speaking at <span className="text-ali-blue-dark">Community Events</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Talk Image — full-width landscape */}
            <div className="relative">
              <img
                src="./Vamsi_Tech_talk.webp"
                alt="Vamsi Penmetsa speaking at Microsoft Azure User Group Poland meetup at EPAM Warsaw office"
                width={2400}
                height={1600}
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[480px] object-cover object-center"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-ali-heading text-xs font-bold rounded-full shadow-lg">April 2026</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Talk Details */}
              <div className="p-8 md:p-10">
                <div>
                  <div className="flex items-center gap-2 text-sm text-ali-blue-dark font-bold mb-3">
                    <Calendar size={16} />
                    <span>15 April 2026 · 19:00 – 19:45</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-ali-heading mb-4 leading-snug">
                    The Blind Spots We Didn’t Know We Had — Splitting Observability Between Datadog & Azure Log Analytics
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <MapPin size={16} className="text-ali-orange flex-shrink-0 mt-0.5" />
                      <span><strong>EPAM Warsaw Office</strong> — 82nd Microsoft Azure User Group Poland Meetup</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <Users size={16} className="text-ali-blue-dark flex-shrink-0 mt-0.5" />
                      <span><strong>112 registered</strong> · <strong>65 attended</strong> · Hosted by Tomasz W. & Marek G.</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <Cloud size={16} className="text-ali-blue-dark flex-shrink-0 mt-0.5" />
                      <span>Based on hands-on experience from the <strong>LSEG × Microsoft</strong> project</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs font-medium px-3 py-1.5 bg-ali-blue/10 text-ali-blue-dark rounded-full">Observability</span>
                    <span className="text-xs font-medium px-3 py-1.5 bg-ali-orange/10 text-ali-orange rounded-full">Datadog</span>
                    <span className="text-xs font-medium px-3 py-1.5 bg-ali-blue/10 text-ali-blue-dark rounded-full">Azure Log Analytics</span>
                    <span className="text-xs font-medium px-3 py-1.5 bg-ali-yellow/20 text-yellow-700 rounded-full">Platform Engineering</span>
                  </div>
                </div>
              </div>

              {/* Appreciation Quotes */}
              <div className="p-8 md:p-10 space-y-4 md:border-l border-gray-100">
                  <div className="bg-gradient-to-r from-ali-cream to-ali-orange/5 rounded-2xl p-4 border border-ali-orange/20">
                    <div className="flex items-start gap-3">
                      <Quote size={18} className="text-ali-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600 italic leading-relaxed mb-2">
                          “A big thank you for your presentation. It was a very valuable part of the event, and I’m sure the audience truly benefited from your knowledge and insights.”
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-ali-blue-dark rounded-full flex items-center justify-center text-white font-bold text-[10px]">BB</div>
                          <div>
                            <p className="text-xs font-bold text-ali-heading">Bogumil Barjasz</p>
                            <p className="text-[11px] text-gray-500">EPAM Poland Cloud Discipline Head</p>
                          </div>
                        </div>
                        <img
                          src="./Bogumil_feedback.webp"
                          alt="Feedback screenshot from Bogumil Barjasz after Azure Meetup #82"
                          width={1000}
                          height={263}
                          loading="lazy"
                          decoding="async"
                          className="mt-3 w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          onClick={(e) => window.open(e.target.src, '_blank')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-ali-blue/5 to-ali-cream rounded-2xl p-4 border border-ali-blue/20">
                    <div className="flex items-start gap-3">
                      <Quote size={18} className="text-ali-blue-dark flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600 italic leading-relaxed mb-2">
                          “Congratulations for being a first-time public speaker during the Azure Meetup #82! Taking that step to speak in front of others is truly courageous and inspiring. Your willingness to share your voice sets a wonderful example for everyone.”
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-ali-blue rounded-full flex items-center justify-center text-white font-bold text-[10px]">MD</div>
                          <div>
                            <p className="text-xs font-bold text-ali-heading">Maciej Deptula</p>
                            <p className="text-[11px] text-gray-500">Azure Architect</p>
                          </div>
                        </div>
                        <img
                          src="./Maciej_feedback.webp"
                          alt="Feedback screenshot from Maciej Deptula after Azure Meetup #82"
                          width={1000}
                          height={216}
                          loading="lazy"
                          decoding="async"
                          className="mt-3 w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          onClick={(e) => window.open(e.target.src, '_blank')}
                        />
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Event Info Bar */}
            <div className="bg-gradient-to-r from-ali-blue-dark to-ali-blue px-6 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-white">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm" aria-hidden="true">🇵🇱</span>
                <span className="text-sm font-medium">Microsoft Azure User Group Poland · Collaboration with EPAM Systems</span>
              </div>
              <span className="text-xs text-white/70">4.8 ★ · 1,640 reviews</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* About Section — Compact */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-ali-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-ali-blue-dark mx-auto rounded-full"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            {/* Left Column - What I Do */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-ali-blue-dark">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-ali-blue-dark rounded-lg flex items-center justify-center">
                  <Terminal size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ali-heading">What I Do</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                Designing and delivering a production <span className="font-bold text-ali-heading">ML/LLM platform</span> for <span className="font-bold text-ali-blue-dark">LSEG × Microsoft UK</span> on Azure — spanning the full lifecycle of financial models from development to monitoring, with security-first design for regulated environments.
              </p>

              <div className="bg-ali-blue/5 rounded-xl p-4 mb-5">
                <p className="text-xs font-bold text-ali-blue-dark mb-1 uppercase tracking-wide">Specialization</p>
                <p className="text-gray-700 text-sm">Azure AKS · Terraform · GitLab CI/CD · Python/FastAPI · API Automation · Security-first Architecture</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-ali-blue-dark mt-0.5 text-sm">✓</span>
                  <p className="text-sm text-gray-700"><strong>12+ Certifications</strong> incl. Azure, AWS & GitHub</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ali-blue-dark mt-0.5 text-sm">✓</span>
                  <p className="text-sm text-gray-700"><strong>2 EPAM AI Certifications</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ali-orange mt-0.5 text-sm">★</span>
                  <p className="text-sm text-gray-700"><strong>Microsoft Copilot Champion</strong> & <strong>EPAM AI Ambassador</strong></p>
                </div>
              </div>
            </div>

            {/* Right Column - The Journey */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-ali-orange">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-ali-orange rounded-lg flex items-center justify-center">
                  <Cloud size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-ali-heading">The Journey</h3>
              </div>

              <div className="bg-ali-orange/5 rounded-xl p-4 mb-5">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">🇮🇳 India → 🇵🇱 Poland</span> — Working in EU since 2022. Thriving in multicultural, distributed teams across global financial institutions.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-5 text-sm">
                <span className="font-bold">Manual Tester</span> → <span className="font-bold">Automation</span> → <span className="font-bold">DevOps</span> → <span className="font-bold">SRE</span> → <span className="font-bold">Platform Eng.</span> → <span className="font-bold text-ali-orange">Cloud/AI</span>
              </p>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {['LSEG', 'IMF', 'WTW', 'UBS', 'Corteva', 'Microsoft'].map((company) => (
                  <div key={company} className="bg-ali-cream p-2 rounded-lg text-center">
                    <p className="font-bold text-xs text-ali-heading">{company}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-ali-heading">150+ global technical interviews</span> conducted · EPAM Poland Ambassador 2023
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Career Highlights */}
          <div className="space-y-6">

            {/* Certifications */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">

              {/* Header */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-ali-blue-dark to-ali-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-ali-heading">Certifications</h3>
                    <p className="text-xs text-gray-400 mt-0.5">12+ across Azure · AWS · GitHub · AI</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> All Verified
                </span>
              </div>

              {/* Microsoft Azure — featured */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0078d4] flex items-center gap-2">
                    <span className="w-5 h-px bg-[#0078d4] inline-block"></span> Microsoft Azure
                  </p>
                  <span className="text-[10px] font-bold px-2 py-1 bg-[#0078d4]/10 text-[#0078d4] rounded-full">7× Certified</span>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {[
                    { img: "https://images.credly.com/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png", name: "Solutions Architect Expert", code: "AZ-305", url: "https://learn.microsoft.com/api/credentials/share/en-gb/VamsiPenmetsa7/25D93904B41DCA95?sharingId=C12B7F6430996004" },
                    { img: "https://images.credly.com/images/c3ab66f8-5d59-4afa-a6c2-0ba30a1989ca/CERT-Expert-DevOps-Engineer-600x600.png", name: "DevOps Engineer Expert", code: "AZ-400", url: "https://learn.microsoft.com/api/credentials/share/en-gb/VamsiPenmetsa7/9A6A85340BFB87D5?sharingId=C12B7F6430996004" },
                    { img: "https://images.credly.com/images/1ad16b6f-2c71-4a2e-ae74-ec69c4766039/azure-security-engineer-associate600x600.png", name: "Security Engineer", code: "AZ-500", url: "https://learn.microsoft.com/api/credentials/share/en-gb/VamsiPenmetsa7/4E16B2FDA09E8AF6?sharingId=C12B7F6430996004" },
                    { img: "https://images.credly.com/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png", name: "Developer Associate", code: "AZ-204", url: "https://learn.microsoft.com/api/credentials/share/en-gb/VamsiPenmetsa7/D01EC7BE672BE6F9?sharingId=C12B7F6430996004" },
                    { img: "https://images.credly.com/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png", name: "Administrator", code: "AZ-104", url: "https://learn.microsoft.com/api/credentials/share/en-gb/VamsiPenmetsa7/425394C45CA3A75A?sharingId=C12B7F6430996004" },
                    { img: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png", name: "Fundamentals", code: "AZ-900", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" },
                  ].map((cert) => (
                    <a key={cert.code} href={cert.url} target="_blank" rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50/40 hover:bg-[#0078d4]/10 hover:-translate-y-1 transition-all duration-200 border border-blue-100/60">
                      <img src={cert.img} alt={cert.name} className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-md" />
                      <p className="text-[10px] font-bold text-ali-heading leading-tight text-center">{cert.name}</p>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#0078d4]/10 text-[#0078d4] rounded-full">{cert.code}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* AWS · GitHub · AI — unified bottom row */}
              <div className="pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* AWS */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#FF9900] mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#FF9900] inline-block"></span> Amazon Web Services
                  </p>
                  <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/b6a32f65459e4763a6ae0c9067be7ef0" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-100/60 hover:border-[#FF9900]/40 hover:bg-[#FF9900]/5 hover:-translate-y-0.5 transition-all duration-200">
                    <img src="https://images.credly.com/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" alt="AWS Certified AI Practitioner" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform drop-shadow-sm flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-ali-heading">AI Practitioner</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[#FF9900]/15 text-[#FF9900] rounded-full">AWS-AIF</span>
                    </div>
                  </a>
                </div>

                {/* GitHub */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-gray-600 inline-block"></span> GitHub
                  </p>
                  <a href="https://learn.microsoft.com/api/credentials/share/en-gb/VamsiPenmetsa7/287336BFD482D840?sharingId=C12B7F6430996004" target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
                    <img src="https://images.credly.com/images/6b924fae-3cd7-4233-b012-97413c62c85d/blob" alt="GitHub Copilot" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform drop-shadow-sm flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-ali-heading">GitHub Copilot</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">GH-300</span>
                    </div>
                  </a>
                </div>

                {/* AI & Leadership */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-purple-600 inline-block"></span> AI & Leadership
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/70 border border-purple-100/60">
                      <span className="text-base flex-shrink-0">🤖</span>
                      <p className="text-xs font-bold text-purple-700 leading-snug">EPAM AI Masterclass Excellence</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/70 border border-purple-100/60">
                      <span className="text-base flex-shrink-0">🎮</span>
                      <p className="text-xs font-bold text-purple-700 leading-snug">EPAM Prompts & Game Mastery</p>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/70 border border-blue-100/60">
                      <span className="text-base flex-shrink-0">⚡</span>
                      <p className="text-xs font-bold text-ali-blue-dark leading-snug">Microsoft Copilot Champion</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Career Highlights */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-ali-orange to-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-ali-heading">Career Highlights</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Global enterprise clients across finance & tech</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-ali-blue/5 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-ali-blue-dark mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-sm text-ali-blue-dark">LSEG × Microsoft UK</p>
                      <p className="text-sm font-medium text-ali-heading mt-0.5">AI Systems Architect & Platform Engineer</p>
                      <p className="text-xs text-gray-500 mt-1">Modeling-as-a-Service on Azure</p>
                    </div>
                  </div>
                </div>
                <div className="bg-ali-orange/5 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-ali-orange mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-sm text-ali-orange">IMF iData</p>
                      <p className="text-sm font-medium text-ali-heading mt-0.5">Site Reliability Engineer</p>
                      <p className="text-xs text-gray-500 mt-1">SRE lead for international financial platform</p>
                    </div>
                  </div>
                </div>
                <div className="bg-ali-blue/5 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-ali-blue-dark mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-sm text-ali-blue-dark">Willis Towers Watson</p>
                      <p className="text-sm font-medium text-ali-heading mt-0.5">DevOps Engineer</p>
                      <p className="text-xs text-gray-500 mt-1">Azure cloud migration & automation</p>
                    </div>
                  </div>
                </div>
                <div className="bg-ali-orange/5 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-ali-orange mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-sm text-ali-orange">UBS Switzerland</p>
                      <p className="text-sm font-medium text-ali-heading mt-0.5">Cloud Engineer</p>
                      <p className="text-xs text-gray-500 mt-1">Cloud migration for global banking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider mx-4" aria-hidden="true" />

      {/* Products & Resources Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-ali-cream to-ali-yellow/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">
              Resources — <span className="relative inline-block">
                Free to 1:1
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue-dark" viewBox="0 0 130 9" fill="none" aria-hidden="true">
                  <path d="M2 7C30 3.7 103 -2.3 128 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-500 text-lg">Start free. Invest when you're ready.</p>

            {/* Value ladder steps */}
            <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs font-bold text-green-700">
                Step 1 — Free Ebooks
              </span>
              <span className="text-gray-300 text-sm">→</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-xs font-bold text-purple-700">
                Step 2 — Paid Guides ($2.99+)
              </span>
              <span className="text-gray-300 text-sm">→</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ali-orange/10 border border-ali-orange/30 rounded-full text-xs font-bold text-ali-orange">
                Step 3 — Book a 1:1 Session
              </span>
            </div>
          </div>

          {/* Featured Free Product */}
          <div className="mb-6">
            <a href="https://vamsipenmetsa.gumroad.com/l/claude" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-green-500/40 hover:border-green-500 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1.5 bg-green-100 text-green-700 rounded-full">MOST POPULAR</span>
                <span className="text-xs font-bold px-3 py-1.5 bg-green-500 text-white rounded-full shadow-sm">FREE</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-ali-orange/20 to-purple-200/40 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen size={32} className="text-ali-orange" />
                </div>
                <div className="flex-1 min-w-0 pr-24">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-ali-orange transition-colors">Agentic AI Patterns — The Claude Code Playbook</h3>
                  <p className="text-sm text-gray-500">Claude Code patterns, prompt engineering & agentic workflows — free eBook</p>
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-ali-orange transition-colors flex-shrink-0" />
              </div>
            </a>
          </div>

          {/* Paid Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://vamsipenmetsa.gumroad.com/l/terraform" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                <Terminal size={32} className="text-purple-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 group-hover:text-purple-600 transition-colors">Terraform EBook</h3>
                <p className="text-sm text-gray-500">Infrastructure as Code — from fundamentals to production</p>
              </div>
              <span className="text-xs font-bold text-gray-400 flex-shrink-0">$2.99+</span>
              <ArrowRight size={20} className="text-gray-300 group-hover:text-purple-600 transition-colors flex-shrink-0" />
            </a>

            <a href="https://vamsipenmetsa.gumroad.com/l/ghcp" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-ali-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ali-blue/20 transition-colors">
                <Code size={32} className="text-ali-blue-dark" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 group-hover:text-ali-blue-dark transition-colors">GitHub Copilot Guide</h3>
                <p className="text-sm text-gray-500">Master AI-powered coding with prompting strategies</p>
              </div>
              <span className="text-xs font-bold text-gray-400 flex-shrink-0">$4.99+</span>
              <ArrowRight size={20} className="text-gray-300 group-hover:text-ali-blue-dark transition-colors flex-shrink-0" />
            </a>

            <a href="https://vamsipenmetsa.gumroad.com/l/kube" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 bg-white rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 md:col-span-2">
              <div className="w-16 h-16 bg-ali-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ali-orange/20 transition-colors">
                <Cloud size={32} className="text-ali-orange" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 group-hover:text-ali-orange transition-colors">Kubernetes Cheat Sheet</h3>
                <p className="text-sm text-gray-500">Complete K8s reference — basics to advanced</p>
              </div>
              <span className="text-xs font-bold text-gray-400 flex-shrink-0">$2.99+</span>
              <ArrowRight size={20} className="text-gray-300 group-hover:text-ali-orange transition-colors flex-shrink-0" />
            </a>
          </div>

          {/* Newsletter CTAs — Follow-up funnel */}
          <div className="mt-10">
            <p className="text-center text-sm text-gray-500 mb-6">Not ready to book yet? Join 4,500+ engineers who get weekly insights straight from the field.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-[#0A66C2]/20 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-[#0A66C2]/10 rounded-2xl flex items-center justify-center">
                  <Linkedin size={28} className="text-[#0A66C2]" />
                </div>
                <h3 className="font-bold text-xl font-serif">The Architect's Edge</h3>
                <p className="text-gray-600 text-sm max-w-md">Weekly patterns from AI, cloud, and platform engineering. Real architectures, zero fluff.</p>
                <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7460975088108978176" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full font-bold hover:bg-[#004182] hover:shadow-lg transition-all">
                  Subscribe on LinkedIn <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#FF6719]/20 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-[#FF6719]/10 rounded-2xl flex items-center justify-center">
                  <Rss size={28} className="text-[#FF6719]" />
                </div>
                <h3 className="font-bold text-xl font-serif">Broken Pipeline</h3>
                <p className="text-xs font-bold text-[#FF6719] uppercase tracking-widest -mt-2">Where Systems Meet Humanity</p>
                <p className="text-gray-600 text-sm max-w-md">Systems break. People build. We learn. Notes on AI, DevOps, and architecture from production.</p>
                <a href="https://brokenpipeline.substack.com/subscribe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6719] text-white rounded-full font-bold hover:bg-[#e0570f] hover:shadow-lg transition-all">
                  Subscribe on Substack <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Collaborations */}
      <section id="collaborate" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-ali-orange/10 text-ali-orange rounded-full text-sm font-bold mb-4">
              <Megaphone size={16} /> Work With Me
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Brand <span className="text-ali-orange relative inline-block">
                Collaborations
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue-dark" viewBox="0 0 230 9" fill="none" aria-hidden="true">
                  <path d="M2 7C53 3.7 182 -2.3 228 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technical content for cloud engineers and architects — built on real production experience, not vendor press releases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* LinkedIn Channel */}
            <div className="bg-white rounded-3xl border-2 border-[#0A66C2]/20 p-8 hover:shadow-xl hover:-translate-y-1 transition-all hover:border-[#0A66C2]/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Linkedin size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-ali-heading">LinkedIn Profile</h3>
                  <p className="text-xs text-gray-400">linkedin.com/in/vamsipenmetsa</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { n: '30.5K', l: 'Followers' },
                  { n: '10.2K', l: 'Impressions / post' },
                  { n: '673K', l: 'Reached / year' },
                ].map(({ n, l }, i) => (
                  <div key={l} className={`text-center ${i === 1 ? 'border-x border-gray-100' : ''}`}>
                    <p className="text-xl font-bold font-serif text-ali-heading">{n}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{l}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2.5">
                {[
                  ['Seniority (Senior / Manager+)', '48%'],
                  ['Industry (IT & Software Dev)', '71%'],
                  ['Top locations', 'US 40% · EU 30% · IN 20%'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-bold text-ali-heading">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0A66C2]/5 rounded-xl border border-[#0A66C2]/10">
                <div>
                  <p className="font-bold text-sm text-ali-heading">Sponsored Post</p>
                  <p className="text-xs text-gray-500">Image / video · brand mention</p>
                </div>
                <p className="text-2xl font-serif font-bold text-ali-heading">$300</p>
              </div>
            </div>

            {/* Newsletter Channel */}
            <div className="bg-white rounded-3xl border-2 border-ali-orange/20 p-8 hover:shadow-xl hover:-translate-y-1 transition-all hover:border-ali-orange/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ali-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-ali-heading">The Architect's Edge</h3>
                  <p className="text-xs text-gray-400">Weekly newsletter · Every Tuesday</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { n: '4.5K', l: 'Subscribers' },
                  { n: '25%', l: 'Open rate' },
                  { n: '540', l: 'Clicks / send' },
                ].map(({ n, l }, i) => (
                  <div key={l} className={`text-center ${i === 1 ? 'border-x border-gray-100' : ''}`}>
                    <p className="text-xl font-bold font-serif text-ali-heading">{n}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{l}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-5 space-y-2.5">
                {[
                  ['Click-through rate', '7%'],
                  ['Core age group', '25–34 (45%)'],
                  ['Reader profile', 'DevOps · Cloud · AI'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-bold text-ali-heading">{value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-4 bg-ali-orange/5 rounded-xl border border-ali-orange/10">
                <div>
                  <p className="font-bold text-sm text-ali-heading">Sponsored Ad</p>
                  <p className="text-xs text-gray-500">Top-of-email banner · CTA button</p>
                </div>
                <p className="text-2xl font-serif font-bold text-ali-heading">$300</p>
              </div>
            </div>

          </div>

          {/* Passionfroot CTA — dark elegant */}
          <div className="bg-ali-heading rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Custom packages · Media kit · Availability</p>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-white">View full creator profile on Passionfroot</h3>
              <p className="text-sm text-white/60 mt-1">Book directly, see all packages, and download the media kit.</p>
            </div>
            <a
              href="https://www.passionfroot.me/vamsipenmetsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ali-heading rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all"
            >
              View on Passionfroot <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section — Clean */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready to <span className="text-ali-orange relative inline-block">
              Level Up?
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-ali-blue-dark" viewBox="0 0 120 9" fill="none" aria-hidden="true">
                <path d="M2 7C28 3.7 95 -2.3 118 2.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Whether it's career guidance, resume help, or DevOps mentorship — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://topmate.io/vamsipenmetsa/1755002" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-ali-orange text-white rounded-full font-bold hover:bg-ali-blue-dark hover:shadow-xl transition-all">
              <Calendar size={20} />
              Book a Session
            </a>
            <a href="mailto:vamsivarmapenmatsa@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ali-heading border-2 border-gray-200 rounded-full font-bold hover:border-ali-orange hover:shadow-lg transition-all">
              <Mail size={20} />
              Email Me
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-5">
            <a href="https://github.com/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ali-heading hover:text-white hover:scale-110 transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://medium.com/@vamsipenmetsa" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:scale-110 transition-all">
              <BookOpen size={20} />
            </a>
            <a href="https://www.instagram.com/vamsipenmetsa7" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-110 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer — Minimal */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-5">
            <img
              src="./signature.png"
              alt="Vamsi Penmetsa signature"
              className="h-14 opacity-60"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Vamsi Penmetsa. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#services" className="hover:text-ali-orange transition-colors">Services</a>
              <a href="#about" className="hover:text-ali-orange transition-colors">About</a>
              <a href="#products" className="hover:text-ali-orange transition-colors">Products</a>
              <a href="https://linkedin.openinapp.co/groups-13986647" target="_blank" rel="noopener noreferrer" className="hover:text-ali-orange transition-colors">Community</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
