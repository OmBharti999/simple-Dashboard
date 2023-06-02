import React from "react";

import "./index.css";

function Header({ filter, setFilter }) {
  const updateFilter = (e) => {
    setFilter((prev) => {
      return { ...prev, airlinesName: e.target.value };
    });
  };
  const clearFilter = () => {
    setFilter((prev) => {
      return { ...prev, airlinesName: "" };
    });
  };
  return (
    <header>
      <input value={filter.airlinesName} onChange={updateFilter} />
      <button onClick={clearFilter}>Clear</button>
    </header>
  );
}

export default Header;
