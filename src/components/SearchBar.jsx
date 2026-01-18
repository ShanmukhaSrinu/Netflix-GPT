import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const langKey=useSelector(store=>store.gpt.lang)
  // console.log(langKey);
  
  return (
    <div className="pt-[15%]">
     
      <form onSubmit={(e)=>e.preventDefault()} className=" mx-auto w-1/2 relative  bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-8"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-1 px-4 m-4 col-span-4 bg-red-500 text-white  rounded-lg ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
