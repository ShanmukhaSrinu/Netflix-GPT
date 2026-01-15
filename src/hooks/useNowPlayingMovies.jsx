import React, { useEffect } from 'react'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { API_OPTIONS, GETNOWPLAYINGMOVIES } from '../utils/constants'

const useNowPlayingMovies = () => {

    const dispatch =useDispatch()

  const getNowPlayingMovies=async()=>{
    const data=await fetch(GETNOWPLAYINGMOVIES,API_OPTIONS)
    const json=await data.json()
    // console.log(json.results);
     dispatch(addNowPlayingMovies(json.results))
    
  }

  useEffect(()=>{
    getNowPlayingMovies()
   
  },[])

  return 
}

export default useNowPlayingMovies