import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults, addSeletedItem} from "../utils/gptSlice";
// import groq from "../utils/gemini";


const SearchBar = () => {
  const [isLoading,setIsLoading]=useState(false)
 const dispatch=useDispatch()
  const langKey = useSelector((store) => store.gpt.lang);
  const searchText = useRef(null);

  // search movie in TMDB database with year and movie name
  const searchMovieTMDB=async (movie,year)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1&year="+year ,API_OPTIONS)
    const json=await data.json()
   
    return json.results[0];
    
    
  }

const getMovieRecommendationsSystem = async (gptQuery) => {
  try {
    const response = await fetch("/.netlify/functions/groq-proxy", {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: gptQuery }],
        model: "llama-3.3-70b-versatile",
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error?.status === 429) {
      return await fetch("/.netlify/functions/groq-proxy", {
        method: "POST",
        body: JSON.stringify({
          messages: [{ role: "user", content: gptQuery }],
          model: "llama-3.1-8b-instant",
        }),
      }).then((res) => res.json());
    }
    throw error;
  }
};

  // const getMovieRecommendationsSystem=async (gptQuery)=>{
  //   try{

  //    const response= await groq.chat.completions.create({
  //       messages: [{ role: "user", content: gptQuery }],
  //       model: "llama-3.3-70b-versatile",
  //     });
  //     return response
  //   }
  //   catch(error){
  //     if(error?.status===429){
  //       return await groq.chat.completions.create({
  //       messages: [{ role: "user", content: gptQuery }],
  //       model: "llama-3.1-8b-instant", // The "Backup"
  //     }); 
  //     }
  //     throw error
  //   }
  // }

 const handleGptSearchClick = async () => {
  if (isLoading) return;
  setIsLoading(true);

  // In your SearchBar.jsx
const gptQuery = 
  "Act as a Movie Recommendation System for: " + searchText.current.value + 
  ". Suggest 10 to 15 . IMPORTANT: Provide results in this EXACT format: " +
  "Movie Name (Year), Movie Name (Year). " +
  "Example: Sholay (1975), Inception (2010), Tiger 3 (2023).";

  try {
    // 1. Get response from Groq

    const chatCompletion=await getMovieRecommendationsSystem(gptQuery)
   

    const rawText = chatCompletion.choices[0].message.content;

    // 2. Turn the string into an Array
    // This splits "Movie (2010), Movie (2020)" into ["Movie (2010)", "Movie (2020)"]
    console.log(rawText);
    
    const gptMovies = rawText.split(",").map((m) => m.trim());

    console.log(gptMovies)
    // 3. Create a list of TMDB search promises
    const promiseArray = gptMovies.map((movieString) => {
      
      
      const match = movieString.match(/(.*)\s\((\d{4})\)/);

      if (match) {
        const movie = match[1]; // e.g., "Inception"
        const year = match[2]; // e.g., "2010"
        return searchMovieTMDB(movie, year);
      } else {
        // Fallback: If AI fails the format, just search the whole string
        return searchMovieTMDB(movieString, "");
      }
    });

    // 4. Wait for all TMDB searches to finish
    const tmdbResults = await Promise.all(promiseArray);

    // 5. Send to Redux
    dispatch(addGptMovieResults({ 
      movieNames: gptMovies, 
      movieResults: tmdbResults 
    }));
    dispatch(addSeletedItem(null))

  } catch (error) {
   
    alert("Our AI is currently taking a break due to high traffic. Please try again in a few minutes!");

  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="pt-[30%] sm:pt-[10%] md:pt-[1%] px-2 sm:px-4 md:px-6">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto w-full sm:w-11/12 md:w-3/4 lg:w-1/2 bg-black/90 rounded-lg p-1 sm:p-2 md:p-3"
      >
        <div className="grid grid-cols-12 gap-1 sm:gap-2 md:gap-4">
          <input
            ref={searchText}
            type="text"
            className="p-2 sm:p-3 text-xs sm:text-sm md:text-base bg-white col-span-9 rounded-l-md focus:outline-none"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="col-span-3 py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm md:text-base bg-red-500 text-white rounded-r-md hover:bg-red-600 transition-colors"
            onClick={handleGptSearchClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-3 w-3 sm:h-4 sm:w-4 mx-auto" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="hidden sm:inline ml-1">Loading...</span>
              </>
            ) : (
              lang[langKey].search
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
