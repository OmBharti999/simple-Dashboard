import React from "react";

import "./index.css";

function Header({ filter, setFilter }) {
  const updateFilter = (e) => {
    console.log(e.target.value);
    setFilter((prev) => {
      return { ...prev, airlinesName: e.target.value };
    });
  };
  return (
    <header>
      <input value={filter.airlinesName} onChange={updateFilter} />
      <button>Search</button>
    </header>
  );
}

export default Header;
