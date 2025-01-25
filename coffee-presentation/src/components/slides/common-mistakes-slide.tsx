import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowDown } from "lucide-react"

export default function CommonMistakesSlide() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const problems = [
    {
      title: "Quick Fix Trap",
      description: "Relying on artificial energy boosts",
      icon: "⚡",
      color: "from-red-400/20 to-red-600/20",
      symptoms: [
        "Energy crashes",
        "Jitters and anxiety",
        "Dependency cycle",
        "Poor sleep quality"
      ]
    },
    {
      title: "Natural But Weak",
      description: "Choosing gentle options that don't deliver",
      icon: "🌿",
      color: "from-orange-400/20 to-orange-600/20",
      symptoms: [
        "Minimal impact",
        "Inconsistent results",
        "Slow onset",
      ]
    },
    {
      title: "Sugar Dependence",
      description: "Hidden sugars in energy products",
      icon: "🍫",
      color: "from-yellow-400/20 to-yellow-600/20",
      symptoms: [
        "Blood sugar spikes",
        "Weight gain",
        "Energy fluctuations",
        "Increased cravings"
      ]
    }
  ];

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-16 relative min-h-[800px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

        <div className="space-y-12 w-full relative z-10">
          <motion.div
            className="text-center z-10 relative mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-6xl font-bold text-primary mb-6 drop-shadow-lg"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Focus Mistakes to Avoid
            </motion.h2>
            <motion.p
              className="text-2xl text-muted-foreground"
              animate={{ opacity: isHovered ? 0.8 : 1 }}
              transition={{ duration: 0.3 }}
            >
              Click to explore typical focus-boosting pitfalls
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: expandedProblem === index ? 1.05 : 1,
                  zIndex: expandedProblem === index ? 10 : 1
                }}
                transition={{
                  duration: 0.3,
                  delay: expandedProblem === null ? index * 0.2 : 0
                }}
                onHoverStart={() => setHoveredProblem(index)}
                onHoverEnd={() => setHoveredProblem(null)}
                onClick={() => setExpandedProblem(expandedProblem === index ? null : index)}
              >
                <motion.div
                  className={`rounded-2xl p-8 flex flex-col items-center justify-start
                             bg-gradient-to-br ${problem.color} backdrop-blur-sm
                             border border-primary/20 shadow-lg
                             transition-shadow duration-300
                             ${expandedProblem === index ? 'shadow-2xl' : 'hover:shadow-xl'}`}
                  animate={{
                    minHeight: expandedProblem === index ? "400px" : "300px",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-7xl mb-6"
                    animate={{
                      scale: hoveredProblem === index ? [1, 1.2, 1] : 1,
                      rotate: hoveredProblem === index ? [0, -10, 10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {problem.icon}
                  </motion.span>
                  <motion.h3 className="text-2xl font-bold text-text mb-3">{problem.title}</motion.h3>
                  <motion.p className="text-center text-muted-foreground mb-4">{problem.description}</motion.p>
                  {expandedProblem !== index && (<motion.div
                    className="absolute inset-x-0 bottom-8 mx-auto flex items-center gap-2 w-fit"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <p className="text-muted-foreground text-sm">Click to explore</p>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowDown className="w-6 h-6 text-text" />
                    </motion.div>
                  </motion.div>)}

                  <AnimatePresence>
                    {expandedProblem === index && (
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-semibold text-primary mt-4 mb-2">Warning Signs:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {problem.symptoms.map((symptom, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-muted-foreground"
                            >
                              {symptom}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
