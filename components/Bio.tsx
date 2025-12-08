import React from 'react';
import { Mail, Phone, MapPin, FileText, User, Calendar, Ruler, Book, Users, Heart, Map } from 'lucide-react';
import { SectionTitle, Card } from './Shared';

const Bio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <SectionTitle>Bio-Data & Profile</SectionTitle>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Profile Card */}
        <div className="md:col-span-4 space-y-6 self-start">
          {/* Profile Card */}
          <Card delay={0.1} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-none relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/20 transition-all duration-700"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
               <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm ring-4 ring-white/5 group-hover:ring-teal-500/50 transition-all duration-500 group-hover:scale-105">
                  <User size={48} className="text-teal-400 group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-2xl font-bold mb-2 tracking-tight">Shaveesh Jeshurun</h3>
               <p className="text-teal-400 font-medium mb-1">Student & Developer</p>
               <p className="text-slate-400 text-sm mb-6 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">Class 8 | Velammal Vidhyashram</p>
               
               <div className="w-full space-y-3 text-left">
                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-transparent">
                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                        <Mail size={18} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 truncate" title="shaveesjeshururu18@gmail.com">shaveesjeshururu18...</span>
                 </div>
                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-transparent">
                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                        <Phone size={18} />
                    </div>
                    <div>
                        <span className="block text-sm font-bold text-slate-300">+91 98417 23628</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-transparent">
                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-slate-300">Chennai, Tamil Nadu</span>
                        <span className="block text-xs text-slate-500">Native: Ambattur</span>
                    </div>
                 </div>
               </div>
            </div>
          </Card>

          {/* Resume Download */}
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                <h4 className="font-bold text-slate-800 mb-2">Download Profile</h4>
                <p className="text-xs text-slate-500 mb-4">Get a detailed copy of my student profile.</p>
                <div className="flex gap-2 justify-center">
                    <button onClick={() => window.print()} className="flex-1 bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
                        <FileText size={14} /> PDF
                    </button>
                    <button onClick={() => window.print()} className="flex-1 bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
                        <FileText size={14} /> Word
                    </button>
                </div>
           </div>
        </div>

        {/* RIGHT COLUMN: Detailed Bio */}
        <div className="md:col-span-8 space-y-8">
            
            {/* Bio Data Table */}
            <Card delay={0.2} className="relative overflow-hidden bg-white hover:shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                        <User size={24} /> 
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Personal Details</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                    <BioItem icon={Calendar} label="Date of Birth & Age" value="18 November 2011 (14 Years)" />
                    <BioItem icon={Map} label="Nationality" value="Indian" />
                    <BioItem icon={User} label="Gender" value="Male" />
                    <BioItem icon={Book} label="Religion" value="Christian" />
                    <BioItem icon={Heart} label="Blood Group" value="O+" />
                    <BioItem icon={Ruler} label="Hobbies" value="Coin Collecting, Coding, Electronics" />
                    
                    <div className="sm:col-span-2">
                        <BioItem icon={Users} label="Family Details" subValue={
                            <div className="mt-3 grid sm:grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Father</p>
                                    <p className="font-bold text-blue-700">M. Santharaj Lasares</p>
                                </div>
                                <div className="bg-pink-50 p-3 rounded-lg border border-pink-100 text-center hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Mother</p>
                                    <p className="font-bold text-pink-600">S. Sripriya</p>
                                </div>
                            </div>
                        } />
                    </div>

                    <div className="sm:col-span-2">
                         <BioItem icon={Heart} label="Church Involvement" subValue={
                             <div className="mt-2 bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-100">
                                 <p className="font-bold text-teal-800 text-lg mb-1">City of Truth Ministries, Chennai</p>
                                 <p className="text-slate-700 flex items-center gap-2">
                                     <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                                     Active in Media Ministry, Youth Participation, and Design.
                                 </p>
                             </div>
                         } />
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

const BioItem: React.FC<{ icon: any, label: string, value?: string, subValue?: React.ReactNode }> = ({ icon: Icon, label, value, subValue }) => (
    <div className="flex items-start gap-3 group">
        <div className="mt-1 text-teal-500 group-hover:scale-110 transition-transform">
            <Icon size={18} />
        </div>
        <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</h5>
            {value && <p className="font-semibold text-slate-800">{value}</p>}
            {subValue}
        </div>
    </div>
);

export default Bio;