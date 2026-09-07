"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-light)] flex flex-col">
      <Header />
      <Hero />
      <Timeline />
      <Footer />
    </main>
  );
}
