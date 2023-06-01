import React from "react";

import "./index.css";

function Table({ data, filter }) {
  const tableHeader = Object.keys(data[0]).filter((key) => key !== "id");

  const filterData = data.filter((obj) => {
    if (filter.priceFilter === "all") {
      return obj;
    }
    return filter.priceFilter >= obj.price;
  });
  
  console.log("🚀 ~ file: Table.jsx:15 ~ filterData ~ filterData:", filterData);
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeader.map((field, index) => (
            <th key={index}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterData.map((obj, index) => (
          <tr key={obj.id}>
            {tableHeader.map((field, index) => (
              <td key={obj.id + String(index)}>
                {field === "logo" ? (
                  <img
                    src={obj[field]}
                    alt="airline Logo"
                    width="100px"
                    height="30px"
                  />
                ) : (
                  obj[field]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
