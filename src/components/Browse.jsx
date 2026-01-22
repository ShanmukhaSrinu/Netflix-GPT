import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'


const Browse = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  //Fetch  Movies Data from TMDB API and update store using hooks
  useNowPlayingMovies()
  usePopularMovies()
  useTopratedMovies()
  useUpcomingMovies()




  return (
    <div >
      <Header/>
      {
        showGptSearch? <GptSearchPage/>:
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
        
      }
     
      
      {/*
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - cards * n
      */}
    </div>
  )
}

export default Browse