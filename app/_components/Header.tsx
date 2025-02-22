import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="w-full h-full flex items-center justify-between md:px-16 lg:px-24 xl:px-36">
      <h1 className="text-2xl font-bold text-white dark:text-black">LinkedHire</h1>
      <ThemeSwitch/>
    </header>
  )
};

export default Header
