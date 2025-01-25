"use client"

import { motion } from "framer-motion"
import type { Metric } from "@/types/utils"

interface MetricButtonProps {
  metric: Metric
  isActive: boolean
  onClick: () => void
}

export function MetricButton({ metric, isActive, onClick }: MetricButtonProps) {
  return (
    <motion.button
      className={`px-6 py-3 rounded-lg text-base font-medium flex items-center gap-3
                ${
                  isActive
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary hover:bg-secondary/80"
                }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-lg">{metric.icon}</span>
      <span>{metric.label}</span>
    </motion.button>
  )
}
