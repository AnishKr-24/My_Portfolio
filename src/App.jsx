import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Certification from './components/Certification'; // ✅ fixed spelling & path
import { defaultSEO } from './config/seo';

function App() {
  return (
    <HelmetProvider>
      <div className='bg-white'>
        <SEO 
          title={defaultSEO.title}
          description={defaultSEO.description}
          name={defaultSEO.twitter.handle}
        />
        <Navbar />
        <Homepage />
        <Projects />
        <Skills />
        <Certification /> {/* ✅ added in correct place */}
        <About />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
