import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MeetingFormDialog from "./MeetingFormDialog";
import { Menu, X, ArrowRight } from "lucide-react";
import aquariiLogo from "@/assets/aquarii-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Programas", href: "/#programas" },
  { label: "Depoimentos", href: "/depoimentos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/") {
      e.preventDefault();
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      setMobileOpen(false);
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
      }
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/" && !location.hash;
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.slice(1);
    return location.pathname === href;
  };

  return (
    <header className="pc-nav fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-5">
      <div
        className={`pc-glass max-w-6xl mx-auto rounded-full ${scrolled ? "is-scrolled" : ""}`}
        style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: "0.35rem 0.75rem 0.35rem 1.1rem" }}
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="brand-mark"
          aria-label="Aquarii home"
          style={{ justifySelf: "start" }}
        >
          <img src={aquariiLogo} alt="Aquarii" className="h-6 w-auto" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center" style={{ justifySelf: "center", gap: "2.25rem" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`nav-link ${isActive(l.href) ? "is-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex" style={{ justifySelf: "end" }}>
          <MeetingFormDialog
            trigger={
              <button className="pc-cta">
                Fale conosco
                <span className="btn-arrow"><ArrowRight size={13} /></span>
              </button>
            }
          />
        </div>

        {/* Mobile CTA (centered) */}
        <div className="lg:hidden" style={{ justifySelf: "center" }}>
          <MeetingFormDialog
            trigger={
              <button className="pc-cta" style={{ padding: "0.5rem 1rem", fontSize: "0.65rem" }}>
                Fale conosco
                <span className="btn-arrow"><ArrowRight size={12} /></span>
              </button>
            }
          />
        </div>

        {/* Mobile/tablet toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2"
          aria-label="Menu"
          style={{ justifySelf: "end", color: "var(--pc-text)" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {mobileOpen && (
        <div
          className="pc-glass lg:hidden max-w-6xl mx-auto mt-2 rounded-3xl px-5 py-5"
          style={{ borderRadius: "1.5rem" }}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`nav-link ${isActive(l.href) ? "is-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <MeetingFormDialog
              trigger={
                <button className="pc-cta" style={{ alignSelf: "flex-start" }}>
                  Fale conosco
                  <span className="btn-arrow"><ArrowRight size={13} /></span>
                </button>
              }
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
