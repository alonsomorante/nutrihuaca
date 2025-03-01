import type React from "react"
import * as motion from "motion/react-client"

interface ActivitySelectorProps {
  activities: string[]
  activity: string
  setActivity: (activity: string) => void
  activitiesText: Record<string, string>
}

const ActivitySelector: React.FC<ActivitySelectorProps> = ({
  activities,
  activity,
  setActivity,
  activitiesText
}) => {
  return (
    <div className="w-full flex flex-col gap-3 text-dark">
      <div className="bg-green-light rounded-md px-4 py-2.5">
        <p className="font-bold text-sm text-center text-dark">Selecciona tu nivel de actividad</p>
      </div>

      <div className="flex flex-col gap-2.5">
        {activities.map((activityOption) => (
          <motion.div
            key={activityOption}
            className="flex gap-3 p-3 rounded-lg text-sm items-center cursor-pointer"
            onClick={() => setActivity(activityOption)}
            animate={{
              backgroundColor: activityOption === activity ? "rgb(6, 54, 58)" : "rgb(224, 231, 231)",
              color: activityOption === activity ? "rgb(255, 255, 255)" : "rgb(6, 54, 58)",
            }}
            whileHover={{
              scale: activityOption === activity ? 1 : 1.02,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="w-5 h-5 rounded-full flex justify-center items-center"
              animate={{
                backgroundColor: activityOption === activity ? "rgb(174, 221, 200)" : "rgb(224, 231, 231)",
                border: activityOption === activity ? "none" : "2px solid rgb(6, 54, 58)"
              }}
            >
              {activityOption === activity && (
                <motion.div
                  className="w-2.5 h-2.5 bg-dark rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </motion.div>
            <p className="font-medium">{activityOption}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-balance text-center text-dark/70 text-sm mt-3 px-2"
        key={activity}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activitiesText[activity]}
      </motion.p>
    </div>
  )
}

export default ActivitySelector
