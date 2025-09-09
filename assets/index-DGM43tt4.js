import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Simplified version of the main app
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
        }, "Tvořím básně, které tě rozesmějí, a parodie písniček, které si budeš zpívat celý den. Spojuji humor s poezií a hudbu s nečekanými zvraty.")
      )
    )
  );
}

// Initialize the app
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));