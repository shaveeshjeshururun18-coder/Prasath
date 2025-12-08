import React from 'react';
import { Globe, Users, PenTool, Layout, Star } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Experience: React.FC = () => {
  const projects = [
    {
      role: "Web Development",
      company: "Personal Projects",
      location: "Chennai",
      period: "Ongoing",
      color: "blue",
      icon: Globe,
      details: [
        "Developed and managed cotministries.unaux.com for City of Truth Ministries.",
        "Created good2go.unaux.com to showcase web design skills.",
        "Implemented responsive layouts and content management systems.",
        "Focusing on user-friendly interfaces and clean code structure."
      ]
    },
    {
      role: "Class Leader / Monitor",
      company: "Velammal Vidhyashram",
      location: "Surapet",
      period: "4th - 8th Grade",
      color: "teal",
      icon: Users,
      details: [
        "Served as Class Leader for 5 consecutive years, demonstrating strong leadership.",
        "Managed classroom activities and guided peers effectively.",
        "Assisted teachers in organizing school events and coordinating projects.",
        "Maintained discipline and facilitated communication between students and teachers."
      ]
    },
    {
      role: "Design & Multimedia",
      company: "Ministry & School",
      location: "Chennai",
      period: "Volunteer",
      color: "purple",
      icon: PenTool,
      details: [
        "Created interactive PowerPoint presentations with animations for school projects.",
        "Designed Bible-related digital materials for family ministry.",
        "Created posters and visual content for City of Truth Ministries.",
        "Edited videos for school assignments and personal creative projects."
      ]
    },
    {
      role: "Tech Presentations",
      company: "School Events",
      location: "Velammal Vidhyashram",
      period: "Various",
      color: "amber",
      icon: Layout,
      details: [
        "Successfully presented multiple school projects on technology topics.",
        "Organized scripture-based content in visually engaging formats.",
        "Demonstrated quick learning and creative problem-solving during presentations."
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <SectionTitle>Projects & Leadership</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Decorative Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-teal-200 to-slate-200 -translate-x-1/2"></div>
        
        {projects.map((job, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.15} className={`flex flex-col h-full z-10 ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
             <Card className="flex flex-col h-full hover:shadow-2xl hover:border-teal-300 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${job.color}-50 text-${job.color}-600 shadow-sm border border-${job.color}-100 group-hover:scale-110 transition-transform duration-300`}>
                      <job.icon size={28} />
                    </div>
                    <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                      {job.period}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{job.role}</h3>
                <p className={`text-${job.color}-600 font-medium mb-4 flex items-center gap-2`}>
                  <span className={`w-2 h-2 rounded-full bg-${job.color}-400 animate-pulse`}></span> {job.company}
                </p>
                <ul className="space-y-3 mt-auto">
                  {job.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed group-hover:text-slate-800 transition-colors">
                      <Star size={16} className={`mt-1 text-${job.color}-500 flex-shrink-0 opacity-70 group-hover:opacity-100`} />
                      {detail}
                    </li>
                  ))}
                </ul>
             </Card>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Experience;