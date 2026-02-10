import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Sparkles, ExternalLink, 
  BookOpen, Cpu, Users, Zap, Award, Globe, Home, Mail 
} from 'lucide-react';
import acmlogo from '../assets/acm_logo1.png';
import clglogo from '../assets/new_nprcet_logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Navigation Structure
  const navGroups = [
    { 
      name: 'Home', 
      href: '/', 
      type: 'link',
      icon: <Home size={18} />
    },
    { 
      name: 'Innovation', 
      type: 'dropdown', 
      icon: <Cpu size={18} />,
      items: [
        { name: 'AI Hub', href: './ai', description: 'Explore AI technologies' },
        { name: 'Technology Playground', href: './technologyplayground', description: 'Interactive tech demos' },
        { name: 'Virtual Lab', href: './virtual-lab', description: 'Hands-on experiments' },
        { name: 'Initiatives', href: './initiatives', description: 'Our programs' }
      ]
    },
    { 
      name: 'Academics', 
      type: 'dropdown', 
      icon: <BookOpen size={18} />,
      items: [
        { name: 'Careers', href: './career', description: 'Career guidance' },
        { name: 'Digital Library', href: 'https://xmind.ai/share/Zd8D9dwb', target: '_blank', description: 'Online resources' },
        { name: 'Division', href: 'https://xmind.ai/share/hyjY8MI8?xid=MBUWGjEX', target: '_blank', description: 'Department info' }
      ]
    },
    { 
      name: 'Community', 
      type: 'dropdown', 
      icon: <Users size={18} />,
      items: [
        { name: 'Team', href: './team', description: 'Meet our team' },
        { name: 'Events', href: './events', description: 'Upcoming activities' },
        { name: 'Outreach', href: './outreach', description: 'Community programs' },
        { name: 'Proud Moments', href: './proudmoments', description: 'Achievements' }
      ]
    },
    { 
      name: 'Contact', 
      href: './contact', 
      type: 'link',
      icon: <Mail size={18} />
    }
  ];

  const highlights = [
    { 
      name: 'New', 
      href: './recent-events', 
      color: 'from-rose-500 to-pink-600', 
      icon: <Sparkles size={14} />,
      pulse: true 
    },
    { 
      name: 'Album', 
      href: 'https://online.fliphtml5.com/NPRCET_ACM_Student_Chapter/nsbq/', 
      color: 'from-indigo-500 to-purple-600', 
      target: '_blank',
      icon: <Award size={14} />
    },
    { 
      name: 'News', 
      href: 'https://online.fliphtml5.com/NPRNEWSLINE/owqn/#p=1', 
      color: 'from-blue-500 to-cyan-600', 
      target: '_blank',
      icon: <Globe size={14} />
    }
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
        }

        .dropdown-enter {
          animation: slideDown 0.2s ease-out;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .pulse-badge {
          animation: pulse-glow 2s infinite;
        }

        /* Custom scrollbar for mobile menu */
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>

      <nav 
        className={`fixed w-full z-50 top-0 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-200 py-2' 
            : 'bg-white/80 backdrop-blur-sm border-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            
            {/* 1. Logos with Animation */}
            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4">
              <a 
                href="https://www.nprcet.org/" 
                target="_blank" 
                rel="noreferrer" 
                className="transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
              >
                <img 
                  src={clglogo} 
                  alt="NPRCET" 
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm" 
                />
              </a>
              <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden sm:block"></div>
              <div className="relative group">
                <img 
                  src={acmlogo} 
                  alt="ACM" 
                  className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 2. Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navGroups.map((group, index) => (
                group.type === 'link' ? (
                  <a
                    key={index}
                    href={group.href}
                    onClick={() => setActiveLink(group.href)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                      activeLink === group.href 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {group.icon}
                      </span>
                      {group.name}
                    </span>
                    {activeLink === group.href && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"></div>
                    )}
                  </a>
                ) : (
                  <div key={index} className="relative group/dropdown">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 rounded-xl hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 focus:outline-none group">
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {group.icon}
                      </span>
                      {group.name}
                      <ChevronDown 
                        size={16} 
                        className="text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover/dropdown:rotate-180" 
                      />
                    </button>
                    
                    {/* Enhanced Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-72 opacity-0 translate-y-2 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:visible transition-all duration-300 ease-out z-50">
                      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden ring-1 ring-black/5 dropdown-enter">
                        {/* Gradient Header */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shimmer-effect"></div>
                        
                        <div className="p-2">
                          {group.items.map((item, subIndex) => (
                            <a
                              key={subIndex}
                              href={item.href}
                              target={item.target || '_self'}
                              className="block px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group/item"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <div className="font-semibold text-sm flex items-center gap-2 mb-0.5">
                                    {item.name}
                                    {item.target === '_blank' && (
                                      <ExternalLink 
                                        size={12} 
                                        className="opacity-0 group-hover/item:opacity-60 transition-opacity" 
                                      />
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 group-hover/item:text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                                <ChevronDown 
                                  size={14} 
                                  className="-rotate-90 text-gray-300 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" 
                                />
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* 3. Highlight Badges */}
            <div className="hidden lg:flex items-center gap-2">
              {highlights.map((h, i) => (
                <a
                  key={i}
                  href={h.href}
                  target={h.target || '_self'}
                  className={`group relative bg-gradient-to-r ${h.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                    h.pulse ? 'pulse-badge' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-white/20 shimmer-effect"></div>
                  <span className="relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {h.icon}
                  </span>
                  <span className="relative z-10">{h.name}</span>
                </a>
              ))}
            </div>

            {/* 4. Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 active:scale-95 transition-all duration-200 focus:outline-none"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
                  }`}
                ></span>
                <span 
                  className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 5. Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* 6. Mobile Menu Drawer */}
      <div 
        className={`lg:hidden fixed top-0 right-0 z-50 w-[85%] max-w-sm h-full bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="relative p-5 flex items-center justify-between border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                A
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-800">NPRCET ACM Menu</h3>
                <p className="text-xs text-gray-500">Explore our platform</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 active:scale-90 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scroll px-4 py-5 space-y-3">
            {/* Highlight Badges */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {highlights.map((h, i) => (
                <a
                  key={i}
                  href={h.href}
                  target={h.target || '_self'}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-2xl text-xs font-bold text-white shadow-lg active:scale-95 transition-all bg-gradient-to-br ${h.color} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 shimmer-effect"></div>
                  <span className="relative z-10 mb-1">{h.icon}</span>
                  <span className="relative z-10">{h.name}</span>
                </a>
              ))}
            </div>

            {/* Navigation Items */}
            {navGroups.map((group, index) => (
              group.type === 'link' ? (
                <a
                  key={index}
                  href={group.href}
                  onClick={() => {
                    setActiveLink(group.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-semibold transition-all active:scale-95 ${
                    activeLink === group.href
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  <span className={`${activeLink === group.href ? 'text-white' : 'text-gray-400'}`}>
                    {group.icon}
                  </span>
                  {group.name}
                </a>
              ) : (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setActiveMobileDropdown(activeMobileDropdown === index ? null : index)}
                    className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-gray-400">{group.icon}</span>
                      {group.name}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-all duration-300 ${
                        activeMobileDropdown === index 
                          ? 'rotate-180 text-blue-600' 
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeMobileDropdown === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-3 pt-1 space-y-1 bg-gray-50">
                      {group.items.map((item, subIndex) => (
                        <a
                          key={subIndex}
                          href={item.href}
                          target={item.target || '_self'}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2.5 px-3 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-white transition-all active:scale-95"
                        >
                          <div className="font-medium mb-0.5">{item.name}</div>
                          <div className="text-xs text-gray-400">{item.description}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
          
          {/* Footer */}
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
