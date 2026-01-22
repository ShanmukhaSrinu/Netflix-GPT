import React from 'react'
import MovieCard from './MovieCard';

const Movieslist = ({title,movies}) => {
    // console.log(movies);
    
  return (
   <div className="px-2 sm:px-4 md:px-6 py-2 sm:py-4">
      <p className="text-base sm:text-lg md:text-xl 2xl:text-3xl font-bold text-white pb-2 sm:pb-4">
        {title}
      </p>

      <div className='flex overflow-x-auto no-scrollbar space-x-2 sm:space-x-2 snap-x snap-mandatory scroll-smooth items-center'>
        {movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Movieslist


