import React, { useState, useEffect, useCallback } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "the-issue", label: "The Issue" },
  { id: "portfolio", label: "My Portfolio" },
  { id: "inequalities", label: "Global Inequalities" },
  { id: "genai-lab", label: "Generative AI Lab" },
  { id: "governance", label: "Governance & Guidelines" },
  { id: "reflection", label: "Reflection" },
  { id: "references", label: "References" },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        let topEntry: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!topEntry || entry.boundingClientRect.top < (topEntry.boundingClientRect.top ?? Infinity)) {
              topEntry = entry;
            }
          }
        });
        if (topEntry) {
          setActiveSection((topEntry as IntersectionObserverEntry).target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        role="banner"
      >
        <nav
          className="bg-navy/97 backdrop-blur-sm"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo / site name */}
              <button
                onClick={() => scrollTo("home")}
                className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded"
                aria-label="Go to home — AI for All?"
              >
                <span className="font-display text-white font-bold text-sm sm:text-base leading-tight">
                  AI for All?
                </span>
                <span className="hidden sm:block w-px h-5 bg-white/20" aria-hidden="true" />
                <span className="hidden sm:block text-white/60 text-xs font-body">
                  Responsible AI Portfolio
                </span>
              </button>

              {/* Desktop nav */}
              <ul
                className="hidden lg:flex items-center gap-1"
                role="list"
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`nav-link px-3 py-2 rounded text-xs font-medium text-white/80 hover:text-white transition-colors
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal
                        ${activeSection === item.id ? "text-white font-semibold" : ""}`}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="sr-only">(current section)</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA + hamburger */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollTo("portfolio")}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-teal text-white text-xs font-semibold rounded-lg
                    hover:bg-teal-light transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  Explore My Work
                </button>

                {/* Hamburger */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-expanded={menuOpen}
                  aria-controls="mobile-menu"
                  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                  className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                >
                  <span
                    className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
                      menuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
                      menuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-screen border-t border-white/10" : "max-h-0"
            }`}
            aria-hidden={!menuOpen}
          >
            <ul className="px-4 py-3 space-y-1" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal
                      ${
                        activeSection === item.id
                          ? "bg-teal text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => scrollTo("portfolio")}
                  className="w-full text-center px-4 py-3 bg-teal text-white text-sm font-semibold rounded-lg
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  Explore My Work
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
