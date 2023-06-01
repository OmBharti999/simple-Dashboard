import { VictoryBar, VictoryChart } from "victory";

import "./index.css";

function Graph({ collection }) {
  const data = collection.map((obj) => ({
    quarter: obj.name,
    earnings: obj.totalEarnings,
  }));
  return (
    <section className="graph">
      <VictoryChart>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </section>
  );
}

export { Graph };
