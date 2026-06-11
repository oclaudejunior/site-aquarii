import { useInView } from "@/hooks/useInView";
import { usePageReady } from "@/hooks/usePageReady";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** When true, animação roda apenas uma vez. Default: false (revela ao subir e descer) */
  once?: boolean;
}

const AnimatedSection = ({ children, className = "", delay = 0, once = false }: AnimatedSectionProps) => {
  const [ref, isInView] = useInView({ once });
  const ready = usePageReady();
  const visible = ready && isInView;

  return (
    <div
      ref={ref}
      className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay + (ready ? 0 : 150)}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
