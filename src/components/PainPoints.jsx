import { MdOutlineSpeed, MdOutlineCloudOff } from 'react-icons/md';
import { VscServerProcess } from 'react-icons/vsc';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import Link from 'react-scroll/modules/components/Link';

const items = [
  {
    Icon: MdOutlineSpeed,
    problem: 'Slow website driving users away?',
    outcome: 'Optimized to load under 2 seconds',
    detail: 'Full performance audit — images, bundles, DB queries, and CDN — so every page feels instant.',
  },
  {
    Icon: VscServerProcess,
    problem: 'No deployment system in place?',
    outcome: 'Full CI/CD pipeline, automated',
    detail: 'GitHub Actions + Docker + AWS. Push your code and it ships — tested, staged, and live without manual steps.',
  },
  {
    Icon: MdOutlineCloudOff,
    problem: 'Frequent downtime killing trust?',
    outcome: 'Scalable AWS infrastructure',
    detail: 'Auto-scaling EC2, load balancers, health checks, and CloudWatch alerts so your app stays up under any load.',
  },
  {
    Icon: HiOutlineLightningBolt,
    problem: 'Poor Lighthouse / Core Web Vitals?',
    outcome: '90+ Lighthouse score achieved',
    detail: 'React bundle splitting, lazy loading, image optimisation, and caching strategies that move the needle.',
  },
];

const PainPoints = () => {
  return (
    <section className='w-full pt-20 md:pt-28'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Common Problems I Solve</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-3'>
          What I Can Help You With
        </h2>
        <p className='text-theme-white/50 text-base mb-10 max-w-xl leading-relaxed'>
          Most clients come to me with one of these four problems. Here is exactly what I do about each one.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {items.map(({ Icon, problem, outcome, detail }) => (
            <div
              key={problem}
              className='bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-accent/35 hover:bg-accent/[0.02] duration-300 group'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 duration-300 mt-0.5'>
                  <Icon size={20} className='text-accent' />
                </div>
                <div>
                  <p className='text-theme-white/45 text-xs font-medium mb-1 line-through decoration-white/20'>
                    {problem}
                  </p>
                  <p className='text-theme-white font-bold text-base mb-2'>{outcome}</p>
                  <p className='text-theme-white/55 text-sm leading-relaxed'>{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07] pt-7'>
          <p className='text-theme-white/55 text-sm text-center sm:text-left'>
            Focused on <span className='text-theme-white font-semibold'>performance, scalability, and real-world results.</span>
          </p>
          <Link to='contact' smooth={true} duration={600}>
            <button className='flex-shrink-0 px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg duration-200'>
              Get Free Website Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
