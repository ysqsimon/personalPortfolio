import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';
import { smoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling when component mounts
    return () => {
      // Cleanup when component unmounts
      smoothScroll.disable();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
