import React from "react";
import { Routes, Route } from "react-router-dom";
import { DetailAlbum } from "./components/detailAlbum";
import { Home } from "./components/home";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailAlbum/:id" element={<DetailAlbum />} />
      </Routes>
    </div>
  );
};
