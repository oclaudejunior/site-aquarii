import { useEffect, useState } from "react";

const Particles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number; top: string; left: string; duration: string; delay: string; size: string;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${4 + Math.random() * 6}s`,
        delay: `${Math.random() * 2}s`,
        size: `${1 + Math.random() * 2}px`,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary opacity-40 animate-float"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
