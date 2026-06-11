import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, type MotionValue } from "framer-motion";

const AnimatedWord = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [15, 0]);
  const filter = useTransform(progress, range, ["blur(8px)", "blur(0px)"]);

  return (
    <motion.span style={{ opacity, y, filter }} className="inline-block mr-[0.3em] mt-1">
      {children}
    </motion.span>
  );
};

const SobreHeroCinematic = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const bgMoveX = useTransform(springX, [-1, 1], [15, -15]);
  const bgMoveY = useTransform(springY, [-1, 1], [15, -15]);
  const blobMoveX = useTransform(springX, [-1, 1], [-30, 30]);
  const blobMoveY = useTransform(springY, [-1, 1], [-30, 30]);
  const blobMoveXInv = useTransform(blobMoveX, (v) => -v);
  const blobMoveYInv = useTransform(blobMoveY, (v) => -v);

  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);

  // FASE 1: "Construídos de dentro."
  const phrase1Scale = useTransform(smoothProgress, [0.1, 0.28], [1, 4]);
  const phrase1Opacity = useTransform(smoothProgress, [0.15, 0.28], [1, 0]);
  const phrase1Filter = useTransform(smoothProgress, [0.1, 0.28], ["blur(0px)", "blur(24px)"]);

  // FASE 2: "Por quem nunca saiu."
  const phrase2Opacity = useTransform(smoothProgress, [0.22, 0.32, 0.45, 0.55], [0, 1, 1, 0]);
  const phrase2Y = useTransform(smoothProgress, [0.22, 0.32, 0.45, 0.55], [40, 0, 0, -40]);
  const phrase2Scale = useTransform(smoothProgress, [0.22, 0.32, 0.45, 0.55], [0.95, 1, 1, 1.05]);
  const phrase2Filter = useTransform(
    smoothProgress,
    [0.22, 0.32, 0.45, 0.55],
    ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
  );

  const paragraphText =
    "A AQUARII nasceu da combinação de duas trajetórias únicas — uma enraizada no cooperativismo de crédito, outra forjada no mercado financeiro. O resultado é uma visão que nenhuma consultoria genérica consegue replicar.";
  const words = paragraphText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh]"
      style={{ backgroundColor: "var(--pc-bg)" }}
      aria-label="Sobre a AQUARII"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background reativo + parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale: bgScale, x: bgMoveX, y: bgMoveY }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% -20%, var(--pc-marinho) 0%, transparent 70%)",
              opacity: 0.7,
            }}
          />
          <div className="sobre-grid-lines" />

          <motion.div
            className="sobre-liquid-blob"
            style={{
              width: "600px",
              height: "600px",
              top: "-10%",
              right: "-10%",
              background: "radial-gradient(circle, rgba(217,183,136,0.1), transparent 70%)",
              x: blobMoveX,
              y: blobMoveY,
            }}
          />
          <motion.div
            className="sobre-liquid-blob"
            style={{
              width: "800px",
              height: "800px",
              bottom: "-20%",
              left: "-10%",
              background: "radial-gradient(circle, rgba(30,42,58,0.5), transparent 70%)",
              x: blobMoveXInv,
              y: blobMoveYInv,
            }}
          />
        </motion.div>

        <div className="sobre-noise-overlay" />

        <div className="relative z-10 w-full max-w-6xl mx-auto h-full px-4 md:px-8">
          {/* FASE 1 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h1
              className="w-full text-center leading-[1.05] tracking-[-0.03em] m-0 origin-center"
              style={{
                fontFamily: "var(--pc-font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
                opacity: phrase1Opacity,
                scale: phrase1Scale,
                filter: phrase1Filter,
              }}
            >
              <span className="block overflow-hidden pb-4">
                <motion.span
                  className="block text-liquid-gold"
                  initial={{ y: "110%", opacity: 0, rotate: 3, filter: "blur(16px)" }}
                  animate={{ y: "0%", opacity: 1, rotate: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  Construídos de dentro.
                </motion.span>
              </span>
            </motion.h1>
          </div>

          {/* FASE 2 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h2
              className="w-full text-center leading-[1.05] tracking-[-0.03em] m-0 origin-center"
              style={{
                fontFamily: "var(--pc-font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
                opacity: phrase2Opacity,
                y: phrase2Y,
                scale: phrase2Scale,
                filter: phrase2Filter,
              }}
            >
              <span className="text-liquid-gold">Por quem nunca saiu.</span>
            </motion.h2>
          </div>

          {/* FASE 3 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full max-w-[90%] lg:max-w-[800px] text-center">
              <p
                className="font-light leading-[1.6]"
                style={{
                  color: "var(--pc-text-mute)",
                  fontFamily: "var(--pc-font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.125rem, 2vw, 1.65rem)",
                }}
              >
                {words.map((word, i) => {
                  const step = 0.35 / words.length;
                  const wordStart = 0.55 + i * step;
                  const wordEnd = wordStart + step;

                  return (
                    <AnimatedWord
                      key={i}
                      progress={smoothProgress}
                      range={[wordStart, wordEnd]}
                    >
                      {word}
                    </AnimatedWord>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreHeroCinematic;
