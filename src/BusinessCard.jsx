import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';

export default function BusinessCard({ onDismiss }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(onDismiss, 440);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.45s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleDismiss(); }}
    >
      <div
        style={{
          maxWidth: 400,
          width: '100%',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease',
          transitionDelay: visible ? '80ms' : '0ms',
        }}
      >
        {/* Business card — white, like LinkedIn's physical card */}
        <div
          className="rounded-3xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #f9f9f6 0%, #fff 50%, #f4f4f0 100%)',
            padding: 'clamp(20px, 5vw, 28px)',
            boxShadow: '0 48px 96px -24px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
            color: '#1a1a1a',
          }}
        >
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .07 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              backgroundSize: '200px 200px',
              mixBlendMode: 'multiply',
              opacity: 0.6,
            }}
          />

          {/* Top: Identity */}
          <div className="relative grid gap-3.5 mb-5" style={{ gridTemplateColumns: '1fr 80px' }}>
            <div>
              <h2
                className="font-serif font-bold leading-tight mb-2"
                style={{ fontSize: 'clamp(24px,6vw,30px)', letterSpacing: '-0.04em', color: '#1a1a1a' }}
              >
                Vamsi<br />Penmetsa
              </h2>
              <p className="font-semibold leading-snug mb-1" style={{ fontSize: 12.5, color: '#3a3a3a' }}>
                AI Adaptation Leader · Building LLM-as-a-Service
              </p>
              <p style={{ fontSize: 11.5, color: '#6e6e73' }}>
                EPAM Systems · Warsaw, Poland
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                width: 80, height: 80,
                background: 'linear-gradient(135deg,#c8ddf5,#a8c4f0)',
                boxShadow: '0 6px 18px -4px rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="./vamsiPenmetsa.webp"
                alt="Vamsi Penmetsa"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-4" style={{ height: 1, background: 'rgba(0,0,0,0.08)' }} />

          {/* Bottom: QR + CTAs */}
          <div className="relative grid gap-3.5 items-center mb-4" style={{ gridTemplateColumns: '84px 1fr' }}>
            {/* QR Code */}
            <div className="flex flex-col items-center gap-1">
              <img
                src="./linkedin-qr.jpg"
                alt="LinkedIn QR code — scan to connect"
                className="rounded-xl"
                style={{
                  width: 78, height: 78,
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'block',
                }}
              />
              <span
                className="text-center leading-snug"
                style={{ fontFamily: 'monospace', fontSize: 9, color: '#86868b', letterSpacing: '0.03em' }}
              >
                linkedin.com<br />/in/vamsipenmetsa
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2">
              <a
                href="https://vamsipenmetsa.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl font-semibold transition-transform hover:-translate-y-0.5 active:scale-95"
                style={{
                  padding: '10px 13px',
                  fontSize: 13,
                  background: 'rgba(0,0,0,0.06)',
                  color: '#1a1a1a',
                  border: '1px solid rgba(0,0,0,0.1)',
                  textDecoration: 'none',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <BookOpen size={15} />
                Free Resources
              </a>
              <a
                href="https://topmate.io/vamsipenmetsa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl font-semibold transition-transform hover:-translate-y-0.5 active:scale-95"
                style={{
                  padding: '10px 13px',
                  fontSize: 13,
                  background: '#1a1a1a',
                  color: '#fff',
                  boxShadow: '0 4px 14px -4px rgba(0,0,0,0.3)',
                  textDecoration: 'none',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar size={15} />
                Book a Call
              </a>
            </div>
          </div>

          {/* Enter / View Profile button */}
          <button
            type="button"
            onClick={handleDismiss}
            className="relative w-full flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 group"
            style={{
              padding: '10px 0 2px',
              background: 'none',
              border: 0,
              fontFamily: 'monospace',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#a0a0a5',
              cursor: 'pointer',
            }}
          >
            View Profile
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
