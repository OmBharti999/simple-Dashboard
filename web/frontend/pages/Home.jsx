
import { Header } from "../components/header";
import { Listing } from "../components/listing";
import { Graph } from "../components/graph";
import { Filter, Table } from "../components/table";

export default function Home() {
  return (
    <>
      <Header />
      <Listing />
      <Graph />
      <Filter />
      <Table />
    </>
  );
}
