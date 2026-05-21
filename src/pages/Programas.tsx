import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import GoldText from "@/components/GoldText";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import { ShinyButton } from "@/components/ui/shiny-button";
import { CheckCircle2 } from "lucide-react";

const programas = [
  { num: "01", title: "Self-Management", chip: "Para qualquer colaborador", text: "Autoconsciência e autogestão como base de tudo — ponto de entrada do portfólio.", duracao: "4 meses ou 2,5 dias", prereq: "Nenhum", link: "/programas/self-management", highlight: false },
  { num: "02", title: "Advisor", chip: "Gerentes de relacionamento", text: "O gerente que orienta retém, vende mais e gera confiança. Postura consultiva.", duracao: "4 meses ou 3 dias", prereq: "Recomendado: Self-Management", link: "/programas/advisor", highlight: false },
  { num: "03", title: "Leadership", chip: "Gerentes de agência", text: "Líderes que param de improvisar na gestão e passam a desenvolver pessoas.", duracao: "6 meses ou Híbrido", prereq: "Self-Management", link: "/programas/leadership", highlight: true },
  { num: "04", title: "Management", chip: "Diretoria executiva", text: "A diretoria que opera como time único, com alinhamento estratégico e inteligência emocional.", duracao: "6 a 12 meses", prereq: "Self-Management", link: "/programas/management", highlight: false },
  { num: "05", title: "Mentoria Individual", chip: "Alta liderança", text: "Atenção 100% direcionada, diagnóstico aprofundado e acompanhamento contínuo.", duracao: "Sob demanda", prereq: "Assessment individual", link: "/programas/mentoria-individual", highlight: false },
];

const Programas = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-28 md:py-36 px-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <AnimatedSection>
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary font-semibold">
            Jornada AQUARII
          </p>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            5 programas. Uma jornada de desenvolvimento <GoldText>completa</GoldText>.
          </h1>
          <div className="w-0 h-[3px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-expand-width" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada programa resolve um momento específico da cooperativa. Juntos, criam as condições para um ambiente de alta performance — do colaborador de base à diretoria executiva.
          </p>
          <p className="text-sm italic text-muted-foreground/80 pt-4">Explore os programas</p>
        </div>
      </AnimatedSection>
    </section>

    {/* Cards — novo layout 2 colunas */}
    <section className="py-12 md:py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl space-y-6 relative z-10">
        {programas.map((p, i) => (
          <AnimatedSection key={p.num} delay={i * 80}>
            <div className="rounded-3xl border border-white/10 bg-card/60 backdrop-blur-sm p-8 md:p-10 transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Coluna esquerda: título, descrição, chip público */}
                <div className="space-y-4 md:border-r md:border-white/10 md:pr-10">
                  <h3 className="font-bold text-3xl md:text-4xl text-foreground tracking-tight flex items-center gap-3 flex-wrap">
                    {p.title}
                    {p.highlight && (
                      <span className="inline-block w-12 h-3 rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-[0_0_20px_hsl(var(--primary)/0.6)]" />
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                  <div className="pt-2">
                    <span className="inline-block rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm text-foreground/90 font-medium">
                      {p.chip}
                    </span>
                  </div>
                </div>

                {/* Coluna direita: duração, pré-requisito, CTA */}
                <div className="space-y-5 md:pl-2">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${p.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span><span className="text-muted-foreground">Duração:</span> {p.duracao}</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${p.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span><span className="text-muted-foreground">Pré-req:</span> {p.prereq}</span>
                    </li>
                  </ul>
                  <div className="pt-2 flex md:justify-end">
                    <Link to={p.link}>
                      {p.highlight ? (
                        <ShinyButton className="!text-sm !py-2.5 !px-6">Ver Ementa Completa</ShinyButton>
                      ) : (
                        <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-white/[0.06] transition-colors">
                          Ver Ementa Completa
                        </button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    <SectionCTA
      title="Não sabe por onde começar?"
      text="A AQUARII mapeia o ponto de entrada certo para o momento da sua cooperativa — sem proposta genérica, sem programa reaproveitado."
      microCopy="A proposta começa pela escuta — não por um catálogo."
    />
  </Layout>
);

export default Programas;
