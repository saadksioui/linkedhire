
import { Briefcase as BriefcaseBusiness, Mail, Facebook, Twitter, Linkedin, Instagram, LucideIcon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BriefcaseBusiness className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">JobHub</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Find your dream job or the perfect candidate with JobHub's modern job portal platform.
            </p>
            <div className="flex space-x-4">
              <SocialLink Icon={Facebook} href="#" ariaLabel="Facebook" />
              <SocialLink Icon={Twitter} href="#" ariaLabel="Twitter" />
              <SocialLink Icon={Linkedin} href="#" ariaLabel="LinkedIn" />
              <SocialLink Icon={Instagram} href="#" ariaLabel="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/jobs" label="Browse Jobs" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/post-job" label="Post a Job" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/resources" label="Career Resources" />
              <FooterLink href="/tips" label="Job Search Tips" />
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/terms" label="Terms of Service" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-neutral-300 mb-4">
              Stay updated with the latest job opportunities and career tips.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-md w-full text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-800 transition-colors px-4 py-2 rounded-r-md flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Mail size={18} />
                </button>
              </div>
              <p className="text-xs text-neutral-400">
                We'll never share your email with anyone else.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-neutral-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} JobHub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link href={href} className="text-neutral-300 hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

interface SocialLinkProps {
  Icon: LucideIcon;
  href: string;
  ariaLabel: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, href, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="bg-neutral-800 p-2 rounded-full hover:bg-primary-700 transition-colors"
  >
    <Icon size={18} />
  </a>
);

export default Footer;