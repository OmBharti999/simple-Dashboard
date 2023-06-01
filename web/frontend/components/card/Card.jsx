import React from "react";

import "./index.css";

function Card({ data }) {
  const { name, totalEarnings, logo } = data;
  return (
    <section className="card">
      <div className="airlines-logo">
        <img src={logo} />
      </div>
      <div className="card-head">{name}</div>
      <div className="card-body">{totalEarnings}</div>
    </section>
  );
}

export default Card;
