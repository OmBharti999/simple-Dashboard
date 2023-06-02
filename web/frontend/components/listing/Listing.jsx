import React from "react";
import { Card } from "../card";

import "./index.css";

function Listing({ collection }) {
  return (
    <main className="main-ls-cards">
      <div className="listing-title">Our Listing Partners Profit</div>
      <section className="listing">
        {collection.map((i, key) => (
          <Card data={i} key={"key-" + String(key)} />
        ))}
      </section>
    </main>
  );
}

export default Listing;
