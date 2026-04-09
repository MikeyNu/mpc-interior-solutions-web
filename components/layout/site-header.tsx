"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#fdf9f5]/96 backdrop-blur-xl shadow-[0_1px_0_0_rgba(28,28,25,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-5 md:py-6 max-w-screen-2xl mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className={`text-[15px] font-semibold tracking-tight transition-colors duration-500 font-body whitespace-nowrap ${
            scrolled ? "text-[#173128]" : "text-white"
          }`}
        >
          MPC Interior Solutions
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative group text-[11px] uppercase tracking-[0.2em] font-semibold pb-3 transition-colors duration-500 font-body ${
                scrolled
                  ? isActive(href)
                    ? "text-[#173128]"
                    : "text-[#173128]/50 hover:text-[#173128]"
                  : isActive(href)
                    ? "text-white"
                    : "text-white/55 hover:text-white"
              }`}
            >
              {label}
              {/* Amber tick – active marker */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#c08b4a] transition-all duration-300 ${
                  isActive(href) ? "w-4" : "w-0 group-hover:w-3"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-5">
          <Link
            href="/quote"
            className={`hidden md:inline-block text-[10px] uppercase tracking-[0.28em] font-semibold px-7 py-2.5 transition-all duration-500 font-body ${
              scrolled
                ? "bg-[#173128] text-white hover:opacity-80"
                : "border border-white/40 text-white hover:border-white hover:text-white"
            }`}
          >
            Request a Quote
          </Link>
          <button
            className={`md:hidden p-1 transition-colors duration-500 ${
              scrolled ? "text-[#173128]" : "text-white"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Hairline separator — only visible once scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-[#c1c8c4]/25 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-6 py-10 space-y-7 ${
            scrolled
              ? "bg-[#fdf9f5] border-[#c1c8c4]/20"
              : "bg-[#0c0a08]/97 border-white/10"
          }`}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-[11px] uppercase tracking-[0.25em] font-semibold font-body transition-colors ${
                scrolled
                  ? isActive(href)
                    ? "text-[#173128]"
                    : "text-[#173128]/50 hover:text-[#173128]"
                  : isActive(href)
                    ? "text-white"
                    : "text-white/45 hover:text-white"
              }`}
            >
              {label}
              {isActive(href) && (
                <span className="inline-block ml-3 w-4 h-px bg-[#c08b4a] align-middle" />
              )}
            </Link>
          ))}
          <div className="w-6 h-px bg-[#c08b4a]" />
          <Link
            href="/quote"
            className={`inline-block text-[10px] uppercase tracking-[0.28em] font-semibold px-7 py-3 font-body ${
              scrolled
                ? "bg-[#173128] text-white"
                : "border border-white/40 text-white"
            }`}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
