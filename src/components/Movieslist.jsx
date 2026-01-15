import React from 'react'
import MovieCard from './MovieCard';

const Movieslist = ({title,movies}) => {
    // console.log(movies);
    
  return (
    <div>
            
        
       <p className=" text-lg md:text-xl 2xl:text-3xl font-bold text-white ">{title}</p>

        <div className='flex overflow-x-auto no-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth items-center'>
            {movies?.map(movie=><MovieCard key={movie.id} posterpath={movie.poster_path} />)}
            
        </div>

    </div>
  )
}

export default Movieslist


