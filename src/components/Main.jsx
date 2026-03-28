import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';
import Trust from './Trust';
import Contact from './Contact';

const Main = () => {
  return (
    <main className='bg-theme-black text-theme-white'>
      <Home />
      <About />
      <Services />
      <Skills />
      <Works />
      <Trust />
      <Contact />
    </main>
  );
};

export default Main;
