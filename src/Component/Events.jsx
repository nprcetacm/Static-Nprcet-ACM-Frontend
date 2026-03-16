import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Image,
  Video,
  Users,
  ChevronRight,
  Filter,
  Search,
  X,
} from "lucide-react";
import evt1 from "../assets/Events/NPRCET-ACM-pongal.jpg"
import evt2 from "../assets/Events/ieee-banner.jpg"
import evt3 from "../assets/Events/NPRCET-Inaug-Post.jpg"
import evt4 from "../assets/Events/peer_learning.jpg"
import evt5 from "../assets/Events/aashiq.jpg"
import evt6 from "../assets/Events/lunar2.jpg"
import evt7 from "../assets/Events/algoarena.jpg"
import evt8 from "../assets/Events/Industry_expert_talk.jpeg";
import evt9 from "../assets/Events/Mou_signing_ceremony_it.jpeg";
import { useNavigate } from "react-router-dom";

// Static array of event objects
const eventsData = [
  {
    id: 9,
    title: "MoU Signing Ceremony and Hands-on Training – Building SDG-Focused Interactive Data Visualization Dashboards using Grafana",
    description: "An informative MoU Signing Ceremony and hands-on training session organized by the Department of Information Technology in association with the NPRCET ACM Student Chapter. The session focused on building SDG-focused interactive data visualization dashboards using Grafana and provided students with practical knowledge on modern data visualization tools.\n\nSpeaker: Mr. S. Mohamed Arsath, Director of Operations, Tarcin Robotics, Madurai",
    date: "2026-03-02",
    time: "09:15 AM",
    location: "IT Laboratory – Block III",
    image_url: evt9,
  },
  {
    id: 1,
    title:
      "Industry Expert Talk – Cyber Security in Industrial Systems: Challenges and Solutions",
    description:
      "An insightful Industry Expert Talk organized by the NPRCET ACM Student Chapter focusing on cyber security challenges in industrial systems. The session covered real-world threats, industrial cyber risks, and modern security solutions, providing students with valuable industry exposure and practical knowledge.",
    date: "2026-01-31",
    time: "11:00 AM - 12:30 PM",
    location: "Srinivasa Ramanujam Hall",
    image_url: evt8,
  },
  {
    id: 2,
    title: "ALGO ARENA – The Ultimate Coding Battle",
    description:
      "An intellectually engaging competitive programming event hosted on HackerRank.",
    date: "2025-11-01",
    time: "07:00 PM - 08:00 PM",
    location: "HackerRank (Online)",
    image_url: evt7,
  },

  {
    id: 3,
    title: "Special Awareness Session on the Upcoming Total Lunar Eclipse",
    description:
      "Awareness Session on the Upcoming Total Lunar Eclipse with renowned astrophysicist Dr. Chrisphin Karthick from the Indian Institute of Astrophysics, Bengaluru!",
    date: "2025-09-06",
    time: "06:00 PM - 07:00 PM",
    location: "Google Meet (Online)",
    image_url: evt6,
  },
  {
    id: 4,
    title:
      "Participation in ACM India Summer School 2025 IoT and Next Generation Network June 16 to June 27, 2025 (12 Days)",
    description:
      "IoT and Next Generation Networks exploring future-ready technologies June 16 to June 27, 2025 (12 Days)",
    date: "2025-06-16",
    time: null,
    location: "Kalasalingam Academy of Research and Education (KARE)",
    image_url: evt5,
  },
  {
    id: 5,
    title:
      "Peer Learning session on Bridging Minds:Sustaining Knowledge Exchange",
    description:
      "Sustaining Knowledge Exchange fostering collaboration and shared growth",
    date: "2025-04-22",
    time: "10:00 AM - 12:30 PM",
    location: "Central Library",
    image_url: evt4,
  },
  {
    id: 6,
    title: "NPRCET ACM Student Chapter Inauguration Function",
    description:
      "Inauguration of the NPRCET ACM Student Chapter marking the beginning of a new journey in computing and innovation",
    date: "2025-02-03",
    time: "10:00 AM - 12:00 PM",
    location: "Thiruvalluvar Hall",
    image_url: evt3,
  },
  {
    id: 7,
    title: "Webinar on Enhance Your Research with IEEE",
    description:
      "An insightful webinar guiding students and researchers on leveraging IEEE resources to enhance the quality and impact of their research",
    date: "2025-01-22",
    time: "11:00 AM - 12:00 PM",
    location: "Bharathiyar Hall",
    image_url: evt2,
  },
  {
    id: 8,
    title: "NPRCET ACM Student Chapter Pongal Celebration",
    description:
      "NPRCET ACM Student Chapter joyfully celebrated Pongal with tradition, unity, and festive spirit",
    date: "2025-01-11",
    time: "10:00 AM - 03:00 PM",
    location: "NPRGI",
    image_url: evt1,
  },
];

function Events() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("calendar");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null); // Added state for Modal

  // Use the static events data
  const events = eventsData;

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBD";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    return timeString;
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  // Get unique years from events
  const availableYears = [
    ...new Set(
      events
        .filter((event) => event.date)
        .map((event) => new Date(event.date).getFullYear())
    ),
  ].sort((a, b) => b - a);

  const filteredEvents = events.filter((event) => {
    if (!event) return false;

    const matchesSearch =
      searchTerm === "" ||
      (event.title &&
        event.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (event.description &&
        event.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "upcoming" && new Date(event.date) > new Date()) ||
      (selectedFilter === "past" && new Date(event.date) <= new Date());

    const matchesYear =
      selectedYear === "all" ||
      (event.date &&
        new Date(event.date).getFullYear().toString() === selectedYear);

    return matchesSearch && matchesFilter && matchesYear;
  });

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-sky-50 via-white to-cyan-50 relative">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in">
              EVENTS
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
              Discover amazing events, workshops, and activities happening in
              our community
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Calendar Button */}
          <button
            onClick={() => navigate("/calendar")}
            className={`group px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
              activeView === "calendar"
                ? "bg-gradient-to-r from-sky-600 to-sky-700 shadow-xl shadow-sky-200"
                : "bg-gradient-to-r from-sky-500 to-sky-600 hover:shadow-lg shadow-sky-100"
            }`}
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore Events Calendar
          </button>

          <button
            onClick={() => navigate("/gallery")}
            className={`group px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
              activeView === "gallery"
                ? "bg-gradient-to-r from-cyan-600 to-cyan-700 shadow-xl shadow-cyan-200"
                : "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg shadow-cyan-100"
            }`}
          >
            <Image className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Explore Gallery
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-3">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past Events</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="all">All Years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredEvents.map((event, index) => (
              <div
                key={event.id || index}
                className="group bg-white rounded-[2rem] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex flex-col w-full max-w-[380px] mx-auto"
              >
                {/* Event Image */}
                <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden flex items-start justify-center">
                  {event.image_url ? (
                    <img
                      src={event.image_url}
                      alt={event.title || "Event"}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.classList.add(
                          "flex",
                          "items-center",
                          "justify-center"
                        );
                        const icon = document.createElement("div");
                        icon.className = "text-gray-400 text-center";
                        icon.innerHTML = `
          <div class="w-16 h-16 mx-auto mb-2 opacity-40">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <p class="text-sm font-medium">Event Poster</p>
        `;
                        e.target.parentNode.appendChild(icon);
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <Image className="w-16 h-16 mx-auto mb-2 opacity-40" />
                        <p className="text-sm font-medium">Event Poster</p>
                      </div>
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2 text-xs font-bold text-gray-900 shadow-sm z-10">
                    {formatDate(event.date)}
                  </div>

                  {/* Gentle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Event Content */}
                <div className="p-7 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-sky-600 transition-colors">
                    {event.title || "Untitled Event"}
                  </h3>

                  <p className="text-gray-500 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">
                    {event.description ||
                      "No description available for this event."}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-8">
                    {event.time && (
                      <div className="flex items-center text-sm font-medium text-gray-500">
                        <Clock className="w-4 h-4 mr-3 text-sky-500 flex-shrink-0" />
                        <span>{formatTime(event.time)}</span>
                      </div>
                    )}

                    {event.location && (
                      <div className="flex items-center text-sm font-medium text-gray-500">
                        <MapPin className="w-4 h-4 mr-3 text-sky-500 flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => setSelectedEvent(event)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gray-50 text-gray-900 font-bold text-sm border border-gray-100/50 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_10px_20px_-10px_rgba(2,132,199,0.3)]"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                {events.length === 0
                  ? "No Events Available"
                  : "No Events Found"}
              </h3>
              <p className="text-gray-500 mb-6">
                {events.length === 0
                  ? "Check back later for upcoming events and activities."
                  : "Try adjusting your search terms or filters to find events."}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-sky-500 text-white px-6 py-3 rounded-2xl hover:bg-sky-600 transition-colors mr-2"
                >
                  Clear Search
                </button>
              )}
              {selectedYear !== "all" && (
                <button
                  onClick={() => setSelectedYear("all")}
                  className="bg-cyan-500 text-white px-6 py-3 rounded-2xl hover:bg-cyan-600 transition-colors"
                >
                  Clear Year Filter
                </button>
              )}
            </div>
          </div>
        )}

        {/* Stats Section */}
        {events.length > 0 && (
          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">{events.length}</div>
                <div className="text-blue-100">Total Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {events.filter((e) => new Date(e.date) > new Date()).length}
                </div>
                <div className="text-blue-100">Upcoming</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  {filteredEvents.length}
                </div>
                <div className="text-blue-100">Currently Shown</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Modal Image */}
            <div className="relative w-full bg-slate-900 flex items-center justify-center overflow-hidden rounded-t-[2rem]">
              {selectedEvent.image_url ? (
                <img 
                  src={selectedEvent.image_url} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover object-top min-h-[400px] max-h-[70vh]"
                />
              ) : (
                <div className="w-full h-64 flex flex-col items-center justify-center text-slate-400">
                  <Image className="w-16 h-16 mb-2 opacity-50" />
                  <span>No image available</span>
                </div>
              )}
              {/* Date Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-xl px-5 py-2.5 text-sm font-bold text-sky-700 shadow-xl border border-white/20">
                {formatDate(selectedEvent.date)}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {selectedEvent.title}
              </h2>
              
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-100">
                {selectedEvent.time && (
                  <div className="flex items-center text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <Clock className="w-4 h-4 mr-2 text-sky-500" />
                    {formatTime(selectedEvent.time)}
                  </div>
                )}
                {selectedEvent.location && (
                  <div className="flex items-center text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <MapPin className="w-4 h-4 mr-2 text-sky-500" />
                    {selectedEvent.location}
                  </div>
                )}
              </div>
              
              <div className="prose prose-sky max-w-none">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-500" />
                  About this Event
                </h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed text-base">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Events;