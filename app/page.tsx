"use client"
import { useTheme } from "next-themes";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useEffect, useState } from "react";
import Footer from "./_components/Footer";

const Home = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is available after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-bl-[8rem]" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
      </main>
      <Footer />
    </div>
  )
};

export default Home
