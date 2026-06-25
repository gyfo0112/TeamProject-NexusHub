import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Partner from "../../components/Partner";
import OpsDashboard from "../../components/OpsDashboard";
import DataChart from "../../components/DataChart";
import Terminal from "../../components/Terminal";
import Help from "../../components/Help";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Partner />
      <OpsDashboard />
      <DataChart />
      <Terminal />
      <Help />
    </>
  );
}
