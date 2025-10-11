import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin, Users, Eye, Heart, MessageCircle, Star, Menu, X, ExternalLink, ArrowRight, Play, Mic, Music, BookOpen, Zap, Sparkles, Headphones } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
      title: "Rozvrh - Hudební parodie",
      description: "Vtipná parodie na téma školního rozvrhu, která pobavila tisíce studentů a učitelů.",
      metrics: "500K+ přehrání • 15K sdílení",
      image: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "/videos/rozvrh.mp4",
      instagramUrl: null,
      type: "music"
    },
    {
      title: "Na ostří nože - parodie",
      description: "Parodie na střevní potíže.",
      metrics: "200K+ zhlédnutí • 10K sdílení",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "/videos/repre.mp4",
      type: "poetry"
    },
    {
      title: "Pistácie - parodie",
      description: "Realita",
      metrics: "200K+ zhlédnutí • 7K sdílení",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1200",
      videoUrl: "/videos/pistace.mp4",
      type: "music"
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 backdrop-blur-sm">
          {/* JENDIK Title - Desktop Only */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
              JENDIK
            </h1>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
              <BookOpen className="text-cyan-400" size={20} />
              <span className="text-white font-medium">Básník</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-green-500/30">
              <Headphones className="text-green-400" size={20} />
              <span className="text-white font-medium">Songwriter</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/30">
              <Music className="text-purple-400" size={20} />
              <span className="text-white font-medium">Parodista</span>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 sm:mb-16 font-light leading-relaxed max-w-4xl mx-auto px-4 text-center drop-shadow-lg">
            Tvořím básně, které tě rozesmějí, a parodie písniček, které si budeš zpívat celý den. 
            Spojuji humor s poezií a hudbu s nečekanými zvraty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-20 px-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
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
          
          {/* Spotify Section - Under buttons */}
          <div className="mb-12 sm:mb-20 px-4">
            <div className="max-w-md mx-auto">
              <a
                href="https://open.spotify.com/track/3fkC9HJqOfV3dZ8zbcROBP?si=156ca75fc85f4564"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 md:p-4 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 cursor-pointer overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Headphones className="text-white" size={28} />
                      </div>
                      <div>
                        <div className="flex items-start flex-col gap-1 mb-1">
                          <h3 className="text-lg font-bold text-white">Spotify</h3>
                          <p className="text-green-400 font-semibold text-base">🎵 Vzpomínám</p>
                        </div>
                        <p className="text-white/80 text-sm font-medium">Poslechni si teď!</p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-3 group-hover:translate-x-0">
                      <div className="flex items-center gap-2 text-white/90 bg-green-500/20 px-3 py-2 rounded-full border border-green-400/30">
                        <span className="text-sm font-semibold">▶ Přehrát</span>
                        <ExternalLink size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            </div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-purple-900/70 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
                O mně
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/90 font-light leading-relaxed text-center md:text-left drop-shadow-lg">
                <p>
                  Jsem JENDIK a věnuji se tomu, co mě baví nejvíc - tvorbě básní, parodií na populární písničky a psaní vlastních songů. 
                  Začal jsem jako hobby, ale postupně se to stalo mou vášní a způsobem, jak bavit lidi.
                </p>
                <p>
                  Moje básně často reflektují současný svět s humorem a ironií. Parodie písniček i vlastní songy vytvářím tak, 
                  aby byly vtipné, ale zároveň chytlavé a melodické. Jako songwriter se snažím zachytit emoce a příběhy, 
                  které rezonují s lidmi. Věřím, že humor a hudba jsou nejlepší způsoby, jak se vypořádat s absurditou moderního života.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
                <div className="text-center p-4 md:p-6 rounded-xl bg-slate-800/40 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm text-white/60 font-medium">Básní</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-xl bg-slate-800/40 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-sm text-white/60 font-medium">Parodií</div>
                </div>
                <div className="text-center p-4 md:p-6 rounded-xl bg-slate-800/40 backdrop-blur-md border border-pink-500/30 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">70K</div>
                  <div className="text-sm text-white/60 font-medium">Followerů</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1 max-w-md mx-auto">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/IMG_3425.JPG"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Moje tvorba
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light px-4 drop-shadow-lg">
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
                      <video 
                        className="w-full h-full object-cover shadow-2xl"
                        controls
                        preload="metadata"
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                        Váš prohlížeč nepodporuje video tag.
                      </video>
                    ) : (
                      <>
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
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
                  <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 text-center md:text-left px-4 md:px-0 drop-shadow-lg">
                    {item.description}
                  </p>
                  <div className="text-sm text-cyan-400 font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
                    <Eye size={16} />
                    {item.metrics}
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <a 
                      href={item.instagramUrl || "https://www.instagram.com/jan_stanek_98/?hl=cs"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 backdrop-blur-sm border border-white/10"
                    >
                      Více na Instagramu
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Najdeš mě všude
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light drop-shadow-lg">
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
                className="group relative p-6 md:p-8 rounded-2xl bg-slate-800/40 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${social.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <social.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{social.platform}</h3>
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 text-center">
                    {`${social.followers} Sledujících`}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Pojďme tvořit
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light drop-shadow-lg">
              Máš zájem o spolupráci? Ozvi se!
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">Kontaktní informace</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center p-6 rounded-xl bg-slate-800/40 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <Mail className="text-cyan-400 mr-4" size={24} />
                  <span className="text-white/80 text-sm md:text-base break-all">jan.stanek.spoluprace@gmail.com</span>
                </div>
                <div className="flex items-center justify-center p-6 rounded-xl bg-slate-800/40 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <MapPin className="text-pink-400 mr-4" size={24} />
                  <span className="text-white/80">Praha, Česká republika</span>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-bold text-white mb-6">Typy spolupráce</h4>
                <div className="p-6 rounded-xl bg-slate-800/40 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
                  <div className="flex items-center justify-center text-white/80 text-base">
                    <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <span className="font-medium">Kreativní marketing prostřednictvím hudebních parodií a autorského obsahu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Futuristic Style */}
      <footer className="bg-slate-900/70 backdrop-blur-md py-12 md:py-16 border-t border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                JENDIK
              </div>
              <p className="text-white/70 font-light leading-relaxed text-sm md:text-base drop-shadow-sm">
              Básník a parodista, který baví a inspiruje tisíce lidí každý den.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Rychlé odkazy</h4>
              <div className="space-y-3">
                {['O mně', 'Tvorba', 'Kontakt'].map((item) => (
                  <button
                    key={item}
                    className="block w-full text-center md:text-left text-white/70 hover:text-white transition-colors font-light text-sm md:text-base hover:drop-shadow-lg"
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
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon size={20} className="text-white" />
                  </a>
                ))}
                <a
                  href="https://open.spotify.com/track/3fkC9HJqOfV3dZ8zbcROBP?si=156ca75fc85f4564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  <Headphones size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
            <p className="text-white/50 font-light text-xs md:text-sm drop-shadow-sm">
              © 2024 JENDIK. Všechna práva vyhrazena. Vytvořeno s láskou k poezii a hudbě.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;