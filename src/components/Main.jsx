import Home from './Home';
import About from './About';
import PainPoints from './PainPoints';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';
import CtaBanner from './CtaBanner';
import Trust from './Trust';
import Contact from './Contact';

const Main = () => {
  return (
    <main className='bg-theme-black text-theme-white'>
      <Home />
      <PainPoints />
      <Services />
      <Skills />
      <Works />
      <CtaBanner />
      <Trust />
      <About />
      <Contact />
    </main>
  );
};

export default Main;
