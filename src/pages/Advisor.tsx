import ProgramPageTemplate from "@/components/ProgramPageTemplate";

const Advisor = () => (
  <ProgramPageTemplate
    headline="O gerente que orienta retém, vende mais e gera confiança."
    headlineGold="confiança"
    subheadline="Postura consultiva para um atendimento que o cooperado não encontra em banco nenhum."
    publico="Gerentes de relacionamento e gerentes de negócio."
    transformTitle="O que muda depois do Advisor."
    transformText="Gerentes de relacionamento passam a atuar de forma consultiva — personalizando o atendimento ao perfil comportamental e financeiro de cada cooperado. Isso humaniza a venda, fortalece o vínculo e gera resultados sustentáveis na carteira. O cooperado passa a ver o gerente como parceiro, não como balcão."
    resultadosTitle="O que a cooperativa passa a ter."
    resultados={[
      "Redução de churn de cooperados",
      "Aumento de cross-sell e ampliação de carteira",
      "Crescimento do NPS de cooperados",
      "Vendas mais sustentáveis — menos cancelamentos pós-contratação",
      "Gerente que o cooperado procura — não apenas quando tem problema",
      "Mais recomendações orgânicas de novos cooperados",
      "A cooperativa passa a ser mais lembrada e indicada na praça",
    ]}
    entregaveisTitle="O que está incluído no programa."
    entregaveis={[
      "Diagnóstico 360º",
      "Simulações reais de atendimento",
      "Integração das finanças com comportamento do cooperado",
      "Apresentação de resultados concretos do programa",
    ]}
    formatoTitle="Como o programa é entregue."
    formatoContent={
      <>
        <p><strong className="text-foreground/80">Opção 1:</strong> 9 módulos de 4h cada (36h total), ao longo de 4 meses. Inclui 30h de diagnóstico antes do primeiro módulo.</p>
        <p><strong className="text-foreground/80">Opção 2:</strong> Imersivo em 3 dias.</p>
        <p><strong className="text-foreground/80">Pré-requisito:</strong> Recomendado (não obrigatório): Self-Management.</p>
      </>
    }
    ctaTitle="Esse é o momento certo para a sua cooperativa?"
  />
);

export default Advisor;
