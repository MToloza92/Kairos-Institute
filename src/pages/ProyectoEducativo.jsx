import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import UnderConstruction from "../components/common/UnderConstruction";

export default function ProyectoEducativo() {
  return (
    <>
      <Header />
      <Navigation />
      <UnderConstruction
        title="Proyecto Educativo"
        description="Estamos estructurando la presentación completa de nuestro proyecto educativo institucional."
      />
      <Footer />
    </>
  );
}
