export type MetricKey = "duration" | "caffeine" | "longTerm" | "benefits" | "drawbacks"

export interface Metric {
    label: string
    description: string
    icon: string
}

export interface ComparisonItem {
    name: string
    icon: string
    duration: number
    caffeine: number
    longTerm: number 
    benefits: number 
    drawbacks: number 
    color: string
    isChampion?: boolean
    details: {
        [key in MetricKey]: string
    }
    benefits_list: string[] 
}
