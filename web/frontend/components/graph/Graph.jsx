import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

import "./index.css";

function Graph({ collection }) {
  const data = collection.map((obj) => ({
    quarter: obj.name,
    earnings: obj.totalEarnings,
    label: `${obj.name} - $${obj.totalEarnings}`,
  }));
  return (
    <section className="graph">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={50}
        animate={{ duration: 3000, easing: "bounce" }}
        height={400}
        width={700}
        style={{ background: { fill: "#dde6ed" } }}
      >
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x / 1000}k`}
        />
        <VictoryBar
          style={{ data: { fill: "#27374d", width: 28 } }}
          data={data}
          x="quarter"
          y="earnings"
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </section>
  );
}

export { Graph };
