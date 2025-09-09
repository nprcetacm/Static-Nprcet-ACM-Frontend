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

import lunar1 from '../assets/Gallery/lunar/lunar.jpg'
import lunar2 from '../assets/Gallery/lunar/lunar2.jpg'









// Static gallery data with placeholder images for demonstration
const staticGalleryItems = [
  {
    id: 1,
    title: "Awareness Session on the Upcoming Total Lunar Eclipse",
    caption: "Renowned astrophysicist Dr. Chrisphin Karthick from the Indian Institute of Astrophysics, Bengaluru delivered an in-depth scientific session on lunar eclipses.",
    image_url1: lunar1,
    image_url3: lunar2,
    heading1: "Key Highlights",
    description1: "Dr. Chrisphin Karthick delivered an engaging scientific session, providing a clear understanding of the core mechanics of a lunar eclipse. He explained how the precise alignment of the Sun, Earth, and Moon causes the Earth to cast its shadow—composed of the darker umbra and lighter penumbra—onto the Moon. The session covered the classification of eclipses: total, partial, and penumbral, and introduced the role of orbital nodes, explaining why eclipses don’t happen every full moon. A key highlight was the explanation of the Blood Moon phenomenon, where Earth's atmosphere refracts sunlight, scattering blue light and allowing red light to illuminate the Moon. Dr. Karthick also emphasized that lunar eclipses are safe to observe with the naked eye, binoculars, or telescopes, unlike solar eclipses. The session concluded by debunking myths and superstitions, promoting a science-based understanding and inspiring curiosity.",
    heading2: "Objective",
    description2: "The session aimed to disseminate accurate scientific knowledge about total lunar eclipses, educating participants on safe observation methods and debunking common myths. It sought to foster scientific inquiry and astronomical enthusiasm by encouraging students to embrace empirical science, explore natural phenomena rationally, and view astronomical events as opportunities for learning rather than fear.",
    heading3: "Organizing Bodies & Outcome",
    description3 : "This event was jointly organized by the NPRCET ACM Student Chapter and the Tamil Nadu Astronomy & Science Society (TASS), combining organizational strength and scientific expertise. The session successfully inspired students to participate in ACM initiatives, pursue deeper learning through SIGs, and engage in safe astronomical observations. It strengthened peer learning, promoted scientific dialogue between students and experts, and advanced STEM education by bridging academia and public awareness."
  },
{
    id: 2,
    title: "Knowledge Sharing Session on IoT and Next Generation Networks",
    caption: "Mr. Aashiq Rasool S, Vice President – NPRCET ACM Student Chapter, delivered a technical presentation to ACM members.",
    image_url1: know1,
    image_url3: know2,
    heading1: "Key Highlights",
    description1:"The session covered several advanced topics, beginning with the fundamentals of Internet of Things (IoT), including its architecture, protocols, and the challenges faced in large-scale deployments. Mr. Aashiq elaborated on 5G and Machine-to-Machine Communication, discussing how these technologies enable real-time connectivity and automation in smart applications. The role of Cloud, Fog, and Edge Computing in IoT ecosystems was explained, highlighting how distributed computing brings computational power closer to data sources for faster response times. The session further explored Software-Defined Networking (SDN/NFV) as a means to simplify and virtualize network management, along with the integration of Artificial Intelligence (AI) and Generative AI into IoT solutions to enable intelligent decision-making and automation.",
    heading2: "Participation",
    description2: "A total of 33 members from NPRCET ACM and TCE IT ACM Student Chapters actively participated in the session. The interactive format enabled meaningful exchanges, allowing attendees to discuss real-world applications and research trends in the IoT and networking domain.",
    heading3: "Outcome",
    description3: "The session significantly expanded participants’ technical knowledge by providing exposure to cutting-edge networking and IoT technologies. It motivated students to explore real-world applications and pursue further research directions in these fields. Additionally, the event strengthened collaboration between NPRCET ACM and TCE ACM chapters, fostering a culture of peer learning, knowledge sharing, and mutual academic growth. Many students were also encouraged to engage in future ACM India events, Summer/Winter Schools, and SIG activities."
  },
  {
    id: 3,
    title: "Peer Learning Session on Bridging Minds",
    caption: "Dr. P. Nagaraj, Associate Professor School of Computing SRMIST, delivered an inspiring session on ACM and computing opportunities.",
    image_url1: peer1,
    image_url2: peer2,
    heading1: "Topics Covered",
    description1: "Dr. Nagaraj provided an in-depth introduction to ACM and its global network, highlighting how ACM connects millions of computing professionals, researchers, and students around the world. He explained the critical role ACM plays in promoting innovation, research, and academic excellence in computing. The session also focused on the significance of ACM Student Chapters and Special Interest Groups (SIGs) as vibrant platforms for knowledge sharing and technical engagement. A special proposal was introduced to initiate SIGBED (Embedded Systems) at NPRCET, aimed at fostering focused research and learning in the area of embedded systems.",
    heading2: "Student Benefits",
    description2: "The session enlightened students on the extensive benefits of being part of ACM. Participants learned about access to ACM’s e-learning platforms, publications, and mentorship programs, providing a rich resource for continuous learning. Dr. Nagaraj emphasized the opportunities available through technical workshops, hackathons, and research seminars organized by ACM. Students were encouraged to participate in ACM Summer/Winter Schools and flagship conferences to deepen their practical knowledge. Moreover, engagement with the Eminent and Distinguished Speaker Programs (ESP & DSP) was introduced as a unique avenue to interact with leading global researchers.",
    heading3: "Outcome",
    description3: "The session successfully inspired students to actively engage in ACM initiatives and explore deeper learning avenues by contributing to SIGs and leveraging global networking opportunities. It instilled a sense of responsibility and motivation among students to be part of the global computing community and contribute to technological innovations through collaboration, research, and knowledge sharing."
  },
  {
    id: 4,
    title: "Successful International Collaboration",
    caption: "Collaboration meeting between NPRCET ACM and BITS Pilani Dubai ACM Student Chapters.",
    image_url1: intercollab1,
    image_url2: intercollab2,
    heading1: "Partner",
    description1: "The collaboration was conducted with the BITS Pilani Dubai Campus ACM Student Chapter, an active and dynamic chapter known for its innovative technical initiatives and strong industry connections.",
    heading2: "Focus",
    description2: "The discussion focused on exploring exciting collaboration opportunities, such as conducting joint workshops, hackathons, and technical sessions. These initiatives are designed to promote knowledge sharing, practical learning, and hands-on technical skill development among students from both campuses.",
    heading3: "Objective",
    description3: "The main objectives of this collaboration are to enhance students’ technical skills, foster a culture of innovation, and strengthen the global ACM community network. By working together on shared initiatives, the chapters aim to provide students with greater exposure to industry trends, technical challenges, and global best practices, further empowering them as future technology leaders."
  },
  {
    id: 5,
    title: "ACM India Industry Day 2025",
    caption: "NPRCET ACM Student Chapter showcased innovation at ACM India Industry Day and was honored to meet Dr. Ponnurangam Kumaraguru, Vice President of ACM India, during the event.",
    image_url1: industry1 ,
    image_url2: industry2,
    heading1: "Keynotes & Talks",
    description1: "The event featured inspiring keynote addresses and invited talks that provided deep insights into emerging technologies. The keynote was delivered by Mr. Ajay Deshpande, Senior Director at ICERTIS & Angel Investor, focusing on AI and Its Future for Students, and shedding light on the transformative role of artificial intelligence in education and industry. Dr. Arunchandar Vasan, Principal Scientist at TCS Research, spoke about Decision-Making for Physical Systems, highlighting how intelligent systems are applied in real-world scenarios. Meanwhile, Dr. Amod Jai Ganesh Anandkumar, Director at Harman Automotive, Bangalore, explained Advanced Automotive In-Cabin Experiences with Edge AI, discussing the practical applications and future potential of edge computing in the automotive sector.",
    heading2: "Panel Discussion",
    description2: "A major highlight of the event was the panel discussion on “The Future of Work and Industry: How Data Science is Redefining Skills, Innovation, and Business Growth”, moderated by Dr. P. Deepalakshmi Ramkumar. The discussion offered thought-provoking perspectives on how data science is reshaping industry practices, the evolving skillsets required by professionals, and new business models emerging in the digital era. The interaction with industry leaders provided valuable insights into future career trends and industry expectations.",
    heading3: "Engagement Activities",
    description3: "The event promoted active engagement through several interactive sessions. Students showcased their innovative projects and research ideas during poster presentations, demonstrating real-world applications of computing concepts. In addition, Ask Me Anything (AMA) sessions created an open and engaging environment where industry experts answered participant questions, fostering meaningful knowledge exchange. The event also provided opportunities for students to network directly with industry professionals, strengthening academic-industry connections."
  },
  {
    id: 6,
    title: "ACM Annual Event 2025",
    caption: "NPRCET ACM Student Chapter participated in ACM India Annual Event at PSG College of Tech.",
    image_url1:annual3,
    image_url2: annual2,
    image_url3: annual1,
    heading1: "Image Details",
    description1: "At the ACM India Annual Event 2025, held on March 1, 2025, at PSG College of Technology, Coimbatore, the NPRCET ACM Student Chapter had the distinct honor of meeting | Prof. Yannis Ioannidis, President of ACM | during the prestigious gathering of computing leaders. This was a truly inspiring moment for our team. We also had a memorable interaction with | Prof. Dame Wendy Hall (University of Southampton) and Dr. Meenakshi D’Souza President of the ACM India Council | , where we discussed emerging trends in computing and the future of technology. Additionally, our ACM team strengthened academic and professional ties by engaging in meaningful discussions with the VIT ACM Student Chapter, fostering collaboration and knowledge exchange across student communities.",
    heading2: "Awards",
    description2: "The event also hosted an inspiring Awards Ceremony, celebrating excellence in computing research and education. Prestigious recognitions such as the ACM India Doctoral Dissertation Award, Early Career Researcher Award, Outstanding Contribution to Computing Education Award, and Outstanding Contributions to Computing by a Woman Award were presented. In addition, various Chapter Awards acknowledged the active participation and achievements of ACM Student Chapters, including NPRCET ACM’s contributions.",
    heading3: "Impact",
    description3: "Our participation in the ACM India Annual Event 2025 offered an incredible opportunity for networking, learning, and engaging with global leaders in computing. We were honored to meet Prof. Yannis Ioannidis, President of ACM, and enjoyed a memorable interaction with Prof. Dame Wendy Hall and Dr. Meenakshi D’Souza, Director – Research and Development. Furthermore, the event strengthened our collaborative ties, including meaningful discussions with the VIT ACM Student Chapter. Overall, the event reinforced our commitment to excellence, innovation, and contribution in the field of computing."
  },
  {
    id: 7,
    title: "NPRCET ACM Inauguration Function",
    caption: "Inaugural ceremony with Chief Guest Dr. Meenakshi D’Souza, President of the ACM India Council, Professor & HOD-CSE at IIIT-Bangalore.",
    image_url1: inaug3,
    image_url2: inaug2,
    image_url3: inaug1,
    heading1: "Highlights",
    description1: "The inauguration session began with a detailed overview of the ACM organization and its activities at both national and international levels. Students were introduced to the numerous membership benefits, including access to research resources, networking opportunities, technical workshops, and industry collaborations. The session also elaborated on the available career and internship opportunities, emphasizing how being part of ACM can provide students with pathways into the technology industry through projects, contests, and industry connections.",
    heading2: "Technical Talk",
    description2: "A key feature of the event was the engaging technical talk on the rapidly growing domain of IoT (Internet of Things). The talk covered the real-world applications of IoT across industries, including smart cities and industrial automation. Key challenges were discussed, focusing on security, scalability, and real-time performance in large-scale IoT deployments. The speaker explained how serverless architectures enable dynamic scaling of IoT applications and how AI-driven testing frameworks are used to efficiently test and evaluate the responsiveness and reliability of IoT systems. The session provided insights into the future trends in IoT testing, such as predictive analytics and automation.",
    heading3: "Outcome",
    description3: "The event successfully motivated students to actively join and contribute to the NPRCET ACM chapter. It deepened their understanding of how ACM functions as a bridge between academic knowledge and industry needs. The interaction with Dr. Meenakshi D’Souza and other speakers inspired students to explore technical opportunities, participate in research activities, and leverage ACM membership to build a strong foundation for their careers."
  },
  {
    id: 8,
    title: "IEEE Xplore Digital Library Training",
    caption: "Webinar on 'Enhance Your Research with IEEE' by Mr. T. S. Nanda Lal Senior Training Manager, EBSCO Information Services & IEEE Explore Digital Library, New Delhi, India.",
    image_url1:ieee1,
    image_url2:ieee2,
    image_url3:ieee3,
    heading1: "Topics",
    description1: "The IEEE Xplore Digital Library Training provided an in-depth introduction to IEEE Xplore, helping participants understand how to efficiently navigate the platform. The session covered how to access and retrieve research papers and journals from a vast database of over 6 million records. Participants learned techniques to identify new research areas and track emerging technology trends effectively. The training also demonstrated how to access supplemental items such as IEEE Media files, Algorithmic Codes, Datasets, and Immersive Articles. Key features included exporting mathematical equations, downloading high-resolution figures from full-text articles in HTML format, and managing personal research projects by saving and categorizing important documents.",
    heading2: "Benefits",
    description2: "Participants gained practical skills in using IEEE Xplore for knowledge sharing and collaboration with team members, enabling efficient research workflows. The session explained how to set up alerts to receive updates on new content and journals of specific interest, which helps stay up-to-date with the latest developments in their field. It also covered research documentation and reference management techniques, essential for academic and professional projects. Advanced search techniques were explained, especially useful for campus interviews and placement preparation. The training introduced the IEEE Author Centre publishing tools, providing guidance for authors interested in publishing their work. Additionally, participants were shown how to explore upcoming conferences and events via ieee.org.",
    heading3: "Outcome",
    description3: "By the end of the training, participants achieved improved research skills and developed an enhanced understanding of IEEE Xplore Digital Library resources. They learned to efficiently search, retrieve, and manage research papers, export useful content, and document their references. The session boosted awareness of IEEE’s powerful tools and resources, enabling students and researchers to stay updated with the latest advancements, track technology trends, and publish their work effectively. The session concluded with a review and an online quiz to reinforce the key concepts."
  },
  {
    id: 9,
    title: "NPRCET ACM Orientation Session",
    caption: "Series of sessions introducing ACM activities and opportunities to students.",
    image_url1: ori1,
    image_url2: ori2,
    image_url3: ori3,
    heading1: "Key Highlights",
    description1: "The NPRCET ACM (Association for Computing Machinery) Orientation Session began with a warm welcome and a detailed introduction to the NPRCET ACM Student Chapter Website (https://nprcet.acm.org). Students were introduced to the purpose of the ACM chapter at NPRCET, which focuses on promoting computing as a science, encouraging innovation, and building a strong technical community. The session covered the membership benefits, such as access to ACM digital libraries, exclusive webinars, coding competitions, and learning resources. In addition, students learned about various events and competitions like hackathons, coding contests, workshops, and tech talks that provide hands-on experience and help develop technical skills.",
    heading2: "Opportunities",
    description2: "A significant part of the session focused on technical skill development through workshops on programming, data structures, cloud computing, web development, and more. The importance of collaboration and networking was emphasized, encouraging students to work on group projects and interact with industry professionals to build valuable networks. Several upcoming events and activities were highlighted, including guest lectures, coding bootcamps, research paper presentations, and special interest group meetups, offering additional learning avenues. Students were informed about diverse opportunities for involvement, such as taking leadership roles in organizing events or contributing as content creators and community moderators. The session also shed light on career and internship opportunities by providing access to industry projects, internships, and career mentoring that help in future job placements.",
    heading3: "Outcome",
    description3: "By the end of the session, students gained a clear understanding of ACM’s role in advancing computing education and research. They became aware of the significant benefits of membership, including technical resources, career advancement support, and opportunities for personal growth. Most importantly, the interactive Q&A session gave students the chance to resolve individual doubts and understand how to join ACM effectively, empowering them to take active steps toward participating in the computing community. This session laid a solid foundation for students to recognize and pursue growth opportunities through the NPRCET ACM chapter"
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