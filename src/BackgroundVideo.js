import React from "react";
import BackgroundVideo from "./images/sunset.mp4";
import "./BackgroundVideo.css";

export default function BackgroundVideo() {
  return (
    <div className="BackgroundVideo">
      <video autoplay loop muted>
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
