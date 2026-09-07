import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timeline Dark Kitchen | ProKitchens",
  description: "Votre parcours complet de lancement en 7 phases essentielles. De la préparation à l'ouverture officielle.",
  openGraph: {
    title: "Timeline Dark Kitchen",
    description: "Le parcours complet de votre dark kitchen en 7 phases",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={rubik.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[var(--bg-light)] text-[var(--text-primary)]">
        {/* Gradient Background Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#5BC8C8]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#3A8A96]/6 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-[#1A4E58]/4 to-transparent rounded-full blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}
