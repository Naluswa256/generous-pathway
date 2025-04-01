
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

const NavLink = ({ href, children, className, active }: NavLinkProps) => (
  <Link
    to={href}
    className={cn(
      "text-foreground hover:text-charity-blue transition-colors px-4 py-2 font-medium",
      active && "text-charity-blue",
      className
    )}
  >
    {children}
  </Link>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl text-charity-blue mr-8">
            SIC
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/blog">Blogs</NavLink>
            <NavLink href="/events">Upcoming Events</NavLink>
            <NavLink href="/contact">Connect With Us</NavLink>
            <NavLink href="/donate">Your Donation</NavLink>
          </nav>
        </div>

        <div className="hidden md:block">
          <CTAButton>Donate Now</CTAButton>
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-3">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/blog">Blogs</NavLink>
            <NavLink href="/events">Upcoming Events</NavLink>
            <NavLink href="/contact">Connect With Us</NavLink>
            <NavLink href="/donate">Your Donation</NavLink>
            <div className="pt-2">
              <CTAButton className="w-full justify-center">Donate Now</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
