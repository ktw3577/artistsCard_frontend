import React from "react";
import { Link } from "react-router-dom";

export const Album = (albumData) => {
  const { id, albumTitle, coverImage, artist } = albumData.albumData;
  return (
    <Link to={`/detailAlbum/${id}`}>
      <div className=" flex mb-4 bg-slate-50">
        <div className="flex-none w-48 h-64 relative">
          <div
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
            className="relative inset-0 w-full h-full bg-cover"
          />
        </div>
        <form className=" flex-auto p-6">
          <div className=" flex flex-wrap">
            <h1 className=" flex-auto text-lg font-semibold text-slate-900">
              {albumTitle}
            </h1>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {artist}
            </div>
          </div>
        </form>
      </div>
    </Link>
  );
};
