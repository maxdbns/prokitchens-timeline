export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-t border-slate-200/50 dark:border-slate-700/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">ProKitchens</h3>
            <p className="text-sm text-slate-700 dark:text-slate-400">Infrastructure mondiale pour la F&B. 30+ pays, 350+ propriétés.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Cette Timeline</h3>
            <ul className="text-sm text-slate-700 dark:text-slate-400 space-y-2">
              <li>7 phases</li>
              <li>40+ jalons détaillés</li>
              <li>2-12 mois de déploiement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Actionne</h3>
            <a href="#" className="text-sm text-[#5BC8C8] hover:text-[#3A8A96] font-semibold">
              Demander une consultation →
            </a>
          </div>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-8 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">© 2025 ProKitchens. Infrastructure pour une meilleure alimentation.</p>
        </div>
      </div>
    </footer>
  );
}
