import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion';

export default function WhyCoffeeSlide() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="w-full overflow-hidden relative">
      <CardContent className="p-16 h-[800px] flex flex-col justify-center items-center">
        {/* Main Content */}
        <motion.div 
          className="text-center z-10 relative mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl font-bold text-primary mb-6 drop-shadow-lg"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Coffee: Your #1 Natural Fuel
          </motion.h1>
          <motion.p 
            className="text-2xl max-w-2xl mx-auto text-muted-foreground"
            animate={{ opacity: isHovered ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Boosts energy, sharpens focus. Loved worldwide.
          </motion.p>
        </motion.div>

        {/* Interactive Coffee Cup */}
        <motion.div
          className="relative w-96 h-96 cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          initial={{ y: 0 }}
          animate={{ 
            y: [-5, 5, -5],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          
          {/* Coffee Cup Image */}
          <motion.img
            src="/ewor-cup.png"
            alt="Interactive Coffee Cup"
            className="w-full h-full object-contain"
            animate={{ 
              rotate: isHovered ? [0, -5, 5, 0] : 0,
              y: isHovered ? [-5, 5, -5] : 0
            }}
            transition={{ 
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse"
            }}
          />

          {/* Hover Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 
                          bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg 
                          shadow-lg whitespace-nowrap"
              >
                Did you know? Coffee is the 2nd most traded commodity!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </CardContent>
    </Card>
  )
}