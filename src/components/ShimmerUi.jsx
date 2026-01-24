import React from "react";

const ShimmerUi = () => {
  return(
     <div className="p-4 sm:p-6">
      {/* Header Shimmer */}
     

      {/* Movie Rows */}
      <div className="space-y-8">
        {/* Row 1 - Now Playing */}
        <div>
          <div className="h-6 w-32 bg-red-800/30 rounded mb-4 animate-pulse"></div>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-32 sm:w-40 md:w-48 aspect-[2/3] bg-red-600 rounded-lg animate-pulse flex-shrink-0"></div>
            ))}
          </div>
        </div>

        {/* Row 2 - Popular */}
        <div>
          <div className="h-6 w-32 bg-red-800/30 rounded mb-4 animate-pulse"></div>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-32 sm:w-40 md:w-48 aspect-[2/3]  bg-red-600 rounded-lg animate-pulse flex-shrink-0"></div>
            ))}
          </div>
        </div>

        {/* Row 3 - Top Rated */}
        <div>
          <div className="h-6 w-32 bg-red-800/30 rounded mb-4 animate-pulse"></div>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-32 sm:w-40 md:w-48 aspect-[2/3] bg-red-600  rounded-lg animate-pulse flex-shrink-0"></div>
            ))}
          </div>
        </div>

        {/* Row 4 - Upcoming */}
        <div>
          <div className="h-6 w-32 bg-red-800/30 rounded mb-4 animate-pulse"></div>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-32 sm:w-40 md:w-48 aspect-[2/3]  bg-red-600  rounded-lg animate-pulse flex-shrink-0"></div>
            ))}
          </div>
        </div>
      </div>
    </div>               

  );
};

export default ShimmerUi;
