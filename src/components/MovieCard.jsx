import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

import VideoBackground from './VideoBackground'
import { useDispatch } from 'react-redux'
import { addTrailerMovie } from '../utils/moviesSlice'


const MovieCard = ({movie}) => {
 const {poster_path}=movie
 const dispatch=useDispatch(null)
  
  const handleTrailer=()=>{
   dispatch(addTrailerMovie(movie))
  window.scrollTo({top:0,behavior:'smooth'})

  }

  if(!movie) return
    // console.log(posterpath);
    
  return (
       <div className='flex-shrink-0 h-40 sm:h-48  md:h-64 lg:h-80 my-1 sm:my-2 md:my-4 aspect-[2/3] bg-center bg-cover rounded-lg snap-start cursor-pointer active:border-2 active:border-white hover:shadow-lg transition-all' onClick={handleTrailer}>
      <img src={IMG_CDN_URL+ poster_path} className="w-full h-full object-cover rounded-lg" alt="movie not found" />
    </div>

  )
}

export default MovieCard

