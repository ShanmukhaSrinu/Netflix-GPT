import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
      <div className="w-full aspect-video pt-[18%] sm:pt-[30%]  md:pt-[30%] px-4 sm:px-6 md:px-12 absolute text-white bg-gradient-to-r from-black/70 to-transparent">
      <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
        {title}
      </h1>
      <p className="py-1 sm:py-2 md:py-4 text-xs sm:text-sm   md:text-base w-full sm:w-full  md:w-3/4 lg:w-1/2 line-clamp-4  sm:line-clamp-4">
        {overview}
      </p>
    </div>
  );
};

export default VideoTitle;
