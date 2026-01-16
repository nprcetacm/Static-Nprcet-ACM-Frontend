import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Poster from '../assets/Congratulations/featuredChap.jpeg'

function LandingPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const seen = sessionStorage.getItem('landingpopup_seen');
        if (!seen) {
            // Small delay to ensure smooth appearance
            setTimeout(() => setOpen(true), 500);
        }
    }, [])

    const handleClose = () => {
        setOpen(false);
        sessionStorage.setItem("landingpopup_seen", "true");
    }

    if (!open) return null;

    return (
        <div 
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 animate-in fade-in duration-300"
            onClick={handleClose}
        >
            <div 
                className="relative animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute -top-3 -right-3 z-20
                        bg-white hover:bg-gray-100
                        rounded-full p-2.5 shadow-2xl 
                        active:scale-90 transition-all duration-200
                        border-2 border-gray-200"
                    aria-label="Close popup"
                >
                    <X className="h-5 w-5 text-gray-700 stroke-[2.5]" />
                </button>

                {/* Image Container */}
                <div className="relative w-full max-w-3xl mx-auto">
                    <img
                        src={Poster}
                        alt="Featured Event - ACM India Student Chapter"
                        className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingPopup