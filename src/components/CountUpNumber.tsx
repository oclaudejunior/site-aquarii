import { useEffect, useRef, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

interface CountUpNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const CountUpNumber = ({ value, prefix = "", suffix = "", duration = 2000 }: CountUpNumberProps) => {
  const [containerRef, isInView] = useInView({ once: true });
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (!spanRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out-quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Number.isInteger(value) 
        ? Math.round(eased * value) 
        : parseFloat((eased * value).toFixed(1));

      if (spanRef.current) {
        spanRef.current.textContent = `${prefix}${current}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }, [value, prefix, suffix, duration]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <div ref={containerRef} className="inline">
      <span ref={spanRef}>{prefix}0{suffix}</span>
    </div>
  );
};

export default CountUpNumber;
