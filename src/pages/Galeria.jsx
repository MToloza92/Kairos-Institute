import Header from "../components/common/Header";
import PageHero from "../components/sections/PageHero";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import UnderConstruction from "../components/common/UnderConstruction";

export default function Galeria() {
  return (
    <>
      <Header />
      <PageHero
        backgroundImage="/images/pages/galeria-hero.jpeg"
        title="Galería"
        description="Mantente actualizado con los eventos especiales de Kairos Institute."
        overlayOpacity={50}
      />
      <Navigation />
      <UnderConstruction
        title=""
        description="Próximamente podrás conocer la vida escolar y nuestras actividades a través de imágenes y registros visuales."
      />
      <Footer />
    </>
  );
}
