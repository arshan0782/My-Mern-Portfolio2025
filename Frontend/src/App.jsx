import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import HomeSection from "./Components/HomeSection";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import ScrollAnimatedSection from "./Components/ScrollAnimatedSection";
import Preloader from "./Components/Preloader"; // 🔹 Preloader import

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Website load hone ke baad preloader hatane ka time (2 sec example)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // 🔹 Agar loading true hai to Preloader dikhao
  }

  return (
    <div>
      <Header />

      <ScrollAnimatedSection>
        <HomeSection />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <About />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Skills />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Projects />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <ContactForm />
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Footer />
      </ScrollAnimatedSection>
    </div>
  );
}

export default App;
