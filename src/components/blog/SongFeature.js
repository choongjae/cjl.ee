import React from "react";
import styled from "styled-components";

const SongFeature = (props) => {
  return (
    <div>
      <SongFeatureH1>{props.songName}</SongFeatureH1>
      <SongFeatureH2>
        {props.songArtist}, {props.songYear}
      </SongFeatureH2>
      <iframe width="640" height="360" src={props.songLink} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      {/* For Spotify: <iframe style={{"border-radius":"12px"}} src={props.songLink} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
    </div>
  );
};

export default SongFeature;

const SongFeatureH1 = styled.h1`
  font-family: "Caveat";
  font-weight: bold;
  font-size: 46px;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const SongFeatureH2 = styled.h2`
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
`;
