const GoldText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`gold-text ${className}`}>{children}</span>
);

export default GoldText;
