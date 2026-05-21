import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronRight,
  Target,
  Shield,
  TrendingUp,
  Users,
  Crown,
  Briefcase,
  Globe,
  Key,
  Clock,
  Sparkles,
  LucideIcon,
} from 'lucide-react';
import { PROGRAM_ID_TO_SLUG } from '@/data/programContent';
import type { ProgramId } from '@/data/programContent';
import AnimatedSection from '@/components/AnimatedSection';
import GoldText from '@/components/GoldText';

export interface FeatureMetric {
  label: string;
  value: number;
  icon: LucideIcon;
}

export interface ProgramData {
  id: ProgramId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
  };
  stats: {
    tag: string;
    duration: string;
  };
  features: FeatureMetric[];
}

const PROGRAM_DATA: Record<ProgramId, ProgramData> = {
  self: {
    id: 'self',
    label: 'Self-Mgt',
    title: 'Self-Management',
    description: 'Antes de liderar o outro, é preciso aprender a liderar a si mesmo. Autoconsciência e autogestão como base de tudo — ponto de entrada do portfólio.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    colors: {
      gradient: 'from-[#111135] to-[#0a0a20]',
      glow: 'bg-[#D7B33D]',
      ring: 'border-[#D7B33D]/30',
    },
    stats: { tag: 'Acesso Universal', duration: '4 meses ou 2,5 dias' },
    features: [
      { label: 'Autoconsciência', value: 95, icon: Target },
      { label: 'Resiliência', value: 85, icon: Shield },
    ],
  },
  advisor: {
    id: 'advisor',
    label: 'Advisor',
    title: 'Advisor',
    description: 'O gerente que orienta retém, vende mais e gera confiança. Postura consultiva para um atendimento que o cooperado não encontra em banco nenhum.',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop',
    colors: {
      gradient: 'from-[#111135] to-[#0a0a20]',
      glow: 'bg-[#D7B33D]',
      ring: 'border-[#D7B33D]/30',
    },
    stats: { tag: 'Gerentes de Relacionamento', duration: '4 meses ou 3 dias' },
    features: [
      { label: 'Retenção', value: 90, icon: Users },
      { label: 'Cross-sell', value: 88, icon: TrendingUp },
    ],
  },
  leadership: {
    id: 'leadership',
    label: 'Leadership',
    title: 'Leadership',
    description: 'Líderes que param de improvisar na gestão e passam a desenvolver pessoas de forma intencional — construindo equipes de alta performance.',
    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600&auto=format&fit=crop',
    colors: {
      gradient: 'from-[#111135] to-[#0a0a20]',
      glow: 'bg-[#D7B33D]',
      ring: 'border-[#D7B33D]/30',
    },
    stats: { tag: 'Gerentes de Agência', duration: '6 meses ou Híbrido' },
    features: [
      { label: 'Accountability', value: 92, icon: Crown },
      { label: 'Autonomia', value: 85, icon: Users },
    ],
  },
  management: {
    id: 'management',
    label: 'Management',
    title: 'Management',
    description: 'A diretoria que opera como time único, com alinhamento estratégico e inteligência emocional elevada — imprimindo ritmo em toda a cooperativa.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop',
    colors: {
      gradient: 'from-[#111135] to-[#0a0a20]',
      glow: 'bg-[#D7B33D]',
      ring: 'border-[#D7B33D]/30',
    },
    stats: { tag: 'Diretoria Executiva', duration: '6 a 12 meses' },
    features: [
      { label: 'Alinhamento', value: 98, icon: Globe },
      { label: 'Estratégia', value: 95, icon: Briefcase },
    ],
  },
  mentoria: {
    id: 'mentoria',
    label: 'Mentoria',
    title: 'Mentoria Individual',
    description: 'Atenção 100% direcionada, diagnóstico aprofundado e acompanhamento contínuo. Quando o desafio da alta liderança é específico, complexo ou sigiloso.',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop',
    colors: {
      gradient: 'from-[#111135] to-[#0a0a20]',
      glow: 'bg-[#D7B33D]',
      ring: 'border-[#D7B33D]/30',
    },
    stats: { tag: 'Alta Liderança', duration: 'Sob Demanda' },
    features: [
      { label: 'Hiperpersonalização', value: 100, icon: Sparkles },
      { label: 'Confidencialidade', value: 100, icon: Key },
    ],
  },
};

const PROGRAM_KEYS = Object.keys(PROGRAM_DATA) as ProgramId[];

const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
  },
  image: (isLeft: boolean): Variants => ({
    initial: {
      opacity: 0,
      scale: 1.2,
      filter: 'blur(15px)',
      rotate: isLeft ? -15 : 15,
      x: isLeft ? -40 : 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(20px)',
      transition: { duration: 0.25 },
    },
  }),
};

const BackgroundGradient = ({ isLeft }: { isLeft: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 z-0" />
    <motion.div
      animate={{
        background: isLeft
          ? 'radial-gradient(circle at 20% 50%, rgba(215, 179, 61, 0.08), transparent 60%)'
          : 'radial-gradient(circle at 80% 50%, rgba(215, 179, 61, 0.08), transparent 60%)',
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-10"
    />
  </div>
);

const ProductVisual = ({
  data,
  isLeft,
  transitioning,
  onTransitionComplete,
}: {
  data: ProgramData;
  isLeft: boolean;
  transitioning: boolean;
  onTransitionComplete: () => void;
}) => (
  <motion.div
    layout="position"
    className="relative group shrink-0 z-20"
    animate={
      transitioning
        ? { scale: 8, opacity: 0, filter: 'blur(10px)' }
        : { scale: 1, opacity: 1, filter: 'blur(0px)' }
    }
    transition={
      transitioning
        ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        : undefined
    }
    onAnimationComplete={() => {
      if (transitioning) onTransitionComplete();
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-[-15%] rounded-full border border-dashed border-[#D7B33D]/20 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-3xl opacity-50`}
    />
    <div className="relative h-72 w-72 md:h-[400px] md:w-[400px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-white/5 backdrop-blur-md">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={data.title}
            variants={ANIMATIONS.image(isLeft)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>
    <motion.div
      layout="position"
      className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max max-w-[280px] md:max-w-none"
    >
      <div className="flex items-center gap-2 text-[8px] md:text-xs uppercase tracking-[0.1em] md:tracking-widest text-zinc-300 bg-white/5 px-3 md:px-4 py-2 rounded-full border border-[#D7B33D]/20 backdrop-blur-xl shadow-[0_0_15px_rgba(215,179,61,0.1)]">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.tag}
      </div>
    </motion.div>
  </motion.div>
);

const ProductDetails = ({
  data,
  isLeft,
  onViewDetails,
}: {
  data: ProgramData;
  isLeft: boolean;
  onViewDetails: () => void;
}) => {
  const alignClass = isLeft ? 'items-start text-left' : 'items-end text-right';
  const flexDirClass = isLeft ? 'flex-row' : 'flex-row-reverse';
  const barColorClass = isLeft ? 'left-0 bg-[#D7B33D]' : 'right-0 bg-[#D7B33D]';

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ${alignClass} z-20`}
    >
      <motion.h2 variants={ANIMATIONS.item} className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] gold-text mb-2">
        Jornada AQUARII
      </motion.h2>
      <motion.h3 variants={ANIMATIONS.item} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-[#f2f2f2]">
        {data.title}
      </motion.h3>
      <motion.p variants={ANIMATIONS.item} className={`text-zinc-400 mb-8 max-w-md leading-relaxed text-sm md:text-base ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
        {data.description}
      </motion.p>
      <motion.div variants={ANIMATIONS.item} className={`pt-2 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <button
          type="button"
          onClick={onViewDetails}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest gold-text hover:text-white transition-colors group"
        >
          Ver Ementa Completa
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </motion.div>
  );
};

const Switcher = ({
  activeId,
  onToggle,
}: {
  activeId: ProgramId;
  onToggle: (id: ProgramId) => void;
}) => {
  const options = Object.values(PROGRAM_DATA).map((p) => ({ id: p.id, label: p.label }));
  return (
    <div className="absolute bottom-8 md:bottom-12 inset-x-0 flex flex-col items-center z-50 pointer-events-none px-4 gap-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="pointer-events-none flex flex-col items-center gap-1 text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium"
      >
        <span className="bg-gradient-to-r from-[#D7B33D] via-[#E8C547] to-[#D7B33D] bg-clip-text text-transparent">
          Explore os programas
        </span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="gold-text"
        >
          ↓
        </motion.span>
      </motion.div>

      <motion.div
        layout
        initial={{ scale: 1 }}
        animate={{
          boxShadow: [
            '0 20px 60px rgba(0,0,0,0.8), 0 0 0 0px rgba(215,179,61,0)',
            '0 20px 60px rgba(0,0,0,0.8), 0 0 0 6px rgba(215,179,61,0.25)',
            '0 20px 60px rgba(0,0,0,0.8), 0 0 0 12px rgba(215,179,61,0)',
          ],
        }}
        transition={{
          boxShadow: { delay: 2, duration: 2, repeat: 2, ease: 'easeInOut' },
        }}
        className="pointer-events-auto flex flex-wrap justify-center items-center gap-1 p-1.5 rounded-3xl md:rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 ring-1 ring-[#D7B33D]/20"
      >
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.95 }}
            className={`relative w-[28%] md:w-24 h-10 md:h-12 rounded-full flex items-center justify-center text-[10px] md:text-sm font-medium focus:outline-none transition-colors duration-300 ${activeId === opt.id ? 'text-[#111135]' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-[#D7B33D] shadow-[0_0_15px_rgba(215,179,61,0.4)]"
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default function SpatialProgramShowcase() {
  const [activeSide, setActiveSide] = useState<ProgramId>('self');
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const currentData = PROGRAM_DATA[activeSide];
  const activeIndex = PROGRAM_KEYS.indexOf(activeSide);
  const isLeft = activeIndex % 2 === 0;

  const handleViewDetails = useCallback(() => {
    setTransitioning(true);
  }, []);

  const handleTransitionComplete = useCallback(() => {
    const slug = PROGRAM_ID_TO_SLUG[activeSide];
    navigate(`/programas/${slug}`);
  }, [activeSide, navigate]);

  return (
    <section id="programas" className="relative min-h-[900px] md:min-h-screen w-full text-zinc-100 overflow-hidden selection:bg-[#D7B33D]/30 flex flex-col items-center justify-center py-20 font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <BackgroundGradient isLeft={isLeft} />

      {/* Section header */}
      <div className="relative z-20 text-center mb-12 px-4">
        <AnimatedSection>
          <h2 className="font-bold text-3xl md:text-4xl text-[#f2f2f2]">
            5 programas. Uma jornada de desenvolvimento <GoldText>completa</GoldText>.
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-4">
            Cada programa resolve um momento específico. Juntos, criam as condições para um ambiente de alta performance em toda a cooperativa.
          </p>
        </AnimatedSection>
      </div>

      <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto pb-32">
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
          className={`flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-40 w-full ${
            isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          }`}
        >
          <ProductVisual
            data={currentData}
            isLeft={isLeft}
            transitioning={transitioning}
            onTransitionComplete={handleTransitionComplete}
          />
          <motion.div
            layout="position"
            className="w-full max-w-md md:max-w-lg"
            animate={transitioning ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <AnimatePresence mode="wait">
              <ProductDetails
                key={activeSide}
                data={currentData}
                isLeft={isLeft}
                onViewDetails={handleViewDetails}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>
      <motion.div
        animate={transitioning ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Switcher activeId={activeSide} onToggle={setActiveSide} />
      </motion.div>
    </section>
  );
}
