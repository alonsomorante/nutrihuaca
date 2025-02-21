import type React from "react"
import * as motion from "motion/react-client"

type Activity = "Sedentario" | "Ligero" | "Moderado" | "Activo" | "Muy activo";

interface ActivitySelectorProps {
  activities: string[]
  activity: Activity
  setActivity: (activity: Activity) => void
  activitiesText: Record<string, string>
}

const ActivitySelector: React.FC<ActivitySelectorProps> = ({ activities, activity, setActivity, activitiesText }) => {
  return (
    <motion.div className="flex-1 w-full flex flex-col gap-2 text-white">
      <div className="bg-green-light rounded-sm px-4 py-2">
        <p className="font-bold text-sm text-center text-dark">Selecciona tu nivel de actividad</p>
      </div>
      <div className="h-[60%] flex flex-col justify-between gap-2 relative">
        {activities.map((a, index) => (
          <motion.div
            key={index}
            className="flex gap-2 z-10 bg-light p-2 rounded-lg text-sm items-center"
            onClick={() => setActivity(a as Activity)}
            animate={{
              backgroundColor: a === activity ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
              color: a === activity ? "rgb(255, 255, 255)" : "rgb(6, 54, 58)",
            }}
          >
            <motion.div
              className="w-4 h-4 rounded-full opacity-80 flex justify-center items-center"
              animate={{
                backgroundColor: a === activity ? "rgb(174, 221, 200)" : "rgb(224, 231, 231)",
              }}
            >
              {a === activity && <motion.div className="w-2 h-2 opacity-80 bg-dark rounded-full" />}
            </motion.div>
            <p className="font-bold">{a}</p>
          </motion.div>
        ))}
      </div>
      <div className="h-[20%] mt-8">
        <motion.p
          className="text-balance text-center opacity-70 text-dark text-sm w-full"
          key={activity}
          initial={{ x: 20 }}
          animate={{ x: 0 }}
        >
          {activitiesText[activity]}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default ActivitySelector

