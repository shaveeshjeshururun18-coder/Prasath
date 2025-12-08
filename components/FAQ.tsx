import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, HelpCircle, FileText } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Are you available for freelance projects?",
      answer: "I am currently a student, but I am open to discussing small-scale web development or design projects that fit my schedule."
    },
    {
      question: "What programming languages do you know?",
      answer: "I have a strong foundation in C, C++, HTML, and CSS. I am also currently learning React and basic JavaScript."
    },
    {
      question: "Do you create designs as well as code?",
      answer: "Yes, I am passionate about design. I create posters, PowerPoint presentations, and basic UI designs in addition to coding."
    },
    {
      question: "What kind of school leadership experience do you have?",
      answer: "I served as a Class Leader for 5 consecutive years (4th-8th Grade) at Velammal Vidhyashram, managing classroom activities and student coordination."
    },
    {
      question: "Where are you based?",
      answer: "I live in Ambattur, Chennai, Tamil Nadu, India."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-teal-500 shadow-md' : 'border-slate-200 hover:border-teal-300'}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-teal-700' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? <ChevronUp className="text-teal-500" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div 
                  className={`px-5 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="md:col-span-4">
           <RevealOnScroll delay={0.4}>
             <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl sticky top-24">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-teal-500/30">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Want to know more?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Download my profile to view my academic achievements, skills, and project details.
                </p>
                <button onClick={() => window.print()} className="w-full bg-white text-slate-900 py-3 px-4 rounded-xl font-bold hover:bg-teal-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Download Profile
                </button>
             </div>
           </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default FAQ;