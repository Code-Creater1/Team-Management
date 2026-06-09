import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Statistics from "@/components/statistics/stats";
import Team from "@/components/team/team";
import Footer from "@/components/footer/footer"

export default function Page() {
  return (
    <div className="bg-white">
      {/* <Header /> */}
      <Hero />
      <Statistics />
      <Team/>
      {/* <Footer/> */}
    </div>
  );
}
