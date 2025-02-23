import JobSearchInput from "./JobSearchInput";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="relative w-full h-full flex items-center justify-between md:px-16 lg:px-24 xl:px-36">
      <h1 className="text-2xl font-bold text-white">LinkedHire</h1>
      <ThemeSwitch/>
      <div className="w-full absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <JobSearchInput />
      </div>
    </header>
  )
};

export default Header
