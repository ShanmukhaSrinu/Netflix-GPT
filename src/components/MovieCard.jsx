import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
 
    
  return (
    <div className='flex-shrink-0 h-64 md:h-80 xl:h-64 2xl:h-80 my-2 md:my-8 aspect-[2/3] bg-center bg-cover rounded-lg snap-start cursor-pointer active:border-2 active:border-white xl:active:border-0 xl:hover:h-72 2xl:hover:h-96 md:hover:my-0 md:hover:shadow-lg transition-all'>
        <img src={IMG_CDN_URL+ posterpath}    alt="movie not found" />
    </div>

  )
}

export default MovieCard

