import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import UnderConstruction from "../components/common/UnderConstruction";

export default function Admision() {
  return (
    <>
      <Header />
      <Navigation />
      <UnderConstruction
        title="Admisiones"
        description="La información sobre el proceso de admisión estará disponible próximamente."
      />
      <Footer />
    </>
  );
}
