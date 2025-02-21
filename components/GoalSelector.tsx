import type React from "react"
import * as motion from "motion/react-client"

type Goal = "Perder peso" | "Mantener peso" | "Ganar peso";

interface GoalSelectorProps {
  goals: string[]
  goal: Goal
  setGoal: (goal: Goal) => void
}

const GoalSelector: React.FC<GoalSelectorProps> = ({ goals, goal, setGoal }) => {
  return (
    <motion.div className="flex-1 flex flex-col">
      <div className="bg-green-light rounded-sm px-4 py-2">
        <p className="font-bold text-center text-sm text-dark">¿Cuál es tu objetivo?</p>
      </div>
      <div className="h-[70%] flex gap-2 justify-center items-center">
        {goals.map((g) => (
          <motion.div
            onClick={() => setGoal(g as Goal)}
            className="h-[80%] flex-1 flex items-center justify-center bg-light p-4 rounded-lg shadow-lg"
            key={g}
            animate={{
              backgroundColor: g === goal ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
              color: g === goal ? "#fff" : "#000",
            }}
          >
            <p className="text-balance text-sm text-center">{g}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default GoalSelector

