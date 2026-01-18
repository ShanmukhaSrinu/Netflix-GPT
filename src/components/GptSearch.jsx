import React from 'react'
import SearchBar from './SearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND_SRC, NETFLIX_BACKGROUND_SRCSET } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
       <div className="absolute ">
        <img
          src={NETFLIX_BACKGROUND_SRC}
          srcSet={NETFLIX_BACKGROUND_SRCSET}
          alt=""
          aria-hidden="true"
          className="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
      <SearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch