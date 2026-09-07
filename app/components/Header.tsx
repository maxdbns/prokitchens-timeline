export interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#5BC8C8] relative flex items-center justify-center bg-gradient-to-br from-[#5BC8C8]/20 to-transparent">
              <div className="w-5 h-5 border border-[#5BC8C8] rounded-full opacity-60" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-widest">PROKITCHENS</span>
              <span className="text-xs text-[#5BC8C8] font-semibold">TIMELINE</span>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-500 dark:text-slate-400">Chronologie de lancement</p>
            <p className="text-sm font-semibold text-[#1A4E58] dark:text-[#5BC8C8]">2-12 mois</p>
          </div>
        </div>
      </div>
    </header>
  );
}
