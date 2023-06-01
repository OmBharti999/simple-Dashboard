import React from "react";

import "./index.css";

function Filter() {
  return (
    <section className="filter ">
      <select className="select date">
        <option>current month</option>
        <option>past 3 month</option>
        <option>current year</option>
      </select>

      <select className="select price">
        <option>below 1000</option>
        <option>below 2000</option>
        <option>below 5000</option>
      </select>
    </section>
  );
}

export default Filter;
