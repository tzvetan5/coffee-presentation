"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Sparkles } from "lucide-react"
import { MetricButton } from "../comparison/metric-buttons"
import { ComparisonCard } from "../comparison/comparison-card"
import type { MetricKey } from "@/types/utils"

export default function ProperCoffeeSlide() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("duration")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const metrics = {
    duration: {
      label: "Focus Duration",
      description: "How long effects typically last",
      icon: "⏱️",
    },
    caffeine: {
      label: "Caffeine Content",
      description: "Amount per serving",
      icon: "⚡",
    },
    longTerm: {
      label: "Long-Term Benefits",
      description: "Potential health impacts",
      icon: "📈",
    },
    benefits: {
      label: "Health Benefits",
      description: "Additional positive effects",
      icon: "❤️",
    },
    drawbacks: {
      label: "Drawbacks",
      description: "Potential negative effects",
      icon: "⚠️",
    }
  }

  const comparisons = [
    {
      name: "Coffee",
      icon: "☕",
      duration: 100, // 4-6 hours
      caffeine: 100, // 80-120mg
      longTerm: 100,
      benefits: 100,
      drawbacks: 40,
      color: "from-primary to-primary/80",
      isChampion: true,
      details: {
        duration: "4-6 hours",
        caffeine: "80-120mg per cup",
        longTerm: "Reduces diabetes, cognitive decline & cancer risk",
        benefits: "Highest antioxidants, liver & heart protection",
        drawbacks: "Minor sleep impact if consumed late"
      },
      benefits_list: ["Rich in antioxidants", "Peak mental performance", "Scientifically proven"],
    },
    {
      name: "Green Tea",
      icon: "🍵",
      duration: 60,
      caffeine: 40,
      longTerm: 80,
      benefits: 75,
      drawbacks: 30,
      color: "from-primary to-primary/80",
      details: {
        duration: "2-3 hours",
        caffeine: "30-50mg per cup",
        longTerm: "Heart health benefits",
        benefits: "Contains L-theanine",
        drawbacks: "Lower energy boost"
      },
      benefits_list: ["Mild focus", "Some antioxidants", "Gentle effect"],
    },
    {
      name: "Yerba Mate",
      icon: "🧉",
      duration: 65,
      caffeine: 65,
      longTerm: 70,
      benefits: 70,
      drawbacks: 50,
      color: "from-primary to-primary/80",
      details: {
        duration: "2-3 hours",
        caffeine: "65-85mg per cup",
        longTerm: "Some cardiovascular benefits",
        benefits: "Contains polyphenols",
        drawbacks: "Hard to find, bitter taste"
      },
      benefits_list: ["Moderate nutrients", "Average focus", "Limited availability"],
    },
    {
      name: "Energy Drinks",
      icon: "🥤",
      duration: 45,
      caffeine: 85,
      longTerm: 20,
      benefits: 25,
      drawbacks: 90,
      color: "from-primary to-primary/80",
      details: {
        duration: "1-2 hours",
        caffeine: "80-150mg per can",
        longTerm: "Potential health risks",
        benefits: "Quick energy spike",
        drawbacks: "Crash, jitters, artificial ingredients"
      },
      benefits_list: ["Fast acting", "Convenient", "Heavy crash"],
    },
    {
      name: "Adaptogens",
      icon: "🌿",
      duration: 35,
      caffeine: 0,
      longTerm: 65,
      benefits: 60,
      drawbacks: 45,
      color: "from-primary to-primary/80",
      details: {
        duration: "Subtle effects",
        caffeine: "None",
        longTerm: "Stress adaptation",
        benefits: "Natural compounds",
        drawbacks: "Very slow acting"
      },
      benefits_list: ["Gentle support", "No stimulation", "Weak effects"],
    },
    {
      name: "Dark Chocolate",
      icon: "🍫",
      duration: 25,
      caffeine: 15,
      longTerm: 55,
      benefits: 65,
      drawbacks: 50,
      color: "from-primary to-primary/80",
      details: {
        duration: "1 hour",
        caffeine: "5-20mg per oz",
        longTerm: "Minor heart benefits",
        benefits: "Some mood boost",
        drawbacks: "High calories, minimal focus"
      },
      benefits_list: ["Pleasant taste", "Minimal boost", "High sugar"],
    }
  ]

  const getMaxValue = (metric: MetricKey) => {
    const values = comparisons.map(item => {
      const value = item[metric]
      return typeof value === 'number' ? value : 0
    })
    return Math.max(...values)
  }

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-12 h-[800px]">

        <div className="space-y-8 relative">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-2.5 rounded-full">
              <Crown className="w-5 h-5 text-primary" />
              <p className="text-lg text-primary/90 font-medium">Coffee: The Undisputed Champion</p>
            </div>
          </div>

          <div className="relative z-10">

            <motion.div
              className="flex justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {Object.entries(metrics).map(([key, value]) => (
                <MetricButton
                  key={key}
                  metric={value}
                  isActive={activeMetric === key}
                  onClick={() => setActiveMetric(key as MetricKey)}
                />
              ))}
            </motion.div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              <AnimatePresence>
                {comparisons.map((item) => (
                  <ComparisonCard
                    key={item.name}
                    item={item}
                    activeMetric={activeMetric}
                    maxValue={getMaxValue(activeMetric)}
                    isHovered={hoveredItem === item.name}
                    onHover={setHoveredItem}
                  />
                ))}
              </AnimatePresence>
            </div>

            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >


              <div className="flex justify-center gap-6">
                {["Superior Focus", "Longest Duration", "Maximum Benefits"].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    <Badge variant="secondary" className="text-sm px-4 py-1">
                      <Sparkles className="w-4 h-4 mr-2 text-primary" />
                      {benefit}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
