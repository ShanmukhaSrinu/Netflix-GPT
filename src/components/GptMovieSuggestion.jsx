import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import GptmoviesList from "./GptMoviesList";
import { IMG_CDN_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  
  const selectedItem = useSelector(Store => Store.gpt.selectedItem)

  const selectedItemRef=useRef(null)


  useEffect(()=>{
    if(selectedItem && selectedItemRef.current){
      selectedItemRef.current.scrollIntoView({behavior:"smooth"})
    }
  },[selectedItem])

    // early return
     if (!movieNames || !movieResults) return null
 

  // console.log(movieNames);
  
  // Filter out undefined values
  const validMovies = movieResults.filter(movie => movie !== undefined);

  return (

     <>
      {selectedItem && (
        <div
          ref={selectedItemRef}
          className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mx-auto mt-4 sm:mt-5 md:mt-8 p-4 sm:p-5 rounded-xl bg-black/80 flex flex-col md:flex-row md:items-center text-white"
        >
          <div className="mx-auto mb-4 sm:mb-5 h-60 sm:h-72 md:h-80 xl:h-72 2xl:h-80 my-4 sm:my-6 md:my-8 mx-4 sm:mx-6 md:mx-8 aspect-[2/3] bg-center bg-cover rounded-lg">
            <img
              className="rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              src={IMG_CDN_URL + selectedItem.poster_path}
              alt={selectedItem.title}
            />
          </div>
          <div className="px-2 sm:px-4">
            <p className="font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-8">
              {selectedItem.title}
            </p>
            <p className="text-xs sm:text-sm md:text-base w-full sm:w-11/12">
              {selectedItem.overview}
            </p>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base">
              {selectedItem.release_date}
            </p>
          </div>
        </div>
      )}
      <div className="px-4 sm:px-6 md:px-8 lg:px-30 mt-6 sm:mt-8 md:mt-10 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-7xl gap-2 sm:gap-3 md:gap-4">
          {validMovies.map((movie,index) => (
            <GptmoviesList key={`${movie.id}-${index}`} movies={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GptMovieSuggestion;
