import Image from "next/image";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-slate-900 shadow-lg"
          : "bg-gradient-to-b from-white to-transparent dark:from-slate-950 dark:to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-[#5BC8C8] relative">
              <div className="absolute inset-1 border-2 border-[#5BC8C8] rounded-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%)" }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-widest">PROKITCHENS</span>
              <span className="text-xs text-[#5BC8C8] font-semibold">LAUNCH TIMELINE</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">Dark Kitchen Deployment</p>
            <p className="text-sm font-semibold text-[#1A4E58] dark:text-[#5BC8C8]">2-12 Months</p>
          </div>
        </div>
      </div>
    </header>
  );
}
