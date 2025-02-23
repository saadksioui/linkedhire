"use client"
import { useTheme } from "next-themes";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useEffect, useState } from "react";

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
    <div className="">
      {/* Header */}
      <div
        className="h-48 rounded-bl-[8rem]"
        style={{
          backgroundImage: `url("/stacked-waves-blue.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
      </div>
      {/* Hero */}
      <Hero />
    </div>
  )
};

export default Home
