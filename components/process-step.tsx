import type { ReactNode } from "react"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  icon: ReactNode
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl font-bold">
          {number}
        </div>
        <div className="absolute -right-2 -top-2 bg-accent p-2 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  )
}

export default ProcessStep
