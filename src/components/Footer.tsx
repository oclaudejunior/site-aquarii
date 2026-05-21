import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import MeetingFormDialog from "./MeetingFormDialog";
import AnimatedSection from "./AnimatedSection";

const Footer = () => (
  <footer className="relative border-t border-border/40 pt-14 pb-8 z-10" style={{ background: "hsl(var(--card))" }}>
    {/* Glow decorativo no topo */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90vw] max-w-6xl h-56"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(var(--primary) / 0.25) 0%, transparent 65%)",
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Marca + nota */}
        <AnimatedSection>
          <div>
            <Logo />
            <p className="mt-4 text-xs text-muted-foreground/70">
              Empresa do Ecossistema AQUARII Inteligência Interior.
            </p>
          </div>
        </AnimatedSection>

        {/* Navegação */}
        <AnimatedSection delay={80}>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-semibold tracking-tight text-foreground">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/programas" className="text-muted-foreground hover:text-primary transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <MeetingFormDialog
                  trigger={
                    <button className="text-muted-foreground hover:text-primary transition-colors text-left">
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
            <h4 className="text-lg sm:text-xl font-heading font-semibold tracking-tight text-foreground">
              Social
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5547988164061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-muted-foreground/60" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aquarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-muted-foreground/60" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Contato direto */}
        <AnimatedSection delay={240}>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-semibold tracking-tight text-foreground">
              Fale com a gente
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:contato@aquarii.com.br"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-foreground/60" />
                contato@aquarii.com.br
              </a>
              <a
                href="https://wa.me/5547988164061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-muted-foreground/60" />
                (47) 98816-4061
              </a>

              <MeetingFormDialog
                trigger={
                  <button className="shiny-cta mt-2">
                    Solicitar reunião
                    <ArrowRight className="w-4 h-4" />
                  </button>
                }
              />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Barra inferior */}
      <div className="mt-10 border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground/80">
          © 2026 AQUARII. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground/80 hover:text-primary transition-colors">
            Termos e Condições
          </a>
          <span className="hidden sm:inline-block w-px h-4 bg-border/40" />
          <a href="#" className="text-muted-foreground/80 hover:text-primary transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>

    {/* Detalhe decorativo canto inferior */}
    <span className="hidden md:block absolute right-6 bottom-6 h-4 w-16 rounded-full border border-border/30 bg-foreground/5" />
  </footer>
);

export default Footer;
