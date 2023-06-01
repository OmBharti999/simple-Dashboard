import React from "react";
import dayjs from "dayjs";

import "./index.css";

function Filter({ filter, setFilter }) {
  const current_month = dayjs().format("MM-YYYY");
  // const past_3_month = `${dayjs().month() - 2}-${dayjs().year()}`; // display
  const past_3_month = dayjs().subtract(3, "month");
  const current_year = dayjs().format("YYYY");
  console.log(past_3_month, current_month);
  const dateFilter = 0;
  const priceFilter = 0;

  const onOptionChangeHandler = (event) => {
    console.log(
      "User Selected Value - ",
      event.target.name,
      event.target.value
    );
    const filterName = event.target.name;
    const selectedFilter = { [filterName]: event.target.value };

    setFilter((p) => {
      return { ...p, ...selectedFilter };
    });
  };
  return (
    <section className="filter ">
      <select
        className="select date"
        name="dateFilter"
        onChange={onOptionChangeHandler}
      >
        <option>current month</option>
        <option>past 3 month</option>
        <option>current year</option>
      </select>

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
