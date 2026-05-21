
import Layout from "@/components/Layout";
import GoldText from "@/components/GoldText";
import MeetingFormDialog from "@/components/MeetingFormDialog";
import AnimatedSection from "@/components/AnimatedSection";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import AquariiJourney from "@/components/AquariiJourney";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProgramCardsList from "@/components/ProgramCardsList";
import HeroSection from "@/components/HeroSection";
import avatarKelly from "@/assets/testimonials/kelly-heck.jpg";
import avatarOtavio from "@/assets/testimonials/otavio-feltrin.jpg";
import avatarGlaucia from "@/assets/testimonials/glaucia-mendonca.jpg";
import avatarSandra from "@/assets/testimonials/sandra-madeira.jpg";
import avatarEdna from "@/assets/testimonials/edna-avila.jpg";
import avatarManoel from "@/assets/testimonials/manoel-junqueira.jpg";
import avatarWallace from "@/assets/testimonials/wallace-seixas.jpg";
import avatarPriscila from "@/assets/testimonials/priscila-isabel.jpg";
import avatarSimone from "@/assets/testimonials/simone-wesling.png";




const testimonials = [
  { text: "Esse novo projeto me surpreendeu muito. Em 38 anos de trabalho, fazendo muitos treinamentos nunca vi nada igual.", name: "Edna Ávila", role: "Diretora Executiva da Unicred Evolução", avatar: avatarEdna },
  { text: "Me vejo uma líder mais preparada, qualificada pra enfrentar os desafios que eu estava no começo do programa. Ele conseguiu me conduzir pra que eu colocasse o que eu aprendi em prática dentro da agência.", name: "Kelly Heck", role: "Gerente de Agência da Unicred Centro-Sul", avatar: avatarKelly },
  { text: "A minha avaliação desses últimos 7 meses foi transformadora. Eu já havia tido outras experiências nesse sentido, mas nada tão profundo. Acredito que toda empresa deveria fazer.", name: "Gláucia Mendonça", role: "Gerente Corporate da Unicred Centro-Sul", avatar: avatarGlaucia },
  { text: "Esses encontros fizeram a diferença no nosso dia a dia, colocamos em prática as ferramentas apresentadas com as equipes, e já conseguimos ver o resultado na prática.", name: "Sandra Madeira", role: "Gerente de Agência da Unicred Centro-Sul", avatar: avatarSandra },
  { text: "Com certeza o nosso resultado vai ser bem diferente pra muito melhor, e com pessoas muito mais capacitadas para desenvolver isso. É um programa perfeito.", name: "Manoel Junqueira", role: "Diretor da Unicred Evolução", avatar: avatarManoel },
  { text: "Foi o melhor treinamento que eu já participei. O sentimento depois desse treinamento é um sentimento de gratidão, depois do treinamento mudou a minha forma de pensar a minha forma de agir, e consequentemente a minha forma de performar. Agradeço demais pela imersão!", name: "Wallace Seixas", role: "Gerente de Investimentos da Unicred Evolução", avatar: avatarWallace },
  { text: "O programa me trouxe grandes mudanças na minha vida pessoal e na minha vida profissional, eu consegui descobrir a minha melhor performance.", name: "Simone Wesling", role: "Sócia Proprietária da Acelera Soluções", avatar: avatarSimone },
  { text: "Fazem 15 anos que eu estou na Unicred e nunca durante toda minha história eu havia vivido algo tão profundo e transformador. É algo que traz uma profundidade e um resultado muito rápido no dia a dia.", name: "Priscila Isabel", role: "Gerente de Agência da Unicred União", avatar: avatarPriscila },
  { text: "Vejo que só tem a ganhar quem está fazendo parte desse programa. Olha se eu fosse escolher em uma palavra eu diria que foi uma grande transformação.", name: "Otávio Feltrin", role: "Gerente de Crédito da Unicred Centro-Sul", avatar: avatarOtavio },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const videoTestimonials = [
  {
    id: "gIvvZHKsLP8",
    name: "Wallace Seixas",
    role: "Gerente de Investimentos",
    cooperativa: "Unicred Evolução",
    quote: "Foi o melhor treinamento que eu já participei. O sentimento depois desse treinamento é um sentimento de gratidão, depois do treinamento mudou a minha forma de pensar, a minha forma de agir, e consequentemente a minha forma de performar. Agradeço demais pela imersão!",
  },
  {
    id: "j83-_vm23CM",
    name: "Edna Ávila",
    role: "Diretora Executiva",
    cooperativa: "Unicred Evolução",
    quote: "Esse novo projeto me surpreendeu muito. Em 38 anos de trabalho, fazendo muitos treinamentos nunca vi nada igual.",
  },
  {
    id: "8QKA8xW12Ak",
    name: "Manoel Junqueira",
    role: "Diretor Executivo",
    cooperativa: "Unicred Evolução",
    quote: "Com certeza o nosso resultado vai ser bem diferente pra muito melhor, e com pessoas muito mais capacitadas para desenvolver isso. É um programa perfeito.",
  },
  {
    id: "_x-sOnXSuCI",
    name: "Simone Wesling",
    role: "Sócia Proprietária da Acelera Soluções",
    cooperativa: "Unicred União",
    quote: "O programa me trouxe grandes mudanças na minha vida pessoal e na minha vida profissional, eu consegui descobrir a minha melhor performance.",
  },
  {
    id: "7HfjEc-eyjg",
    name: "Priscila Isabel",
    role: "Gerente de Agência",
    cooperativa: "Unicred União",
    quote: "Fazem 15 anos que eu estou na Unicred e nunca durante toda minha história eu havia vivido algo tão profundo e transformador. É algo que traz uma profundidade e um resultado muito rápido no dia a dia.",
  },
];

const Index = () => {
  return (
  <Layout>
    <HeroSection />


    {/* Depoimentos em vídeo */}
    <section className="pt-12 md:pt-20 pb-12 md:pb-16 relative overflow-hidden border-t border-[hsl(var(--primary)/0.08)]">
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="mb-12 md:mb-14 border-b border-primary/20 pb-8">
            <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1] tracking-[-0.02em] lg:whitespace-nowrap">
              Resultados que falam por si. Na voz de quem <GoldText>viveu</GoldText>.
            </h2>
          </div>
        </AnimatedSection>
      </div>

      {/* Grid full-bleed — 5 cards colados, vídeo + citação sobreposta */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-y border-[hsl(var(--primary)/0.12)]">
        {videoTestimonials.map((v, i) => {
          const index = String(i + 1).padStart(2, "0");
          const total = String(videoTestimonials.length).padStart(2, "0");
          const total_ = videoTestimonials.length; // 5
          // Divisórias verticais por breakpoint
          const lgRight = (i % 5 !== 4) ? "lg:border-r" : "";
          const mdRight = (i % 3 !== 2) ? "md:max-lg:border-r" : "";
          const smRight = (i % 2 === 0) ? "sm:max-md:border-r" : "";
          // Divisórias horizontais
          const lgBottom = ""; // linha única no lg
          const mdBottom = (i < total_ - (total_ % 3 || 3)) ? "md:max-lg:border-b" : "";
          const smBottom = (i < total_ - (total_ % 2 === 0 ? 2 : 1)) ? "sm:max-md:border-b" : "";
          const xsBottom = (i < total_ - 1) ? "max-sm:border-b" : "";
          return (
            <AnimatedSection
              key={v.id}
              delay={(i % 5) * 60}
              className={`flex border-[hsl(var(--primary)/0.12)] ${lgRight} ${mdRight} ${smRight} ${lgBottom} ${mdBottom} ${smBottom} ${xsBottom}`}
            >
              <article className="group relative w-full aspect-[9/16] overflow-hidden bg-card">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={`Depoimento ${v.name}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Index */}
                <div className="absolute top-4 right-4 z-20 font-mono text-[10px] tracking-[0.3em] text-primary bg-background/70 backdrop-blur px-2.5 py-1 rounded">
                  {index} / {total}
                </div>

                {/* Overlay com nome + citação */}
                <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
                  <div className="bg-gradient-to-t from-background via-background/85 to-transparent pt-20 pb-5 px-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary mb-2">
                      {v.cooperativa}
                    </p>
                    <p className="font-heading italic text-lg lg:text-xl text-foreground leading-tight">
                      {v.name}
                    </p>
                    <p className="font-body text-[13px] lg:text-sm text-muted-foreground mt-1">
                      {v.role}
                    </p>
                    {v.quote && (
                      <>
                        <span className="block h-px w-8 bg-primary/40 my-3" />
                        <p className="font-heading italic text-sm lg:text-[15px] leading-[1.55] text-foreground/90 line-clamp-5">
                          “{v.quote}”
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>

      {/* CTA */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="flex justify-center mt-8 md:mt-10">
          <Link
            to="/depoimentos"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-primary/40 text-primary font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            Ver todos os depoimentos
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary/40 group-hover:border-background/40 group-hover:rotate-45 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </span>
          </Link>
        </div>
      </div>
    </section>

    {/* Diferenciais — Timeline */}

    <AquariiJourney />
    {/* Programas */}
    <ProgramCardsList />

    {/* CTA Final */}
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <AnimatedSection>
        <div className="container mx-auto max-w-3xl text-center relative z-10 space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl text-foreground leading-tight">
            As cooperativas que chegarão ao próximo nível não terão mais agências — terão melhores <GoldText>líderes</GoldText>.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            O cooperativismo de crédito vive seu momento de maior expansão e maior exigência. A AQUARII está pronta para mapear o ponto de entrada certo para a sua cooperativa e apresentar uma proposta sob medida.
          </p>

          <div className="relative p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col items-center">
            <MeetingFormDialog
              trigger={<ShinyButton>Solicitar Reunião</ShinyButton>}
            />
            <p className="text-sm text-muted-foreground italic mt-4 text-center">A proposta começa pela escuta — não por um catálogo.</p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  </Layout>
  );
};

export default Index;
