import React, { useEffect, useState } from 'react';
import { ChevronDown, Users, Code, Zap, ArrowRight, CalendarDays } from 'lucide-react';
import clgpic from '../assets/CLG_PIC2.jpg';
import { Link } from 'react-router-dom';

const Homebanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: Users, label: 'Community' },
    { icon: Code, label: 'Innovation' },
    { icon: Zap, label: 'Excellence' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${clgpic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Main Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase">
            Student Chapter
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none mb-4">
          NPRCET{' '}
          <span className="text-blue-400">ACM</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-10 max-w-2xl leading-relaxed">
          Collaborate, innovate, and lead in computing
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.6s ease-out ${0.3 + i * 0.1}s, transform 0.6s ease-out ${0.3 + i * 0.1}s`,
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-white font-semibold text-base hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/25"
          >
            Join Our Community
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/20 active:bg-white/25 transition-colors duration-200"
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
          transition: 'opacity 1s ease-out 1s',
        }}
      >
        <span className="text-[10px] font-medium tracking-widest text-white/60 uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
      </div>
    </div>
  );
};

export default Homebanner;