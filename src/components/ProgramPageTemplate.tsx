import AnimatedSection from "./AnimatedSection";
import GoldText from "./GoldText";
import SectionCTA from "./SectionCTA";
import Layout from "./Layout";
import { CheckCircle2 } from "lucide-react";
import IconTransformacao from "./icons/IconTransformacao";
import IconResultados from "./icons/IconResultados";
import IconEntregaveis from "./icons/IconEntregaveis";
import IconFormato from "./icons/IconFormato";

import sectionTransformacao from "@/assets/section-transformacao.webp";
import sectionResultados from "@/assets/section-resultados.webp";
import sectionEntregaveis from "@/assets/section-entregaveis.webp";
import sectionFormato from "@/assets/section-formato.webp";

interface ProgramPageProps {
  headline: string;
  headlineGold?: string;
  subheadline: string;
  publico?: string;
  transformTitle: string;
  transformText: string;
  resultadosTitle: string;
  resultados: string[];
  entregaveisTitle: string;
  entregaveis: string[];
  formatoTitle: string;
  formatoContent: React.ReactNode;
  ctaTitle: string;
}

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-2xl overflow-hidden border border-[#D7B33D]/30 shadow-[0_4px_60px_rgba(215,179,61,0.2),0_0_80px_rgba(215,179,61,0.08)]">
    <img src={src} alt={alt} loading="lazy" width={640} height={512} className="w-full h-auto object-cover" />
  </div>
);

const SectionIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
    <Icon className="text-primary" />
  </div>
);

const ProgramPageTemplate = ({
  headline, headlineGold, subheadline, publico,
  transformTitle, transformText,
  resultadosTitle, resultados,
  entregaveisTitle, entregaveis,
  formatoTitle, formatoContent,
  ctaTitle,
}: ProgramPageProps) => (
  <Layout>
    {/* Hero */}
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <AnimatedSection>
        <div className="container mx-auto max-w-4xl text-center space-y-6 relative z-10">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            {headlineGold ? (
              <>
                {headline.split(headlineGold)[0]}
                <GoldText>{headlineGold}</GoldText>
                {headline.split(headlineGold)[1]}
              </>
            ) : headline}
          </h1>
          <div className="w-0 h-[3px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-expand-width" />
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subheadline}</p>
          {publico && <p className="text-lg text-primary font-medium">Público: {publico}</p>}
        </div>
      </AnimatedSection>
    </section>

    {/* Transformação — texto esquerda, imagem direita */}
    <section className="py-12 md:py-16 px-4 relative">
      <AnimatedSection>
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <SectionIcon icon={IconTransformacao} />
            <h2 className="font-bold text-3xl md:text-4xl text-foreground">{transformTitle}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{transformText}</p>
          </div>
          <ImageCard src={sectionTransformacao} alt={transformTitle} />
        </div>
      </AnimatedSection>
    </section>

    {/* Resultados — imagem esquerda, texto direita */}
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <AnimatedSection>
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ImageCard src={sectionResultados} alt={resultadosTitle} />
          <div className="space-y-4 order-first md:order-last">
            <SectionIcon icon={IconResultados} />
            <h2 className="font-bold text-3xl md:text-4xl text-foreground">{resultadosTitle}</h2>
            <ul className="space-y-3">
              {resultados.map((r, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-0.5">
                    <CheckCircle2 className="text-primary" size={14} />
                  </div>
                  <span className="text-foreground/90 text-lg">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* Entregáveis — texto esquerda, imagem direita */}
    <section className="py-12 md:py-16 px-4 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <AnimatedSection>
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <SectionIcon icon={IconEntregaveis} />
            <h2 className="font-bold text-3xl md:text-4xl text-foreground">{entregaveisTitle}</h2>
            <ul className="space-y-3">
              {entregaveis.map((e, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-0.5">
                    <CheckCircle2 className="text-primary" size={14} />
                  </div>
                  <span className="text-foreground/90 text-lg">{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <ImageCard src={sectionEntregaveis} alt={entregaveisTitle} />
        </div>
      </AnimatedSection>
    </section>

    {/* Formato — imagem esquerda, texto direita */}
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <AnimatedSection>
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ImageCard src={sectionFormato} alt={formatoTitle} />
          <div className="space-y-4 order-first md:order-last">
            <SectionIcon icon={IconFormato} />
            <h2 className="font-bold text-3xl md:text-4xl text-foreground">{formatoTitle}</h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-3">{formatoContent}</div>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* CTA */}
    <SectionCTA title={ctaTitle} microCopy="A proposta começa pela escuta — não por um catálogo." />
  </Layout>
);

export default ProgramPageTemplate;
