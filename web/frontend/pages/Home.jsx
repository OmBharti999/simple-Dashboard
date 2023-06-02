import { Header } from "../components/header";
import { Listing } from "../components/listing";
import { Graph } from "../components/graph";
import { Filter, Table } from "../components/table";
import { airLineData } from "./rawData";
import { cardArray, labelsProducer } from "../utils/airlineData";
import { useState } from "react";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [filter, setFilter] = useState({ dateFilter: "", priceFilter: "all" });
  const [filterData, setFilterData] = useState(airLineData);
  const airlinelabel = labelsProducer(airLineData);
  const airLineYerlyCollectionCardData = cardArray(airlinelabel, airLineData);
  const airLineYerlyCollectionGraphData = cardArray(airlinelabel, filterData);
  return (
    <>
      <Header />
      <Listing collection={airLineYerlyCollectionCardData} />
      <Graph collection={airLineYerlyCollectionGraphData} />
      <Filter filter={filter} setFilter={setFilter} />
      <Table data={airLineData} filter={filter} setFilterData={setFilterData} />
      <Footer />
    </>
  );
}
