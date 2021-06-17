import React, { useEffect, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { http } from "api";
// import http from "axios";

const Discover = () => {
  const [state, setState] = useState({
    newReleases: [],
    playlists: [],
    categories: [],
  });

  useEffect(() => {
    http({
      method: "post",
      url: "/api/token",
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);

  const { newReleases, playlists, categories } = state;

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock
        text="BROWSE"
        id="browse"
        data={categories}
        imagesKey="icons"
      />
    </div>
  );
};

export default Discover;
