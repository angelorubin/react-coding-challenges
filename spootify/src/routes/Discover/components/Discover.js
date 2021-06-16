import React, { useEffect, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { httpAuth } from "api";

const Discover = () => {
  const [state, setState] = useState({
    newReleases: [],
    playlists: [],
    categories: [],
  });

  useEffect(() => {
    httpAuth("").then((data) => console.log(data));
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
