import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <strong>
              <li key={index}>{synonym}</li>
            </strong>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
