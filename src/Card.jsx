// src/Card.js
import React from "react";
import "./Card.css";

function Card({ tick }) {
  return (
    <div className="card">
      <h2>{tick.title}</h2>
      <p>Status: {tick.status}</p>
      <p>User: {tick.userId}</p>
    </div>
  );
}

export default Card;
