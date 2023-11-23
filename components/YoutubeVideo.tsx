import React from 'react';
import styled from 'styled-components';

import playIcon from '../public/play-icon.svg';

interface YoutubeVideoProps {
  title?: string;
  url: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const { title, url } = props;
  const videoHash = extractVideoHashFromUrl(url);
  const srcDoc = `<style>
  
  img,
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .thumbnail {
    object-fit: cover;
  }

  
  .play {
    display: flex;
    justify-content: center;
    display: block;
    height: 10vw;
    width: 100%;
  }
  </style>
  <a style="color: rgb(var(--primary))" href=https://www.youtube.com/embed/${videoHash}?autoplay=1&mute=1>
    <img class="thumbnail" src="https://img.youtube.com/vi/${videoHash}/hqdefault.jpg" alt='${title || ''}'>
   
    <img class="play" src="${playIcon}" alt="Play the video">
  </a>`;

  return (
    <VideoFrame
      width="100%"
      height="100%"
      srcDoc={srcDoc}
      frameBorder="0"
      scrolling="no"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
      loading="lazy"
    />
  );
}

function extractVideoHashFromUrl(url: string) {
  const videoHashQueryParamKey = 'v';
  const searchParams = new URL(url).search;
  return new URLSearchParams(searchParams).getAll(videoHashQueryParamKey);
}

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
