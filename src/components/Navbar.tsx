import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tv, Menu, X, Landmark, CreditCard, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenOrderModal: (selectedPlanId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onOpenOrderModal, onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "IPTV Pakketten", id: "prijzen" },
    { label: "Werkwijze", id: "werkwijze" },
    { label: "Voordelen", id: "voordelen" },
    { label: "Blog", id: "blog" },
    { label: "FAQ", id: "faq" }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3"
          : "bg-white/60 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo"
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center shadow-lg shadow-brand-500/15">
              <Tv className="w-5.5 h-5.5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 block leading-none">
                IPTV TOTAAL <span className="text-brand-500">NL</span>
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative py-1 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Order button (Desktop) */}
          <div id="desktop-nav-cta" className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenOrderModal()}
              className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              Bestel Nu
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-center py-3 rounded-xl shadow-lg shadow-brand-500/15 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Bestel Nu
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
