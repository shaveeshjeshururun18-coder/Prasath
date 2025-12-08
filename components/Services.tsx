import React from 'react';
import { Code, Cpu, Video, Palette, Terminal, Layout } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Services: React.FC = () => {
  const skills = [
    { 
        title: "Programming", 
        icon: Code, 
        desc: "Proficient in C, C++, HTML, and CSS with a strong foundation in logic building and syntax.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        hoverBg: "group-hover:bg-blue-600"
    },
    { 
        title: "Web Development", 
        icon: Layout, 
        desc: "Creating responsive websites and managing content. Experienced with basic JavaScript and layout design.",
        color: "text-teal-600",
        bg: "bg-teal-50",
        hoverBg: "group-hover:bg-teal-600"
    },
    { 
        title: "Artificial Intelligence", 
        icon: Cpu, 
        desc: "Learning AI and emerging technologies. Completed Uptor AI Workshop and exploring automated solutions.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        hoverBg: "group-hover:bg-indigo-600"
    },
    {
        title: "Video Editing",
        icon: Video,
        desc: "Skilled in editing videos for school projects and creative content using modern editing software.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        hoverBg: "group-hover:bg-rose-600"
    },
    {
        title: "Graphic Design",
        icon: Palette,
        desc: "Designing posters, banners, and presentations. Expert in creating visually engaging PowerPoint slides.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        hoverBg: "group-hover:bg-amber-600"
    },
    {
        title: "Electronics & IoT",
        icon: Terminal, 
        desc: "Hands-on experience with Arduino basics, small electronics projects, and DIY tech experiments.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        hoverBg: "group-hover:bg-emerald-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
        <div className="text-center mb-10">
            <SectionTitle>Technical Skills</SectionTitle>
            <RevealOnScroll delay={0.2}>
              <p className="text-slate-500 max-w-2xl mx-auto -mt-6">A showcase of my technical abilities and creative talents.</p>
            </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
             <Card key={idx} delay={idx * 0.1} className="h-full border-t-4 border-t-transparent hover:border-t-teal-500 transition-all duration-500 flex flex-col justify-between hover:-translate-y-3 group">
                <div>
                  <div className={`w-16 h-16 rounded-2xl ${skill.bg} ${skill.color} ${skill.hoverBg} group-hover:text-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <skill.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">{skill.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                      {skill.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-xs font-bold text-slate-400 group-hover:text-teal-600 transition-colors uppercase tracking-wider opacity-60 group-hover:opacity-100">
                    Explore <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
             </Card>
          ))}
        </div>
      </div>
  );
};

export default Services;