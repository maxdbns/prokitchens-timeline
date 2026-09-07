export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] flex items-center justify-center text-white font-bold text-sm">
            PK
          </div>
          <div>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-widest">PROKITCHENS</p>
            <p className="text-xs text-[#5BC8C8] font-semibold">Timeline</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-8">
          <a href="#timeline" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#5BC8C8] transition-colors">
            Explorer
          </a>
        </nav>
      </div>
    </header>
  );
}
