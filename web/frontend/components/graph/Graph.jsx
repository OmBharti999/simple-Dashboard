import { VictoryBar, VictoryChart } from "victory";

const data = [
  { quarter: 0, earnings: 0 },
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

// <>graph</>
function Graph() {
  return (
    <section style={{ width: "400px", height: "300px" }}>
      <VictoryChart>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </section>
  );
}

export { Graph };
