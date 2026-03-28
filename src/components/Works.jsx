import plantDesktopImg from '../assets/images/works/Screenshot 2024-03-06 200034.png';
import tofuDesktopImg from '../assets/images/works/Screenshot 2024-03-06 201510.png';
import NoirDesktopImg from '../assets/images/works/noir-desktop.jpg';
import manivra1 from '../assets/images/works/manivra1.png';
import manivra2 from '../assets/images/works/manivra2.png';
import manivra3 from '../assets/images/works/manivra3.png';
import manivra4 from '../assets/images/works/manivra4.png';
import atmosly1 from '../assets/images/works/atmosly.png';
import atmosly2 from '../assets/images/works/atmosly2.png';
import atmosly3 from '../assets/images/works/atmosly3.png';
import atmosly4 from '../assets/images/works/atmosly4.png';
import atmosly5 from '../assets/images/works/atmosly5.png';
import WorkElement from './WorkElement';

const projects = [
  {
    name: 'Manivra',
    gallery: [
      { src: manivra1, alt: 'Manivra — luxury jewellery storefront' },
      { src: manivra2, alt: 'Manivra — admin panel and catalogue' },
      { src: manivra3, alt: 'Manivra — product showcase' },
      { src: manivra4, alt: 'Manivra — site experience' },
    ],
    problem:
      'A luxury jewellery brand needed a refined online presence to showcase collections and drive sales, plus a reliable way to manage products and content without constant developer handoffs.',
    solution:
      'Delivered end-to-end: a polished customer-facing jewellery website and a secure admin panel for catalogue, content, and day-to-day operations — shipped and hosted on Vercel.',
    tools: 'React · Full-stack · Admin panel · Vercel',
    link: 'https://manivera.vercel.app/',
    code: '',
    metric: 'End-to-end',
    result: '· Storefront + admin panel',
  },
  {
    name: 'Atmosly',
    gallery: [
      { src: atmosly1, alt: 'Atmosly — product screenshot 1' },
      { src: atmosly2, alt: 'Atmosly — product screenshot 2' },
      { src: atmosly3, alt: 'Atmosly — product screenshot 3' },
      { src: atmosly4, alt: 'Atmosly — product screenshot 4' },
      { src: atmosly5, alt: 'Atmosly — product screenshot 5' },
    ],
    problem:
      'Engineering teams needed a single self-service platform to provision infrastructure, run pipelines, and ship releases — without stitching together ad-hoc scripts and cloud consoles.',
    solution:
      'Worked on a production SaaS that combines a Django backend, React web app, and Go services for orchestration and performance-critical paths — giving users one place to manage DevOps workflows end to end.',
    tools: 'Django · React · Go',
    link: 'https://app.atmosly.com/signin',
    code: '',
    metric: 'Self-service DevOps',
    result: '· Django + React + Go in production',
  },
  {
    img: plantDesktopImg,
    alt: 'Plant Selling MERN Platform',
    name: 'Plant Selling Platform',
    problem:
      'A client needed a complete e-commerce solution to sell plants online with user authentication, product listings, and cart management — deployed and live.',
    solution:
      'Built a full MERN stack platform: React frontend, Express REST API, MongoDB database, JWT auth, and deployed to Vercel with a CI/CD workflow.',
    tools: 'React · Express.js · MongoDB · Node.js · JWT',
    link: 'https://plant-selling-mern-xf49.vercel.app/',
    code: 'https://github.com/kushagr432/plant-selling-mern',
    metric: '1.3s Load Time',
    result: '· Full-stack MERN on Vercel',
  },
  {
    img: tofuDesktopImg,
    alt: 'TOFU AR/VR Landing Page',
    name: 'TOFU AR/VR Landing Page',
    problem:
      'An AR/VR startup needed a high-converting landing page to attract investors and early adopters — with strong visuals and fast performance.',
    solution:
      'Crafted a premium, mobile-first landing page in React with MUI and Tailwind. Optimized assets, lazy loading, and semantic HTML for top Lighthouse scores.',
    tools: 'React · Tailwind CSS · Material UI · Figma',
    link: 'https://tofu-app.vercel.app/',
    code: '',
    metric: '92 Lighthouse Score',
    result: '· Performance + Accessibility',
  },
  {
    img: NoirDesktopImg,
    alt: 'Noir Barbershop Website',
    name: 'Noir Barbershop Website',
    problem:
      'A premium barbershop needed a sophisticated online presence to showcase services and attract high-end clients — without any CMS or dependencies.',
    solution:
      'Built a sleek, zero-dependency static site with smooth CSS animations, scroll effects, and a clear booking CTA — delivered in under a week.',
    tools: 'HTML5 · CSS3 · Vanilla JavaScript',
    link: 'https://noir-barbearia.vercel.app/',
    code: '',
    metric: '< 2s Load Time',
    result: '· Zero dependencies · Fast delivery',
  },
];

const Works = () => {
  return (
    <section name='works' className='pt-20 md:pt-28 w-full text-theme-white'>
      <div className='flex flex-col w-full max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Portfolio</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-3'>Case Studies</h2>
        <p className='text-theme-white/55 text-base mb-10 max-w-xl leading-relaxed'>
          Real projects with measurable outcomes — from initial problem to shipped production solution.
        </p>
        <div>
          {projects.map((project) => (
            <WorkElement key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
