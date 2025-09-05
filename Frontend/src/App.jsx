import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import HomeSection from './Components/HomeSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
     <Header />
     <HomeSection />
    <About />
   <Skills />
    <Projects />
    <ContactForm />
    <Footer />
    
      
    </div>
  );
}

export default App;