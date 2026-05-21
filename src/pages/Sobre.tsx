import { Shield } from "lucide-react";
import Layout from "@/components/Layout";
import GoldText from "@/components/GoldText";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import SobreHeroCinematic from "@/components/SobreHeroCinematic";
import marioImg from "@/assets/mario-echeverria.jpg";
import mikaelImg from "@/assets/mikael-zamboni.jpg";
import henriqueImg from "@/assets/henrique-teixeira.jpg";
import marceloImg from "@/assets/marcelo-de-lara.jpg";
import anaImg from "@/assets/ana-bueno-echeverria.jpg";
import teddyImg from "@/assets/teddy-amattos.jpg";

const founders = [
  {
    name: "Mário Echeverria",
    role: "Especialista em Comportamento Humano",
    image: marioImg,
    bio: "14 anos desenvolvendo líderes e equipes dentro do cooperativismo de crédito. Especialista em comportamento humano e criação de métodos de desenvolvimento e evolução aplicados ao contexto cooperativista – já conduziu mais de 12.000 pessoas e formou dezenas de facilitadores pelo Brasil. Fundador da AQUARII Inteligência Interior, acredita que toda transformação real começa de dentro: do autoconhecimento à liderança de alta performance.",
  },
  {
    name: "Mikael Zamboni",
    role: "Estrategista Financeiro e Comportamental",
    image: mikaelImg,
    bio: "9 anos no mercado financeiro (Bradesco, Órama e XP) e mais de 10 anos conduzindo executivos em processos de desenvolvimento. Criador do método Personalidade Lucrativa. Traz para o cooperativismo uma visão única: a intersecção entre gestão financeira, ciência do comportamento e inteligência emocional — além de conhecimento sobre instituições financeiras e a experiência de ter atendido, como planejador financeiro, inúmeros associados a cooperativas de crédito.",
  },
  {
    name: "Henrique Teixeira",
    role: "Empreendedor e Gestor de Negócios",
    image: henriqueImg,
    bio: "Empreendedor e gestor de negócios. Com 16 anos de trajetória empreendedora, iniciou aos 20 anos e já criou mais de 13 negócios, acumulando experiência em estruturação, crescimento e estratégia. Formado em Administração pela PUCPR, atua com foco nas áreas comercial, gestão e desenvolvimento de equipes orientadas a resultado. Ao longo da carreira, construiu sólida experiência com instituições financeiras, participando de projetos e estratégias comerciais, com atuação voltada à execução, performance e crescimento consistente.",
  },
  {
    name: "Marcelo de Lara",
    role: "Especialista em Performance e Liderança",
    image: marceloImg,
    bio: "Mais de 10 anos desenvolvendo líderes e equipes em ambientes comerciais e de alta pressão. Especialista em comportamento humano aplicado à performance e estruturação de sistemas de liderança, governança e execução — com foco em resultado mensurável. Fundador da Best-Seller® Consultoria e Treinamentos, atua a partir de uma tese clara: performance sustentável não vem de esforço, mas do alinhamento entre perfil, função, comunicação e modelo de gestão. Sua abordagem integra diagnóstico comportamental, tomada de decisão e execução prática, utilizando ferramentas de assessment para identificar talentos, padrões e desalinhamentos que impactam diretamente a performance.",
  },
  {
    name: "Ana Bueno Echeverria",
    role: "Especialista em Competências Emocionais",
    image: anaImg,
    bio: "Com 8 anos de experiência no cooperativismo de crédito, atuando em agência, desenvolveu uma visão abrangente do setor. Sua trajetória proporcionou entendimento dos desafios e dinâmicas que impactam colaboradores e clientes. Após essa trajetória, direcionou sua carreira para o desenvolvimento humano, atuando atualmente como especialista comportamental e em competências emocionais, apoiando indivíduos e equipes no fortalecimento da inteligência emocional, autoconhecimento e habilidades essenciais para alta performance.",
  },
  {
    name: "Teddy Amattos",
    role: "Especialista em Mercado Financeiro",
    image: teddyImg,
    bio: "18 anos no mercado financeiro, passando por Itaú, Unicred e XP Investimentos — com atuação em gestão de fundos, consultoria patrimonial e na criação de plataformas de investimento para o segmento de alta renda. Fundador do Teddy Investe e da Pro Lance, já orientou mais de 7.000 clientes na construção de patrimônio real. Traz para o cooperativismo uma visão 360º do investidor: da lógica do mercado financeiro tradicional à estratégia de aquisição de imóveis via leilão — com foco em independência financeira e resultado concreto.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero cinematográfico */}
      <SobreHeroCinematic />

      {/* Especialidade */}
      <section className="py-28 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <AnimatedSection>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Esquerda: Especialidade */}
              <div className="space-y-6">
                <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] gold-text">
                  Especialidade
                </span>
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                  O que nos torna diferentes não é o que fazemos — é de <GoldText>onde</GoldText> fazemos.
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-snug">
                    Combinamos o que nenhuma consultoria e empresa de T&D genérica consegue entregar: profundidade no comportamento humano e domínio real da cultura cooperativista.
                  </p>
                  <p className="text-lg lg:text-xl">Não falamos sobre cooperativismo — vivemos dentro dele há mais de uma década.</p>
                  <p className="text-lg lg:text-xl">A AQUARII é uma das únicas consultorias de T&D construída de dentro do cooperativismo de crédito. Não atende cooperativas como clientes verticais — opera com profundidade setorial que consultorias genéricas não conseguem replicar.</p>
                </div>
              </div>

              {/* Direita: Card liquid glass — Nosso propósito */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_-1px_0_0_rgba(255,255,255,0.03),0_10px_40px_-10px_rgba(0,0,0,0.5)] p-8 md:p-10 space-y-6">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] gold-text">
                  Nosso propósito
                </span>
                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                  Fortalecer essa cultura é o que <GoldText>nos move</GoldText>.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Acreditamos que o cooperativismo de crédito é uma das formas mais saudáveis e sustentáveis de gerar riqueza para o país. Um modelo que fortalece comunidades, preserva princípios éticos e expande a mentalidade coletiva das pessoas — mostrando, na prática, o poder real do agir juntos.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Quem vive o propósito */}
      <section className="py-28 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
        <div className="space-y-20 relative z-10">
          <AnimatedSection>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-foreground px-4">
              Quem vive o propósito da <GoldText>AQUARII</GoldText>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <div className="flex flex-col md:flex-row w-full gap-0.5 md:h-[640px]">
              {founders.map((person, idx) => {
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <article
                    key={person.name}
                    className="group relative flex-1 overflow-hidden cursor-pointer min-h-[460px] md:min-h-0 transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hover:flex-[1.8]"
                  >
                    {/* Image */}
                    <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                      <img
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        width={800}
                        height={1200}
                        className="w-full h-full object-cover object-top transition-[filter] duration-700 group-hover:blur-[2px]"
                      />
                    </div>

                    {/* Permanent bottom gradient */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover dark wash */}
                    <div className="absolute inset-0 z-10 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                      {/* Default label */}
                      <div className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:opacity-0 md:group-hover:-translate-y-6">
                        <h3
                          className="text-foreground text-xl md:text-2xl leading-tight italic"
                          style={{ fontFamily: "var(--pc-font-display)", letterSpacing: "-0.02em" }}
                        >
                          {person.name}
                        </h3>
                        <div className="mt-4 h-px w-12 bg-primary/60" />
                      </div>

                      {/* Reveal content */}
                      <div className="absolute left-8 right-8 md:left-10 md:right-10 bottom-8 md:bottom-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none group-hover:pointer-events-auto">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
                          {num} / AQUARII
                        </span>
                        <h2
                          className="text-3xl md:text-4xl text-foreground mb-3 leading-tight italic"
                          style={{ fontFamily: "var(--pc-font-display)", letterSpacing: "-0.02em" }}
                        >
                          {person.name}
                        </h2>
                        <p className="font-mono text-[10px] uppercase tracking-[0.25em] gold-text mb-4">
                          {person.role}
                        </p>
                        <p className="font-body text-foreground/85 text-[15px] md:text-[15px] leading-relaxed max-w-[380px]">
                          {person.bio}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Por Que Isso Importa */}
      <section className="py-28 md:py-32 px-4 relative">
        <AnimatedSection>
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] gold-text">
                Contexto
              </span>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                Experiência setorial não é diferencial. É <GoldText>pré-requisito</GoldText>.
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg lg:text-xl">Quando uma consultoria não conhece o cooperativismo de crédito, ela aprende com a sua cooperativa — no tempo dela, com o dinheiro dela e com a paciência da sua equipe.</p>
              <p className="text-lg lg:text-xl">A AQUARII chega sabendo o que é uma singular. O que muda numa fusão. O que pressiona um gerente de agência no dia a dia. O que o conselho espera da diretoria.</p>
              <p className="border-l-4 border-primary pl-6 bg-primary/5 py-5 pr-5 rounded-r-lg italic text-xl md:text-2xl text-foreground/90 leading-relaxed">Esse contexto não se compra em pesquisa. Se constrói em anos de presença dentro do setor.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <SectionCTA
        title="Pronto para conhecer o programa certo para a sua cooperativa?"
        buttonText="Conheça os Programas"
        buttonLink="/programas"
        showMeetingForm={false}
        microCopy="A proposta começa pela escuta — não por um catálogo."
      />
    </Layout>
  );
};

export default Sobre;
