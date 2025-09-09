import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Main App Component
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const socialStats = [
    { platform: 'Instagram', followers: '30K', url: 'https://www.instagram.com/jan_stanek_98/?hl=cs' },
    { platform: 'YouTube', followers: '2K', url: 'https://www.youtube.com/@jan_stanek_98' },
    { platform: 'TikTok', followers: '30K', url: 'https://www.tiktok.com/@jendik98' },
  ];

  return React.createElement('div', {
    className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
  }, 
    // Navigation
    React.createElement('nav', {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
      }`
    },
      React.createElement('div', { className: "max-w-7xl mx-auto px-6" },
        React.createElement('div', { className: "flex justify-between items-center h-20" },
          React.createElement('div', {
            className: "text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          }, "JENDIK"),
          React.createElement('div', { className: "hidden md:flex items-center space-x-10" },
            ['home', 'about', 'portfolio', 'contact'].map((item) =>
              React.createElement('button', {
                key: item,
                onClick: () => scrollToSection(item),
                className: "relative text-white/80 hover:text-white transition-all duration-300 font-medium group"
              }, 
                item === 'home' ? 'Domů' : item === 'about' ? 'O mně' : item === 'portfolio' ? 'Tvorba' : 'Kontakt',
                React.createElement('span', {
                  className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
                })
              )
            )
          )
        )
      )
    ),
    
    // Hero Section
    React.createElement('section', {
      id: "home",
      className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    },
      React.createElement('div', { className: "absolute inset-0" },
        React.createElement('div', { className: "absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }),
        React.createElement('div', { className: "absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" }),
        React.createElement('div', { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" })
      ),
      React.createElement('div', { className: "max-w-6xl mx-auto px-6 text-center relative z-10" },
        React.createElement('div', { className: "flex items-center justify-center gap-4 mb-8" },
          React.createElement('span', { className: "text-cyan-400 text-6xl" }, "∞"),
          React.createElement('h1', {
            className: "text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          }, "JENDIK"),
          React.createElement('span', { className: "text-cyan-400 text-6xl" }, "∞")
        ),
        React.createElement('p', {
          className: "text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed max-w-4xl mx-auto"
        }, "Tvořím básně, které tě rozesmějí, a parodie písniček, které si budeš zpívat celý den. Spojuji humor s poezií a hudbu s nečekanými zvraty."),
        
        React.createElement('div', { className: "flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" },
          React.createElement('button', {
            onClick: () => scrollToSection('contact'),
            className: "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          }, "👥 Spolupráce"),
          React.createElement('button', {
            onClick: () => scrollToSection('portfolio'),
            className: "text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/10"
          }, "Poslechnout si mě")
        ),
        
        // Stats
        React.createElement('div', { className: "grid md:grid-cols-3 gap-8 max-w-3xl mx-auto" },
          React.createElement('div', { className: "p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20" },
            React.createElement('div', { className: "text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2" }, "70K+"),
            React.createElement('div', { className: "text-white/60 font-light text-sm" }, "Celkové sledování")
          ),
          React.createElement('div', { className: "p-6 rounded-2xl bg-slate-800/30 border border-purple-500/20" },
            React.createElement('div', { className: "text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2" }, "2M+"),
            React.createElement('div', { className: "text-white/60 font-light text-sm" }, "Přehrání")
          ),
          React.createElement('div', { className: "p-6 rounded-2xl bg-slate-800/30 border border-pink-500/20" },
            React.createElement('div', { className: "text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2" }, "50+"),
            React.createElement('div', { className: "text-white/60 font-light text-sm" }, "Vytvořených děl")
          )
        )
      )
    ),

    // About Section
    React.createElement('section', {
      id: "about",
      className: "py-24 relative"
    },
      React.createElement('div', { className: "absolute inset-0 bg-gradient-to-r from-slate-900/50 to-purple-900/50" }),
      React.createElement('div', { className: "max-w-7xl mx-auto px-6 relative z-10" },
        React.createElement('div', { className: "grid md:grid-cols-2 gap-16 items-center" },
          React.createElement('div', null,
            React.createElement('h2', {
              className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8"
            }, "O mně"),
            React.createElement('div', { className: "space-y-6 text-lg text-white/80 font-light leading-relaxed" },
              React.createElement('p', null, "Jsem JENDIK a věnuji se tomu, co mě baví nejvíc - tvorbě básní a parodií na populární písničky. Začal jsem jako hobby, ale postupně se to stalo mou vášní a způsobem, jak bavit lidi."),
              React.createElement('p', null, "Moje básně často reflektují současný svět s humorem a ironií. Parodie písniček vytvářím tak, aby byly vtipné, ale zároveň chytlavé. Věřím, že humor je nejlepší způsob, jak se vypořádat s absurditou moderního života.")
            )
          ),
          React.createElement('div', { className: "relative" },
            React.createElement('div', { className: "aspect-square rounded-2xl overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1" },
              React.createElement('div', { className: "w-full h-full rounded-xl overflow-hidden" },
                React.createElement('img', {
                  src: "IMG_3425.JPG",
                  alt: "JENDIK Profile",
                  className: "w-full h-full object-cover"
                })
              )
            )
          )
        )
      )
    ),

    // Social Media Section
    React.createElement('section', {
      className: "py-24 relative"
    },
      React.createElement('div', { className: "max-w-7xl mx-auto px-6" },
        React.createElement('div', { className: "text-center mb-20" },
          React.createElement('h2', {
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6"
          }, "Najdeš mě všude"),
          React.createElement('p', {
            className: "text-xl text-white/70 font-light"
          }, "Sleduj mou tvorbu na všech platformách")
        ),
        React.createElement('div', { className: "grid md:grid-cols-3 gap-8" },
          socialStats.map((social, index) =>
            React.createElement('a', {
              key: index,
              href: social.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative p-8 rounded-2xl bg-slate-800/30 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer overflow-hidden"
            },
              React.createElement('div', { className: "relative z-10" },
                React.createElement('div', { className: "mb-6 flex justify-center" },
                  React.createElement('div', { className: "p-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:scale-110 transition-transform duration-300" },
                    React.createElement('div', { className: "text-white text-3xl" }, 
                      social.platform === 'Instagram' ? '📷' : 
                      social.platform === 'YouTube' ? '📺' : '🎵'
                    )
                  )
                ),
                React.createElement('h3', { className: "text-xl font-bold text-white mb-3" }, social.platform),
                React.createElement('p', {
                  className: "text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
                }, social.followers + " Sledujících")
              )
            )
          )
        )
      )
    ),

    // Contact Section
    React.createElement('section', {
      id: "contact",
      className: "py-24 relative"
    },
      React.createElement('div', { className: "max-w-5xl mx-auto px-6" },
        React.createElement('div', { className: "text-center mb-20" },
          React.createElement('h2', {
            className: "text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6"
          }, "Pojďme tvořit"),
          React.createElement('p', {
            className: "text-xl text-white/70 font-light"
          }, "Máš nápad na spolupráci? Ozvi se!")
        ),
        React.createElement('div', { className: "grid md:grid-cols-2 gap-16" },
          React.createElement('div', null,
            React.createElement('h3', { className: "text-2xl font-bold text-white mb-8" }, "Kontaktní informace"),
            React.createElement('div', { className: "space-y-6" },
              React.createElement('div', { className: "flex items-center p-4 rounded-xl bg-slate-800/30 border border-white/10" },
                React.createElement('span', { className: "text-cyan-400 mr-4 text-2xl" }, "📧"),
                React.createElement('span', { className: "text-white/80" }, "jan.stanek.spoluprace@gmail.com")
              ),
              React.createElement('div', { className: "flex items-center p-4 rounded-xl bg-slate-800/30 border border-white/10" },
                React.createElement('span', { className: "text-pink-400 mr-4 text-2xl" }, "📍"),
                React.createElement('span', { className: "text-white/80" }, "Praha, Česká republika")
              )
            )
          ),
          React.createElement('div', { className: "p-8 rounded-2xl bg-slate-800/30 border border-white/10" },
            React.createElement('h4', { className: "text-lg font-bold text-white mb-6" }, "Typy spolupráce"),
            React.createElement('div', { className: "p-4 rounded-xl bg-slate-800/30 border border-purple-500/20" },
              React.createElement('div', { className: "flex items-center text-white/80" },
                React.createElement('div', { className: "w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-purple-400 to-pink-400" }),
                React.createElement('span', { className: "font-medium" }, "Kreativní marketing prostřednictvím hudebních parodií a autorského obsahu")
              )
            )
          )
        )
      )
    ),

    // Footer
    React.createElement('footer', {
      className: "bg-slate-900/50 py-16 border-t border-white/10"
    },
      React.createElement('div', { className: "max-w-7xl mx-auto px-6" },
        React.createElement('div', { className: "text-center" },
          React.createElement('div', {
            className: "text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
          }, "JENDIK"),
          React.createElement('p', {
            className: "text-white/60 font-light leading-relaxed mb-8"
          }, "Básník a parodista, který spojuje humor s poezií a vytváří obsah, který baví a inspiruje tisíce lidí každý den."),
          React.createElement('div', { className: "flex justify-center space-x-4 mb-8" },
            socialStats.map((social, index) =>
              React.createElement('a', {
                key: index,
                href: social.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              },
                React.createElement('span', { className: "text-white text-xl" },
                  social.platform === 'Instagram' ? '📷' : 
                  social.platform === 'YouTube' ? '📺' : '🎵'
                )
              )
            )
          ),
          React.createElement('p', {
            className: "text-white/40 font-light text-sm"
          }, "© 2024 JENDIK. Všechna práva vyhrazena. Vytvořeno s láskou k poezii a hudbě.")
        )
      )
    )
  );
}

// Initialize the app
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));