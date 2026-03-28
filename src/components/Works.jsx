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
    name: 'Manivra Jewels',
    gallery: [
      { src: manivra1, alt: 'Manivra — luxury jewellery storefront' },
      { src: manivra2, alt: 'Manivra — admin panel and catalogue' },
      { src: manivra3, alt: 'Manivra — product showcase' },
      { src: manivra4, alt: 'Manivra — site experience' },
    ],
    problem:
      'A luxury jewellery brand needed a polished online storefront to showcase collections and drive sales — plus a reliable admin panel so the team could manage products and content without calling a developer every time.',
    solution:
      'Delivered end-to-end: React storefront with a custom-built admin panel for full catalogue, inventory, and content management. Deployed on Vercel with CI/CD so updates ship in seconds.',
    tools: 'React · Node.js · Admin Panel · Vercel · CI/CD',
    link: 'https://manivera.vercel.app/',
    code: '',
    results: ['🛍️ End-to-end delivery', '⚙️ Full admin panel', '🚀 Live on Vercel', '🔁 CI/CD automated'],
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
      'Engineering teams needed a single self-service platform to provision infrastructure, run pipelines, and deploy releases — without stitching together ad-hoc scripts and separate cloud consoles.',
    solution:
      'Built a production SaaS combining Django backend, React web app, and Go microservices for orchestration. Users manage their full DevOps workflow — from infra provisioning to deployments — in one place.',
    tools: 'Django · React · Go · AWS · Docker',
    link: 'https://app.atmosly.com/signin',
    code: '',
    results: ['☁️ Self-service DevOps SaaS', '⚡ Django + React + Go', '🔁 Automated pipelines', '📦 Production infra'],
  },
  {
    img: plantDesktopImg,
    alt: 'Plant Selling MERN Platform',
    name: 'Plant Selling Platform',
    problem:
      'Client needed a full e-commerce solution to sell plants online — user auth, product listings, cart, and checkout — deployed and reliably live.',
    solution:
      'Built full MERN stack: React frontend, Express REST API, MongoDB, JWT auth, and deployed to Vercel with a CI/CD workflow. Zero manual deploys from day one.',
    tools: 'React · Express.js · MongoDB · Node.js · JWT',
    link: 'https://plant-selling-mern-xf49.vercel.app/',
    code: 'https://github.com/kushagr432/plant-selling-mern',
    results: ['⚡ 1.3s load time', '🔐 JWT auth', '🚀 Deployed on Vercel', '🔁 CI/CD pipeline'],
  },
  {
    img: tofuDesktopImg,
    alt: 'TOFU AR/VR Landing Page',
    name: 'TOFU AR/VR Landing Page',
    problem:
      'An AR/VR startup needed a high-converting landing page to attract investors and early adopters — with immersive visuals and fast performance scores.',
    solution:
      'Crafted a premium mobile-first landing page in React with Tailwind + MUI. Optimised assets, lazy loading, and semantic HTML to hit 90+ Lighthouse without sacrificing design.',
    tools: 'React · Tailwind CSS · Material UI · Figma',
    link: 'https://tofu-app.vercel.app/',
    code: '',
    results: ['🚀 92 Lighthouse Score', '📱 Mobile-first', '♿ Fully accessible', '⚡ Sub-2s load'],
  },
  {
    img: NoirDesktopImg,
    alt: 'Noir Barbershop Website',
    name: 'Noir Barbershop',
    problem:
      'A premium barbershop needed a sophisticated online presence to showcase services and attract high-end clients — delivered fast, no CMS overhead.',
    solution:
      'Built a sleek zero-dependency static site: smooth CSS scroll effects, clear booking CTA, and pixel-perfect responsive layout — shipped in under a week.',
    tools: 'HTML5 · CSS3 · Vanilla JavaScript',
    link: 'https://noir-barbearia.vercel.app/',
    code: '',
    results: ['⚡ < 2s load time', '🎨 Zero dependencies', '📅 Booking CTA', '✅ Delivered in < 1 week'],
  },
];

const Works = () => {
  return (
    <section name='works' className='pt-20 md:pt-28 w-full text-theme-white'>
      <div className='flex flex-col w-full max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Portfolio</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-3'>Case Studies</h2>
        <p className='text-theme-white/55 text-base mb-10 max-w-xl leading-relaxed'>
          Real projects. Real results. Each one shipped with measurable outcomes.
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
