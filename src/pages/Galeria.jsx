import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import UnderConstruction from "../components/common/UnderConstruction";

export default function Galeria() {
  return (
    <>
      <Header />
      <Navigation />
      <UnderConstruction
        title="Galería"
        description="Próximamente podrás conocer la vida escolar y nuestras actividades a través de imágenes y registros visuales."
      />
      <Footer />
    </>
  );
}
