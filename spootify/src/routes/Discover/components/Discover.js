import React, { useEffect, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import { http } from "api";
import { SpotifyApiContext } from "react-spotify-api";
import axios from "axios";

const Discover = () => {
  const [state, setState] = useState({
    newReleases: [],
    playlists: [],
    categories: [],
  });

  useEffect(() => {
    axios({
      url: "https://accounts.spotify.com/api/token",
      method: "POST",
      params: {
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: "code",
        redirect_uri: "http://localhost:3000",
      },
    }).then((res) => console.log(res.data));
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
