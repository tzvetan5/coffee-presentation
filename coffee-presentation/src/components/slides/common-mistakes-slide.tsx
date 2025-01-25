import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CommonMistakesSlide() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const problems = [
    {
      title: "Startup Burnout",
      description: "Long hours draining your energy",
      icon: "⚡",
      color: "from-red-400/20 to-red-600/20",
      symptoms: [
        "Constant exhaustion",
        "Difficulty focusing",
        "Decreased productivity",
        "Mood swings"
      ]
    },
    {
      title: "Decision Fatigue", 
      description: "Too many choices to make",
      icon: "🤯",
      color: "from-orange-400/20 to-orange-600/20",
      symptoms: [
        "Analysis paralysis",
        "Poor judgment calls",
        "Mental fog",
        "Procrastination"
      ]
    },
    {
      title: "Investor Meetings",
      description: "Need to stay sharp",
      icon: "🎯", 
      color: "from-yellow-400/20 to-yellow-600/20",
      symptoms: [
        "Presentation anxiety",
        "Memory blanks",
        "Low energy pitch",
        "Lost opportunities"
      ]
    }
  ];

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-16 relative min-h-[800px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="space-y-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              Founder Problems?
            </h2>
            <p className="text-xl text-muted-foreground">Click to explore common startup challenges</p>
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
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProblem(index)}
                onHoverEnd={() => setHoveredProblem(null)}
                onClick={() => setExpandedProblem(expandedProblem === index ? null : index)}
              >
                <motion.div
                  className={`rounded-2xl p-8 flex flex-col items-center justify-start
                             bg-gradient-to-br ${problem.color} backdrop-blur-sm
                             border border-primary/20 shadow-lg hover:shadow-xl
                             transition-all duration-300`}
                  animate={{
                    height: expandedProblem === index ? "auto" : "18rem",
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
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
                  <h3 className="text-2xl font-bold text-primary mb-3">{problem.title}</h3>
                  <p className="text-center text-muted-foreground mb-4">{problem.description}</p>
                  
                  <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: expandedProblem === index ? 1 : 0,
                      height: expandedProblem === index ? "auto" : 0
                    }}
                    transition={{ 
                      opacity: { delay: expandedProblem === index ? 0.2 : 0 },
                      height: { duration: 0.3 }
                    }}
                  >
                    <h4 className="font-semibold text-primary mt-4 mb-2">Warning Signs:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {problem.symptoms.map((symptom, i) => (
                        <li key={i} className="text-muted-foreground">{symptom}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
