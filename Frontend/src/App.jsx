import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import HomeSection from "./Components/HomeSection";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import ScrollAnimatedSection from "./Components/ScrollAnimatedSection";

function App() {
  return (
    <div>

        <Header/>
      

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
