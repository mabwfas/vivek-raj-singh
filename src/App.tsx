import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Process from './components/Process';
import Skills from './components/Skills';
import YouTube from './components/YouTube';
import FiverrReviews from './components/FiverrReviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden antialiased">
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Experience />
      <Projects />
      <CaseStudy />
      <Process />
      <Skills />
      <YouTube />
      <FiverrReviews />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
