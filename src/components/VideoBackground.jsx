import { API_OPTIONS } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  // Using this hook to fetch trailer and add it to the Redux store
  useTrailerVideo(movieId);

  // Subscribing to the store
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);

  return (
    <div className="w-full ">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1&enablejsapi=1&controls=0&modestbranding=1"}
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
