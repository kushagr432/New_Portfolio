const Footer = () => {
  return (
    <footer className='w-full bg-[#1a1a1d] border-t border-white/[0.06] text-theme-white py-6'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3'>
        <span className='text-sm text-theme-white/40 font-medium'>
          © 2026 Kushagr Jain — Full-Stack Developer & DevOps Engineer
        </span>
        <a
          className='text-sm text-theme-white/40 hover:text-accent duration-200'
          href='https://github.com/kushagr432'
          target='_blank'
          rel='noreferrer'>
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
