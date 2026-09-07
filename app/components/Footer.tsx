export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-t border-slate-200/50 dark:border-slate-700/50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">À propos de ProKitchens</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Infrastructure mondiale pour la F&B. ProKitchens construit et opère des installations de cuisine professionnelles pour les entreprises alimentaires.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Présence Mondiale</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li>→ 30+ pays</li>
              <li>→ 350+ propriétés</li>
              <li>→ 120+ villes</li>
              <li>→ 8,000+ locataires F&B</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Cette Timeline</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li>→ 7 phases</li>
              <li>→ 40+ jalons détaillés</li>
              <li>→ 2-12 mois de déploiement</li>
              <li>→ Couverture complète</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © 2025 ProKitchens. Infrastructure pour une meilleure alimentation.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Cette chronologie est indicative et sujette à variation selon les spécificités du projet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
