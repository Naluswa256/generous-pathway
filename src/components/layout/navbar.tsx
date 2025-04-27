
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, className, active, onClick }: NavLinkProps) => (
  <Link
    to={href}
    className={cn(
      "text-foreground hover:text-charity-blue transition-colors px-3 py-2 font-medium text-sm whitespace-nowrap",
      active && "text-charity-blue",
      className
    )}
    onClick={onClick}
  >
    {children}
  </Link>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Add scroll effect for better UI
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated navigation links with shorter labels where possible
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/what-we-do", label: "Our Work" },
    { path: "/how-we-started", label: "Origins" },
    { path: "/news", label: "News" },
    { path: "/events", label: "Events" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Connect" },
    { path: "/donate", label: "Donate" }
  ];

  return (
    <header className={cn(
      "sticky top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-border transition-shadow duration-300",
      isScrolled && "shadow-md"
    )}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl text-charity-blue mr-4">
            SIC
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                href={link.path}
                active={isActive(link.path)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* <div className="hidden md:block">
          <CTAButton asChild>
            <Link to="/donate">Donate Now</Link>
          </CTAButton>
        </div> */}

        <div className="hidden md:block">
          <a
            href="https://donorbox.org/sharing-is-caring-7?"
            target="_blank"
            rel="noopener noreferrer"
            className="dbox-donation-page-button"
            style={{
              background: 'rgb(52, 152, 219)',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'none',
              fontFamily: 'Verdana, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              width: 'fit-content',
              fontSize: '16px',
              borderRadius: '5px',
              lineHeight: '24px',
              padding: '8px 24px',
            }}
          >
            <img src="https://donorbox.org/images/white_logo.svg" alt="Donorbox Logo" />
            Donate
          </a>
        </div>


        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu with animation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-3">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                href={link.path}
                active={isActive(link.path)}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <CTAButton className="w-full justify-center" asChild>
                <Link to="/donate" onClick={closeMenu}>Donate Now</Link>
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
