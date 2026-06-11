import ProgramPageTemplate from "@/components/ProgramPageTemplate";

const Management = () => (
  <ProgramPageTemplate
    headline="A diretoria que opera como time único."
    headlineGold="time único"
    subheadline="Time executivo alinhado, consistente — que serve de exemplo e modelo a toda a cooperativa."
    publico="Diretoria executiva e núcleo estratégico."
    transformTitle="O que muda depois do Management."
    transformText="A diretoria passa a operar com alto nível de confiança mútua, alinhamento estratégico e inteligência emocional elevada. O Conselho percebe uma diretoria mais uníssona, diretiva e capaz de imprimir ritmo em toda a cooperativa — de cima para baixo, com consistência."
    resultadosTitle="O que a cooperativa passa a ter."
    resultados={[
      "Diretoria que opera como time — alinhamento que o conselho percebe e confia",
      "Decisões estratégicas mais consistentes e com menos retrabalho",
      "Capacidade de liderar em crise sem contaminar a equipe com instabilidade",
      "Cultura cooperativista que começa de cima — e desce com credibilidade",
      "Postura e comunicação estratégica refinada — dentro e fora da cooperativa",
      "Executivos que desenvolvem os próximos líderes",
      "Aumento do nível de resiliência coletiva para navegar cenários de alta complexidade",
    ]}
    entregaveisTitle="O que está incluído no programa."
    entregaveis={[
      "Módulos altamente estratégicos com aplicação ao contexto cooperativista",
      "Preparação emocional para situações complexas e de crise",
      "Ferramentas e métodos para alta gestão",
      "Plano de desenvolvimento com curadoria individual",
    ]}
    formatoTitle="Como o programa é entregue."
    formatoContent={
      <>
        <p><strong className="text-foreground/80">Opção 1:</strong> 12 encontros de 4h mensais — duração de 12 meses.</p>
        <p><strong className="text-foreground/80">Opção 2:</strong> 6 encontros de 8h mensais — duração de 6 meses.</p>
        <p>Formato flexível ao ritmo e agenda da diretoria.</p>
        <p><strong className="text-foreground/80">Pré-requisito:</strong> Self-Management.</p>
      </>
    }
    ctaTitle="Esse é o momento certo para a sua cooperativa?"
  />
);

export default Management;
