@@ .. @@
       <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
         <div className="flex items-center justify-center gap-4 mb-8">
           <span className="text-cyan-400 text-6xl">∞</span>
           <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
             JENDIK
           </h1>
           <span className="text-cyan-400 text-6xl">∞</span>
         </div>
         
-        <div className="flex items-center justify-center gap-6 mb-8">
+        <div className="flex items-center justify-center gap-6 mb-12">
           <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-500/30">
             <BookOpen className="text-cyan-400" size={20} />
             <span className="text-white font-medium">Básník</span>
           </div>
           <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/30">
             <Music className="text-purple-400" size={20} />
             <span className="text-white font-medium">Parodista</span>
           </div>
         </div>
         
-        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
+        <p className="text-xl md:text-2xl text-white/80 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
           Tvořím básně, které tě rozesmějí, a parodie písniček, které si budeš zpívat celý den. 
           Spojuji humor s poezií a hudbu s nečekanými zvraty.
         </p>
         
-        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
+        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
           <button 
             onClick={() => scrollToSection('contact')}
             className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
           >
             <span className="flex items-center gap-2">
               <Users size={20} />
               Spolupráce
             </span>
           </button>
           <button 
             onClick={() => scrollToSection('portfolio')}
             className="group text-white border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/10"
           >
             Poslechnout si mě
           </button>
         </div>
         
         {/* Stats Section - Moved below buttons */}
-        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
+        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
           <div className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20">
             <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">70K+</div>
             <div className="text-white/60 font-light text-sm">Celkové sledování</div>
           </div>