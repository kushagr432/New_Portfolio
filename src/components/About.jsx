const About = () => {
  const highlights = [
    'React + TypeScript frontends',
    'Django & Node.js REST APIs',
    'AWS EC2, S3, RDS infrastructure',
    'CI/CD with GitHub Actions & Docker',
    'Performance & Core Web Vitals optimization',
  ];

  return (
    <section className='pt-20 md:pt-28 w-full' name='about'>
      <div className='w-full max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Who I Am</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-8'>About Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14'>
          <div>
            <p className='text-theme-white/75 text-base leading-relaxed mb-4'>
              I'm a full-stack developer and DevOps engineer based in India, specializing in
              building scalable web applications and automating cloud deployments.
            </p>
            <p className='text-theme-white/75 text-base leading-relaxed'>
              My focus is on delivering clean, production-grade code that solves real business
              problems — from React frontends to Django backends, shipped with CI/CD pipelines
              on AWS so clients get reliable, zero-downtime releases.
            </p>
          </div>
          <div className='space-y-3'>
            {highlights.map((item) => (
              <div key={item} className='flex items-center gap-3'>
                <span className='w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0' />
                <span className='text-theme-white/70 text-sm'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
