import React from "react";
import { Card } from "../card";

import "./index.css";

function Listing({ collection }) {
  return (
    <section className="listing">
      {collection.map((i, key) => (
        <Card data={i} key={"key-" + String(key)} />
      ))}
    </section>
  );
}

export default Listing;
