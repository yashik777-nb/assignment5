import React from "react";

export default function Person(props) {
  return (
    <div onClick={props.clicked}>
      <h1>{props.name}</h1>
      <h6>{props.age}</h6>
    </div>
  );
}
