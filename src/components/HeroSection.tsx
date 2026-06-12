import { useEffect, useRef } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import heroBg from "@/assets/hero-bg.png";
import MeetingFormDialog from "@/components/MeetingFormDialog";
import "./hero-section.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 12000, suffix: ".000", prefix: "+", label: "pessoas transformadas" },
  { target: 200, prefix: "+", label: "turmas formadas" },
  { target: 12, prefix: "+", unit: "anos", label: "atendendo o mercado cooperativista" },
  { target: 20, prefix: "+", unit: "mil", label: "horas de mentoria individual" },
  { target: 100, unit: "%", label: "das pessoas indicariam" },
  { target: 94.3, decimals: 1, unit: "%", label: "satisfação dos clientes" },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const triggerCtaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expõe instância para que dialogs possam pausar/retomar o scroll
    (window as Window & { __lenis?: typeof lenis }).__lenis = lenis;

    // Integra Lenis no ticker do GSAP em vez de um RAF manual independente.
    // Assim ScrollTrigger lê o scroll DEPOIS que o Lenis já atualizou a posição
    // dentro do mesmo frame — elimina o jitter nos scrubs de parallax.
    const lenisRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      const runEntrance = () => {
        // Word reveal
        gsap.to(".pc-hero .word-inner", {
          y: "0%",
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.05,
        });

        // Reveal scoped to hero — staggered fade-up
        const heroReveals = document.querySelectorAll(".pc-hero .reveal");
        heroReveals.forEach((el, i) => {
          setTimeout(() => el.classList.add("is-visible"), 200 + i * 90);
        });
      };

      if (typeof window !== "undefined" && window.__pcPageReady) {
        runEntrance();
      } else {
        window.addEventListener("pc:page-ready", runEntrance, { once: true });
      }

      // Reveal bidirectional outside hero
      gsap.utils.toArray<HTMLElement>(".reveal:not(.pc-hero .reveal)").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          onEnter: () => el.classList.add("is-visible"),
          onLeaveBack: () => el.classList.remove("is-visible"),
          onEnterBack: () => el.classList.add("is-visible"),
        });
      });

      // Hero parallax photo
      gsap.to(photoRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(veilRef.current, {
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom 30%", scrub: true },
      });
      gsap.to(photoRef.current, {
        filter: "brightness(0.55) contrast(1.05) saturate(0.85) blur(8px)",
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom 20%", scrub: true },
      });

      // Counters
      document.querySelectorAll<HTMLElement>(".pc-hero .count").forEach((el) => {
        const target = parseFloat(el.dataset.target || "0");
        const decimals = parseInt(el.dataset.decimals || "0");
        const useThousand = target >= 1000;
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 95%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: target,
              duration: 2.2,
              ease: "power3.out",
              onUpdate: () => {
                let val: string | number = decimals ? obj.v.toFixed(decimals) : Math.round(obj.v);
                if (useThousand) val = Math.round(obj.v).toLocaleString("pt-BR");
                el.textContent = String(val);
              },
            });
          },
        });
      });
    }, heroRef);

    return () => {
      gsap.ticker.remove(lenisRaf);
      lenis.destroy();
      delete (window as Window & { __lenis?: typeof lenis }).__lenis;
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="pc-hero relative min-h-screen flex items-center overflow-hidden"
    >
      {/* PHOTO BG */}
      <div className="hero-photo-wrap">
        <img
          ref={photoRef}
          className="hero-photo"
          src={heroBg}
          alt="Fundo hero Aquarii"
          width={1920}
          height={1080}
        />
        <div className="hero-photo-overlay" />
        <div className="hero-vignette" />
        <div ref={veilRef} className="hero-scroll-veil" />
      </div>

      <div className="grid-lines" style={{ opacity: 0.35 }} />

      {/* Side marker */}
      <div className="absolute top-28 right-6 md:right-10 hidden md:flex items-center gap-3 z-10 reveal delay-3">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--pc-champagne-400)", boxShadow: "0 0 12px var(--pc-champagne-400)", animation: "pc-pulse 2s ease-in-out infinite" }}
        />
        <span className="label-mono">Performance · Cooperativismo · Tecnologia</span>
      </div>

      <div
        className="relative w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
        style={{ paddingTop: "9rem", paddingBottom: "26rem" }}
      >
        <div className="lg:col-span-10 xl:col-span-9">
          {/* Badge */}
          <div className="pc-badge mb-8 reveal">
            <span className="dot" />
            <span>Cooperativismo de alta performance</span>
          </div>

          {/* Hero Title */}
          <h1 className="h-hero mb-6">
            <span className="line"><span className="word-inner">A cooperativa que</span></span>
            <span className="line line-difference"><span className="word-inner">investe no humano</span></span>
            <span className="line"><span className="word-inner">chega primeiro.</span></span>
          </h1>

          {/* Subtitle */}
          <p className="body-lg max-w-2xl reveal delay-3" style={{ color: "rgba(245,246,248,0.78)" }}>
            Construindo uma cultura cooperativista de Alta Performance.
          </p>

          {/* CTAs */}
          <div className="mt-4 md:mt-10 flex flex-wrap items-center gap-4 reveal delay-4 relative z-[5]">
            <button
              type="button"
              className="shiny-cta"
              onClick={() => document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conheça os programas
              <span className="arrow"><ArrowRight size={14} /></span>
            </button>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div
        className="absolute left-0 right-0 bottom-0 z-[3] px-6 md:px-12"
        style={{
          paddingTop: "7rem",
          paddingBottom: "3rem",
          background:
            "linear-gradient(to top, var(--pc-bg) 0%, rgba(10,14,20,0.95) 30%, rgba(10,14,20,0.7) 55%, rgba(10,14,20,0.2) 85%, transparent 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 reveal delay-4" style={{ marginBottom: "1.5rem" }}>
            <span className="block" style={{ width: "2rem", height: "1px", background: "var(--pc-champagne-400)" }} />
            <span className="label-mono">Nossos números falam</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <div key={i} className={`stat-card reveal delay-${3 + Math.floor(i / 2)}`}>
                <span className="corner-bl" />
                <span className="corner-br" />
                <div className="sheen" />
                <div className="stat-value">
                  {s.prefix && <span className="unit">{s.prefix}</span>}
                  <span
                    className="count"
                    data-target={s.target}
                    data-decimals={s.decimals || 0}
                    data-suffix={s.suffix || ""}
                  >
                    0
                  </span>
                  {s.unit && (
                    <span className="unit" style={{ fontSize: s.unit === "%" ? "0.55em" : "0.36em", marginLeft: "0.15em" }}>
                      {s.unit}
                    </span>
                  )}
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
