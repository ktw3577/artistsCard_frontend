import React, { useEffect, useState } from "react";

export const PlayBar = (onClick) => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (onClick.song !== onClick.currentSong) {
      setIsPlaying(false);
    }
  });
  return (
    <div className=" flex w-full h-14 mx-4 mb-3 hover:bg-slate-100 justify-between max-w-3xl">
      <div className=" font-medium">{onClick.title}</div>
      <button
        onClick={() => {
          onClick.onClick();
          setIsPlaying(!isPlaying);
        }}
      >
        <div
          className=" w-10 h-10 mr-5 bg-center bg-cover float-right"
          style={{
            backgroundImage: isPlaying
              ? "url(https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-03-512.png)"
              : "url(https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-01-512.png)",
          }}
        ></div>
      </button>
    </div>
  );
};
