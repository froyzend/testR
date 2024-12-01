import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToSection from "./components/ScrollToSection/ScrollToSection";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Starfield from "react-starfield";
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const ContactForm = lazy(() => import("./components/ContactForm/ContactForm"));

function App() {
  return (
    <div>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <ScrollToSection />
      <Header />
      <Suspense fallback={<Loader />}>
        <About />
        <Projects />
        <ContactForm />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
