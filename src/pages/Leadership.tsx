import ProgramPageTemplate from "@/components/ProgramPageTemplate";

const Leadership = () => (
  <ProgramPageTemplate
    headline="Líderes que param de improvisar e passam a desenvolver."
    headlineGold="desenvolver"
    subheadline="Ferramentas e métodos para gerentes que constroem equipes de alta performance — e agências que batem meta mesmo quando o gerente não está presente."
    publico="Gerentes de agência e gerentes regionais."
    transformTitle="O que muda depois do Leadership."
    transformText="Os gerentes de agência deixam de improvisar na gestão. A cooperativa passa a contar com líderes que desenvolvem pessoas de forma intencional, tomam decisões com método e constroem equipes que entregam resultado sem precisar de supervisão constante."
    resultadosTitle="O que a cooperativa passa a ter."
    resultados={[
      "Agências que batem meta mesmo quando o gerente não está presente",
      "Gerentes que desenvolvem pessoas — não que apenas cobram resultado",
      "Cultura de accountability instalada na agência, sem depender de pressão",
      "Pipeline de líderes prontos para a próxima agência que a cooperativa abrir",
      "Decisões tomadas com método — não por impulso ou pressão do momento",
      "Redução do custo invisível da má gestão: conflitos, retrabalho, turnover",
      "Equipes com mais autonomia, proatividade e resultado",
    ]}
    entregaveisTitle="O que está incluído no programa."
    entregaveis={[
      "Contexto estratégico da cooperativa inserido nos treinamentos",
      "Ferramentas e métodos de liderança e gestão de agências",
      "Simulações e cases reais",
      "Avaliação do perfil dos líderes e o impacto em sua performance",
    ]}
    formatoTitle="Como o programa é entregue."
    formatoContent={
      <>
        <p><strong className="text-foreground/80">Opção 1:</strong> 12 encontros online de 4h, quinzenais — duração de 6 meses. Micro-learning assíncrono.</p>
        <p><strong className="text-foreground/80">Opção 2:</strong> 2 imersões presenciais de 2,5 dias.</p>
        <p><strong className="text-foreground/80">Opção 3:</strong> Híbrido — imersão de 1 dia + módulos online ao vivo + imersão de 1 dia.</p>
        <p><strong className="text-foreground/80">Pré-requisito:</strong> Self-Management.</p>
      </>
    }
    ctaTitle="Esse é o momento certo para a sua cooperativa?"
  />
);

export default Leadership;
