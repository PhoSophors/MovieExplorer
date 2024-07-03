import React from "react";
import SearchMovies from "./SearchMovies";

const Hero = () => {
  return (
    <div className="max-w-screen-full mx-auto xl:p-0 md:p-3 p-3 flex flex-col items-center justify-center relative">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/6466588/6466588-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="text-center xl:mt-20 md:mt-10 mt-5 z-10 pt-20">
        <h1 className="xl:text-6xl md:text-4xl text-3xl flex text-start font-bold mt-20">
          Welcome to KH Movies
        </h1>
        <p className="xl:text-3xl md:text-2xl text-xl flex text-start font-semibold">
          Millions of movies, TV shows, and people to discover. Explore now.
        </p>
        <div className="mt-8 xl:mb-20 md:mb-10 mb-5">
          <SearchMovies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
