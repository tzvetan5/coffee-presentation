"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ComparisonSlide() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      title: "Superior Focus",
      description: "Coffee sharpens your mind and helps you concentrate",
      color: "from-primary/20 to-primary/40"
    },
    {
      title: "Longest Duration", 
      description: "Feel alert and focused for 4-6 hours, no crashes",
      color: "from-secondary/20 to-secondary/40"
    },
    {
      title: "Simplest and Mostly Available",
      description: "Packed with antioxidants that boost your wellbeing",
      color: "from-primary/30 to-secondary/30"
    }
  ]

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-8 relative min-h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/coffee-steam.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <motion.div 
          className="relative z-10 flex flex-col items-center gap-16 text-center max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold text-primary">
            Best Option - Coffee
          </h2>

          <div className="flex flex-col gap-6 w-full">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`
                  p-10 rounded-xl border border-primary/10
                  backdrop-blur-sm transition-all duration-500 cursor-pointer
                  bg-gradient-to-br ${step.color}
                  ${activeStep === index ? 'shadow-2xl translate-x-10 scale-105' : 'hover:shadow-lg hover:translate-x-5'}
                `}
                style={{
                  marginLeft: `${index * 120}px`,
                  marginTop: `${index * 20}px`,
                  zIndex: steps.length - index
                }}
                initial={{ opacity: 0, x: -100, y: 100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: 0
                }}
                transition={{ 
                  delay: index * 0.3,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
              >
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <motion.p 
                    className="text-xl text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={activeStep === index ? 
                      { opacity: 1, x: 20 } : 
                      { opacity: 0.8, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -8, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </CardContent>
    </Card>
  )
}
