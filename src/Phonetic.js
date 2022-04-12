import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio >= 0) {
    return null;
  } else {
    return (
      <div className="Phonetic">
        <p className="Listen"> 🔊Listen</p>
        <ReactAudioPlayer src={props.phonetic.audio} controls />
        <br />
        {props.phonetic.text}
      </div>
    );
  }
}
