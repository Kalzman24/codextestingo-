import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { cn } from '../lib/utils';

// Helper component for the animated shapes, integrated from the new hero design.
function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}


interface GatewayPageProps {
  onSelectConsultancy: () => void;
  onSelectVenture: () => void;
}

const GatewayCard: React.FC<{
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}> = ({ title, description, buttonText, onClick }) => {
  return (
    <motion.div 
      className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 flex flex-col items-center text-center w-full backdrop-blur-sm"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
        <p className="mt-4 text-base md:text-lg text-white/70 max-w-sm">{description}</p>
      </div>
      <div className="mt-auto pt-8">
        <Button onClick={onClick} variant="outline" size="lg" className="font-semibold px-8 py-5 text-base bg-white/5 hover:bg-white/10">
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export const GatewayPage: React.FC<GatewayPageProps> = ({ onSelectConsultancy, onSelectVenture }) => {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white p-4">
      {/* Background elements from the new hero design */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-indigo-500/[0.15]"
              className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-rose-500/[0.15]"
              className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />
          <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
          <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />
          <ElegantShape
              delay={0.7}
              width={150}
              height={40}
              rotate={-25}
              gradient="from-cyan-500/[0.15]"
              className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
      </div>
      
      {/* Original Gateway Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">WhiteSpaceInc</h1>
          <p className="mt-4 text-lg md:text-xl text-white/60">Ready for your next chapter?</p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <GatewayCard
            title="AI Strategy & Execution"
            description="Transform your operations and deliver measurable outcomes with our proven consultancy services."
            buttonText="Explore Our Services"
            onClick={onSelectConsultancy}
          />
          <GatewayCard
            title="WS Venture Studio"
            description="We co-build the future of AI by partnering with exceptional, early-stage founders."
            buttonText="Join The Studio"
            onClick={onSelectVenture}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </main>
  );
};