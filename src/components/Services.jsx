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
      'From blank canvas to live product. I build clean, fast, full-stack web apps — React frontends, Django REST APIs, and everything in between — without the tech debt.',
    highlights: [
      'Ship in weeks, not months',
      'React / TypeScript SPAs',
      'Django REST APIs + PostgreSQL',
    ],
  },
  {
    Icon: FaAws,
    title: 'DevOps & Deployment',
    subtitle: 'AWS + CI/CD',
    description:
      'Stop deploying manually. I set up automated pipelines on AWS so every code push gets tested, staged, and shipped — with zero-downtime and automatic rollback if anything breaks.',
    highlights: [
      'Zero-downtime deploys',
      'GitHub Actions + Docker',
      'AWS EC2 / S3 / RDS / CloudWatch',
    ],
  },
  {
    Icon: MdSpeed,
    title: 'Performance Optimization',
    subtitle: 'Speed & Core Web Vitals',
    description:
      'Slow websites lose customers. I audit and fix load time, Lighthouse scores, and Core Web Vitals so your app feels instant — and ranks better on Google.',
    highlights: [
      'Load time under 2 seconds',
      '90+ Lighthouse score',
      'Bundle, DB & CDN optimization',
    ],
  },
];

const Services = () => {
  return (
    <section name='services' className='w-full pt-20 md:pt-28'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>What I Do</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-3'>Services</h2>
        <p className='text-theme-white/50 text-base mb-10 max-w-xl leading-relaxed'>
          Three focused services. Each one outcome-driven — you know exactly what you are getting.
        </p>
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
              <p className='text-theme-white/60 text-sm leading-relaxed mb-5 flex-1'>{description}</p>
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

        <div className='mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 bg-accent/[0.06] border border-accent/20 rounded-xl px-6 py-5'>
          <p className='text-theme-white/75 text-sm font-medium text-center sm:text-left'>
            Not sure what you need?{' '}
            <span className='text-accent font-semibold'>First call is free — no commitment.</span>
          </p>
          <Link to='contact' smooth={true} duration={600}>
            <button className='flex-shrink-0 px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg duration-200 whitespace-nowrap'>
              Get Free Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
