import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

  //Fetch Data from TMDB API and update store using hook
  useNowPlayingMovies()



  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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