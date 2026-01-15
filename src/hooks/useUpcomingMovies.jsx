import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS,  GETPOPULARMOVIES, GETUPCOMINGMOVIES } from '../utils/constants'
import { addUpcomingMovies } from '../utils/moviesSlice'


const useUpcomingMovies= () => {

    const dispatch =useDispatch()

  const getUpcomingMovies=async()=>{
    const data=await fetch(GETUPCOMINGMOVIES,API_OPTIONS)
    const json=await data.json()
    // console.log(json.results);
     dispatch(addUpcomingMovies(json.results))
    
  }

  useEffect(()=>{
    getUpcomingMovies()
   
  },[])

  return 
}

export default useUpcomingMovies