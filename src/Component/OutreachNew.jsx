import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronRight,
  Filter,
  Search,
  Code,
  Handshake,
  BookOpen,
  Monitor,
  Cpu,
  Database,
  Laptop,
  GraduationCap,
  Globe,
  Award,
  Zap,
  Brain,
  Wifi,
} from "lucide-react";
import outreach1 from '../assets/Outreach/outreach1.jpg'
import outreach2 from '../assets/Outreach/aashiqoutreach2.jpg'
import outreach3 from '../assets/Outreach/broucher.jpg'




// Static outreach activities
const outreachData = [
{
  id: 1,
  title: "NPRCET ACM Outreach Program",
  description: "Bridging the gap between academia and community by empowering students with tech skills and career guidance. The NPRCET ACM Outreach Program focuses on nurturing young minds through hands-on coding sessions, technology awareness workshops, career counseling, and collaborative projects. It helps students make informed career choices, discover emerging technologies, and gain practical experience to succeed in a fast-evolving tech landscape.",
  date: null,
  location: "NPR College of Engineering and Technology, Natham, Dindigul",
  status: "ongoing",
  image_url: outreach3,
  heading1: "Key Outreach Segments",
  description1: "School outreach, intra-college activities, and inter-college collaborations to develop tech skills and career awareness.",
  heading2: "Career Paths after 12th",
  description2: "Medical, Engineering, Tech & AI Careers, Government Jobs, and other fields like CA, Law, Design to guide students in career decisions.",
  heading3: "Program Impact",
  description3: "Enhances problem-solving skills, computational thinking, and provides exposure to emerging tech fields for sustainable career growth."
  },
  {
    id: 2,
    title: "Digital Library & Career Guidance",
    description:
      "Empowering students after 12th with access to e-books, entrance exam updates, and expert career advice for higher studies.",
    date: "2025-08-10",
    location: "NPR Group of Institutions – Online & Campus",
    status: "ongoing",
    image_url: outreach1,
    heading1: "Library Access",
    description1:
      "Comprehensive digital library with e-books, journals, research papers, and study materials to support higher education and entrance exam preparation.",
    heading2: "Career Guidance",
    description2:
      "Expert sessions and mentorship programs offering guidance for competitive exams, higher studies, and career opportunities after 12th standard.",
    heading3: "Student Benefits",
    description3:
      "24/7 online access to resources, QR code-based quick entry, updates on scholarships, and personalized counseling to shape students’ academic futures. Explore: https://xmind.ai/embed/YPMwfeJN",
    // external_link: "https://xmind.ai/embed/YPMwfeJN",
  },
  {
    id: 3,
    title: "International Collaboration - ACM Student Chapter",
    description:
      "Strengthening ACM communities through global academic collaboration. NPRCET ACM Student Chapter connected with BITS Pilani Dubai Campus.",
    date: "2025-04-04",
    location: "BITS Pilani, Dubai Campus",
    status: "completed",
    image_url: outreach2,
    heading1: "Representation",
    description1:
      "Mr. S. Aashiq Rasool (CSE II Year) represented NPRCET ACM Student Chapter in an international academic exchange at BITS Pilani Dubai Campus.",
    heading2: "Objectives",
    description2:
      "To explore collaboration opportunities, strengthen ACM student communities, and exchange knowledge on global technology trends.",
    heading3: "Impact",
    description3:
      "Enhanced visibility of NPRCET ACM Student Chapter, future joint events planned, and strong academic ties established with international institutions.",
  },
];


function OutreachNew() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOutreach, setSelectedOutreach] = useState(null);

  // Filtering
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

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 shadow-sm";
      case "ongoing":
        return "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 shadow-sm";
      case "completed":
        return "bg-gradient-to-r from-purple-50 to-violet-50 text-purple-700 border border-purple-200 shadow-sm";
      default:
        return "bg-gradient-to-r from-gray-50 to-slate-50 text-gray-700 border border-gray-200 shadow-sm";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      case "ongoing":
        return <Zap className="h-4 w-4" />;
      case "completed":
        return <Award className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getActivityIcon = (title) => {
    const titleLower = title?.toLowerCase() || "";
    if (titleLower.includes("code") || titleLower.includes("programming"))
      return <Code className="h-6 w-6" />;
    if (titleLower.includes("digital") || titleLower.includes("computer"))
      return <Monitor className="h-6 w-6" />;
    if (
      titleLower.includes("ai") ||
      titleLower.includes("machine learning") ||
      titleLower.includes("artificial")
    )
      return <Brain className="h-6 w-6" />;
    if (titleLower.includes("database") || titleLower.includes("data"))
      return <Database className="h-6 w-6" />;
    if (titleLower.includes("network") || titleLower.includes("internet"))
      return <Wifi className="h-6 w-6" />;
    if (titleLower.includes("tech") || titleLower.includes("technology"))
      return <Cpu className="h-6 w-6" />;
    return <Laptop className="h-6 w-6" />;
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-white/20 rounded-lg rotate-45 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-8 h-8 border border-white/20 animate-spin"
            style={{ animationDelay: "2s", animationDuration: "8s" }}
          ></div>
          <Code
            className="absolute top-32 right-1/4 h-8 w-8 text-white/20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <Monitor
            className="absolute bottom-32 right-16 h-6 w-6 text-white/20 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Code className="h-16 w-16 text-white animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              ACM OUTREACH ACTIVITIES
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
              Bridging the digital divide through computing education and
              technology awareness initiatives
            </p>
          </div>
        </div>

 
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tech initiatives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-blue-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Filter className="h-5 w-5 text-blue-600" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border-2 border-blue-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[160px] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-blue-700">
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">
                Showing {filteredData.length} of {outreachData.length} tech initiatives
              </span>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md mx-auto border border-blue-100">
              <div className="text-blue-300 mb-6">
                <Search className="h-20 w-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                No Tech Initiatives Found
              </h3>
              <p className="text-gray-500 mb-6">
                {searchTerm || selectedStatus !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "No outreach activities match your criteria."}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-colors mr-2"
                >
                  Clear Search
                </button>
              )}
              {selectedStatus !== "all" && (
                <button
                  onClick={() => setSelectedStatus("all")}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-2xl hover:bg-indigo-700 transition-colors"
                >
                  Clear Filter
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredData.map((activity, index) => (
              <div
                key={activity.id}
                className="group bg-white rounded-3xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
                onClick={() => setSelectedOutreach(activity)}
              >
                {/* Image Section */}
                <div className="relative  bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 overflow-hidden">
                  {activity.image_url ? (
                    <img
                      src={activity.image_url}
                      alt={activity.title || "Tech Outreach Activity"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}

                  {/* Tech Fallback */}
                  <div
                    className={`w-full h-full flex items-center justify-center text-white ${
                      activity.image_url ? "hidden" : "flex"
                    }`}
                  >
                    <div className="text-center">
                      {getActivityIcon(activity.title)}
                      <p className="text-sm font-medium mt-2">Tech Initiative</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${getStatusColor(
                      activity.status
                    )}`}
                  >
                    {getStatusIcon(activity.status)}
                    <span className="capitalize">
                      {activity.status || "upcoming"}
                    </span>
                  </div>

                  {/* Activity Type Icon */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-blue-600 shadow-lg">
                    {getActivityIcon(activity.title)}
                  </div>

                  {/* Tech Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {activity.title || "Untitled Initiative"}
                  </h3>
                  <p className="text-gray-600 mb-4  leading-relaxed text-sm">
                    {activity.description || "No description available"}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-3 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{formatDate(activity.date)}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-3 text-indigo-500 flex-shrink-0" />
                      <span className="line-clamp-1 font-medium">{activity.location || "Location TBD"}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-2xl hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                    <Code className="h-4 w-4" />
                    <span >Read More </span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>


                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stats Section */}
        {outreachData.length > 0 && (
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center mb-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">{outreachData.length}</div>
                <div className="text-blue-100 flex items-center justify-center gap-2">
                  <Laptop className="h-4 w-4" />
                  Tech Initiatives
                </div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">
                  {outreachData.filter((e) => e.status === "upcoming").length}
                </div>
                <div className="text-indigo-100 flex items-center justify-center gap-2">
                  <Clock className="h-4 w-4" />
                  Upcoming
                </div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">
                  {outreachData.filter((e) => e.status === "ongoing").length}
                </div>
                <div className="text-purple-100 flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4" />
                  Active
                </div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold mb-2">
                  {filteredData.length}
                </div>
                <div className="text-cyan-100 flex items-center justify-center gap-2">
                  <Award className="h-4 w-4" />
                  Displayed
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Detail Modal */}
      {selectedOutreach && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-blue-200 animate-modal-appear">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  {getActivityIcon(selectedOutreach.title)}
                </div>
                <h2 className="text-2xl font-bold">
                  {selectedOutreach.title || "Tech Initiative Details"}
                </h2>
              </div>
              <button
                onClick={() => setSelectedOutreach(null)}
                className="text-white hover:text-blue-200 text-3xl font-light bg-white/20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-all"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              {/* Image */}
              {selectedOutreach.image_url && (
                <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={selectedOutreach.image_url}
                    alt={selectedOutreach.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>
              )}

              {/* Basic Info */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div
                  className={`px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-3 ${getStatusColor(
                    selectedOutreach.status
                  )}`}
                >
                  {getStatusIcon(selectedOutreach.status)}
                  <span className="capitalize">
                    {selectedOutreach.status || "upcoming"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-700 bg-blue-50 rounded-xl p-4">
                  <Calendar className="h-6 w-6 mr-4 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Date</div>
                    <span className="font-semibold text-lg">
                      {formatDate(selectedOutreach.date)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 bg-indigo-50 rounded-xl p-4">
                  <MapPin className="h-6 w-6 mr-4 text-indigo-600" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <span className="font-semibold text-lg">
                      {selectedOutreach.location || "Location TBD"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  About This Tech Initiative
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedOutreach.description || "No description available"}
                </p>
              </div>

              {/* Dynamic Sections */}
              <div className="space-y-8">
                {[1, 2, 3].map((num) => {
                  const heading = selectedOutreach[`heading${num}`];
                  const description = selectedOutreach[`description${num}`];

                  if (!heading || !description) return null;

                  return (
                    <div
                      key={num}
                      className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-2 flex-shrink-0 mt-1">
                          <Code className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            {heading}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedOutreach(null)}
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                >
                  <Code className="h-5 w-5" />
                <a href="https://xmind.ai/embed/YPMwfeJN" target="blank">Explore Now</a>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-appear {
          animation: modal-appear 0.3s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default OutreachNew;
