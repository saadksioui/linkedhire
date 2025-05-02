'use client';

import { Button } from '@/components/ui/button';
import { Briefcase as BriefcaseBusiness, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white dark:bg-neutral-900 shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BriefcaseBusiness className="h-8 w-8 text-blue-700 dark:text-white" />
            <span className="text-xl font-bold text-blue-700 dark:text-white">
            LinkedHire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/jobs" label="Browse Jobs" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
            <ThemeSwitch />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-neutral-800 dark:text-neutral-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/jobs" label="Browse Jobs" />
            <MobileNavLink href="/about" label="About" />
            <MobileNavLink href="/contact" label="Contact" />
            <ThemeSwitch />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-primary-700 dark:hover:text-primary-400 ${
        isActive ? 'text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base py-2 transition-colors ${
        isActive
          ? 'text-primary-700 font-medium dark:text-primary-400'
          : 'text-neutral-700 dark:text-neutral-300'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
