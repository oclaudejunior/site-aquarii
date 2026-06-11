import React from 'react';

interface GradientBarsProps {
  numBars?: number;
  gradientFrom?: string;
  gradientTo?: string;
  animationDuration?: number;
  className?: string;
}

const GradientBars: React.FC<GradientBarsProps> = ({
  numBars = 15,
  gradientFrom = 'rgb(255, 60, 0)',
  gradientTo = 'transparent',
  animationDuration = 2,
  className = '',
}) => {
  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <>
      <style>{`
        @keyframes pulseBar {
          0% { transform: scaleY(var(--initial-scale)); }
          100% { transform: scaleY(calc(var(--initial-scale) * 0.7)); }
        }
      `}</style>

      <div
        className={className}
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            height: '100%',
            gap: '8px',
          }}
        >
          {Array.from({ length: numBars }).map((_, index) => {
            const height = calculateHeight(index, numBars);
            return (
              <div
                key={index}
                style={{
                  width: `${100 / numBars}%`,
                  height: '100%',
                  background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
                  animation: `pulseBar ${animationDuration}s ease-in-out infinite alternate`,
                  animationDelay: `${index * 0.1}s`,
                  transformOrigin: 'bottom',
                  '--initial-scale': height / 100,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GradientBars;
export { GradientBars };
