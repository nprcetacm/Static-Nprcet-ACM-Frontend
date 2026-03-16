import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronDown, Users, Code, Zap, ArrowRight, CalendarDays } from 'lucide-react';
import clgpic from '../assets/CLG_PIC2.jpg';
import { Link } from 'react-router-dom';

/* ─── tiny CSS injected once ─────────────────────────────────────── */
const STYLE = `
@keyframes orb-float-1 {
  0%,100%{transform:translate(0,0) scale(1);}
  33%{transform:translate(60px,-40px) scale(1.08);}
  66%{transform:translate(-30px,50px) scale(0.95);}
}
@keyframes orb-float-2 {
  0%,100%{transform:translate(0,0) scale(1);}
  33%{transform:translate(-70px,30px) scale(1.05);}
  66%{transform:translate(40px,-60px) scale(0.92);}
}
@keyframes orb-float-3 {
  0%,100%{transform:translate(0,0) scale(1);}
  50%{transform:translate(50px,50px) scale(1.1);}
}
@keyframes shimmer {
  0%{background-position:-200% center;}
  100%{background-position:200% center;}
}
@keyframes letter-in {
  0%{opacity:0;transform:translateY(40px) rotateX(-90deg);}
  60%{opacity:1;transform:translateY(-4px) rotateX(10deg);}
  100%{opacity:1;transform:translateY(0) rotateX(0deg);}
}
@keyframes glow-pulse {
  0%,100%{box-shadow:0 0 20px 4px rgba(59,130,246,0.35);}
  50%{box-shadow:0 0 36px 10px rgba(59,130,246,0.6);}
}
@keyframes scroll-bounce {
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(8px);}
}
@keyframes cursor-blink {
  0%,100%{opacity:1;}
  50%{opacity:0;}
}
@keyframes particle-drift {
  0%{transform:translateY(0) translateX(0);opacity:0.6;}
  100%{transform:translateY(-120vh) translateX(var(--dx));opacity:0;}
}
@keyframes badge-slide {
  from{opacity:0;transform:translateY(-12px);}
  to{opacity:1;transform:translateY(0);}
}
.letter-anim {
  display:inline-block;
  opacity:0;
  animation:letter-in 0.55s cubic-bezier(.22,.68,0,1.2) forwards;
}
.shimmer-badge {
  background:linear-gradient(120deg,rgba(255,255,255,0.12) 0%,rgba(255,255,255,0.35) 50%,rgba(255,255,255,0.12) 100%);
  background-size:200% auto;
  animation:shimmer 2.6s linear infinite;
}
.glow-btn {
  animation:glow-pulse 2.4s ease-in-out infinite;
}
.scroll-chevron {
  animation:scroll-bounce 1.6s ease-in-out infinite;
}
.cursor-blink {
  animation:cursor-blink 1s step-end infinite;
}
`;

function injectStyle() {
  if (document.getElementById('hb-anim-style')) return;
  const el = document.createElement('style');
  el.id = 'hb-anim-style';
  el.innerHTML = STYLE;
  document.head.appendChild(el);
}

/* ─── Floating orbs ──────────────────────────────────────────────── */
const orbs = [
  { size: 520, left: '-10%', top: '-15%', color: 'rgba(59,130,246,0.22)', anim: 'orb-float-1 18s ease-in-out infinite' },
  { size: 420, right: '-8%', bottom: '5%', color: 'rgba(99,102,241,0.18)', anim: 'orb-float-2 22s ease-in-out infinite' },
  { size: 300, left: '40%', top: '60%', color: 'rgba(139,92,246,0.14)', anim: 'orb-float-3 14s ease-in-out infinite' },
];

/* ─── Floating particles ─────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 12}s`,
  duration: `${10 + Math.random() * 14}s`,
  size: 2 + Math.random() * 3,
  dx: `${(Math.random() - 0.5) * 120}px`,
}));

/* ─── Letter-by-letter animated text ───────────────────────────────── */
function AnimatedWord({ text, color, baseDelay = 0 }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="letter-anim"
          style={{ animationDelay: `${baseDelay + i * 0.055}s`, color }}
        >
          {ch}
        </span>
      ))}
    </>
  );
}

/* ─── Main component ────────────────────────────────────────────── */
const Homebanner = () => {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    injectStyle();
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setMouse({
      x: ((e.clientX - rect.left - cx) / cx) * 14,
      y: ((e.clientY - rect.top - cy) / cy) * 10,
    });
  }, []);

  const features = [
    { icon: Users, label: 'Community' },
    { icon: Code, label: 'Innovation' },
    { icon: Zap, label: 'Excellence' },
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background image with parallax ─────────── */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${clgpic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px) scale(1.04)`,
        }}
      />

      {/* ── Dark overlay ──────────────────────────── */}
      <div className="absolute inset-0 bg-black/65" />

      {/* ── Gradient orbs ─────────────────────────── */}
      {orbs.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: o.size,
            height: o.size,
            left: o.left,
            right: o.right,
            top: o.top,
            bottom: o.bottom,
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
            animation: o.anim,
            filter: 'blur(2px)',
          }}
        />
      ))}

      {/* ── Floating particles ─────────────────────── */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            opacity: 0,
            '--dx': p.dx,
            animation: `particle-drift ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}

      {/* ── Gradient fade at bottom ────────────────── */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* ── Main content ──────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted
            ? `translate(${mouse.x * 0.6}px, ${mouse.y * 0.4}px)`
            : `translate(0, 24px)`,
          transition: mounted
            ? 'opacity 0.8s ease-out, transform 0.12s ease-out'
            : 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        {/* Badge */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 shimmer-badge px-4 py-1.5 backdrop-blur-sm"
          style={{
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'badge-slide 0.7s ease-out 0.1s both' : 'none',
          }}
        >
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase">
            Student Chapter
          </span>
        </div>

        {/* Main Title — animated letter by letter */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none mb-4"
          style={{ perspective: '600px' }}
        >
          {mounted ? (
            <>
              <AnimatedWord text="NPRCET" baseDelay={0.2} />
              <span> </span>
              <AnimatedWord text="ACM" color="#60a5fa" baseDelay={0.62} />
            </>
          ) : (
            <>
              NPRCET <span className="text-blue-400">ACM</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-10 max-w-2xl leading-relaxed"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s',
          }}
        >
          Collaborate, innovate, and lead in computing
          <span className="cursor-blink text-blue-400 ml-0.5">|</span>
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.6s ease-out ${0.3 + i * 0.12}s, transform 0.6s ease-out ${0.3 + i * 0.12}s`,
                }}
              >
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white/90">{f.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
          }}
        >
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="glow-btn inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-white font-semibold text-base hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/25 hover:scale-105 transform"
          >
            Join Our Community
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/20 active:bg-white/25 transition-all duration-200 hover:scale-105 transform"
          >
            <CalendarDays className="w-4 h-4" />
            Explore Events
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{
          opacity: mounted ? 0.5 : 0,
          transition: 'opacity 1s ease-out 1.2s',
        }}
      >
        <span className="text-[10px] font-medium tracking-widest text-white/60 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/60 scroll-chevron" />
      </div>
    </div>
  );
};

export default Homebanner;