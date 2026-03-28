import Link from 'react-scroll/modules/components/Link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiArrowNarrowRight } from 'react-icons/hi';
import Stars from './Stars';
import ProfilePicture from '../assets/images/profile/menew.jpeg';

const Home = () => {
  const social = {
    linkedin: 'https://www.linkedin.com/in/kushagr-jain-40502621b/',
    github: 'https://github.com/kushagr432',
    email: 'mailto:kushagr998@gmail.com',
  };

  return (
    <>
      <Stars />
      <section
        className='w-full flex justify-center items-center flex-col pt-20 min-h-screen relative bg-transparent'
        name='home'>
        <div className='w-full max-w-[980px] flex flex-col justify-center mx-auto px-6 md:px-8 py-16 md:py-0'>
          <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16'>

            {/* Left: Text */}
            <div className='flex-1 text-center md:text-left'>
              <p className='text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-4'>
                Full-Stack Developer &amp; DevOps Engineer · India
              </p>

              <h1 className='text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold leading-[1.15] mb-5 text-theme-white'>
                I help startups{' '}
                <span className='text-accent'>build &amp; deploy</span>{' '}
                fast, scalable web apps on AWS
              </h1>

              <p className='text-theme-white/65 text-base md:text-lg leading-relaxed mb-9 max-w-lg mx-auto md:mx-0'>
                Reduce load time, eliminate downtime, and ship faster —
                with <span className='text-theme-white/90 font-medium'>React, Django &amp; CI/CD</span> pipelines
                that actually work.
              </p>

              {/* CTAs */}
              <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-10'>
                <Link to='contact' smooth={true} duration={600}>
                  <button className='w-full sm:w-auto px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm md:text-base duration-200 shadow-lg shadow-accent/20'>
                    Get Free Website Audit
                  </button>
                </Link>
                <Link to='works' smooth={true} duration={600}>
                  <button className='w-full sm:w-auto px-7 py-3.5 border border-white/20 hover:border-accent hover:text-accent text-theme-white font-semibold rounded-lg text-sm md:text-base duration-200 flex items-center justify-center gap-2 group'>
                    View My Work
                    <HiArrowNarrowRight className='group-hover:translate-x-1 duration-200' />
                  </button>
                </Link>
              </div>

              {/* Trust signal */}
              <div className='flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-start mb-7'>
                {['10+ Projects Shipped', '92 Avg. Lighthouse Score', 'Zero-Downtime Deploys'].map((item) => (
                  <span key={item} className='flex items-center gap-1.5 text-xs text-theme-white/45'>
                    <span className='w-1 h-1 rounded-full bg-accent/60' />
                    {item}
                  </span>
                ))}
              </div>

              {/* Social */}
              <div className='flex items-center gap-5 justify-center md:justify-start'>
                <a href={social.linkedin} target='_blank' rel='noreferrer'
                  className='text-theme-white/40 hover:text-accent duration-200'>
                  <FaLinkedin size={19} />
                </a>
                <a href={social.github} target='_blank' rel='noreferrer'
                  className='text-theme-white/40 hover:text-accent duration-200'>
                  <FaGithub size={19} />
                </a>
                <a href={social.email}
                  className='text-theme-white/40 hover:text-accent duration-200'>
                  <HiOutlineMail size={20} />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className='flex-shrink-0'>
              <div
                className='w-52 h-52 md:w-[280px] md:h-[280px] rounded-2xl border border-accent/20 bg-center bg-no-repeat bg-cover shadow-2xl shadow-black/50'
                style={{ backgroundImage: `url(${ProfilePicture})` }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
