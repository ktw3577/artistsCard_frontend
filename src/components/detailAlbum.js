import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PlayBar } from "./playBar";
const axios = require("axios").default;

export const DetailAlbum = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const audio = useRef(null);

  const togglePlay = (song) => {
    if (currentSong === song) {
      isPlaying ? audio.current.pause() : audio.current.play();
      setPlaying(!isPlaying);
    } else {
      if (audio.current) {
        audio.current.pause();
      }
      setCurrentSong(song);
      setPlaying(true);
      audio.current = new Audio(song);
      audio.current.play();
    }
  };

  const onClick = () => {
    if (isPlaying) {
      audio.current.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:4000/album/detailAlbum${id}`,
        mode: "cors",
      });
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
    console.log(data, "");
  }, []);

  useEffect(() => {
    if (data && data.albumTitle) {
      setLoading(true);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className=" max-w-3xl">
          <div className=" flex mb-4 bg-slate-50">
            <div className="flex-none w-80 h-80 relative">
              <div
                style={{
                  backgroundImage: `url(${data.coverImage})`,
                }}
                className="relative inset-0 w-full h-full bg-cover"
              />
            </div>
            <form className=" flex-auto p-6">
              <div className=" flex flex-wrap">
                <div className=" block mt-4">
                  <div className=" left">아티스트</div>
                  <div className=" right">{data.artist}</div>
                  <div className=" left">앨범 종류</div>
                  <div className="right">{data.albumKinds}</div>
                  <div className=" left">장르</div>
                  <div className="right">{data.genre}</div>
                  <div className=" left">스타일</div>
                  <div className="right">{data.style}</div>
                  <div className=" left">기획사</div>
                  <div className="right">{data.agency}</div>
                  <div className=" left">유통사</div>
                  <div className="right">{data.distributor}</div>
                  <div className=" left">재생 시간</div>
                  <div className="right">{data.playtime}</div>
                </div>
              </div>
            </form>
          </div>
          <div className=" font-bold mb-4 mx-6 text-xl">{"수록곡"}</div>
          <div>
            {data.Music.map((song, index) => (
              <PlayBar
                onClick={() => {
                  togglePlay(song.musicUrl);
                }}
                key={index}
                currentSong={currentSong}
                song={song.musicUrl}
                title={song.musicTitle}
              />
            ))}
          </div>
          <p className="text-white font-bold text-2xl text-center h-8 bg-slate-700 max-w-3xl">
            <Link
              to={"/"}
              onClick={() => {
                onClick();
              }}
            >
              Home
            </Link>
          </p>
        </div>
      ) : null}
    </>
  );
};
