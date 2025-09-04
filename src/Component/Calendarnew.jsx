import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    // Dynamically load Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-2">
            Events Calendar
          </h1>
          <p className="text-gray-600">Stay organized with your schedule</p>
        </div>

        {/* Calendar Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-8">
            {/* Loading placeholder */}
            <div className="absolute inset-0 bg-gray-50 rounded-2xl animate-pulse flex items-center justify-center min-h-[500px] opacity-50">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-500">Loading calendar...</p>
              </div>
            </div>
            
            {/* Elfsight Calendar Widget */}
            <div
              className="elfsight-app-92626549-a114-4759-9bda-7c3bdf2a9f86 relative z-10"
              data-elfsight-app-lazy
              style={{
                minHeight: '500px',
                borderRadius: '1rem'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}