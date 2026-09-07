"use client";

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxY = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#5BC8C8]/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxY}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3A8A96]/15 rounded-full blur-3xl"
          style={{ transform: `translateY(${-parallaxY * 0.7}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte - Animations */}
          <div className="space-y-8 animate-in-view in-view">
            <div>
              <p className="text-sm font-bold text-[#5BC8C8] tracking-widest mb-4">
                ✦ LANCEMENT DE DARK KITCHEN
              </p>
              <h1 className="text-8xl lg:text-9xl font-black leading-[1.1] text-slate-900 dark:text-white">
                Votre<br/>Timeline
              </h1>
              <p className="text-5xl font-light text-slate-400 dark:text-slate-500 mt-6">
                en 7 phases essentielles
              </p>
            </div>

            <p className="text-xl text-slate-700 dark:text-slate-400 font-light leading-relaxed max-w-lg">
              Du concept à l'ouverture officielle. 40+ jalons précis. Une chronologie qui transforme votre vision en réalité opérationnelle.
            </p>

            <div className="flex gap-4 pt-8">
              <a href="#timeline" className="group px-8 py-4 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2">
                Explorer la Timeline
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Stats - 3D Cards avec animations */}
          <div className="relative h-[600px] hidden lg:block perspective">
            {/* Card 1 - Phases */}
            <div 
              className="absolute top-0 right-0 w-64 h-48 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 animate-in-view in-view hover:glow transition-all duration-300"
              style={{ 
                transform: `translateY(${parallaxY * 0.2}px) rotate(-5deg)`,
                animationDelay: '0.1s'
              }}
            >
              <div className="text-6xl font-black bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] bg-clip-text text-transparent">7</div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-4">Phases Stratégiques</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Chacune critique pour le succès</p>
            </div>

            {/* Card 2 - Jalons */}
            <div 
              className="absolute top-1/3 right-32 w-64 h-48 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 animate-in-view in-view hover:glow transition-all duration-300"
              style={{ 
                transform: `translateY(${parallaxY * 0.3}px) rotate(3deg)`,
                animationDelay: '0.2s'
              }}
            >
              <div className="text-6xl font-black bg-gradient-to-br from-[#3A8A96] to-[#1A4E58] bg-clip-text text-transparent">40+</div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-4">Jalons Détaillés</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Chaque étape mapée</p>
            </div>

            {/* Card 3 - Durée */}
            <div 
              className="absolute bottom-10 right-0 w-64 h-48 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 animate-in-view in-view hover:glow transition-all duration-300"
              style={{ 
                transform: `translateY(${parallaxY * 0.1}px) rotate(-2deg)`,
                animationDelay: '0.3s'
              }}
            >
              <div className="text-6xl font-black bg-gradient-to-br from-[#1A4E58] to-[#5BC8C8] bg-clip-text text-transparent">2-12</div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-4">Mois de Déploiement</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">De la préparation à l'ouverture</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#5BC8C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
