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
    <>
      <div className="filterTilte">Try adjusting the filter from year 2018</div>
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
          <option className="option" value={"all"}>all</option>
          <option value={20000}>Upto 20k</option>
          <option value={40000}>Upto 40k</option>
          <option value={60000}>Upto 60k</option>
        </select>
      </section>
    </>
  );
}

export default Filter;
