import { Routes, Route } from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
