import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Phone, Clock } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Our Story", path: "/our-story" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-dojo-red-dark via-dojo-red to-dojo-red-dark text-white text-xs font-medium py-2 px-4 text-center flex items-center justify-center gap-2 tracking-wide">
        <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
          New Offer
        </span>
        <span>Your first class is 100% Free — Experience authentic Japanese Karate.</span>
        <Link
          to="/contact"
          className="underline font-semibold hover:text-white/80 inline-flex items-center ml-1"
        >
          Book a Trial <ChevronRight className="w-3 h-3 inline ml-0.5" />
        </Link>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dojo-bg/95 backdrop-blur-md border-b border-dojo-border shadow-xl shadow-black/40 py-3"
            : "bg-dojo-bg border-b border-dojo-border/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-dojo-red to-dojo-red-dark p-0.5 shadow-md shadow-dojo-red/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src="/images/8zXpf9qctVPX4fv4KqZozrHcAc.png"
                alt="Shinken Karate Emblem"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-dojo-gold transition-colors">
                  SHINKEN
                </span>
                <span className="text-[10px] bg-dojo-card text-dojo-gold px-1.5 py-0.5 rounded font-bold border border-dojo-border">
                  真剣
                </span>
              </div>
              <span className="text-[11px] text-dojo-muted tracking-widest font-semibold block uppercase">
                Karate Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dojo-surface/80 p-1.5 rounded-full border border-dojo-border/80">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-dojo-card text-white shadow-sm border border-dojo-border text-dojo-gold"
                      : "text-dojo-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="text-xs text-dojo-muted hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-dojo-gold" />
              <span>+91 98765 43210</span>
            </a>
            <Link
              to="/contact"
              className="btn-press bg-dojo-red hover:bg-dojo-red-hover text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-dojo-red/30 transition-all duration-200 hover:shadow-dojo-red/50 hover:scale-[1.02]"
            >
              Book Free Trial
            </Link>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="bg-dojo-red text-white text-xs font-bold px-3 py-1.5 rounded-full"
            >
              Free Trial
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dojo-card border border-dojo-border text-dojo-muted hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slideout Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dojo-surface border-b border-dojo-border px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                      active
                        ? "bg-dojo-card text-dojo-gold border border-dojo-border"
                        : "text-dojo-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-dojo-border/60 space-y-3">
              <div className="flex items-center gap-2 text-xs text-dojo-muted px-2">
                <Clock className="w-4 h-4 text-dojo-gold" />
                <span>Mon-Fri: 6:00 AM - 9:00 PM | Bengaluru</span>
              </div>
              <Link
                to="/contact"
                className="w-full block text-center bg-dojo-red text-white font-bold py-3 rounded-lg shadow-md shadow-dojo-red/30"
              >
                Claim Your Free Trial Class
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
