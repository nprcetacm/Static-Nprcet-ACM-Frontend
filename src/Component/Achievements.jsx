import React, { useState, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight, X, ArrowRight, Share2, Award } from "lucide-react";

// --- ASSETS IMPORT ---
import post1 from '../assets/Congratulations/featuredChap.jpeg'
import post2 from '../assets/Congratulations/ProfYannis.jpeg'
import proud1 from '../assets/Congratulations/Proud_1.jpeg'
import proud2 from '../assets/Congratulations/Proud_2.jpeg'
import proud3 from '../assets/Congratulations/Proud_3.jpeg'
import proud4 from '../assets/Congratulations/Proud_4.jpeg'
import AppreciationPoster from '../assets/Congratulations/college_appreciation.jpeg'

// --- DATA ---
const eventsData = [
    {
        id: 1,
        title: "NPRCET ACM Student Chapter has been featured on the ACM India",
        description: "A proud moment for NPR College of Engineering and Technology! Delighted to share that the NPRCET ACM Student Chapter has been featured on the ACM India Student Chapter Website.",
        fullDescription: "A proud moment for NPR College of Engineering and Technology! Delighted to share that the NPRCET ACM Student Chapter has been featured on the ACM India Student Chapter Website for reporting the highest number of activities. This recognition by the ACM India Council Team reflects the dedication, teamwork, and enthusiasm of our student members and faculty coordinators. As the Faculty Sponsor, it is truly rewarding to witness our students actively engaging in professional, technical, and community-focused initiatives. Congratulations to the entire NPRCET ACM Student Chapter team. Let us continue to inspire, innovate, and excel.",
        images: [post1],
        type: "simple",
        category: "Achievement",
        // date: "Feb 2026"
    },
    {
        id: 2,
        title: "Appreciation from Prof. Yannis Loannidis - ACM President",
        description: "Congratulations to the NPRCET ACM Student Chapter for your unique achievements and for serving as an exemplar for others to follow.",
        fullDescription: "Appreciation: Dear members of NPRCET ACM Student Chapter, Thank you very much for your message. What you have achieved so far and your future plans are really unique. Sincere congratulations! I'm glad you reached out and informed us about these developments – they speak loudly and give us valuable feedback about the great things that ACM can help young community members achieve and may serve as exemplars for others to follow.",
        images: [post2],
        type: "simple",
        category: "Appreciation",
        // date: "Jan 2026"
    },
    {
        id: 3,
        title: "Featured on ACM India Student Chapter Website",
        description: "The NPRCET ACM Student Chapter has been featured on the official ACM India Student Chapter Website for reporting one of the highest numbers of student chapter activities.",
        fullDescription: "This national-level recognition by the ACM India Council reflects the dedication, teamwork, and enthusiasm of our student members and faculty coordinators. The chapter's consistent efforts in organizing technical events, industry expert talks, outreach programmes, and community-driven initiatives have earned this prestigious visibility on the ACM India platform.",
        images: [proud1, proud2, proud3, proud4],
        type: "gallery",
        category: "Recognition",
        // date: "Dec 2025",
        sections: [
            {
                heading: "Recognition Highlights",
                description: "The NPRCET ACM Student Chapter has been officially recognized and featured on the ACM India Student Chapter Website for achieving one of the highest numbers of reported activities nationwide. This prestigious recognition showcases our commitment to excellence in computing education and community engagement."
            },
            {
                heading: "Key Achievements",
                description: "Our chapter has successfully organized numerous technical workshops, expert talks, coding competitions, and community outreach programs. These initiatives have not only enhanced technical skills among students but also fostered a culture of innovation and collaborative learning within our institution and beyond."
            },
            {
                heading: "Impact & Future Goals",
                description: "This recognition motivates us to continue our journey of excellence. We remain committed to organizing more impactful events, strengthening industry-academia connections, and providing students with opportunities to engage with cutting-edge technologies and renowned experts in the field of computing."
            }
        ]
    },
    {
        id: 4,
        title: "Institutional Appreciation & Proud Moment",
        description: "NPRCET ACM Student Chapter received institutional appreciation for being featured on the ACM India Student Chapter Website for reporting the highest number of activities.",
        fullDescription: "Appreciation & Proud Moment 🌟\n\nA moment of great pride for NPR College of Engineering and Technology and the NPRCET ACM Student Chapter. The college management proudly released an official appreciation poster congratulating the NPRCET ACM Student Chapter for being featured on the ACM India Student Chapter Website. This recognition was awarded for reporting the highest number of student chapter activities, highlighting the chapter’s consistency, leadership, and commitment to professional excellence.\n\nThe appreciation poster, designed and published by the institution, reflects the strong institutional support and encouragement provided to student-led professional bodies like ACM. Such recognition reinforces the college’s commitment to promoting technical excellence, student engagement, and national-level visibility through active participation in ACM initiatives.\n\nThis proud moment stands as a testament to the collective efforts of our students, faculty coordinators, and management in building a vibrant and impactful ACM Student Chapter that contributes meaningfully to the larger student community.",
        images: [AppreciationPoster],
        type: "simple",
        category: "Institutional",
        // date: "Feb 2026"
    }
];

function Achievements() {
    const [activeItem, setActiveItem] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeItem || isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [activeItem, isFullscreen]);

    // --- HANDLERS ---
    const openSpotlight = (item) => {
        setActiveItem(item);
        setCurrentImageIndex(0);
    };

    const closeSpotlight = () => {
        setActiveItem(null);
        setCurrentImageIndex(0);
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        if (!activeItem) return;
        setCurrentImageIndex((prev) => (prev + 1) % activeItem.images.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        if (!activeItem) return;
        setCurrentImageIndex((prev) => (prev - 1 + activeItem.images.length) % activeItem.images.length);
    };

    const toggleFullscreen = (e) => {
        e?.stopPropagation();
        setIsFullscreen(!isFullscreen);
    };

    // --- SUB-COMPONENTS ---

    const HeroSection = () => (
        <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 overflow-hidden bg-white">
            {/* Soft Gradient Blobs based on palette */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] bg-yellow-100 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-purple-100 rounded-full blur-[80px] opacity-50"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#008cff] text-sm font-semibold mb-6 shadow-sm">
                    <Award size={16} />
                    <span>Celebrating Excellence</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-blue-600">Proud Moments</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                    Highlighting the milestones, international recognitions, and achievements that define the legacy of the NPRCET ACM Student Chapter.
                </p>
            </div>
        </div>
    );

    const Card = ({ item }) => {
        const isAppreciation = item.title.toLowerCase().includes("appreciation");
        const badgeBg = isAppreciation ? "bg-yellow-100" : "bg-blue-50";
        const badgeText = isAppreciation ? "text-yellow-700" : "text-[#008cff]";
        const borderHover = isAppreciation ? "hover:border-yellow-400" : "hover:border-[#008cff]";

        return (
            <div 
                onClick={() => openSpotlight(item)}
                className={`group relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 ${borderHover} ring-0 hover:ring-2 ring-transparent ring-offset-2`}
            >
                <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img 
                        src={item.images[0]} 
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md bg-white/90 text-gray-800 shadow-sm`}>
                            {item.category}
                        </span>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-400 font-medium">
                        <Calendar size={14} />
                        <span>{item.date || "Recent"}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-[#008cff] transition-colors">
                        {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">
                            Read Story
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${badgeBg} ${badgeText} group-hover:scale-110 transition-transform`}>
                            <ArrowRight size={18} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const Modal = () => {
        if (!activeItem) return null;
        const activeImage = activeItem.images[currentImageIndex];
        const hasMultiple = activeItem.images.length > 1;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                
                {/* Scrollbar CSS */}
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f1f5f9;
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #cbd5e1;
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #94a3b8;
                    }
                    /* Firefox */
                    .custom-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: #cbd5e1 #f1f5f9;
                    }
                `}</style>

                {/* Light Backdrop */}
                <div 
                    className="absolute inset-0 bg-white/80 backdrop-blur-md transition-opacity"
                    onClick={closeSpotlight}
                />

                {/* Modal Window - Fixed Height on Desktop to ensure scroll logic works */}
                <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row animate-in fade-in zoom-in duration-300 ring-1 ring-gray-200">
                    
                    {/* Close Button Mobile */}
                    <button 
                        onClick={closeSpotlight}
                        className="lg:hidden absolute top-4 right-4 z-50 bg-white text-gray-800 p-2 rounded-full shadow-lg"
                    >
                        <X size={20} />
                    </button>

                    {/* Left: Image (Stays Fixed/Fit) */}
                    <div className="lg:w-3/5 relative bg-gray-50 flex flex-col justify-center items-center group overflow-hidden h-64 lg:h-full shrink-0">
                        <div className="relative w-full h-full cursor-zoom-in" onClick={toggleFullscreen}>
                            <img 
                                src={activeImage} 
                                alt="Spotlight"
                                className="w-full h-full object-contain bg-gray-100"
                            />
                        </div>

                        {/* Navigation */}
                        {hasMultiple && (
                            <>
                                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110">
                                    <ChevronRight size={24} />
                                </button>
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-md">
                                    {currentImageIndex + 1} / {activeItem.images.length}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right: Content (Scrollable) */}
                    <div className="lg:w-2/5 flex flex-col h-full bg-white relative">
                        {/* 1. Sticky Header */}
                        <div className="p-8 pb-4 border-b border-gray-100 flex justify-between items-start bg-white shrink-0 z-10">
                             <div>
                                <span className="inline-block px-3 py-1 bg-[#008cff]/10 text-[#008cff] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                                    {activeItem.category}
                                </span>
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                    {activeItem.title}
                                </h2>
                             </div>
                             <button 
                                onClick={closeSpotlight}
                                className="hidden lg:block p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* 2. Scrollable Body */}
                        <div className="flex-1 overflow-y-auto p-8 pt-6 custom-scrollbar">
                            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                                {activeItem.fullDescription || activeItem.description}
                            </p>

                            {activeItem.sections && (
                                <div className="mt-8 space-y-6">
                                    {activeItem.sections.map((section, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                                                {section.heading}
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {section.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {/* Extra padding at bottom to ensure last element is readable */}
                            <div className="h-8"></div>
                        </div>

                        {/* 3. Sticky Footer (Thumbnails or Share) */}
                        <div className="shrink-0 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm p-4 lg:p-6 z-10">
                            {hasMultiple ? (
                                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                                    {activeItem.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                                                currentImageIndex === idx 
                                                ? 'border-[#008cff] ring-2 ring-[#008cff]/20' 
                                                : 'border-transparent opacity-70 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={img} className="w-full h-full object-cover" alt="thumb" />
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <button className="w-full py-3 bg-[#008cff] text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                    <Share2 size={18} />
                                    Share Achievement
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const FullscreenView = () => {
        if (!isFullscreen || !activeItem) return null;
        return (
            <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
                <button 
                    onClick={toggleFullscreen}
                    className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-gray-900 p-3 rounded-full z-50 transition-colors shadow-md"
                >
                    <X size={24} />
                </button>
                
                <img 
                    src={activeItem.images[currentImageIndex]} 
                    alt="Fullscreen"
                    className="max-w-screen max-h-screen object-contain"
                />

                {activeItem.images.length > 1 && (
                    <>
                         <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-4 rounded-full shadow-xl transition-colors">
                            <ChevronLeft size={32} />
                        </button>
                        <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-4 rounded-full shadow-xl transition-colors">
                            <ChevronRight size={32} />
                        </button>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900">
            <Modal />
            <FullscreenView />
            
            <HeroSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
                {eventsData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventsData.map((event) => (
                            <Card key={event.id} item={event} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
                        <Calendar className="w-16 h-16 text-gray-300 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-500">No events found</h3>
                    </div>
                )}
            </div>
            
            
        </div>
    );
}

export default Achievements;