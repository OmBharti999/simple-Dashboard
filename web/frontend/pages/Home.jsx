import { Header } from "../components/header";
import { Listing } from "../components/listing";
import { Graph } from "../components/graph";
import { Filter, Table } from "../components/table";
import { airLineData } from "./rawData";
import { cardArray, labelsProducer } from "../utils/airlineData";

export default function Home() {
  const airlinelabel = labelsProducer(airLineData);
  const airLineYerlyCollectionCardData = cardArray(airlinelabel, airLineData);
  return (
    <>
      <Header />
      <Listing collection={airLineYerlyCollectionCardData} />
      <Graph collection={airLineYerlyCollectionCardData}  />
      <Filter />
      <Table data={airLineData} />
    </>
  );
}
