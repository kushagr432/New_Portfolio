import { FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { FiCheckCircle, FiStar } from 'react-icons/fi';
import Link from 'react-scroll/modules/components/Link';

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'On-time Rate' },
  { value: '2+', label: 'Years Experience' },
  { value: '92', label: 'Avg. Lighthouse Score' },
];

const testimonials = [
  {
    quote:
      'Kushagr delivered our platform on time and under budget. The CI/CD pipeline he set up has saved us hours every week — zero broken deploys since launch.',
    name: 'Startup Founder',
    role: 'SaaS Company · India',
    initial: 'A',
  },
  {
    quote:
      'Our website load time dropped from 4.5s to under 1.4s after his performance audit. The Lighthouse score went from 58 to 94. Real, measurable results.',
    name: 'Product Manager',
    role: 'E-commerce Brand',
    initial: 'P',
  },
  {
    quote:
      "Professional, responsive, and technically excellent. He didn't just build what we asked for — he improved on it. Highly recommend for any serious project.",
    name: 'Tech Lead',
    role: 'Series A Startup',
    initial: 'T',
  },
];

const badges = [
  { Icon: FaAws, label: 'AWS Infrastructure' },
  { Icon: FaDocker, label: 'Docker & Containers' },
  { Icon: FaGithub, label: 'CI/CD Pipelines' },
];

const Trust = () => {
  return (
    <section className='w-full pt-20 md:pt-28'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Why Work With Me</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-3'>Trust &amp; Results</h2>
        <p className='text-theme-white/50 text-sm mb-10 max-w-xl leading-relaxed'>
          Focused on <span className='text-theme-white font-semibold'>performance, scalability, and real-world results</span> — not just shipping code.
        </p>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center'>
              <p className='text-3xl font-extrabold text-accent mb-1'>{stat.value}</p>
              <p className='text-theme-white/50 text-xs font-medium'>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
          {testimonials.map(({ quote, name, role, initial }) => (
            <div
              key={name}
              className='bg-white/[0.03] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 duration-300'>
              <div>
                <div className='flex items-center gap-0.5 mb-4'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar key={i} size={13} className='text-yellow-400' style={{ fill: '#FACC15' }} />
                  ))}
                </div>
                <p className='text-theme-white/65 text-sm italic leading-relaxed mb-5'>"{quote}"</p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0'>
                  <span className='text-accent font-bold text-xs'>{initial}</span>
                </div>
                <div>
                  <p className='text-theme-white text-sm font-semibold'>{name}</p>
                  <p className='text-theme-white/40 text-xs'>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolchain */}
        <div className='border border-white/10 rounded-xl p-6 md:p-7 mb-8'>
          <p className='text-theme-white/45 text-xs font-semibold uppercase tracking-widest mb-4'>
            Production-Ready Toolchain
          </p>
          <div className='flex flex-wrap gap-3 mb-5'>
            {badges.map(({ Icon, label }) => (
              <div
                key={label}
                className='flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5'>
                <Icon size={17} className='text-accent' />
                <span className='text-theme-white/70 text-sm font-medium'>{label}</span>
              </div>
            ))}
          </div>
          <div className='flex flex-col sm:flex-row flex-wrap gap-3'>
            {['Zero-downtime deployments', 'Automated testing & rollback', 'CloudWatch monitoring'].map((item) => (
              <div key={item} className='flex items-center gap-2'>
                <FiCheckCircle size={13} className='text-accent flex-shrink-0' />
                <span className='text-theme-white/55 text-xs'>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className='bg-accent/[0.07] border border-accent/25 rounded-xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
          <div>
            <h3 className='text-xl md:text-2xl font-bold text-theme-white mb-1'>
              Want to improve your website performance?
            </h3>
            <p className='text-theme-white/55 text-sm'>
              Get a free audit of your current website — performance, SEO, and architecture. No commitment.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3 flex-shrink-0'>
            <Link to='contact' smooth={true} duration={600}>
              <button className='px-7 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm duration-200 whitespace-nowrap'>
                Get Free Website Audit
              </button>
            </Link>
            <Link to='contact' smooth={true} duration={600}>
              <button className='px-7 py-3 border border-white/20 hover:border-accent hover:text-accent text-theme-white font-semibold rounded-lg text-sm duration-200 whitespace-nowrap'>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
