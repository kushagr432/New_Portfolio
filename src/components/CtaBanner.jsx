import Link from 'react-scroll/modules/components/Link';
import { HiArrowNarrowRight } from 'react-icons/hi';

const CtaBanner = () => {
  return (
    <section className='w-full pt-16 md:pt-20'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <div className='relative overflow-hidden bg-gradient-to-br from-accent/[0.12] to-accent/[0.04] border border-accent/25 rounded-2xl px-6 md:px-12 py-10 md:py-12 text-center'>
          <div className='absolute inset-0 pointer-events-none'>
            <div className='absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent/[0.06] blur-3xl' />
            <div className='absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-accent/[0.04] blur-3xl' />
          </div>
          <div className='relative z-10'>
            <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-3'>Free — No Commitment</p>
            <h2 className='text-2xl md:text-3xl font-extrabold text-theme-white mb-3 leading-snug'>
              Want to improve your website performance?
            </h2>
            <p className='text-theme-white/55 text-base mb-8 max-w-lg mx-auto leading-relaxed'>
              Send me your URL. I'll come back with a detailed audit — load time, Lighthouse,
              architecture, and what to fix first. Completely free.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
              <Link to='contact' smooth={true} duration={600}>
                <button className='w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm md:text-base duration-200 shadow-lg shadow-accent/20'>
                  Get Free Website Audit
                </button>
              </Link>
              <Link to='contact' smooth={true} duration={600}>
                <button className='w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:border-accent hover:text-accent text-theme-white font-semibold rounded-lg text-sm md:text-base duration-200 flex items-center justify-center gap-2 group'>
                  Contact Me
                  <HiArrowNarrowRight className='group-hover:translate-x-1 duration-200' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
