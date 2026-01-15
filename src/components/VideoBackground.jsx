import { API_OPTIONS } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {

// using this hook Fetch Trailer  and add into redux store 
  useTrailerVideo(movieId)


  // subscribing to store
    const trailerVideo=useSelector(store=>store.movies.trailerVideos)
   
  return (
    <div>
      <iframe
       className="w-screen aspect-video"
       src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&loop=1" }
        
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
