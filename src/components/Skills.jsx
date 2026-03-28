import {
  SiReact,
  SiDjango,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiPostgresql,
} from 'react-icons/si';
import { FaAws, FaNodeJs } from 'react-icons/fa';

const techs = [
  { Icon: SiReact, name: 'React', color: '#61DAFB' },
  { Icon: SiDjango, name: 'Django', color: '#44B78B' },
  { Icon: SiPython, name: 'Python', color: '#3776AB' },
  { Icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { Icon: FaAws, name: 'AWS', color: '#FF9900' },
  { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8' },
  { Icon: SiGit, name: 'Git', color: '#F05032' },
];

const Skills = () => {
  return (
    <section name='skills' className='w-full pt-14 md:pt-20'>
      <div className='max-w-[980px] mx-auto px-6 md:px-8'>
        <p className='text-accent text-xs font-semibold tracking-widest uppercase mb-2'>Tools &amp; Tech</p>
        <h2 className='text-2xl md:text-3xl font-bold text-theme-white mb-7'>Tech Stack</h2>
        <div className='flex flex-wrap gap-3'>
          {techs.map(({ Icon, name, color }) => (
            <div
              key={name}
              className='flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2.5 hover:border-accent/40 duration-200'>
              <Icon size={17} style={{ color }} />
              <span className='text-theme-white/80 text-sm font-medium'>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
