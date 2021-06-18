import React, { useEffect, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
// import { http } from "api";
let SpotifyWebApi = require("spotify-web-api-js");

const Discover = () => {
  const [state, setState] = useState({
    newReleases: [],
    playlists: [],
    categories: [],
  });

  useEffect(() => {
    // http.get("/api/token").then((res) => console.log(res.data));

    let spotifyApi = new SpotifyWebApi({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      redirectUri: encodeURIComponent(process.env.REACT_APP_REDIRECT_URI),
    });

    // spotifyApi.setAccessToken(process.env.REACT_APP_CLIENT_ID);
    console.log(spotifyApi);
    spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (err, data) {
      if (err) console.error(err);
      else console.log("Artist albums", data);
    });
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
