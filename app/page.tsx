"use client"
import { useTheme } from "next-themes";
import Hero from "./_components/Hero";
import { useEffect, useState } from "react";
import Link from "next/link";
import Categories from "./_components/Categories";

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

    <main className="flex-grow pt-20">
      <Hero />
      <Categories/>
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take the next step in your career?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have found their dream jobs through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/jobs"
              className="px-6 py-3 bg-white text-blue-700 dark:bg-gray-700 dark:text-white hover:bg-neutral-100 rounded-md transition-colors font-medium"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Home
