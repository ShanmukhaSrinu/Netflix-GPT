import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useTrailerVideo = (movieId) => {
  const dispatch=useDispatch()
 // instead of using this use redux store
    // const [YoutubeKey,setYoutubeKey]=useState(null)

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filtertrailer = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];

    // console.log(trailer);

    dispatch(addTrailerVideo(trailer))


    // setYoutubeKey(trailer.key)   don't use state varibles, use redux for good practice
    
  };

  useEffect(() => {
    getMovieVideos();
  }, []);




  return 
    
  
}

export default useTrailerVideo