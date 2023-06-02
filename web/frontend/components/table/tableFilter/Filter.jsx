import React from "react";

import "./index.css";

function Filter({ filter, setFilter }) {
  const onOptionChangeHandler = (event) => {
    const filterName = event.target.name;
    const selectedFilter = { [filterName]: event.target.value };

    setFilter((p) => {
      return { ...p, ...selectedFilter };
    });
  };
  return (
    <section className="filter ">
      <input
        type="date"
        className="select date"
        name="dateFilter"
        onChange={onOptionChangeHandler}
      />
      <select
        className="select price"
        name="priceFilter"
        onChange={onOptionChangeHandler}
        value={filter.priceFilter}
      >
        <option value={"all"}>all</option>
        <option value={20000}>below 20k</option>
        <option value={40000}>below 40k</option>
        <option value={60000}>below 60k</option>
      </select>
    </section>
  );
}

export default Filter;
