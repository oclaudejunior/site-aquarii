import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GoldText from "@/components/GoldText";
import imgSelf from "@/assets/programas/self-management.jpg";
import imgAdvisor from "@/assets/programas/advisor.jpg";
import imgLeadership from "@/assets/programas/leadership.jpg";
import imgManagement from "@/assets/programas/management.jpg";
import imgMentoria from "@/assets/programas/mentoria.jpg";

const programas = [
  {
    num: "01",
    title: "Self-Management",
    chip: "Para qualquer colaborador",
    text: "Antes de liderar o outro, é preciso aprender a liderar a si mesmo. Autoconsciência e autogestão como base de tudo — ponto de entrada do portfólio.",
    link: "/programas/self-management",
    image: imgSelf,
  },
  {
    num: "02",
    title: "Advisor",
    chip: "Gerentes de relacionamento",
    text: "O gerente que orienta retém, vende mais e gera confiança. Postura consultiva para um atendimento que o cooperado não encontra em banco nenhum.",
    link: "/programas/advisor",
    image: imgAdvisor,
  },
  {
    num: "03",
    title: "Leadership",
    chip: "Gerentes de agência",
    text: "Líderes que param de improvisar na gestão e passam a desenvolver pessoas de forma intencional — construindo equipes de alta performance.",
    link: "/programas/leadership",
    image: imgLeadership,
  },
  {
    num: "04",
    title: "Management",
    chip: "Diretoria executiva",
    text: "A diretoria que opera como time único, com alinhamento estratégico e inteligência emocional elevada — imprimindo ritmo em toda a cooperativa.",
    link: "/programas/management",
    image: imgManagement,
  },
  {
    num: "05",
    title: "Mentoria Individual",
    chip: "Alta liderança",
    text: "Atenção 100% direcionada, diagnóstico aprofundado e acompanhamento contínuo. Quando o desafio da alta liderança é específico, complexo ou sigiloso.",
    link: "/programas/mentoria-individual",
    image: imgMentoria,
  },
];

interface ProgramCardsListProps {
  showHero?: boolean;
}

const ProgramCardsList = ({ showHero = true }: ProgramCardsListProps) => (
  <section id="programas" className="relative bg-background overflow-hidden">
    {showHero && (
      <AnimatedSection>
        <div className="container mx-auto max-w-4xl text-center space-y-5 relative z-10 px-4 pt-10 md:pt-14 pb-10 md:pb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Jornada AQUARII
          </p>
          <h2 className="font-heading italic text-3xl md:text-5xl text-foreground leading-[1.1] tracking-tight">
            5 programas. Uma jornada de desenvolvimento <GoldText>completa</GoldText>.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Cada programa resolve um momento específico. Juntos, criam as condições para um ambiente de alta performance em toda a cooperativa.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 pt-2">
            Passe o mouse sobre cada programa
          </p>
        </div>
      </AnimatedSection>
    )}

    <div className="relative z-10 border-t border-[hsl(var(--primary)/0.12)]">
      {programas.map((p, i) => (
        <AnimatedSection key={p.num} delay={i * 60}>
          <Link
            to={p.link}
            aria-label={`${p.title} — ${p.chip}`}
            className="program-banner group relative block w-full overflow-hidden border-b border-[hsl(var(--primary)/0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width={1920}
                height={1080}
                className="w-full h-full object-cover brightness-[0.72] scale-100 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-[0.55] group-hover:scale-[1.03] group-focus-visible:brightness-[0.55]"
              />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 z-10 bg-black/10 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-black/30 group-focus-visible:bg-black/30" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 container mx-auto max-w-7xl px-6 md:px-12 py-14 md:py-16 min-h-[220px] md:min-h-[260px] flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
              {/* Left: eyebrow + title */}
              <div className="flex-1 md:max-w-[55%]">
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/60 mb-3 transition-colors duration-500">
                  Pilar {p.num} · {p.chip}
                </p>
                <h3 className="font-heading italic text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-[-0.02em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                  {p.title}
                </h3>
              </div>

              {/* Right: description */}
              <div className="flex-1 md:max-w-[35%] md:pl-6 md:border-l md:border-white/20">
                <p className="font-body text-sm md:text-[15px] leading-relaxed text-white/75 line-clamp-4">
                  {p.text}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 shrink-0">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/40 text-white/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white group-hover:bg-white group-hover:text-[#1F4461] group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={20} strokeWidth={1.75} />
                </span>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ProgramCardsList;
