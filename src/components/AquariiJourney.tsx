import AnimatedSection from "./AnimatedSection";
import imgEspecialidade from "@/assets/dna/especialidade-setorial.jpg";
import imgAutoconsciencia from "@/assets/dna/autoconsciencia.jpg";
import imgHiperpersonalizacao from "@/assets/dna/hiperpersonalizacao.jpg";
import imgPratica from "@/assets/dna/pratica.jpg";

const pillars = [
  {
    id: "01",
    label: "Especialidade",
    title: "Especialidade Setorial",
    description:
      "Mais de 12 anos dentro do cooperativismo de crédito — singulares, centrais, fusões, expansão acelerada. Entendemos o setor de dentro, não de fora.",
    image: imgEspecialidade,
  },
  {
    id: "02",
    label: "Ponto de Partida",
    title: "Autoconsciência",
    description:
      "Toda transformação real começa de dentro. Nossos programas partem do autoconhecimento individual — porque um líder que não se conhece não desenvolve sua equipe com maestria.",
    image: imgAutoconsciencia,
  },
  {
    id: "03",
    label: "Estratégia",
    title: "Hiperpersonalização Real",
    description:
      "Diagnóstico individual, diagnóstico de performance e imersão na estratégia de crescimento da cooperativa antes de cada programa. Nada de template genérico.",
    image: imgHiperpersonalizacao,
  },
  {
    id: "04",
    label: "Metodologia",
    title: "20% Teoria + 80% Prática",
    description:
      "Teoria em micro-learning assíncrono. Tempo presencial reservado para prática, simulações e ferramentas úteis. Sai de cada módulo com algo concreto para aplicar amanhã.",
    image: imgPratica,
  },
];

export default function AquariiJourney() {
  return (
    <section className="bg-background text-foreground pt-10 md:pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              Nosso DNA
            </p>
            <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-6 leading-tight tracking-tight">
              Nosso <span className="gold-text">DNA</span> de Entrega
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Por que a AQUARII entrega diferente. Passe o mouse sobre cada pilar.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={120}>
        <div className="flex flex-col md:flex-row w-full gap-0.5 md:h-[640px]">
          {pillars.map((p) => (
            <article
              key={p.id}
              className="dna-card group relative flex-1 overflow-hidden cursor-pointer min-h-[420px] md:min-h-0 transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hover:flex-[1.8]"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={1200}
                  className="w-full h-full object-cover brightness-[0.72] transition-[filter,brightness] duration-700 group-hover:brightness-[0.50] group-hover:blur-[2px]"
                />
              </div>

              {/* Permanent bottom gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover dark wash */}
              <div className="absolute inset-0 z-10 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                {/* Default label */}
                <div className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0 group-hover:-translate-y-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 mb-3">
                    Pilar {p.id}
                  </p>
                  <h3 className="text-white font-body text-xl md:text-2xl font-medium tracking-tight">
                    {p.label}
                  </h3>
                  <div className="mt-4 h-px w-12 bg-white/40" />
                </div>

                {/* Reveal content */}
                <div className="absolute left-8 right-8 md:left-10 md:right-10 bottom-8 md:bottom-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none group-hover:pointer-events-auto">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-4">
                    {p.id} / DNA
                  </span>
                  <h2 className="font-heading italic text-3xl md:text-4xl text-white mb-5 leading-tight tracking-tight">
                    {p.title}
                  </h2>
                  <p className="font-body text-white/75 text-sm md:text-base leading-relaxed max-w-[340px]">
                    {p.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
