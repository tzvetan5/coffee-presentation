"use client"

import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { Crown, ChevronUp } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import type { ComparisonItem, MetricKey } from "@/types/utils"

interface ComparisonCardProps {
  item: ComparisonItem
  activeMetric: MetricKey
  maxValue: number
  isHovered: boolean
  onHover: (name: string | null) => void
}

export function ComparisonCard({ item, activeMetric, maxValue, isHovered, onHover }: ComparisonCardProps) {
  const controls = useAnimation()

  useEffect(() => {
    if (isHovered) {
      controls.start({
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 },
      })
    } else {
      controls.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.2 },
      })
    }
  }, [isHovered, controls])

  const percentage = (item[activeMetric] / maxValue) * 100
  const isTopPerformer = item[activeMetric] === maxValue

  return (
    <motion.div
      className={`relative ${item.isChampion ? "col-span-1" : ""}`}
      animate={controls}
      onHoverStart={() => onHover(item.name)}
      onHoverEnd={() => onHover(null)}
    >
      {item.isChampion && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Badge className="bg-primary text-primary-foreground px-2 py-0.5 flex items-center gap-1 text-xs">
            <Crown className="w-3 h-3" />
            Most Effective Option
          </Badge>
        </motion.div>
      )}

      <motion.div
        className={`rounded-xl overflow-hidden
                   bg-gradient-to-br ${item.color}
                   backdrop-blur-md border border-white/10
                   h-[250px] relative group
                   transition-shadow duration-300
                   ${isHovered ? "shadow-xl shadow-primary/20" : "shadow-md"}
                   ${item.isChampion ? "bg-opacity-20" : "bg-opacity-10"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

        <div className="relative p-4 h-full flex flex-col">
          <div className="text-center mb-2">
            <motion.div
              className={`text-2xl mb-1 inline-block ${item.isChampion ? "scale-110" : ""}`}
              animate={{
                rotate: isHovered ? [0, -10, 10, 0] : 0,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              {item.name}
            </h3>
            <div className="text-xs text-white/70 mt-1 space-y-0.5">
              <p>Duration: {item.details.duration}</p>
              <p>Caffeine: {item.details.caffeine}</p>
            </div>
          </div>

          <div className="flex-1 flex items-end justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    className="w-full relative"
                    initial={{ height: 0 }}
                    animate={{ height: `${percentage}%` }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-white/20 to-white/5 rounded-t-lg backdrop-blur-sm
                                   ${item.isChampion ? "border-t-2 border-primary" : ""}`}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeMetric}
                          className="absolute inset-0 p-2 flex flex-col justify-end items-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isTopPerformer && (
                            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-1">
                              <ChevronUp className="w-3 h-3 text-primary" />
                            </motion.div>
                          )}
                          <p className={`font-bold text-white text-lg mb-0.5 ${item.isChampion ? "text-secondary" : ""}`}>
                            {item[activeMetric]}
                          </p>
                          <p className="text-xs text-white/80 text-center">{item.details[activeMetric]}</p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="p-2 space-y-1">
                    <p className="font-semibold text-sm">Key Benefits & Drawbacks:</p>
                    <div className="space-y-1">
                      <p className="text-xs text-primary">{item.details.benefits}</p>
                      <p className="text-xs text-destructive">{item.details.drawbacks}</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
