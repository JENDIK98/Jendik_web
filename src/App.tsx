import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin, Users, Eye, Heart, MessageCircle, Star, Menu, X, ExternalLink, ArrowRight, Play, Mic, Music, BookOpen, Zap, Sparkles, Headphones } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    collaborationType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialStats = [
    { platform: 'Instagram', followers: '30K', icon: Instagram, color: 'hover:text-pink-400', gradient: 'from-pink-500 to-purple-600' },
    { platform: 'YouTube', followers: '2K', icon: Youtube, color: 'hover:text-red-400', gradient: 'from-red-500 to-pink-500' },
    { platform: 'TikTok', followers: '30K', icon: Music, color: 'hover:text-cyan-400', gradient: 'from-cyan-500 to-blue-500' },
  ];

  const portfolioItems = [
    {
      title: "Parodie na populární hity",
      description: "Vtipné přepracování současných hitů s nečekanými zvraty a chytrými rýmy, které baví tisíce posluchačů.",
      metrics: "500K+ přehrání • 15K sdílení",
      image: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1", // Sem dej ID svého YouTube videa
      type: "music"
    },
    {
      title: "Básně s hloubkou i bez hloubky",
      description: "Vtipné básně na jména, klasické básně.",
      metrics: "200K+ zhlédnutí • 8K komentářů",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Sem dej ID svého YouTube videa
      type: "poetry"
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Spolupráce: ${formData.collaborationType}`;
    const body = `Jméno: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATyp spolupráce: ${formData.collaborationType}%0D%0A%0D%0AZpráva:%0D%0A${formData.message}`;
    window.location.href = `mailto:jan.stanek.spoluprace@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation - Futuristic Style */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              JENDIK
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              {['home', 'about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-white/80 hover:text-white transition-all duration-300 font-medium group"
                >
                  {item === 'home' ? 'Domů' : item === 'about' ? 'O mně' : item === 'portfolio' ? 'Tvorba' : 'Kontakt'}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20">
              <div className="px-6 py-6 space-y-4">
                {['home', 'about', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-white/80 hover:text-white transition-colors py-2"
                  >
                    {item === 'home' ? 'Domů' : item === 'about' ? 'O mně' : item === 'portfolio' ? 'Tvorba' : 'Kontakt'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Futuristic Style */}
      {/* Stats Section - Moved to top for collaboration importance */}
      {/* Hero Section - Futuristic Style */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* JENDIK Title - Desktop Only */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-8">
            <span className="text-cyan-400 text-6xl">∞</span>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              JENDIK
            </h1>
            <span className="text-cyan-400 text-6xl">∞</span>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
              <BookOpen className="text-cyan-400" size={20} />
              <span className="text-white font-medium">Básník</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/30">
              <Music className="text-purple-400" size={20} />
              <span className="text-white font-medium">Parodista</span>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 sm:mb-16 font-light leading-relaxed max-w-4xl mx-auto px-4 text-center">
            Tvořím básně, které tě rozesmějí, a parodie písniček, které si budeš zpívat celý den. 
            Spojuji humor s poezií a hudbu s nečekanými zvraty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20 px-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-2">
                <Users size={20} />
                Spolupráce
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto group text-white border-2 border-white/30 hover:border-white/60 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/10"
            >
              Poslechnout si mě
            </button>
          </div>
          
          {/* Stats Section - Moved below buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">70K+</div>
              <div className="text-white/60 font-light text-sm">Celkové sledování</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-purple-500/20">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">2M+</div>
              <div className="text-white/60 font-light text-sm">Přehrání</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-pink-500/20">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-white/60 font-light text-sm">Vytvořených děl</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Futuristic Style */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                O mně
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/80 font-light leading-relaxed text-center md:text-left">
                <p>
                  Jsem JENDIK a věnuji se tomu, co mě baví nejvíc - tvorbě básní a parodií na populární písničky. 
                  Začal jsem jako hobby, ale postupně se to stalo mou vášní a způsobem, jak bavit lidi.
                </p>
                <p>
                  Moje básně často reflektují současný svět s humorem a ironií. Parodie písniček vytvářím tak, 
                  aby byly vtipné, ale zároveň chytlavé. Věřím, že humor je nejlepší způsob, jak se vypořádat 
                  s absurditou moderního života.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
                <div className="text-center p-4 md:p-6 rounded-xl bg-slate-800/30 border border-cyan-500/20 flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm text-white/60 font-medium">Básní</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-xl bg-slate-800/30 border border-purple-500/20 flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-sm text-white/60 font-medium">Parodií</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-xl bg-slate-800/30 border border-pink-500/20 flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">70K</div>
                  <div className="text-sm text-white/60 font-medium">Followerů</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1 max-w-md mx-auto">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="./IMG_3425.JPG"
                    alt="JENDIK Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Futuristic Style */}
      <section id="portfolio" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Moje tvorba
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light px-4">
              Nejlepší básně, parodie a hudební projekty
            </p>
          </div>
          
          <div className="space-y-24">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="aspect-[9/16] max-w-xs sm:max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/20 group cursor-pointer">
                    {item.videoUrl ? (
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="text-white w-16 h-16" />
                        </div>
                      </>
                    )}
                    </div>
                    <div className="absolute -top-4 -right-4">
                      {item.type === 'music' && <Music className="text-purple-400 w-8 h-8" />}
                      {item.type === 'poetry' && <BookOpen className="text-cyan-400 w-8 h-8" />}
                      {item.type === 'rap' && <Mic className="text-pink-400 w-8 h-8" />}
                    </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">{item.title}</h3>
                  <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-6 text-center md:text-left px-4 md:px-0">
                    {item.description}
                  </p>
                  <div className="text-sm text-cyan-400 font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
                    <Eye size={16} />
                    {item.metrics}
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2">
                    Poslechnout
                    <Play size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section - Futuristic Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Najdeš mě všude
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light">
              Sleduj mou tvorbu na všech platformách
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {socialStats.map((social, index) => (
              <a
                href={
                  social.platform === 'Instagram' ? 'https://www.instagram.com/jan_stanek_98/?hl=cs' :
                  social.platform === 'YouTube' ? 'https://www.youtube.com/@jan_stanek_98' :
                  social.platform === 'TikTok' ? 'https://www.tiktok.com/@jendik98' : '#'
                }
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl bg-slate-800/30 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${social.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{social.platform}</h3>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 text-center">
                    {social.followers} Sledujících
                  </p>
                  <div className="text-white/60 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    Sledovat
                    <ExternalLink className="ml-2" size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Futuristic Style */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Pojďme tvořit
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light">
              Máš nápad na spolupráci? Ozvi se!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center md:text-left">Kontaktní informace</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 rounded-xl bg-slate-800/30 border border-white/10">
                  <Mail className="text-cyan-400 mr-4" size={24} />
                  <span className="text-white/80 text-sm md:text-base break-all">jan.stanek.spoluprace@gmail.com</span>
                </div>
                <div className="flex items-center p-4 rounded-xl bg-slate-800/30 border border-white/10">
                  <MapPin className="text-pink-400 mr-4" size={24} />
                  <span className="text-white/80">Praha, Česká republika</span>
                </div>
              </div>
              
              <div className="mt-8 md:mt-12">
                <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 text-center md:text-left">Typy spolupráce</h4>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-purple-500/20">
                  <div className="flex items-start md:items-center text-white/80 text-sm md:text-base text-center md:text-left">
                    <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <span className="font-medium">Kreativní marketing prostřednictvím hudebních parodií a autorského obsahu</span>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-800/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:ring-0 transition-colors text-sm md:text-base"
                  placeholder="Jméno"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-800/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:ring-0 transition-colors text-sm md:text-base"
                  placeholder="Email"
                />
              </div>
              <div>
                <select 
                  name="collaborationType"
                  value={formData.collaborationType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-800/30 border border-white/20 rounded-xl text-white focus:border-cyan-400 focus:ring-0 transition-colors text-sm md:text-base"
                >
                  <option value="">Typ spolupráce</option>
                  <option value="marketing">Kreativní marketing prostřednictvím hudebních parodií</option>
                  <option value="custom">Vlastní nápad na spolupráci</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-800/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-cyan-400 focus:ring-0 resize-none transition-colors text-sm md:text-base"
                  placeholder="Zpráva - popište svůj nápad nebo projekt"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-3 md:py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-sm md:text-base"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer - Futuristic Style */}
      <footer className="bg-slate-900/50 py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                JENDIK
              </div>
              <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
              Básník a parodista, který baví a inspiruje tisíce lidí každý den.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Rychlé odkazy</h4>
              <div className="space-y-3">
                {['O mně', 'Tvorba', 'Kontakt'].map((item) => (
                  <button
                    key={item}
                    className="block w-full text-center md:text-left text-white/60 hover:text-white transition-colors font-light text-sm md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Sociální sítě</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialStats.map((social, index) => (
                  <a
                    key={index}
                    href={
                      social.platform === 'Instagram' ? 'https://www.instagram.com/jan_stanek_98/?hl=cs' :
                      social.platform === 'YouTube' ? 'https://www.youtube.com/@jan_stanek_98' :
                      social.platform === 'TikTok' ? 'https://www.tiktok.com/@jendik98' : '#'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon size={20} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
            <p className="text-white/40 font-light text-xs md:text-sm">
              © 2024 JENDIK. Všechna práva vyhrazena. Vytvořeno s láskou k poezii a hudbě.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;