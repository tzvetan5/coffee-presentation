"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import WhyCoffeeSlide from "@/components/slides/why-coffee-slide"
import CommonMistakesSlide from "@/components/slides/common-mistakes-slide"
import ProperCoffeeSlide from "@/components/slides/proper-coffee-slide"
import ComparisonSlide from "@/components/slides/comparison-slide"
import CallToActionSlide from "@/components/slides/call-to-action-slide"

const slides = [
  {
    title: "Why Coffee",
    component: WhyCoffeeSlide,
  },
  {
    title: "Common Mistakes",
    component: CommonMistakesSlide,
  },
  {
    title: "Proper Coffee",
    component: ProperCoffeeSlide,
  },
  {
    title: "Comparison",
    component: ComparisonSlide,
  },
  {
    title: "Call to Action",
    component: CallToActionSlide,
  },
]

export default function CoffeePresentation({ page }: { page?: number }) {
  const [currentSlide, setCurrentSlide] = useState(page ? page - 1 : 0)

  useEffect(() => {
    if (page) {
      setCurrentSlide(page - 1)
    }
  }, [page])

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const nextSlide = currentSlide + 1
      setCurrentSlide(nextSlide)
      window.history.pushState({}, '', `?page=${nextSlide + 1}`)
    }
  }

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1
      setCurrentSlide(prevSlide)
      window.history.pushState({}, '', `?page=${prevSlide + 1}`)
    }
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="fixed top-4 left-4 right-4">
        <Progress value={((currentSlide + 1) / slides.length) * 100} className="w-full" />
      </div>

      <div className="w-full max-w-7xl relative"> {/* Increased max-width to make the slide bigger */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPreviousSlide}
            disabled={currentSlide === 0}
            className="rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16">
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextSlide}
            disabled={currentSlide === slides.length - 1}
            className="rounded-full w-12 h-12"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>

        <CurrentSlideComponent />

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, index) => (
            <Button
              key={index}
              variant={currentSlide === index ? "default" : "outline"}
              size="icon"
              className="w-3 h-3 rounded-full p-0"
              onClick={() => {
                setCurrentSlide(index)
                window.history.pushState({}, '', `?page=${index + 1}`)
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
