import React from 'react';
import { GETINSTRGRAM, GETLINKEDIN, NETFLIX_URL, PROFILEIMAGE } from '../utils/constants'; // Assuming you have Netflix logo import
import { Link } from 'react-router-dom';


const About = () => {
  // Replace with your actual image URL
 // Add your image URL here

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Netflix branding */}
      <div className=" flex justify-between px-4 sm:px-6 lg:px-8 py-6 bg-black/90">
        <img
          src={NETFLIX_URL}
          alt="Netflix"
          className="w-24 sm:w-32 cursor-pointer"
        />



         <Link to={"/browse"}>
    
           <button
               className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200">
                Home
              </button>
           </Link>

      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-red-600">
            <img
              src={PROFILEIMAGE}
              alt="Shanmukha Srinu"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Information */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h1>
            <p className="text-lg sm:text-xl">
              Hi, I'm <span className="text-red-600 font-semibold">Shanmukha Srinu</span>, a Full Stack Developer currently studying B.Tech 3rd year at Godavari Institute of Engineering and Technology.
            </p>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Angular', 'Tailwind CSS', 'Bootstrap',
                 'Spring Boot', 'MySQL', 'Java','DSA'].map((skill, index) => (
                  <span key={index} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold">About This Project</h2>
              <p className="text-sm sm:text-base">
                This Netflix-GPT project is a movie recommendation application that combines the power of TMDB API for movie data and AI recommendations.
                It features user authentication, movie browsing, MultiLanguage Support , search functionality, and personalized recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={GETLINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href={GETINSTRGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <span>Instagram</span>
            </a>
            
             
              
            <p className='className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition-colors"'>

              <span >shanumukhasriu@gmail.com</span>
            
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
