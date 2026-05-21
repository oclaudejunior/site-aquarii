import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import MeetingFormDialog from "./MeetingFormDialog";
import AnimatedSection from "./AnimatedSection";

const Footer = () => (
  <footer className="relative pt-14 pb-8 z-10" style={{ background: "#1F4461" }}>
    {/* Glow decorativo no topo */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90vw] max-w-6xl h-56"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,255,255,0.06) 0%, transparent 65%)" }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Marca + nota */}
        <AnimatedSection>
          <div>
            <Logo />
            <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              Empresa do Ecossistema AQUARII Inteligência Interior.
            </p>
          </div>
        </AnimatedSection>

        {/* Navegação */}
        <AnimatedSection delay={80}>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-semibold tracking-tight" style={{ color: "#ffffff" }}>
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Sobre", to: "/sobre" },
                { label: "Programas", to: "/programas" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <MeetingFormDialog
                  trigger={
                    <button
                      className="transition-colors text-left"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      Solicitar Reunião
                    </button>
                  }
                />
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Social */}
        <AnimatedSection delay={160}>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-semibold tracking-tight" style={{ color: "#ffffff" }}>
              Social
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5547988164061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  <MessageCircle className="w-4 h-4" style={{ opacity: 0.7 }} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aquarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  <Instagram className="w-4 h-4" style={{ opacity: 0.7 }} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Contato direto */}
        <AnimatedSection delay={240}>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-semibold tracking-tight" style={{ color: "#ffffff" }}>
              Fale com a gente
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:contato@aquarii.com.br"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                <Mail className="w-4 h-4" style={{ opacity: 0.7 }} />
                contato@aquarii.com.br
              </a>
              <a
                href="https://wa.me/5547988164061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                <MessageCircle className="w-4 h-4" style={{ opacity: 0.7 }} />
                (47) 98816-4061
              </a>

              <MeetingFormDialog
                trigger={
                  <button className="shiny-cta mt-2">
                    Solicitar reunião
                    <span className="btn-arrow"><ArrowRight className="w-4 h-4" /></span>
                  </button>
                }
              />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Barra inferior */}
      <div
        className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
      >
        <p style={{ color: "rgba(255,255,255,0.50)" }}>
          © 2026 AQUARII. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="transition-colors"
            style={{ color: "rgba(255,255,255,0.50)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.50)")}
          >
            Termos e Condições
          </a>
          <span className="hidden sm:inline-block w-px h-4" style={{ background: "rgba(255,255,255,0.20)" }} />
          <a
            href="#"
            className="transition-colors"
            style={{ color: "rgba(255,255,255,0.50)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.50)")}
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>

    {/* Detalhe decorativo canto inferior */}
    <span className="hidden md:block absolute right-6 bottom-6 h-4 w-16 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.15)" }} />
  </footer>
);

export default Footer;
