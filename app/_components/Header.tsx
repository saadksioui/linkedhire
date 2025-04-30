import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="relative w-full h-full flex items-center justify-between px-10 md:px-16 lg:px-24 xl:px-36">
      <h1 className="text-2xl font-bold text-white">LinkedHire</h1>
      <ThemeSwitch/>
    </header>
  )
};

export default Header
