import React, { useState } from 'react';
import { Award, ChevronDown } from 'lucide-react';

const badge = (file) => `${import.meta.env.BASE_URL}badges/${file}.png`;

const ARTICLES = [
  ['Claude Certified Architect Exam Overview', '14 May'],
  ['The Agentic Loop — How Claude Agents Actually Work', '14 May'],
  ['Tool Use — Definitions, Descriptions, and Structured Output', '14 May'],
  ['tool_choice Modes and Parallel Tool Calls', '15 May'],
  ['Hub-and-Spoke Architecture and the Task Tool', '18 May'],
  ['Context Passing and Parallel Subagents', '19 May'],
  ['Agent SDK Hooks — Deterministic Compliance', '20 May'],
  ['Structured Errors and Retry Logic', '21 May'],
  ['MCP Configuration — Secrets and Primitives', '22 May'],
  ['Built-in Tools — Grep, Glob, Read, Write, Edit, Bash', '25 May'],
  ['Few-Shot Prompting — Examples That Work', '26 May'],
  ['Explicit Criteria — Reducing False Positives', '27 May'],
  ['CLAUDE.md Hierarchy and Configuration', '28 May'],
  ['Skills and Custom Commands', '29 May'],
  ['CI/CD with Claude Code', '01 Jun'],
  ['System Prompt Drift — Architecture and Boundaries', '02 Jun'],
  ['Planning Mode vs Direct Execution', '03 Jun'],
  ['Custom Commands and Path-Specific Rules', '04 Jun'],
  ['tool_use and JSON Schema for Structured Extraction', '05 Jun'],
  ['Self-Correction and Validation Patterns', '08 Jun'],
  ['Multi-Pass Review — Systematic Coverage for Complex Code', '09 Jun'],
  ['Context Window Management — Placement, Attention, and Information Survival', '10 Jun'],
  ['Escalation Patterns — Reliable Triggers and Decision Flows', '11 Jun'],
  ['Confidence Calibration — Stratified Evaluation and Field-Level Scoring', '12 Jun'],
  ['Batch API — 50% Cost Savings for Asynchronous Workloads', '15 Jun'],
  ['Case Facts and Conversation Management — Persistent State for Long Conversations', '16 Jun'],
  ['Conversation Management and Context Efficiency — Scratchpads and Persistence', '17 Jun'],
  ['Provenance and Multi-Source Synthesis — Attribution and Conflict Resolution', '18 Jun'],
  ['Scenario — Support Agent Architecture and Decision Points', '19 Jun'],
  ['Scenario — CI/CD Pipeline and Code Generation with Claude', '22 Jun'],
];

const FEATURED = [
  ['Thank you for putting together the Claude exam preparation document. Your effort, attention to detail, and time invested in creating such a well-organized resource are truly appreciated. It will be a valuable guide for the entire team.', 'Irena J.', '06 Jul 2026'],
  ['Thank you so much, Vamsi, for these clear and insightful Claude learning articles! Your explanations and examples are wonderfully easy to grasp. Fantastic work!', 'Cloud Poland reader', ''],
  ['I appreciate the daily #30DaysofClaude articles. I have found them insightful and educational. This content will help me focus on the right concepts for the exam.', 'Will R.', '24 Jun 2026'],
  ['Thank you for really useful 30-days Claude Certification preparation articles!', 'Dzmitry R.', '27 Jun 2026'],
  ['Thank you for the articles, it really helped to prepare for the exam :)', 'Anupam K.', '17 Sep 2026'],
  ["I want to thank you for these articles. I'll use them to finish getting ready!", 'Przemyslaw C.', '05 Jun 2026'],
];

const MORE_FEEDBACK = [
  ['Great content for the exam prep', 'Anupam K.', '17 Sep 2026'],
  ['Thanks', 'Yuliya B.', '18 Jul 2026'],
  ['Thank you for your work!', 'Nirav J.', '05 Jul 2026'],
  ['Thank you for this article.', 'Apoorva U.', '23 Jun 2026'],
  ['Thanks for the Claude AI article series :)', 'Mikhail B.', '08 Jun 2026'],
  ['Thanks for the article. It really helps.', 'Danilo N.', '03 Jun 2026'],
  ['Thank you for the article!', 'Roman D.', '30 May 2026'],
  ['Thanks for this really insightful, motivational, and helpful article!', 'Sebastian C.', 'EPAM Poland community'],
  ['Awesome article!', 'Nikolai P.', '29 May 2026'],
];

const FEEDBACK_BADGES = [
  ['valuable-article', 'Valuable Article'],
  ['thank-you-article', 'Thank You'],
  ['inspiring-article', 'Inspiring Article'],
];

const STATS = [
  { value: "CEO's Bravo", label: 'AI adoption award' },
  { value: '21', label: 'Engineers enabled' },
  { value: '30', label: 'Claude articles' },
  { value: '200+', label: 'Technical interviews' },
];

const CHAMPION = [
  {
    badge: 'ai-value-driver',
    title: 'AI Value Driver',
    quote:
      'Thank you for proactively exploring and applying AI solutions! You are going above and beyond the AI Champion role on the [LSEG MaaS] project. Your proactive efforts and clear guidelines are creating the space and confidence our team needs to adopt and experiment with complex AI usage patterns.',
    source: 'Delivery Central · 01 Nov 2026',
  },
  {
    badge: 'microsoft-ai-champion',
    title: 'Microsoft AI Champion',
    quote:
      'Thank you for going above and beyond in your AI Champion role on the [LSEG MaaS] project. Your proactive efforts and clear guidelines are creating the space and confidence our team needs to adopt and experiment with complex AI usage patterns. Your contribution is truly appreciated.',
    source: 'Patryk Lesiak · Delivery Manager · 30 Oct 2026',
  },
  {
    badge: 'ai-maturity-champion',
    title: 'EPAM AI Maturity Champion',
    quote: 'Thank you for moving your project towards AI Maturity growth and driving innovations!',
    source: 'EPAM AI Maturity Programme',
  },
];

function Quote({ children, source, accent }) {
  return (
    <blockquote className={`border-l-4 ${accent} pl-4 text-sm text-gray-700 leading-relaxed`}>
      {children}
      {source && <cite className="block not-italic mt-2 text-xs font-semibold text-gray-400">{source}</cite>}
    </blockquote>
  );
}

export default function Recognition() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <section id="recognition" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-ali-yellow/20 text-yellow-700 rounded-full text-sm font-bold mb-4">
            <Award size={16} /> Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Driving AI Adoption, <span className="text-ali-orange">Recognised by Leadership</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            From the CEO&rsquo;s Bravo to client delivery feedback &mdash; leading AI adoption for a 21-engineer team at LSEG MaaS to improve productivity and drive business value.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ali-cream rounded-2xl p-5 text-center border border-gray-100">
              <p className="text-2xl md:text-3xl font-serif font-bold text-ali-heading leading-tight">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CEO Bravo + Ambassador */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <article className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-ali-yellow hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between gap-4 mb-5">
              <img src={badge('ceo-bravo')} alt="EPAM.AI CEO's Bravo badge" width={88} height={88} className="w-[88px] h-[88px] rounded-full drop-shadow-lg" loading="lazy" />
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-yellow/25 text-yellow-800 rounded-full">CEO Award</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-1">CEO&rsquo;s Bravo &mdash; AI Adoption</h3>
            <p className="text-sm text-gray-500 mb-5">EPAM Systems &middot; AI Ambassador Programme</p>
            <Quote accent="border-ali-yellow">
              Thank you for your outstanding dedication and the remarkable impact you&rsquo;ve made last year. Your passion for sharing AI knowledge, driving social learning, and guiding colleagues through AI adoption has been instrumental in accelerating our journey toward becoming an AI&#8209;native organization and a leader in enterprise AI transformations.
            </Quote>
            <p className="text-xs font-semibold text-gray-400 mt-5 pt-4 border-t border-gray-100">From the CEO</p>
          </article>

          <article className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between gap-4 mb-5">
              <img src={badge('ai-ambassador')} alt="EPAM.AI Ambassador badge" width={88} height={88} className="w-[88px] h-[88px] rounded-full drop-shadow-lg" loading="lazy" />
              <span className="text-xs font-bold px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full">AI Ambassador</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-1">EPAM AI Ambassador</h3>
            <p className="text-sm text-gray-500 mb-5">Going Extra Mile &middot; EPAM.AI</p>
            <Quote accent="border-purple-400">
              Your dedication to productivity enhancement through GenAI utilization, coupled with your innovative approach and community engagement, has been truly inspiring. Your impact is undeniable, and we&rsquo;re incredibly grateful for your continued support.
            </Quote>
            <p className="text-xs font-semibold text-gray-400 mt-5 pt-4 border-t border-gray-100">06 May 2025 &middot; From EPAM.AI</p>
          </article>
        </div>

        {/* AI Champion */}
        <article className="bg-gradient-to-br from-ali-blue/10 via-white to-ali-blue/5 rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 border-t-4 border-t-ali-blue-dark mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
            <span className="text-xs font-bold px-3 py-1.5 bg-ali-blue/25 text-sky-800 rounded-full">AI Adoption Lead</span>
            <span className="text-xs font-bold px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full">Going Extra Mile</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mt-3">AI Champion &mdash; LSEG MaaS</h3>
          <p className="text-sm text-gray-500 mt-1 mb-8">Leading AI adoption for a 21-engineer team to improve productivity and drive customer business value</p>
          <div className="grid md:grid-cols-3 gap-8">
            {CHAMPION.map((c) => (
              <div key={c.title} className="flex flex-col gap-3">
                <img src={badge(c.badge)} alt={`${c.title} badge`} width={80} height={80} className="w-20 h-20 rounded-full drop-shadow-lg" loading="lazy" />
                <h4 className="font-sans font-bold text-ali-heading">{c.title}</h4>
                <Quote accent="border-ali-blue-dark" source={c.source}>{c.quote}</Quote>
              </div>
            ))}
          </div>
        </article>

        {/* AI Assessor */}
        <article className="bg-gradient-to-br from-teal-50 via-white to-ali-cream rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 border-t-4 border-t-teal-500 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <img src={badge('cloud-pro-collaboration')} alt="Cloud Pro Collaboration badge" width={120} height={120} className="w-24 h-24 md:w-[120px] md:h-[120px] rounded-full drop-shadow-lg flex-shrink-0" loading="lazy" />
            <div className="flex-1">
              <span className="text-xs font-bold px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full">AI Assessor</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mt-3">AI Assessor &mdash; Cloud Poland</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">Cloud Pro Collaboration &middot; EPAM Cloud Poland community</p>
              <p className="text-gray-700 leading-relaxed max-w-3xl">
                Designing new skill assessments for <strong>AI adoption and competence</strong>, giving more than <strong>500 Cloud Poland colleagues</strong> a clear, practical way to measure where they are and where to grow with AI.
              </p>
            </div>
            <div className="text-center md:text-right flex-shrink-0">
              <p className="text-4xl font-serif font-bold text-teal-700">500+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Colleagues</p>
            </div>
          </div>
        </article>

        {/* Writer + Interviewer */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <article className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-green-500 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between gap-4 mb-5">
              <img src={badge('community-writer')} alt="We Are Community Writer badge" width={88} height={88} className="w-[88px] h-[88px] rounded-full drop-shadow-lg" loading="lazy" />
              <span className="text-xs font-bold px-3 py-1.5 bg-green-100 text-green-700 rounded-full">AI Contributor &middot; Writer</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-1">#30DaysOfClaude</h3>
            <p className="text-sm text-gray-500 mb-5">Claude Certified Architect &middot; 30-article series</p>
            <Quote accent="border-green-400">
              Outstanding work on the 30-article series focused on the important topic of Claude certification. It achieved impressive reach and generated strong engagement, earning positive feedback across the community, and helped numerous colleagues prepare for certification.
            </Quote>
            <p className="text-xs font-semibold text-gray-400 mt-5 pt-4 border-t border-gray-100">6&times; recognition &middot; 03 Jul 2026 &middot; From EPAM.AI</p>
          </article>

          <article className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-ali-orange hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="flex gap-3">
                <img src={badge('technical-interviewer')} alt="EPAM Technical Interviewer badge — reached 101" width={88} height={88} className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full drop-shadow-lg" loading="lazy" />
                <img src={badge('interview-contributor-l2')} alt="EPAM Global Technical Interview Service Contributor L2 badge" width={88} height={88} className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full drop-shadow-lg" loading="lazy" />
              </div>
              <span className="text-xs font-bold px-3 py-1.5 bg-ali-orange/20 text-orange-700 rounded-full text-center">Technical Interviewer</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-1">200+ Technical Interviews</h3>
            <p className="text-sm text-gray-500 mb-5">Technical Interview Contributor &middot; EPAM</p>
            <Quote accent="border-ali-orange">Your professionalism and competent assistance are greatly appreciated!</Quote>
            <p className="text-xs font-semibold text-gray-400 mt-5 pt-4 border-t border-gray-100">02 Jul 2026 &middot; Technical Interview Department</p>
          </article>
        </div>

        {/* Reader feedback */}
        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-6 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Reader feedback</h3>
              <p className="text-xs font-mono text-gray-400 mt-1">#30DaysOfClaude &middot; Cloud Poland community</p>
            </div>
            <div className="flex gap-5">
              {FEEDBACK_BADGES.map(([f, label]) => (
                <div key={f} className="flex flex-col items-center gap-1.5 text-center">
                  <img src={badge(f)} alt={`${label} badge`} width={56} height={56} className="w-14 h-14 rounded-full drop-shadow-md" loading="lazy" />
                  <span className="text-[10px] font-bold text-gray-500 leading-tight max-w-[72px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED.map(([q, who, date]) => (
              <figure key={q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                <blockquote className="text-sm text-gray-700 leading-relaxed">
                  <span className="block font-serif text-4xl leading-none h-5 text-ali-orange">&ldquo;</span>
                  {q}
                </blockquote>
                <figcaption className="mt-auto flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-bold text-ali-heading">{who}</span>
                  {date && <span className="font-mono text-xs text-gray-400 whitespace-nowrap">{date}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMoreOpen(!moreOpen)}
            aria-expanded={moreOpen}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ali-heading hover:text-ali-orange transition-colors"
          >
            More comments from colleagues ({MORE_FEEDBACK.length})
            <ChevronDown size={16} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
          </button>
          {moreOpen && (
            <ul className="grid md:grid-cols-2 gap-x-8 mt-3">
              {MORE_FEEDBACK.map(([q, who, date]) => (
                <li key={q + who} className="py-3 border-t border-gray-200 text-sm">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-800">{q}</span>
                    <span className="font-mono text-xs text-gray-400 whitespace-nowrap">{who}</span>
                  </div>
                  <span className="font-mono text-[11px] text-gray-400">{date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Article list */}
        <div className="bg-ali-cream rounded-3xl border border-gray-100 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/60 transition-colors"
          >
            <span>
              <span className="block font-serif font-bold text-xl text-ali-heading">#30DaysOfClaude &mdash; all 30 articles</span>
              <span className="block text-sm text-gray-500 mt-0.5">Published to the Cloud Poland community &middot; 14 May &ndash; 22 Jun 2026</span>
            </span>
            <ChevronDown size={22} className={`flex-shrink-0 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
          {open && (
            <ol className="grid md:grid-cols-2 gap-x-8 px-6 pb-6">
              {ARTICLES.map(([title, date], i) => (
                <li key={title} className="grid grid-cols-[2rem_1fr_auto] gap-3 items-baseline py-2.5 border-t border-gray-200/70 text-sm">
                  <span className="font-mono text-xs font-bold text-ali-orange">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-gray-800">{title}</span>
                  <span className="font-mono text-xs text-gray-400 whitespace-nowrap">{date}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}
