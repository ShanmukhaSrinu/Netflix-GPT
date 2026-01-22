import React from 'react';
import SearchBar from './SearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { NETFLIX_BACKGROUND_SRC, NETFLIX_BACKGROUND_SRCSET } from '../utils/constants';

const GptSearchPage = () => {
  return (
       <div className="min-h-screen w-full">
      {/* Background Image Container - Added responsive height */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <img
          src={NETFLIX_BACKGROUND_SRC}
          srcSet={NETFLIX_BACKGROUND_SRCSET}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Added responsive padding */}
      <div className="relative z-10 pt-[10%] sm:pt-[15%] px-2 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <SearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
