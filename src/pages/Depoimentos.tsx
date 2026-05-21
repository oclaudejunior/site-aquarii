import { useState } from "react";
import Layout from "@/components/Layout";
import GoldText from "@/components/GoldText";
import AnimatedSection from "@/components/AnimatedSection";
import MeetingFormDialog from "@/components/MeetingFormDialog";
import { ShinyButton } from "@/components/ui/shiny-button";
import GradientBars from "@/components/ui/gradient-bars-background";

const videoTestimonials = [
  { id: "gIvvZHKsLP8", name: "Wallace Seixas", role: "Gerente de Investimentos", cooperativa: "Unicred Evolução" },
  { id: "j83-_vm23CM", name: "Edna Ávila", role: "Diretora Executiva", cooperativa: "Unicred Evolução" },
  { id: "RP_sfo5FR4E", name: "Edson Tafner", role: "2º Vice Presidente", cooperativa: "Unicred Vale" },
  { id: "8QKA8xW12Ak", name: "Manoel Junqueira", role: "Diretor Executivo", cooperativa: "Unicred Evolução" },
  { id: "_x-sOnXSuCI", name: "Simone Wesling", role: "Sócia Proprietária da Acelera Soluções", cooperativa: "Unicred União" },
  { id: "7HfjEc-eyjg", name: "Priscila Isabel", role: "Gerente de Agência", cooperativa: "Unicred União" },
  { id: "GX2lZINAefI", name: "André Luiz", role: "Gerente de Agência", cooperativa: "Unicred Vale" },
  { id: "_0uaEoE9pxs", name: "Fábio Cabral", role: "Gerente de Investimentos", cooperativa: "Unicred União" },
  { id: "18h6IJ6BKPI", name: "Gláucia Mendonça", role: "Gerente de Corporate", cooperativa: "Unicred Centro Sul" },
  { id: "R0u6tdnr5ik", name: "Otávio Feltrin", role: "Gerente de Crédito", cooperativa: "Unicred Centro Sul" },
  { id: "PyZmcT5skIo", name: "Thiago Sievers", role: "Especialista em Investimentos", cooperativa: "Unicred Centro Sul" },
  { id: "0XQDCYCOOwo", name: "Vanessa Mello", role: "Assessora de Gestão de Pessoas", cooperativa: "Unicred Vale" },
  { id: "3gPAtGmiuP4", name: "Vitor Martinelli", role: "Gerente de Agência", cooperativa: "Unicred Vale" },
  { id: "uHmQPK5iIAI", name: "Giovani Fiamoncini", role: "Gerente de Investimentos", cooperativa: "Unicred Vale" },
  { id: "pi9oZK40SP4", name: "Marlon Rodrigues", role: "Gerente de Agência", cooperativa: "Unicred Vale" },
  { id: "jqss1nWV1UY", name: "Elton de Azevedo", role: "Gerente Geral", cooperativa: "Unicred Vale" },
  { id: "xp7U_iAem3g", name: "Adilson Roberto", role: "Gerente Geral", cooperativa: "Unicred Vale" },
  { id: "a68Tt4OclZY", name: "Rafael Ratzman", role: "Gerente Regional", cooperativa: "Unicred Vale" },
  { id: "FCpjq7X6_1k", name: "Carla Aguiar", role: "Gerente Regional", cooperativa: "Unicred Vale" },
  { id: "4YrDybJ2KXU", name: "Luan Kletenberg", role: "Coordenador de Recuperação de Crédito", cooperativa: "Unicred União" },
  { id: "Z-Ej09rXhVw", name: "Vinicius dos Santos", role: "Gerente de Agência", cooperativa: "Unicred Vale" },
  { id: "chRJB15OlwU", name: "Luciano Sato", role: "Gerente de Agência", cooperativa: "Unicred Vale" },
  { id: "KWJqUJ_opLY", name: "Rone Nascimento", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "jMr7EgFZgpY", name: "Paulo Araújo", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "7xYySlfXgCI", name: "Marina Friedrichsdof", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "6VZRRrPKOcg", name: "Mario Vitor", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "V0RcCkvDrvM", name: "Everton Ribeiro", role: "Gerente de Operações", cooperativa: "Unicred Evolução" },
  { id: "CUnDGipYfQo", name: "Marcio Maia", role: "Gerente de Desenvolvimento de Negócios", cooperativa: "Unicred Evolução" },
  { id: "iF-CgZsvapk", name: "Rui Dias", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "RP1vQ_Udeg4", name: "Kassia Melo", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "fOFmDV67-44", name: "Laiane Moreira", role: "Gestão de Pessoas", cooperativa: "Unicred Evolução" },
  { id: "CFtChYydXf8", name: "Juliano Oliveira", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "VTh6q6ucoeA", name: "Guilherme Colbeich", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "KDgumGeAHj8", name: "Marcio Longhi", role: "Diretor Executivo", cooperativa: "Unicred Vale" },
  { id: "sxZNXAvvTK0", name: "Rayanne Araújo", role: "Gerente de Agência", cooperativa: "Unicred Evolução" },
  { id: "EluK8N_r6oQ", name: "Velber Almeida", role: "Gestor de Agência", cooperativa: "Unicred Evolução" },
  { id: "b_TMHu61Tvg", name: "Roberto Visintainer", role: "Gerente Geral", cooperativa: "Unicred União" },
  { id: "qZWfWGdxTeo", name: "Evelize Vandelão", role: "Supervisora", cooperativa: "Unicred União" },
  { id: "4STfKmTyg6I", name: "Giovana Casassin", role: "Supervisora de Relacionamento", cooperativa: "Unicred União" },
  { id: "SkSAq9oGn8w", name: "Juliano Igeski", role: "Gerente de Agência", cooperativa: "Unicred União" },
  { id: "ISDxTpCyLzA", name: "Camila", role: "Assessora Executiva", cooperativa: "Unicred Centro-Sul" },
  { id: "glE0z5TE_HE", name: "Priscila da Silva", role: "Gerente de Agência", cooperativa: "Unicred Centro-Sul" },
  { id: "pTpRKa5-Ybo", name: "Ricardo Rodriges", role: "Gerente de Agência", cooperativa: "Unicred Centro-Sul" },
  { id: "qcrP3NQ2mno", name: "Gabriela Machado", role: "Coordenadora de Operações", cooperativa: "Unicred Centro-Sul" },
  { id: "OlLiZdKwbAM", name: "Vanusa Duarte", role: "Gerente de Agência", cooperativa: "Unicred Centro-Sul" },
  { id: "C31UZkb76Gc", name: "Gustavo Fraga", role: "Gerente Regional", cooperativa: "Unicred Centro-Sul" },
  { id: "JUl5eGzlJUg", name: "Kelly Heck", role: "Gerente de Agência", cooperativa: "Unicred Centro-Sul" },
  { id: "ZRqY0bpSGH0", name: "Talise Novack", role: "Gerente de Fidelização de Agência", cooperativa: "Unicred Centro-Sul" },
  { id: "UagvitumFyE", name: "Sandra Madeira", role: "Gerente de Agência", cooperativa: "Unicred Centro-Sul" },
  { id: "EyzEgkRilKQ", name: "Márcia Ançay", role: "Gerente de Agência", cooperativa: "Unicred União" },
];

const PAGE_SIZE = 6;

const Depoimentos = () => {
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-[24rem] opacity-30 pointer-events-none">
          <GradientBars numBars={15} gradientFrom="rgb(59, 130, 246)" animationDuration={2} />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground leading-[1.05] tracking-tight mb-6">
            <GoldText>Depoimentos</GoldText> de quem viveu a transformação
          </h1>
          <div className="w-0 h-[3px] mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-expand-width mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Líderes e equipes do cooperativismo de crédito contam, na própria voz, o impacto dos programas AQUARII.
          </p>
        </div>
      </section>

      {/* Galeria de vídeos */}
      <section className="pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl space-y-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {videoTestimonials.slice(0, visible).map((v, i) => (
              <AnimatedSection key={v.id} delay={(i % 3) * 100}>
                <div className="w-full max-w-[300px] sm:max-w-none space-y-3">
                  <div className="aspect-[9/16] max-h-[450px] w-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-gold transition-all duration-300">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={`Depoimento ${v.name}`}
                      className="w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="font-bold text-foreground">{v.name}</p>
                    <p className="text-sm text-muted-foreground">{v.role}</p>
                    <p className="text-sm text-primary">{v.cooperativa}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {visible < videoTestimonials.length && (
            <div className="text-center">
              <ShinyButton onClick={() => setVisible(c => c + PAGE_SIZE)}>Veja mais relatos</ShinyButton>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <AnimatedSection>
          <div className="container mx-auto max-w-3xl text-center relative z-10 space-y-6">
            <h2 className="font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Sua cooperativa pode ser a próxima a viver essa <GoldText>transformação</GoldText>.
            </h2>
            <div className="relative p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <MeetingFormDialog trigger={<ShinyButton>Solicitar Reunião</ShinyButton>} />
              <p className="text-sm text-muted-foreground italic mt-4">A proposta começa pela escuta — não por um catálogo.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Depoimentos;
