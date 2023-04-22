import CarouselProducts from "./components/sections/CarouselProducts";
import FooterSection from "./components/sections/FooterSection";
import HeaderSection from "./components/sections/HeaderSection";
import PromoBanner from "./components/sections/PromoBanner";

function App() {
  return (
    <>
      <PromoBanner />
      <HeaderSection />
      <CarouselProducts />
      <FooterSection />
    </>
  );
}

export default App;
