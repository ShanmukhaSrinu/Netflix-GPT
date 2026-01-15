import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS,  GETPOPULARMOVIES } from '../utils/constants'
import { addPopularMovies } from '../utils/moviesSlice'


const usePopularMovies = () => {

    const dispatch =useDispatch()

  const getPopularMovies=async()=>{
    const data=await fetch(GETPOPULARMOVIES,API_OPTIONS)
    const json=await data.json()
    // console.log(json.results);
     dispatch(addPopularMovies(json.results))
    
  }

  useEffect(()=>{
    getPopularMovies()
   
  },[])

  return 
}

export default usePopularMovies