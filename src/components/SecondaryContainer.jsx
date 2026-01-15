import React from 'react'
import Movieslist from './Movieslist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowplayingmovies=useSelector(store=>store?.movies?.nowPlayingMovies)
  const popularmovies=useSelector(store=>store?.movies?.PopularMovies)
  const topratedmovies=useSelector(store=>store?.movies?.TopratedMovies)
  const upcomingmovies=useSelector(store=>store?.movies?.UpcomingMovies)
  if(nowplayingmovies ==null) return
  

  return (

    <div className='pl-10 -mt-25 relative z-20'>
    <Movieslist title={"Now Playing"} movies={nowplayingmovies}/>
    <Movieslist title={"Popular"} movies={popularmovies}/>
     <Movieslist title={"Top Rated"} movies={topratedmovies}/>
      <Movieslist title={"Upcoming"} movies={upcomingmovies}/>   

      {/*
      
      Movielist- Popular
        -cards * n
      Movielist- Now playing
      Movielist- Top Rated
      movielist - Upcoming
       */}
    </div>
  
  )
}

export default SecondaryContainer