export type MetricKey = "duration" | "caffeine" | "longTerm" | "benefits" | "drawbacks"

export interface Metric {
    label: string
    description: string
    icon: string
}

export interface ComparisonItem {
    name: string
    icon: string
    duration: number // Normalized 0-100 based on hours
    caffeine: number // Normalized 0-100 based on mg content
    longTerm: number // Normalized 0-100 based on research evidence
    benefits: number // Normalized 0-100 based on proven health benefits
    drawbacks: number // Normalized 0-100 based on severity of drawbacks
    color: string
    isChampion?: boolean
    details: {
        [key in MetricKey]: string
    }
    benefits_list: string[] // Keep existing benefits array for tooltips
}
