import React from "react";

import "./index.css";

function Card({ data }) {
  return (
    <section className="card">
      <div className="card-head">{data.name}</div>
      <div className="card-body">{data.totalEarnings}</div>
    </section>
  );
}

export default Card;
