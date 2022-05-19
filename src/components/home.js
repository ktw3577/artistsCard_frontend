import React, { useEffect, useState } from "react";
import { Album } from "./album";
const axios = require("axios").default;

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:4000/album",
        mode: "cors",
      });
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl">
      <div className=" font-sans font-bold text-4xl text-center my-3">
        {"ArtistsCard coding test"}
      </div>
      <div>
        {data.map((albumData, index) => {
          return <Album key={index} albumData={albumData} />;
        })}
      </div>
    </div>
  );
};
