import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import Hero from "../components/sections/Hero";
import Pillars from "../components/sections/Pillars";
import AllTeaches from "../components/sections/AllTeaches";
import HomeDivider1 from "../components/sections/HomeDivider1";
import HomeDivider2 from "../components/sections/HomeDivider2";
import Contact from "../components/sections/Contact";
import Map from "../components/sections/Map";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Navigation />
      <AllTeaches />
      <HomeDivider1 />
      <Pillars />
      <HomeDivider2 />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}
