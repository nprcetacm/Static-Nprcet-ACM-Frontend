import React, { useState } from "react";
import { Calendar, Search, ChevronDown, ChevronUp } from "lucide-react";
import post1 from '../assets/Congratulations/featuredChap.jpeg'
import post2 from '../assets/Congratulations/ProfYannis.jpeg'

// Static events with placeholder images
const eventsData = [
    {
        id: 1,
        title: "NPRCET ACM Student Chapter has been featured on the ACM India",
        description:
            "A proud moment for NPR College of Engineering and Technology! Delighted to share that the NPRCET ACM Student Chapter has been featured on the ACM India Student Chapter Website for reporting the highest number of activities.",
        fullDescription:
            "A proud moment for NPR College of Engineering and Technology! Delighted to share that the NPRCET ACM Student Chapter has been featured on the ACM India Student Chapter Website for reporting the highest number of activities. This recognition by the ACM India Council Team reflects the dedication, teamwork, and enthusiasm of our student members and faculty coordinators. As the Faculty Sponsor, it is truly rewarding to witness our students actively engaging in professional, technical, and community-focused initiatives. Congratulations to the entire NPRCET ACM Student Chapter team. Let us continue to inspire, innovate, and excel.",
        image_url: post1,
    },
    {
        id: 2,
        title:
            "Appreciation from Prof. Yannis Loannidis- ACM President",
        description:
            "Congratulations to the NPRCET ACM Student Chapter for your unique achievements and for serving as an exemplar for others to follow.",
        fullDescription:
            "Appreciation: Dear members of NPRCET ACM Student Chapter,Thank you very much for your message. What you have achieved so far and your future plans are really unique. Sincere congratulations! I’m glad you reached out and informed us about these developments – they speak loudly and give us valuable feedback about the great things that ACM can help young community members achieve and may serve as exemplars for others to follow.",
        image_url: post2,

    },
];


function Achievements() {
    //   const [searchTerm, setSearchTerm] = useState("");
    const [expandedCards, setExpandedCards] = useState({});

    //   const filteredEvents = eventsData.filter((event) =>
    //     event.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );

    const toggleExpand = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-violet-950">

            {/* Animated Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white 
                py-16 sm:py-20 md:py-24 lg:py-28">

                {/* Background Glow */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 
                    w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 
                    bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 
                    w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 
                    bg-white rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 sm:px-6">
                    <h1 className="font-black tracking-tight drop-shadow-2xl
                   text-4xl sm:text-5xl md:text-6xl lg:text-8xl
                   mb-4 sm:mb-5 md:mb-6">
                        Achievements
                    </h1>

                    <p className="opacity-95 font-medium tracking-wide
                  text-base sm:text-lg md:text-xl lg:text-2xl
                  max-w-xl mx-auto">
                        Highlighting excellence, milestones, and proud moments.
                    </p>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Search Bar */}
                {/* <div className="relative bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 backdrop-blur-xl rounded-full shadow-2xl p-8 mb-20 max-w-3xl mx-auto border-2 border-cyan-400/30">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-cyan-300" size={24} />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-white/10 border-2 border-white/30 rounded-full text-white text-lg placeholder-cyan-200 focus:ring-4 focus:ring-cyan-400/50 focus:border-cyan-300 outline-none transition"
            />
          </div>
        </div> */}

                {/* Events Grid */}
                {eventsData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className="group w-full relative bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 hover:-translate-y-3 border-4 border-transparent hover:border-cyan-400/50"
                            >
                                {/* Vertical Full Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={event.image_url}
                                        alt={event.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Content Below Image */}
                                <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                                    <div className="mb-4">
                                        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                                        {expandedCards[event.id] ? event.fullDescription : event.description}
                                    </p>

                                    {/* Show More Button */}
                                    {event.fullDescription && event.fullDescription !== event.description && (
                                        <button
                                            onClick={() => toggleExpand(event.id)}
                                            className="flex items-center gap-2 text-cyan-600 font-bold hover:text-indigo-600 transition-all group/btn"
                                        >
                                            {expandedCards[event.id] ? (
                                                <>
                                                    Show Less
                                                    <ChevronUp size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                                                </>
                                            ) : (
                                                <>
                                                    Show More
                                                    <ChevronDown size={20} className="group-hover/btn:translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-24">
                        <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 backdrop-blur-xl rounded-3xl shadow-2xl p-16 max-w-lg mx-auto border-2 border-cyan-400/20">
                            <Calendar className="w-20 h-20 text-cyan-400 mx-auto mb-8" />
                            <h3 className="text-4xl font-black text-white mb-4">
                                No Events Found
                            </h3>
                            <p className="text-cyan-200 text-lg mb-8">
                                Try adjusting your search.
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-10 py-4 rounded-full hover:from-cyan-600 hover:to-indigo-700 transition font-bold shadow-2xl text-lg hover:scale-105 transform"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Achievements;