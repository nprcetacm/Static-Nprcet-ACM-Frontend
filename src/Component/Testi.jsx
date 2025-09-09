import React from 'react';
import nagaraj from '../assets/Testi/nagaraj.jpg'
import meenakshi from '../assets/Testi/meenakshi.jpg'
import ieee from '../assets/Testi/ieee.png'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. P. Nagaraj",
      designation: "Associate Professor, School of Computing SRMIST",
      image: nagaraj,
      content: "It was a great honor to be the Chief Guest for the Peer Learning Session on “Bridging Minds: Sustaining Knowledge Exchange” at NPR College of Engineering and Technology. The event was well organized and provided a valuable platform for knowledge sharing and collaboration. I appreciate the efforts of the organizers and wish them continued success.",
      rating: 5
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      designation: "Dr. Meenakshi D'Souza, President of the ACM India Council,Professor, Head of the Department of Computer Science and Engineering (CSE) IIIT-Bangalore",
      image: meenakshi,
      content: "Very impressed by the excellent initiatives being undertaken by NPRCET, best use of the autonomy status of the college. Thank you for inviting me. All the best on behalf of ACM India too!",
      rating: 5
    },
    {
      id: 3,
      name: "Mr. Nanda Lal T S",
      designation: "Senior Training Manager, EBSCO Information Services & IEEE Explore Digital Library, New Delhi, India.",
      image: ieee,
      content: "I'm thrilled that our IEEE Xplore online training for Wednesday, January 22, 2025, from 11:00 AM was a huge success, coordinated by the NPRCET Library! I believe the users gained valuable insights and hands-on experience in the Xplore platform. The participants were engaged and enthusiastic, and I'm confident that they'll apply their new skills to drive innovation and excellence. Thank you for the opportunity to deliver high-quality training and support. We're committed to helping your users achieve their goals and stay at the forefront of technology.Thank you!",
      rating: 5
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-96 mx-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-blue-100">
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-4 border-blue-200 shadow-md"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
          <p className="text-blue-600 font-medium text-sm">{testimonial.designation}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      
      <div className="relative">
        <svg className="absolute top-0 left-0 w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.112-5.472-5.088-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg>
        <p className="text-gray-700 leading-relaxed pl-10 italic">
          "{testimonial.content}"
        </p>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Testimonial
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how NPRCET ACM Student Chapter is transforming research and innovation through the voices of our valued collaborators
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-marquee hover:pause-marquee">
          {/* First set of testimonials */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Join Our Community
        </button>
      </div> */}

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;