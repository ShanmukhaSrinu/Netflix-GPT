import React from "react";

const ShimmerUi = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-30 mt-6 sm:mt-8 md:mt-10 relative z-20 bg-red-500">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-2 sm:gap-3 md:gap-4">
        <div className="w-full my-2"></div>
      </div>
    </div>
  );
};

export default ShimmerUi;
