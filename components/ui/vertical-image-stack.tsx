
"use client"

import React, { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"

const pillars = [
  {
    id: 1,
    title: 'MyNtropy Profile',
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: 'Network',
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: 'Open World',
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: 'Persona Brief',
    src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: 'Match',
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: 'Grow Your Network',
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
]

interface VerticalImageStackProps {
  controlledIndex?: number;
}

export function VerticalImageStack({ controlledIndex }: VerticalImageStackProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  
  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const navigate = useCallback((newDirection: number) => {
    if (controlledIndex !== undefined) return;
    setInternalIndex((prev) => {
      if (newDirection > 0) {
        return prev === pillars.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? pillars.length - 1 : prev - 1
    })
  }, [controlledIndex])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (controlledIndex !== undefined) return;
    const threshold = 50
    if (info.offset.y < -threshold) {
      navigate(1)
    } else if (info.offset.y > threshold) {
      navigate(-1)
    }
  }

  const getCardStyle = (index: number) => {
    const total = pillars.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    const yOffset = 180;

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 10, rotateX: 0 }
    } else if (diff === -1) {
      return { y: -yOffset, scale: 0.85, opacity: 0.4, zIndex: 8, rotateX: 6 }
    } else if (diff === -2) {
      return { y: -yOffset * 1.8, scale: 0.75, opacity: 0.15, zIndex: 6, rotateX: 12 }
    } else if (diff === 1) {
      return { y: yOffset, scale: 0.85, opacity: 0.4, zIndex: 8, rotateX: -6 }
    } else if (diff === 2) {
      return { y: yOffset * 1.8, scale: 0.75, opacity: 0.15, zIndex: 6, rotateX: -12 }
    } else {
      return { y: diff > 0 ? 500 : -500, scale: 0.6, opacity: 0, zIndex: 0, rotateX: diff > 0 ? -20 : 20 }
    }
  }

  const isVisible = (index: number) => {
    const total = pillars.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center lg:justify-start overflow-visible bg-transparent select-none py-10">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 lg:left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/[0.04] blur-3xl" />
      </div>

      {/* Counter - Moved further left to avoid overlap */}
      <div className="absolute -left-24 lg:-left-28 top-1/2 -translate-y-1/2 hidden xl:block opacity-30">
        <div className="flex flex-col items-center">
          <span className="text-7xl font-bold text-brand-dark tabular-nums tracking-tighter">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="my-5 h-px w-14 bg-brand-orange/40" />
          <span className="text-xs text-zinc-400 font-bold tabular-nums">{String(pillars.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Card Stack */}
      <div className="relative flex h-[500px] w-full max-w-[380px] md:max-w-[450px] items-center justify-center lg:justify-start" style={{ perspective: "1500px" }}>
        {pillars.map((pillar, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={pillar.id}
              className={`absolute w-full ${controlledIndex === undefined ? 'cursor-grab active:cursor-grabbing' : ''}`}
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 26,
                mass: 1,
              }}
              drag={controlledIndex === undefined && isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
              <div
                className="relative h-[480px] md:h-[560px] w-full overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-zinc-200/20 shadow-2xl"
              >
                <img
                  src={pillar.src}
                  alt={`Pillar ${index + 1}`}
                  className="object-cover w-full h-full opacity-60"
                  draggable={false}
                />
                
                {/* Title Overlay on Image */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                   <div className="text-brand-orange text-[10px] mb-3 uppercase tracking-[0.4em] font-bold">
                    Pillar 0{index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white leading-tight">
                    {pillar.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
