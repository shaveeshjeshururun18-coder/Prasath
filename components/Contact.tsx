import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { SectionTitle, Card } from './Shared';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:shaveesjeshururu18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionTitle>Get in Touch</SectionTitle>

      <div className="grid gap-8">
        
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
             <a href="https://wa.me/919841723628" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-green-500/20 hover:border-green-200 transition-all text-center group flex flex-col items-center justify-center h-32">
                 <MessageCircle size={32} className="mb-2 text-green-500 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold text-slate-700">WhatsApp</span>
                 <span className="text-xs text-slate-400 mt-1">Chat Instantly</span>
             </a>
             <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shaveesjeshururu18@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-red-500/20 hover:border-red-200 transition-all text-center group flex flex-col items-center justify-center h-32"
             >
                 <Mail size={32} className="mb-2 text-red-500 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold text-slate-700">Gmail</span>
                 <span className="text-xs text-slate-400 mt-1">Direct Compose</span>
             </a>
             <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-blue-500/20 hover:border-blue-200 transition-all text-center group flex flex-col items-center justify-center h-32">
                 <Linkedin size={32} className="mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
                 <span className="text-sm font-bold text-slate-700">LinkedIn</span>
                 <span className="text-xs text-slate-400 mt-1">Connect</span>
             </a>
        </div>

        {/* Contact Form & Info */}
        <div className="grid md:grid-cols-2 gap-8">
             {/* Contact Details */}
             <div className="space-y-6">
                 <Card className="h-full bg-slate-50 border-slate-200">
                     <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h3>
                     
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm text-teal-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Phone Number</h4>
                                <a href="tel:+919841723628" className="block text-slate-600 hover:text-teal-600 transition-colors font-bold">+91 98417 23628</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm text-teal-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Email Address</h4>
                                <a href="mailto:shaveesjeshururu18@gmail.com" className="block text-slate-600 hover:text-teal-600 transition-colors break-all text-sm">shaveesjeshururu18@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm text-teal-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">Location</h4>
                                <p className="text-slate-600">Chennai / Ambattur</p>
                                <p className="text-sm text-slate-500">Tamil Nadu, India</p>
                            </div>
                        </div>
                     </div>
                 </Card>
             </div>

             {/* Form */}
             <Card className="border-t-4 border-t-teal-500">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        Send a Message
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">Have a project idea or query? Fill out the form below.</p>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Your Name</label>
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                        <input 
                            type="tel" 
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Message</label>
                        <textarea 
                            rows={3}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all resize-none"
                            placeholder="I am interested in your skills..."
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="group w-full relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
                        <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left"></span>
                        <div className="relative flex items-center justify-center gap-2">
                            Send Email <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                </form>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;