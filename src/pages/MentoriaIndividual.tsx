import ProgramPageTemplate from "@/components/ProgramPageTemplate";

const MentoriaIndividual = () => (
  <ProgramPageTemplate
    headline="Quando o desafio é específico, complexo ou sigiloso."
    headlineGold="sigiloso"
    subheadline="Liderança de alto nível desenvolvida de dentro para fora — atenção 100% direcionada para quem não pode esperar pelo ritmo de um grupo."
    publico="Diretores, superintendentes, gerentes regionais e gestores em transição ou preparação para cargos de maior responsabilidade."
    transformTitle="O que muda com a Mentoria Individual."
    transformText="Quando o desafio é específico, complexo ou sigiloso, a mentoria individual entrega o que nenhum programa de grupo consegue: atenção 100% direcionada, diagnóstico aprofundado e acompanhamento contínuo do processo de mudança."
    resultadosTitle="O que o líder passa a ter."
    resultados={[
      "Clareza sobre o estilo de liderança e impacto real na equipe e nos resultados",
      "Resolução de pontos cegos comportamentais que limitam performance",
      "Tomada de decisão mais consistente em cenários de pressão, ambiguidade e conflitos de interesse",
      "Navegação mais equilibrada em transições de cargo, fusões e crises",
      "Desenvolvimento de autoridade pela presença, não pelo cargo",
      "Construção deliberada de legado com visão de longo prazo",
      "Equilíbrio emocional sustentado, sem transferir instabilidade para a equipe",
    ]}
    entregaveisTitle="O que está incluído na mentoria."
    entregaveis={[
      "Dossiê individual",
      "Plano de desenvolvimento individual de alta liderança",
      "Sessões individuais com foco em desafios reais",
      "Relatório de encerramento com síntese da jornada, evolução dos indicadores comportamentais e recomendações",
    ]}
    formatoTitle="Como a mentoria é conduzida."
    formatoContent={
      <>
        <p>Sob demanda. Formato, frequência e duração definidos conforme o perfil e a necessidade do mentorado.</p>
        <p><strong className="text-foreground/80">Pré-requisito:</strong> Assessment individual.</p>
      </>
    }
    ctaTitle="Esse é o momento certo para você?"
  />
);

export default MentoriaIndividual;
