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
    const client_id = "db6d9d593dfa403db0c080c0eff7f7b3";
    const client_secret = "94f5e73dc2dc49738e2d896489d6c9c6";
    const redirect_uri = encodeURIComponent("https://www.terra.com.br");
    let scopes = encodeURIComponent("user-read-private user-read-email");
    const response_type = "code";
    const url = "https://accounts.spotify.com/api/token";
    const headers = {
      "Access-Control-Allow-Credentials": false,
      Accept: "application/json",
    };

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
