"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { Coffee, Heart, Briefcase, Code, Rocket } from "lucide-react"

export default function ComparisonSlide() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const entrepreneurs = [
    {
      name: "Elon Musk",
      role: "Tech Startup CEO",
      icon: <Rocket className="h-6 w-6" />,
      quote: "Wow, steak & eggs with coffee in the morning really feels like a powerup!",
      stats: {
        coffeesPerDay: 4,
        companiesStarted: 6,
        hoursWorked: 100
      }
    },
    {
      name: "Marcus Rivera", 
      role: "Serial Entrepreneur",
      icon: <Briefcase className="h-6 w-6" />,
      quote: "My morning coffee ritual sets me up for daily success.",
      stats: {
        coffeesPerDay: 3,
        startupExists: 2,
        revenueGenerated: "12M"
      }
    },
    {
      name: "Alex Kim",
      role: "Tech Lead",
      icon: <Code className="h-6 w-6" />,
      quote: "Coffee is essential for solving complex engineering challenges.",
      stats: {
        coffeesPerDay: 5,
        codeCommits: 2500,
        bugsSquashed: 342
      }
    }
  ]

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-16 relative min-h-[800px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/coffee-steam.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <motion.div 
          className="relative z-10 flex flex-col items-center gap-12 text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-primary">
              Coffee-Fueled Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover how coffee powers innovation and drives extraordinary achievements
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 w-full">
            {entrepreneurs.map((entrepreneur, index) => (
              <motion.div
                key={entrepreneur.name}
                className={`
                  p-8 rounded-xl bg-primary/5 border border-primary/10
                  backdrop-blur-sm transition-all duration-300 cursor-pointer
                  ${isHovered === entrepreneur.name ? 'scale-105 bg-primary/10' : 'scale-100'}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setIsHovered(entrepreneur.name)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {entrepreneur.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{entrepreneur.name}</h3>
                  <p className="text-sm text-primary/80">{entrepreneur.role}</p>
                  
                  <motion.div 
                    className="w-full space-y-3 mt-2"
                    initial={false}
                    animate={isHovered === entrepreneur.name ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 0.7 }}
                  >
                    <div className="text-sm font-medium">
                      {Object.entries(entrepreneur.stats).map(([key, value]) => (
                        <motion.div 
                          key={key}
                          className="flex items-center justify-between py-2 border-b border-primary/10"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="text-primary font-bold">{value}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground italic text-sm mt-4">&ldquo;{entrepreneur.quote}&rdquo;</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.2)" }}
          >
            <Coffee className="h-5 w-5 text-primary" />
            <p className="text-lg text-primary/90">Fuel your success with coffee</p>
            <Heart className="h-5 w-5 text-primary" />
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
