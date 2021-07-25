import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "./components/Hero";
import { SiteContextProvider } from "./Data/context";
import About from "./components/About";
import Services from "./components/Services";
import Testomonial from "./components/Testomonial";
import Product from "./components/Product";
import Footer from "./components/Footer";
function App() {
  return (
    <SiteContextProvider>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Testomonial />
      <Product />
      <Footer />
    </SiteContextProvider>
  );
}

export default App;
