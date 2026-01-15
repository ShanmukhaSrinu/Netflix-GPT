import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS,  GETPOPULARMOVIES, GETTOPRATEDMOVIES } from '../utils/constants'
import {  addTopratedMovies } from '../utils/moviesSlice'


const useTopratedMovies = () => {

    const dispatch =useDispatch()

  const getTopratedMovies=async()=>{
    const data=await fetch(GETTOPRATEDMOVIES,API_OPTIONS)
    const json=await data.json()
    // console.log(json.results);
     dispatch(addTopratedMovies(json.results))
    
  }

  useEffect(()=>{
    getTopratedMovies()
   
  },[])

  return 
}

export default useTopratedMovies