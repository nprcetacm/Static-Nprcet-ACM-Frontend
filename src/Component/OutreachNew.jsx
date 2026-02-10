import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  Filter,
  Search,
  Code,
  Monitor,
  Cpu,
  Database,
  Laptop,
  Globe,
  Award,
  Zap,
  Brain,
  Wifi,
  X,
  Image as ImageIcon,
} from "lucide-react";

// --- ASSETS ---
import outreach1 from '../assets/Outreach/outreach1.jpg'
import outreach2 from '../assets/Outreach/aashiqoutreach2.jpg'
import outreach3 from '../assets/Outreach/broucher.jpg'
import afsal from '../assets/Outreach/AfsalPost.jpg'
import sethu from '../assets/Outreach/SethupathiSchool.jpg'
import corp from '../assets/Outreach/CorporationSchool.jpg'
import tshirtSupport from '../assets/Outreach/tshirt.jpg'
import tshirtSupport2 from '../assets/Outreach/tshirt1.jpeg'
import tshirtSupport3 from '../assets/Outreach/tshirt2.JPG'
import tshirtSupport4 from '../assets/Outreach/tshirt_full.jpg'

// --- DATA ---
const outreachData = [
  {
    id: 1,
    title: "Institutional Support through ACM-Branded T-Shirts & Outreach",
    description: "Strengthening student identity and engagement through institutional support by distributing ACM-branded T-shirts and learning materials to active ACM members.",
    date: "2026-01-31",
    location: "NPR College of Engineering and Technology, Dindigul",
    status: "completed",
    images: [tshirtSupport3, tshirtSupport, tshirtSupport2, tshirtSupport4],
    heading1: "About This Institutional Initiative",
    description1: "The NPRCET ACM Student Chapter received strong institutional support from the college management as part of its student engagement and outreach initiatives. To recognize active participation and encourage greater involvement in professional activities, ACM-branded T-shirts and learning materials were distributed to student members. This initiative aimed to strengthen the identity of the ACM Student Chapter, foster a sense of belonging among members, and enhance the visibility of ACM activities across the campus.",
    heading2: "Event",
    description2: "Distribution of official ACM-branded T-shirts and outreach materials to active student members in the presence of faculty coordinators and institutional representatives, highlighting the management's encouragement of student-led professional initiatives.",
    heading3: "Impact",
    description3: "This institutional support initiative significantly boosted student motivation, chapter identity, and participation in ACM activities. It encouraged peer engagement, increased awareness of ACM among non-members, and strengthened the sustainability of the student chapter by reinforcing institutional backing and student pride."
  },
  {
    id: 2,
    title: "School Outreach Programme 2025 at Sethupathi Higher Secondary School, Madurai",
    description: "💡 The NPRCET ACM Student Chapter organized the School Outreach Programme 2025 at Sethupathi Higher Secondary School, Madurai, to empower students with knowledge of coding, artificial intelligence, and domain-based learning.",
    date: "2025-10-15",
    location: "Sethupathi Higher Secondary School, Madurai",
    status: "completed",
    images: [sethu],
    heading1: "Event",
    description1: "Interactive sessions on Programming Fundamentals, Artificial Intelligence, Domain-Based Learning, LinkedIn for Career Growth, Free Online Resources, and Foreign Language Awareness.",
    heading2: "Organizing Team",
    description2: "Guided by Mr. V. Virumapandi, Career Development Advisor (Faculty Sponsor), and conducted by Aswanthwin Fried S (President), Rajamannar NG (Treasurer), and Afzal Khan M (Membership Chair).",
    heading3: "Impact",
    description3: "The outreach inspired young minds to explore technology-driven careers, promoted computational thinking, and strengthened the spirit of learning and innovation."
  },
  {
    id: 3,
    title: "School Outreach Programme 2025 at Corporation Higher Secondary School",
    description: "The NPRCET ACM Student Chapter conducted the School Outreach Programme 2025 at Corporation Higher Secondary School, Sundararajapuram, to introduce students to the fundamentals of programming and emerging technologies.",
    date: "2025-10-15",
    location: "Corporation Higher Secondary School, Madurai",
    status: "completed",
    images: [corp],
    heading1: "Event",
    description1: "Hands-on sessions covering Programming Basics, Artificial Intelligence, Domain-Based Learning, LinkedIn for Career Growth, and Free Learning Platforms.",
    heading2: "Organizing Team",
    description2: "Guided by Mr. V. Virumapandi, Career Development Advisor (Faculty Sponsor), and executed by Aswanthwin Fried S (President), Rajamannar NG (Treasurer), and Afzal Khan M (Membership Chair).",
    heading3: "Impact",
    description3: "The outreach inspired young minds to explore technology-driven careers, promoted computational thinking, and strengthened the spirit of learning and innovation."
  },
  {
    id: 4,
    title: "Achievement – Afzal Khan M",
    description: "🎉 Congratulations, Mr. Afzal Khan M! 🎉 We are proud to announce that Afzal Khan M, a final-year CSE student and active NPRCET ACM member, won First Place at the 'Open Mic' event during EvonSys's 10th Anniversary Celebration.",
    date: "2025-09-09",
    location: "EvonSys, Chennai",
    status: "completed",
    images: [afsal],
    heading1: "Event",
    description1: "Won First Place at the 'Open Mic' event during EvonSys's 10th Anniversary Celebration.",
    heading2: "Internship Excellence",
    description2: "Recognized for exceptional performance, confidence, and proactive contributions during his internship.",
    heading3: "Inspiration",
    description3: "His success motivates peers to embrace opportunities, showcase talents, and pursue excellence."
  },
  {
    id: 5,
    title: "NPRCET ACM Outreach Program",
    description: "Bridging the gap between academia and community by empowering students with tech skills and career guidance. The NPRCET ACM Outreach Program focuses on nurturing young minds through hands-on coding sessions.",
    date: null,
    location: "NPR College of Engineering and Technology, Dindigul",
    status: "ongoing",
    images: [outreach3],
    heading1: "Key Outreach Segments",
    description1: "School outreach, intra-college activities, and inter-college collaborations to develop tech skills and career awareness.",
    heading2: "Career Paths after 12th",
    description2: "Medical, Engineering, Tech & AI Careers, Government Jobs, and other fields like CA, Law, Design to guide students in career decisions.",
    heading3: "Program Impact",
    description3: "Enhances problem-solving skills, computational thinking, and provides exposure to emerging tech fields for sustainable career growth."
  },
  {
    id: 6,
    title: "Digital Library & Career Guidance",
    description: "Empowering students after 12th with access to e-books, entrance exam updates, and expert career advice for higher studies.",
    date: "2025-05-29",
    location: "NPR Group of Institutions",
    status: "ongoing",
    images: [outreach1],
    heading1: "Library Access",
    description1: "Comprehensive digital library with e-books, journals, research papers, and study materials to support higher education and entrance exam preparation.",
    heading2: "Career Guidance",
    description2: "Expert sessions and mentorship programs offering guidance for competitive exams, higher studies, and career opportunities after 12th standard.",
    heading3: "Student Benefits",
    description3: "24/7 online access to resources, QR code-based quick entry, updates on scholarships, and personalized counseling to shape students' academic futures.",
  },
  {
    id: 7,
    title: "International Collaboration - ACM Student Chapter",
    description: "Strengthening ACM communities through global academic collaboration. NPRCET ACM Student Chapter connected with BITS Pilani Dubai Campus.",
    date: "2025-04-04",
    location: "BITS Pilani, Dubai Campus",
    status: "completed",
    images: [outreach2],
    heading1: "Representation",
    description1: "Mr. S. Aashiq Rasool (CSE II Year) represented NPRCET ACM Student Chapter in an international academic exchange at BITS Pilani Dubai Campus.",
    heading2: "Objectives",
    description2: "To explore collaboration opportunities, strengthen ACM student communities, and exchange knowledge on global technology trends.",
    heading3: "Impact",
    description3: "Enhanced visibility of NPRCET ACM Student Chapter, future joint events planned, and strong academic ties established with international institutions.",
  }
];

function OutreachNew() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOutreach, setSelectedOutreach] = useState(null);
  const [detailCurrentImageIndex, setDetailCurrentImageIndex] = useState(0);

  // Filtering Logic
  useEffect(() => {
    let filtered = outreachData;
    if (selectedStatus !== "all") {
      filtered = filtered.filter((item) => item.status === selectedStatus);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [selectedStatus, searchTerm]);

  // Handlers
  const handlePrevDetailImage = (e) => {
    e?.stopPropagation();
    setDetailCurrentImageIndex(prev => prev === 0 ? selectedOutreach.images.length - 1 : prev - 1);
  };

  const handleNextDetailImage = (e) => {
    e?.stopPropagation();
    setDetailCurrentImageIndex(prev => prev === selectedOutreach.images.length - 1 ? 0 : prev + 1);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  // UI Helpers
  const getStatusStyle = (status) => {
    switch (status) {
      case "upcoming": return { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200", icon: Clock };
      case "ongoing": return { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", icon: Zap };
      case "completed": return { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200", icon: Award };
      default: return { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200", icon: Clock };
    }
  };

  const getActivityIcon = (title) => {
    const t = title?.toLowerCase() || "";
    if (t.includes("code") || t.includes("program")) return <Code className="w-5 h-5" />;
    if (t.includes("ai") || t.includes("intelligence")) return <Brain className="w-5 h-5" />;
    if (t.includes("network")) return <Wifi className="w-5 h-5" />;
    if (t.includes("school")) return <Globe className="w-5 h-5" />;
    return <Laptop className="w-5 h-5" />;
  };

  // --- SUB-COMPONENTS ---

  // 1. Hero Section (Mobile Optimized)
  const HeroSection = () => (
    <div className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-white text-center">
      {/* Soft Background Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full blur-[80px] sm:blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-64 sm:w-96 h-64 sm:h-96 bg-purple-100 rounded-full blur-[80px] sm:blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#008cff] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Community & Impact</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight px-2">
          Outreach <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008cff] to-blue-600">Activities</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
          Bridging the digital divide through computing education, school outreach, and community engagement initiatives.
        </p>
      </div>
    </div>
  );

  // 2. Filter Bar (Mobile Optimized)
  const FilterBar = () => (
    <div className="sticky top-2 sm:top-4 z-30 max-w-5xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12">
      <div className="bg-white/90 sm:bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-2 sm:p-3 flex flex-col gap-2 sm:gap-3">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 hover:bg-white border-transparent focus:bg-white border-2 focus:border-[#008cff] rounded-lg sm:rounded-xl outline-none transition-all placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <Filter className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-8 sm:pr-10 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 hover:bg-white border-transparent focus:bg-white border-2 focus:border-[#008cff] rounded-lg sm:rounded-xl outline-none appearance-none cursor-pointer text-gray-700"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            <ChevronRight className="rotate-90 h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </div>
  );

  // 3. Activity Card (Mobile Optimized)
  const ActivityCard = ({ activity }) => {
    const statusStyle = getStatusStyle(activity.status);
    const StatusIcon = statusStyle.icon;

    return (
      <div
        onClick={() => {
          setSelectedOutreach(activity);
          setDetailCurrentImageIndex(0);
        }}
        className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
      >
        {/* Image Section */}
        <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
          <img
            src={activity.images[0]}
            alt={activity.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Top Badges */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <div className="bg-white/90 backdrop-blur-md p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-[#008cff] shadow-sm">
              {getActivityIcon(activity.title)}
            </div>
          </div>
          
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide backdrop-blur-md shadow-sm flex items-center gap-1 sm:gap-1.5 bg-white/95 ${statusStyle.text}`}>
              <StatusIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">{activity.status}</span>
            </span>
          </div>

          {/* Image Counter */}
          {activity.images.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/50 text-white px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
              <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {activity.images.length}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 text-xs sm:text-sm text-gray-500 font-medium overflow-hidden">
            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#008cff] flex-shrink-0" />
            <span className="truncate">{formatDate(activity.date)}</span>
            <span className="hidden xs:inline">•</span>
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#008cff] flex-shrink-0 hidden xs:inline" />
            <span className="truncate hidden xs:inline">{activity.location?.split(',')[0]}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-[#008cff] transition-colors line-clamp-2">
            {activity.title}
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-6">
            {activity.description}
          </p>

          <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">
              View Details
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-[#008cff] flex items-center justify-center group-hover:bg-[#008cff] group-hover:text-white transition-all">
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 4. Detail Modal (Fully Mobile Optimized)
  const DetailModal = () => {
    if (!selectedOutreach) return null;
    const activeImage = selectedOutreach.images[detailCurrentImageIndex];
    const hasMultiple = selectedOutreach.images.length > 1;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Custom Scrollbar Styles */}
        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
          @media (min-width: 640px) {
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          }
        `}</style>

        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 sm:bg-white/80 backdrop-blur-md sm:backdrop-blur-xl transition-opacity"
          onClick={() => setSelectedOutreach(null)}
        />

        {/* Modal Container */}
        <div className="relative w-full h-full sm:h-[90vh] sm:max-w-6xl sm:rounded-3xl bg-white shadow-2xl border-0 sm:border sm:border-gray-100 overflow-hidden flex flex-col">
          {/* Mobile Header */}
          <div className="sm:hidden sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900 truncate flex-1 pr-2">
              {selectedOutreach.title}
            </h2>
            <button 
              onClick={() => setSelectedOutreach(null)}
              className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full text-gray-600 active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Wrapper */}
          <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
            {/* LEFT: Image Section */}
            <div className="w-full sm:w-1/2 relative bg-gray-50 flex items-center justify-center h-56 sm:h-full shrink-0 group">
              <img 
                src={activeImage} 
                alt="Detail" 
                className="w-full h-full object-contain p-2 sm:p-4"
              />
              
              {hasMultiple && (
                <>
                  {/* Mobile Touch Navigation Areas */}
                  <button 
                    onClick={handlePrevDetailImage} 
                    className="sm:hidden absolute left-0 top-0 bottom-0 w-1/4 z-10"
                    aria-label="Previous"
                  />
                  <button 
                    onClick={handleNextDetailImage} 
                    className="sm:hidden absolute right-0 top-0 bottom-0 w-1/4 z-10"
                    aria-label="Next"
                  />
                  
                  {/* Desktop Arrow Buttons */}
                  <button 
                    onClick={handlePrevDetailImage} 
                    className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button 
                    onClick={handleNextDetailImage} 
                    className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-2.5 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-mono backdrop-blur-sm">
                    {detailCurrentImageIndex + 1} / {selectedOutreach.images.length}
                  </div>
                </>
              )}
            </div>

            {/* RIGHT: Content Section */}
            <div className="w-full sm:w-1/2 flex flex-col bg-white relative overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden sm:block p-6 sm:p-8 pb-4 border-b border-gray-100 shrink-0">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${getStatusStyle(selectedOutreach.status).bg} ${getStatusStyle(selectedOutreach.status).text}`}>
                        {selectedOutreach.status}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> 
                        {formatDate(selectedOutreach.date)}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {selectedOutreach.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelectedOutreach(null)}
                    className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-900 transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-4 py-4 sm:p-8 custom-scrollbar">
                {/* Mobile Status Badge */}
                <div className="sm:hidden flex items-center gap-2 mb-4 flex-wrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase ${getStatusStyle(selectedOutreach.status).bg} ${getStatusStyle(selectedOutreach.status).text}`}>
                    {selectedOutreach.status}
                  </span>
                  <span className="text-gray-500 text-xs flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> 
                    {formatDate(selectedOutreach.date)}
                  </span>
                </div>

                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {selectedOutreach.description}
                  </p>

                  {/* Location Info */}
                  <div className="mt-4 flex items-start gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#008cff]" />
                    <span className="leading-relaxed">{selectedOutreach.location}</span>
                  </div>

                  {/* Detailed Sections */}
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    {[1, 2, 3].map(num => {
                      const head = selectedOutreach[`heading${num}`];
                      const desc = selectedOutreach[`description${num}`];
                      if (!head) return null;
                      return (
                        <div key={num} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-100">
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008cff] flex-shrink-0"></span>
                            <span>{head}</span>
                          </h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Footer with Thumbnails */}
              {hasMultiple && (
                <div className="p-3 sm:p-4 border-t border-gray-100 bg-gray-50/50 shrink-0">
                  <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    {selectedOutreach.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setDetailCurrentImageIndex(idx)}
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                          detailCurrentImageIndex === idx ? 'border-[#008cff] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="thumb" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- MAIN RENDER ---
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <HeroSection />
      <FilterBar />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pb-16 sm:pb-24">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-24 bg-white rounded-2xl sm:rounded-3xl border border-dashed border-gray-300 mx-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Search className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-500 mb-2">No initiatives found</h3>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedStatus("all") }}
              className="mt-4 text-[#008cff] font-medium hover:underline text-sm sm:text-base active:scale-95 transition-transform"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredData.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        )}
      </div>

      <DetailModal />
    </div>
  );
}

export default OutreachNew;
