import React from "react";
import BackgroundVideo from "./images/sunset.mp4";
import "./BackgroundVideo.css";

export default function BackgroundVideo(props) {
  if (props.backgroundvideo.video >= 0) {
    return null;
  } else {
    return (
      <div className="BackgroundVideo">
        <video autoplay loop muted>
          <source src={props.backgroundvideo.video} type="video/mp4" />
        </video>
      </div>
    );
  }
}
