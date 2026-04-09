import Link from "next/link";
import { Container } from "./container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer
      className="w-full pt-24 pb-12"
      style={{ backgroundColor: "#173128" }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span
              className="text-2xl text-[#fdf9f5] mb-4 block"
              style={{ fontFamily: "var(--font-noto-serif), Georgia, serif" }}
            >
              MPC Interior Solutions
            </span>
            <p
              className="text-[#fdf9f5]/70 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              A client-focused interiors company delivering tailored solutions built on quality, workmanship, and lasting results. Established 2019.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5
              className="text-[#fdf9f5] text-sm tracking-wide uppercase mb-6"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              Navigation
            </h5>
            <ul className="space-y-4">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#fdf9f5]/70 text-sm uppercase tracking-wide hover:text-[#fcaf8a] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="text-[#fdf9f5] text-sm tracking-wide uppercase mb-6"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              Contact
            </h5>
            <ul
              className="space-y-4 text-[#fdf9f5]/70 text-sm"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              <li>Pretoria, Gauteng, South Africa</li>
              <li>
                <a
                  href="mailto:hello@mpcinteriors.com"
                  className="hover:text-[#fcaf8a] transition-colors duration-300"
                >
                  hello@mpcinteriors.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+27214440000"
                  className="hover:text-[#fcaf8a] transition-colors duration-300"
                >
                  +27 21 444 0000
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5
              className="text-[#fdf9f5] text-sm tracking-wide uppercase mb-6"
              style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
            >
              Legal
            </h5>
            <ul className="space-y-4">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#fdf9f5]/70 text-sm uppercase tracking-wide hover:text-[#fcaf8a] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[#fdf9f5]/70 text-sm uppercase tracking-wide hover:text-[#fcaf8a] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <p
            className="text-[#fdf9f5]/40 text-[10px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
          >
            © {new Date().getFullYear()} MPC Interior Solutions. All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
