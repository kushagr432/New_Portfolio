import { HiOutlineCode } from 'react-icons/hi';
import { FaAws } from 'react-icons/fa';
import { MdSpeed } from 'react-icons/md';
import Link from 'react-scroll/modules/components/Link';

const services = [
  {
    Icon: HiOutlineCode,
    title: 'Web Development',
    subtitle: 'React + Django',
    description:
      'Full-stack web apps from design to production. Clean, maintainable code with modern React frontends and robust Django REST APIs.',
    highlights: ['React / TypeScript SPAs', 'Django REST APIs', 'PostgreSQL & MongoDB'],
  },
  {
    Icon: FaAws,
    title: 'DevOps & Cloud',
    subtitle: 'AWS + CI/CD',
    description:
      'Automated deployments, infrastructure as code, and zero-downtime releases. I set up the pipelines so you never worry about shipping again.',
    highlights: ['AWS EC2 / S3 / RDS', 'GitHub Actions & Docker', 'Zero-downtime deploys'],
  },
  {
    Icon: MdSpeed,
    title: 'Performance Optimization',
    subtitle: 'Speed & Reliability',
    description:
      'Audit and optimize your existing app for Core Web Vitals, load time, and Lighthouse scores — turning slow apps into fast ones.',
    highlights: ['90+ Lighthouse Score', 'Sub-2s load times', 'Bundle & DB optimization'],
  },
];

const Services = () => {
  return (
    <section name='services' className='w-full pt-20 md:pt-28'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>What I Do</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-10'>Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {services.map(({ Icon, title, subtitle, description, highlights }) => (
            <div
              key={title}
              className='bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-accent/40 hover:bg-accent/[0.03] duration-300 group flex flex-col'>
              <div className='w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 duration-300 flex-shrink-0'>
                <Icon size={22} className='text-accent' />
              </div>
              <h3 className='text-lg font-bold text-theme-white mb-0.5'>{title}</h3>
              <p className='text-accent text-xs font-semibold mb-3'>{subtitle}</p>
              <p className='text-theme-white/65 text-sm leading-relaxed mb-5 flex-1'>{description}</p>
              <ul className='space-y-2'>
                {highlights.map((item) => (
                  <li key={item} className='text-xs text-theme-white/55 flex items-center gap-2'>
                    <span className='w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className='mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-accent/[0.06] border border-accent/20 rounded-xl px-6 py-5'>
          <p className='text-theme-white/80 text-sm font-medium text-center sm:text-left'>
            Not sure which service fits your project?{' '}
            <span className='text-accent font-semibold'>Let's talk — first call is free.</span>
          </p>
          <Link to='contact' smooth={true} duration={600}>
            <button className='flex-shrink-0 px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg duration-200'>
              Get Free Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
