import ProgramPageTemplate from "@/components/ProgramPageTemplate";

const SelfManagement = () => (
  <ProgramPageTemplate
    headline="Antes de liderar o outro, é preciso liderar a si mesmo."
    headlineGold="liderar a si mesmo"
    subheadline="O ponto de entrada do portfólio AQUARII — para qualquer colaborador, em qualquer função ou nível hierárquico."
    transformTitle="O que muda depois do Self-Management."
    transformText="A equipe passa a operar com maior autoconsciência. Cada colaborador entende seu potencial, identifica seu padrão de comportamento, suas emoções e o impacto disso em sua performance. Aprende a se autogerenciar e a se autodesenvolver. Todos saem com um plano concreto de ampliação de pontos fortes."
    resultadosTitle="O que a cooperativa passa a ter."
    resultados={[
      "Colaboradores que se autogerenciam — menos dependência do líder para resolver o que é responsabilidade individual",
      "Redução de conflitos interpessoais que consomem tempo e clima da equipe",
      "Equipe com maior resiliência emocional para sustentar performance sob pressão",
      "Mapeamento do potencial real de cada pessoa — base para decisões de promoção e sucessão",
      "Clima organizacional que retém — não apenas pelo salário",
      "Redução de esforço desperdiçado em retrabalho gerado por autossabotagem",
      "Aumento de engajamento e sinergia da equipe",
    ]}
    entregaveisTitle="O que está incluído no programa."
    entregaveis={[
      "Assessments e dossiês individuais",
      "Mapeamento de altos potenciais",
      "Diagnóstico da cultura emocional e estratégias de evolução",
      "Visão global dos talentos, motivadores e sabotadores das equipes",
    ]}
    formatoTitle="Como o programa é entregue."
    formatoContent={
      <>
        <p><strong className="text-foreground/80">Opção 1:</strong> 8 módulos online de 3h cada, entregues quinzenalmente — duração de 4 meses. Micro-learning em plataforma assíncrona.</p>
        <p><strong className="text-foreground/80">Opção 2:</strong> Imersão presencial de 2,5 dias (24h).</p>
        <p><strong className="text-foreground/80">Pré-requisito:</strong> Nenhum. Este é o ponto de entrada do portfólio.</p>
      </>
    }
    ctaTitle="Esse é o momento certo para a sua cooperativa?"
  />
);

export default SelfManagement;
