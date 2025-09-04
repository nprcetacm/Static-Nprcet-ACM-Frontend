import React, { useState } from 'react';
import ori1 from '../assets/Gallery/Orientation/orien2.jpg'
import ori2 from '../assets/Gallery/Orientation/orien3.jpg'
import ori3 from '../assets/Gallery/Orientation/orientation-pic1.jpg'

import ieee1 from '../assets/Gallery/IEEE/ieee-banner.jpg'
import ieee2 from '../assets/Gallery/IEEE/ieee2.jpg'
import ieee3 from '../assets/Gallery/IEEE/ieee3.jpg'

import annual1 from '../assets/Gallery/AnnualEvt/Mam.jpg'
import annual2 from '../assets/Gallery/AnnualEvt/VITcollab.jpg'
import annual3 from '../assets/Gallery/AnnualEvt/worldpresident.jpg'

import inaug1 from '../assets/Gallery/Inaug/inaug-pic1.jpg'
import inaug2 from '../assets/Gallery/Inaug/inaug-pic2.jpg'
import inaug3 from '../assets/Gallery/Inaug/inaug-poster.jpg'

import industry1 from '../assets/Gallery/Industryday/Vice president.jpg'
import industry2 from '../assets/Gallery/Industryday/Group.jpg'

import intercollab1 from '../assets/Gallery/Intrcollab/aashiq1.jpg'
import intercollab2 from '../assets/Gallery/Intrcollab/ashiq2.jpg'

import know1 from '../assets/Gallery/Knowledgesharing/know.png';
import know2 from '../assets/Gallery/Knowledgesharing/know2.png';

import peer1 from '../assets/Gallery/Peerlearning/Peer1.jpg';
import peer2 from '../assets/Gallery/Peerlearning/Peer2.jpg';








// Static gallery data with placeholder images for demonstration
const staticGalleryItems = [
  {
    id: 1,
    title: "Knowledge Sharing Session on IoT and Next Generation Networks",
    caption: "Mr. Aashiq Rasool S delivered a technical presentation to ACM members.",
    image_url1: know1,
    image_url3: know2,
    heading1: "Key Highlights",
    description1: "Covered IoT architecture, 5G, Cloud/Fog/Edge computing, SDN, AI integration.",
    heading2: "Participation",
    description2: "33 members from NPRCET & TCE IT ACM Student Chapters attended.",
    heading3: "Outcome",
    description3: "Expanded technical knowledge and strengthened peer learning between chapters."
  },
  {
    id: 2,
    title: "Peer Learning Session on Bridging Minds",
    caption: "Dr. P. Nagaraj delivered an inspiring session on ACM and computing opportunities.",
    image_url1: peer1,
    image_url2: peer2,
    heading1: "Topics Covered",
    description1: "ACM’s global network, SIGs, proposal to initiate SIGBED at NPRCET.",
    heading2: "Student Benefits",
    description2: "Access to ACM e-learning, research events, Summer/Winter schools.",
    heading3: "Outcome",
    description3: "Inspired students to actively participate in ACM initiatives and SIGs."
  },
  {
    id: 3,
    title: "Successful International Collaboration",
    caption: "Collaboration meeting between NPRCET ACM and BITS Pilani Dubai ACM Student Chapters.",
    image_url1: intercollab1,
    image_url2: intercollab2,
    heading1: "Partner",
    description1: "BITS Pilani Dubai Campus ACM Student Chapter.",
    heading2: "Focus",
    description2: "Workshops, hackathons, and technical sessions.",
    heading3: "Objective",
    description3: "Enhance skills, foster innovation, and strengthen global ACM networks."
  },
  {
    id: 4,
    title: "ACM India Industry Day 2025",
    caption: "NPRCET ACM Student Chapter showcased innovation at ACM India Industry Day.",
    image_url1: industry1 ,
    image_url2: industry2,
    heading1: "Keynotes & Talks",
    description1: "AI future, decision-making in physical systems, edge AI automotive.",
    heading2: "Panel Discussion",
    description2: "The Future of Work & Industry with leaders from Google, TCS, Zepto.",
    heading3: "Engagement",
    description3: "Poster presentations, AMA sessions, and networking with industry experts."
  },
  {
    id: 5,
    title: "ACM Annual Event 2025",
    caption: "NPRCET ACM Student Chapter participated in ACM India Annual Event at PSG College of Tech.",
    image_url1:annual3,
    image_url2: annual2,
    image_url3: annual1,
    heading1: "Speakers",
    description1: "Prof. Wendy Hall, Prof. Elisa Bertino, Prof. Yannis Ioannidis.",
    heading2: "Awards",
    description2: "Doctoral Dissertation Award, Early Career Researcher Award, etc.",
    heading3: "Impact",
    description3: "Enhanced networking and engagement with global leaders in computing."
  },
  {
    id: 6,
    title: "NPRCET ACM Inauguration Function",
    caption: "Inaugural ceremony with Chief Guest Dr. Meenakshi D’Souza.",
    image_url1: inaug3,
    image_url2: inaug2,
    image_url3: inaug1,
    heading1: "Highlights",
    description1: "Introduction to ACM, membership benefits, career & internship opportunities.",
    heading2: "Technical Talk",
    description2: "IoT applications, challenges, scalability, AI-driven IoT testing.",
    heading3: "Outcome",
    description3: "Encouraged students to actively join and contribute to ACM."
  },
  {
    id: 7,
    title: "IEEE Xplore Digital Library Training",
    caption: "Webinar on 'Enhance Your Research with IEEE' by Mr. T. S. Nanda Lal.",
    image_url1:ieee1,
    image_url2:ieee2,
    image_url3:ieee3,
    heading1: "Topics",
    description1: "IEEE Xplore navigation, research tracking, data exports, author tools.",
    heading2: "Benefits",
    description2: "Efficient research, documentation, and collaboration.",
    heading3: "Outcome",
    description3: "Improved research skills and awareness of IEEE resources."
  },
  {
    id: 8,
    title: "NPRCET ACM Orientation Session",
    caption: "Series of sessions introducing ACM activities and opportunities to students.",
    image_url1: ori1,
    image_url2: ori2,
    image_url3: ori3,
    heading1: "Key Highlights",
    description1: "Introduction to ACM, benefits, competitions, and networking.",
    heading2: "Opportunities",
    description2: "Summer/Winter Schools, conferences, internship and career paths.",
    heading3: "Outcome",
    description3: "Students gained clarity on ACM’s role and opportunities for growth."
  }
];



function Gallery() {
  // State for gallery grid view
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // State for detailed view
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [detailCurrentImageIndex, setDetailCurrentImageIndex] = useState(0);

  const galleryItems = staticGalleryItems;

  // Gallery grid functions
  const handleShowMore = (itemId) => {
    const item = galleryItems.find(item => item.id === itemId);
    setSelectedGalleryItem(item);
    setDetailCurrentImageIndex(0);
  };

  const handleBackToGallery = () => {
    setSelectedGalleryItem(null);
    setDetailCurrentImageIndex(0);
  };

  const handleImageClick = (item, imageUrl, imageIndex) => {
    const images = getValidImages(item);
    setSelectedItem(item);
    setSelectedImage(imageUrl);
    setCurrentImageIndex(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    if (!selectedItem) return;
    const images = getValidImages(selectedItem);

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    }

    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Utility functions
  const getValidImages = (item) => {
    if (!item) return [];
    return [item.image_url1, item.image_url2, item.image_url3]
      .filter(url => url && url.trim() !== "");
  };

  const getSections = (item) => {
    if (!item) return [];
    return [
      { heading: item.heading1, description: item.description1 },
      { heading: item.heading2, description: item.description2 },
      { heading: item.heading3, description: item.description3 }
    ].filter(section => section.heading || section.description);
  };

  const handlePrevImage = () => {
    const images = getValidImages(selectedGalleryItem);
    setDetailCurrentImageIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    const images = getValidImages(selectedGalleryItem);
    setDetailCurrentImageIndex(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const renderPreviewImage = (item) => {
    const images = getValidImages(item);
    
    if (images.length === 0) {
      return (
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-gray-500">No image</p>
          </div>
        </div>
      );
    }

    // Show main image with overlay indicators for multiple images
    return (
      <div className="relative w-full h-48 overflow-hidden group">
        <img
          src={images[0]}
          alt={`${item.title} - Preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzlmYTZiMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Multiple images indicator */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span>{images.length}</span>
          </div>
        )}
        
        {/* Click overlay */}
        <button
          onClick={() => handleShowMore(item.id)}
          className="absolute inset-0 w-full h-full bg-transparent hover:bg-black/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          aria-label={`View ${item.title} details`}
        />
      </div>
    );
  };

  const hasAdditionalContent = (item) => {
    return [
      item.heading1,
      item.description1,
      item.heading2,
      item.description2,
      item.heading3,
      item.description3,
    ].some(content => content && content.trim() !== "");
  };

  // Render detailed view
  if (selectedGalleryItem) {
    const images = getValidImages(selectedGalleryItem);
    const sections = getSections(selectedGalleryItem);

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Back Button */}
          <button
            onClick={handleBackToGallery}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Gallery
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-4">
              {images.length > 0 ? (
                <>
                  {/* Main Image */}
                  <div className="relative aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
                    <img
                      src={images[detailCurrentImageIndex]}
                      alt={`${selectedGalleryItem.title} - Image ${detailCurrentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzlmYTZiMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                    
                    {/* Image Navigation */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                          aria-label="Previous image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                          aria-label="Next image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {detailCurrentImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Image Thumbnails */}
                  {images.length > 1 && (
                    <div className="flex space-x-3 overflow-x-auto pb-2">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setDetailCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            detailCurrentImageIndex === index 
                              ? 'border-blue-600' 
                              : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500">No images available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Title and Caption */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  {selectedGalleryItem.title}
                </h1>
                {selectedGalleryItem.caption && (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedGalleryItem.caption}
                  </p>
                )}
              </div>

              {/* Content Sections */}
              {sections.length > 0 && (
                <div className="space-y-6">
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Details</h2>
                    <div className="space-y-4">
                      {sections.map((section, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          {section.heading && (
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                              {section.heading}
                            </h3>
                          )}
                          {section.description && (
                            <p className="text-gray-600 leading-relaxed">
                              {section.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Share</h3>
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedGalleryItem.title,
                        text: selectedGalleryItem.caption,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render gallery grid view
  if (galleryItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg
                className="w-20 h-20 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xl font-medium mb-2">No gallery items found</p>
              <p className="text-gray-400">Check back later for new content</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of stunning visuals and captivating stories
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Preview Image */}
              {renderPreviewImage(item)}

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Caption */}
                {item.caption && (
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {item.caption}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {hasAdditionalContent(item) ? (
                    <button
                      onClick={() => handleShowMore(item.id)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 group/btn focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      <span>View Details</span>
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <span className="text-gray-400 text-sm">No additional details</span>
                  )}
                  
                  {/* Image count badge */}
                  {getValidImages(item).length > 1 && (
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      {getValidImages(item).length}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation buttons */}
            {selectedItem && getValidImages(selectedItem).length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;