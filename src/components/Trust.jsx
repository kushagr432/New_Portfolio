import { FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { FiStar, FiCheckCircle } from 'react-icons/fi';
import Link from 'react-scroll/modules/components/Link';

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Experience' },
  { value: '92', label: 'Avg. Lighthouse Score' },
];

const badges = [
  { Icon: FaAws, label: 'AWS Deployments' },
  { Icon: FaDocker, label: 'Docker & Containers' },
  { Icon: FaGithub, label: 'CI/CD Pipelines' },
];

const Trust = () => {
  return (
    <section className='w-full pt-20 md:pt-28'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Why Work With Me</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-10'>Trust & Results</h2>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center'>
              <p className='text-3xl font-extrabold text-accent mb-1'>{stat.value}</p>
              <p className='text-theme-white/55 text-xs font-medium'>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tech credibility */}
        <div className='border border-white/10 rounded-xl p-6 md:p-7 mb-6'>
          <p className='text-theme-white/50 text-xs font-semibold uppercase tracking-widest mb-4'>
            Production-Ready Toolchain
          </p>
          <div className='flex flex-wrap gap-3'>
            {badges.map(({ Icon, label }) => (
              <div
                key={label}
                className='flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5'>
                <Icon size={18} className='text-accent' />
                <span className='text-theme-white/75 text-sm font-medium'>{label}</span>
              </div>
            ))}
          </div>
          <div className='mt-5 flex flex-col sm:flex-row gap-3'>
            {[
              'Zero-downtime deployments',
              'Automated testing & rollback',
              'Monitored with CloudWatch',
            ].map((item) => (
              <div key={item} className='flex items-center gap-2'>
                <FiCheckCircle size={14} className='text-accent flex-shrink-0' />
                <span className='text-theme-white/60 text-xs'>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className='border border-dashed border-white/15 rounded-xl p-6 md:p-8 mb-8'>
          <div className='flex items-center gap-1 mb-4'>
            {[1, 2, 3, 4, 5].map((i) => (
              <FiStar key={i} size={14} className='text-yellow-400' style={{ fill: '#FACC15' }} />
            ))}
          </div>
          <p className='text-theme-white/65 text-base italic leading-relaxed mb-5'>
            "Kushagr delivered our platform on time and under budget. The CI/CD pipeline he set up
            has saved us hours every week — zero broken deploys since launch."
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0'>
              <span className='text-accent font-bold text-sm'>A</span>
            </div>
            <div>
              <p className='text-theme-white text-sm font-semibold'>Client Testimonial</p>
              <p className='text-theme-white/40 text-xs'>Startup Founder</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className='bg-accent/[0.08] border border-accent/25 rounded-xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
          <div>
            <h3 className='text-xl md:text-2xl font-bold text-theme-white mb-1'>
              Ready to build something great?
            </h3>
            <p className='text-theme-white/60 text-sm'>
              Get a free audit of your current website or project — no commitment required.
            </p>
          </div>
          <Link to='contact' smooth={true} duration={600}>
            <button className='flex-shrink-0 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg text-sm duration-200 whitespace-nowrap'>
              Get Free Website Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trust;
