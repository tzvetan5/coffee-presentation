"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { Coffee, Heart } from "lucide-react"

export default function ComparisonSlide() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-16 relative min-h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/coffee-steam.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <motion.div 
          className="relative z-10 flex flex-col items-center gap-8 text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0
            }}
            className="text-8xl"
          >
            ☕
          </motion.div>

          <h2 className="text-5xl font-bold text-primary mb-4">
            Thanks for Your Attention!
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Time to grab that perfect cup of coffee and start building amazing things.
          </p>

          <motion.div
            className="flex flex-col items-center gap-8"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <a 
              href="https://github.com/yourusername/coffee-presentation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-primary hover:text-primary/80 transition-colors"
            >
              <Coffee className="h-5 w-5" />
              View Project on GitHub
              <Heart className="h-5 w-5" />
            </a>

            <p className="text-lg text-muted-foreground">
              See you on the Selection Date :)
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </CardContent>
    </Card>
  )
}
