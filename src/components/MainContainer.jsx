import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const trailerMovie = useSelector((store) => store?.movies?.trailerMovie);
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  let title, overview, id;

  if (!trailerMovie && movies?.length > 0) {
    const mainMovie = movies[0];
    ({ title, overview, id } = mainMovie);
  } else if (trailerMovie) {
    ({ title, overview, id } = trailerMovie);
  }

   if (!title || !overview || !id) {
    return (
      <div className="w-full  flex items-center justify-center bg-black">
        <div className="text-black text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-[20%] bg-black md:pt-0  "
>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};


export default MainContainer;
