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
                Full-Stack Developer &amp; DevOps Engineer
              </p>
              <h1 className='text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight mb-5 text-theme-white'>
                I help startups{' '}
                <span className='text-accent'>build &amp; deploy</span>{' '}
                scalable web apps with zero downtime
              </h1>
              <p className='text-theme-blue-100 text-base md:text-lg font-medium mb-9 tracking-wide'>
                React&nbsp;&nbsp;·&nbsp;&nbsp;Django&nbsp;&nbsp;·&nbsp;&nbsp;AWS&nbsp;&nbsp;·&nbsp;&nbsp;CI/CD
              </p>

              {/* CTAs */}
              <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-10'>
                <Link to='contact' smooth={true} duration={600}>
                  <button className='w-full sm:w-auto px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm md:text-base duration-200 shadow-lg'>
                    Get Free Website Audit
                  </button>
                </Link>
                <Link to='works' smooth={true} duration={600}>
                  <button className='w-full sm:w-auto px-7 py-3.5 border border-white/20 hover:border-accent hover:text-accent text-theme-white font-semibold rounded-lg text-sm md:text-base duration-200 flex items-center justify-center gap-2 group'>
                    View Case Studies
                    <HiArrowNarrowRight className='group-hover:translate-x-1 duration-200' />
                  </button>
                </Link>
              </div>

              {/* Social */}
              <div className='flex items-center gap-5 justify-center md:justify-start'>
                <a
                  href={social.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  className='text-theme-white/50 hover:text-accent duration-200'>
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={social.github}
                  target='_blank'
                  rel='noreferrer'
                  className='text-theme-white/50 hover:text-accent duration-200'>
                  <FaGithub size={20} />
                </a>
                <a
                  href={social.email}
                  className='text-theme-white/50 hover:text-accent duration-200'>
                  <HiOutlineMail size={21} />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className='flex-shrink-0'>
              <div
                className='w-52 h-52 md:w-[280px] md:h-[280px] rounded-2xl border border-accent/20 bg-center bg-no-repeat bg-cover shadow-2xl'
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
