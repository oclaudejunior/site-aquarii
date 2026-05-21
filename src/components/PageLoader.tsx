import { useEffect, useState } from "react";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // ease in-out
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setProgress(eased * 100);
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        // Espera 200ms para garantir render completo da página
        setTimeout(() => {
          setFading(true);
          if (typeof window !== "undefined") {
            window.__pcPageReady = true;
            window.dispatchEvent(new Event("pc:page-ready"));
          }
        }, 200);
        // Remove do DOM após o fade+slide terminar
        setTimeout(() => setHidden(true), 1400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 transition-all"
      style={{
        zIndex: 10000,
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(-100%)" : "translateY(0)",
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="font-bold text-foreground tracking-tight whitespace-nowrap"
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)",
          letterSpacing: "-0.02em",
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(-20px)" : "translateY(0)",
          transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="gold-text not-italic" style={{ fontStyle: "normal", display: "inline-block", paddingRight: "0.08em" }}>AQUARII</span>
      </div>
      <div
        className="overflow-hidden"
        style={{
          width: "min(320px, 60vw)",
          height: "1px",
          background: "hsl(var(--primary) / 0.18)",
          opacity: fading ? 0 : 1,
          transform: fading ? "scaleX(0.8)" : "scaleX(1)",
          transition: "opacity 350ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          transformOrigin: "center",
        }}
      >
        <div
          className="h-full bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        Carregando o sistema
      </div>
    </div>
  );
};

export default PageLoader;