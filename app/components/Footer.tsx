export default function Footer() {
  return (
    <footer className="bg-[#1A4E58] dark:bg-slate-950 text-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3 text-[#5BC8C8]">About ProKitchens</h3>
            <p className="text-sm text-slate-300">
              Infrastructure for Better Food. ProKitchens builds and operates commercial kitchen facilities for food businesses globally.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#5BC8C8]">Key Numbers</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• 30+ Countries</li>
              <li>• 350+ Properties</li>
              <li>• 120+ Cities</li>
              <li>• 8,000+ F&B Tenants</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[#5BC8C8]">Timeline Focus</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• 7 Major Phases</li>
              <li>• 40+ Detailed Steps</li>
              <li>• 2-12 Month Duration</li>
              <li>• Risk Identification</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2025 ProKitchens. Infrastructure for Better Food.
            </p>
            <p className="text-xs text-slate-500 mt-4 md:mt-0">
              This timeline is indicative and subject to variation based on specific project requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
