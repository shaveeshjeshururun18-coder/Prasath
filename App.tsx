import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Briefcase, Zap, BookOpen, Mail, Phone, MessageCircle, Heart, Linkedin, HelpCircle, Download, Code, ArrowUpRight, MapPin, Menu, X, User } from 'lucide-react';
import { NavItem, NeuralBackground } from './components/Shared';
import Home from './components/Home';
import Experience from './components/Experience';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Bio from './components/Bio';
import Ministry from './components/Ministry';
import FAQ from './components/FAQ';
import AIPage from './components/AIPage';
import { AIAssistant } from './components/AIAssistant';

// Page Type Definition
export type PageType = 'home' | 'projects' | 'skills' | 'education' | 'bio' | 'contact' | 'ministry' | 'faq' | 'ai';

/* --- CINEMATIC TECH PRELOADER --- */
const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYSTEM");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatus("ACCESS GRANTED");
          setTimeout(() => setIsExiting(true), 400);
          setTimeout(onComplete, 1400);
          return 100;
        }
        
        // Status updates based on progress
        if (prev === 30) setStatus("LOADING ASSETS");
        if (prev === 60) setStatus("COMPILING CODE");
        if (prev === 80) setStatus("OPTIMIZING UX");
        
        const diff = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? 'opacity-0 scale-105 filter blur-xl' : 'opacity-100'}`}
    >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>

        <div className="relative z-10 flex flex-col items-center">
            {/* Main Reactor Core */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-12">
                {/* Outer Rings */}
                <div className="absolute inset-0 border border-slate-800 rounded-full"></div>
                <div className="absolute inset-0 border-2 border-transparent border-t-teal-500 rounded-full animate-spin duration-[3s]"></div>
                <div className="absolute inset-2 border-2 border-transparent border-r-blue-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-slate-700 rounded-full opacity-50 animate-pulse"></div>
                
                {/* Center Core */}
                <div className="absolute inset-[30%] bg-slate-900 rounded-full flex items-center justify-center border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.3)] animate-pulse-glow">
                     <span className="text-lg md:text-xl font-black text-white">{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Typography */}
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-[0.2em] mb-2 font-inter">SHAVEESH JESHURUN</h1>
            <div className="h-6 overflow-hidden">
                <p className="text-teal-400 font-mono text-[10px] md:text-xs tracking-widest animate-pulse">{status}</p>
            </div>

            {/* Loading Bar */}
            <div className="mt-8 w-48 md:w-64 h-1 bg-slate-900 rounded-full overflow-hidden relative">
                <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]"
                    style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                ></div>
            </div>
        </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'projects', label: 'Projects', icon: Briefcase }, // Renamed from Experience
    { id: 'skills', label: 'Skills', icon: Zap }, // Renamed from Services
    { id: 'education', label: 'Edu', icon: BookOpen },
    { id: 'ministry', label: 'Ministry', icon: Heart },
    { id: 'bio', label: 'Bio', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'ai', label: 'AI Chat', icon: Code },
  ] as const;

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home changePage={setActivePage} />;
      case 'projects': return <Experience />;
      case 'skills': return <Services />;
      case 'education': return <Education />;
      case 'bio': return <Bio />;
      case 'contact': return <Contact />;
      case 'ministry': return <Ministry />;
      case 'faq': return <FAQ />;
      case 'ai': return <AIPage />;
      default: return <Home changePage={setActivePage} />;
    }
  };

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-slate-50 text-slate-800 relative overflow-hidden selection:bg-teal-200 selection:text-teal-900 font-inter`}>
        
        {/* Background decoration */}
        <NeuralBackground />
        
        {/* --- MOBILE HEADER & MENU --- */}
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md text-xs">SSJ</div>
                <span className="font-bold text-slate-800 tracking-tight">Shaveesh Jeshurun</span>
            </div>
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors active:scale-95"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </header>

        {isMobileMenuOpen && (
            <div className="md:hidden fixed top-[60px] left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-2xl animate-slideDown max-h-[calc(100vh-60px)] overflow-y-auto">
                <div className="p-4 flex flex-col gap-1.5">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => { setActivePage(item.id as PageType); setIsMobileMenuOpen(false); }}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                                activePage === item.id 
                                    ? 'bg-teal-50 text-teal-700 font-bold border border-teal-100 shadow-sm' 
                                    : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                            }`}
                        >
                            <item.icon size={20} className={activePage === item.id ? 'text-teal-600' : 'text-slate-400'} />
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => { window.print(); setIsMobileMenuOpen(false); }}
                        className="flex items-center gap-3 p-3 rounded-xl text-slate-600 hover:bg-slate-50 transition-all font-medium border-t border-slate-100 mt-2"
                    >
                        <Download size={20} className="text-slate-400" /> Resume
                    </button>
                </div>
            </div>
        )}

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center p-4">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-full px-2 py-2 flex items-center gap-1">
            {navItems.map((item, index) => (
                <NavItem 
                    key={item.id}
                    active={activePage === item.id} 
                    onClick={() => setActivePage(item.id as PageType)} 
                    icon={item.icon} 
                    index={index}
                >
                    {item.label}
                </NavItem>
            ))}
            <button
              onClick={() => window.print()}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 overflow-hidden group hover:-translate-y-1 whitespace-nowrap text-white bg-slate-900 shadow-lg hover:shadow-teal-500/20 hover:bg-teal-600 ml-1 shrink-0"
            >
               <Download size={14} className="md:w-4 md:h-4" /> <span className="text-sm font-bold">Resume</span>
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="relative z-10 pt-20 md:pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col">
          {renderPage()}
        </main>

        {/* ELEGANT DARK FOOTER */}
        <footer className="relative z-10 bg-[#020617] text-slate-400 pt-20 pb-0 border-t border-slate-800 overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
              
              {/* Column 1: Brand */}
              <div className="md:col-span-5 space-y-6">
                 <div className="flex items-center gap-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-500/20">SSJ</div>
                     <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Shaveesh Jeshurun</h3>
                        <p className="text-xs font-medium text-teal-500 uppercase tracking-widest">Web Developer & Designer</p>
                     </div>
                 </div>
                 <p className="text-slate-400 leading-relaxed max-w-md">
                   Creative student developer passionate about building innovative digital solutions using AI, Coding, and Design.
                 </p>
                 <div className="flex gap-3">
                    <SocialButton href="https://wa.me/919841723628" icon={MessageCircle} color="hover:bg-green-500" label="WhatsApp" />
                    <SocialButton href="mailto:shaveesjeshururu18@gmail.com" icon={Mail} color="hover:bg-red-500" label="Email" />
                    <SocialButton href="https://www.linkedin.com/" icon={Linkedin} color="hover:bg-blue-600" label="LinkedIn" />
                    <SocialButton href="tel:+919841723628" icon={Phone} color="hover:bg-amber-500" label="Call" />
                 </div>
              </div>

              {/* Column 2: Links */}
              <div className="md:col-span-3">
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Access</h4>
                <ul className="space-y-3">
                  {['Projects', 'Skills', 'Education', 'Ministry'].map(item => (
                    <li key={item}>
                      <button 
                        onClick={() => setActivePage(item.toLowerCase() as PageType)}
                        className="hover:text-teal-400 transition-colors flex items-center gap-2 text-sm"
                      >
                         <ArrowUpRight size={14} className="opacity-50" /> {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div className="md:col-span-4">
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Info</h4>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-teal-500 mt-1 shrink-0" size={20} />
                        <div>
                            <p className="text-white font-medium">Chennai / Ambattur</p>
                            <p className="text-xs">Tamil Nadu, India</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-teal-500 mt-1 shrink-0" size={20} />
                        <div>
                            <p className="text-lg text-white font-bold font-mono hover:text-teal-400 transition-colors cursor-pointer">+91 98417 23628</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="text-teal-500 mt-1 shrink-0" size={20} />
                        <a href="mailto:shaveesjeshururu18@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">shaveesjeshururu18@gmail.com</a>
                    </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Copyright & Designer Credit */}
            <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
               <div className="text-slate-600 text-center md:text-left">
                 &copy; 2025 Shaveesh Portfolio. All Rights Reserved.
               </div>

               {/* DESIGNER CREDIT - ELEGANT BADGE */}
               <button 
                  onClick={() => { setActivePage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="group flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-teal-500/20 transition-all duration-500"
               >
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-teal-400 transition-colors">Developed by</span>
                  <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                    <span className="font-bold text-lg text-slate-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-teal-200 group-hover:to-white bg-size-200 animate-gradient-x transition-all">
                      Shaveesh Jeshurun
                    </span>
                  </div>
               </button>
            </div>
          </div>
        </footer>

        {/* AI Assistant - Hidden on AI Page */}
        {activePage !== 'ai' && <AIAssistant changePage={setActivePage} />}
      </div>
    </>
  );
};

const SocialButton: React.FC<{ href: string, icon: any, color: string, label: string }> = ({ href, icon: Icon, color, label }) => {
    // Check if link is mailto or tel to avoid opening new tab
    const isDirectAction = href.startsWith('mailto:') || href.startsWith('tel:');
    
    return (
        <a 
            href={href}
            target={isDirectAction ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`w-12 h-12 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${color} hover:text-white hover:scale-110 hover:border-transparent shadow-lg`}
            title={label}
        >
            <Icon size={20} />
        </a>
    );
};

export default App;