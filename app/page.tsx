"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <Timeline />
      <Footer />
    </main>
  );
}
