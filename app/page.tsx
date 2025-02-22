"use client"
import { useTheme } from "next-themes";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

const Home = () => {
  const {theme} = useTheme();

  return (
    <div className="">
      {/* Header */}
      <div
        className="h-48 rounded-bl-[8rem]"
        style={{
          backgroundImage: theme === "dark"
            ? `url("/stacked-waves-gray.svg")`
            : `url("/stacked-waves-blue.svg")`,
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
