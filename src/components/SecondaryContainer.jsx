// import React, { useState } from 'react'
import Movieslist from './Movieslist'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
import ShimmerUi from './ShimmerUi'

const SecondaryContainer = () => {
  // const [isLoading,setIsLoading]=useState(true)
  // useEffect(()=>{
  //  setIsLoading(false)
  // },[])
  const nowplayingmovies=useSelector(store=>store?.movies?.nowPlayingMovies)
  const popularmovies=useSelector(store=>store?.movies?.PopularMovies)
  const topratedmovies=useSelector(store=>store?.movies?.TopratedMovies)
  const upcomingmovies=useSelector(store=>store?.movies?.UpcomingMovies)


  // if(isLoading)  return <ShimmerUi/>
  if(nowplayingmovies ==null) return <ShimmerUi/>
  
  return (
 <div className='px-2 sm:px-4 md:pl-10 -mt-16 sm:-mt-20 md:-mt-25 relative z-20 bg-black'>
      <Movieslist title={"Now Playing"} movies={nowplayingmovies}/>
      <Movieslist title={"Popular"} movies={popularmovies}/>
      <Movieslist title={"Top Rated"} movies={topratedmovies}/>
      <Movieslist title={"Upcoming"} movies={upcomingmovies}/>
    </div>
  
  )
}

export default SecondaryContainer

 {/*
      
      Movielist- Popular
        -cards * n
      Movielist- Now playing
      Movielist- Top Rated
      movielist - Upcoming
       */}