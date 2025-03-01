"use client"

import type React from "react"

import { useState } from "react"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import ActivitySelector from "@/components/ActivitySelector"
import GoalSelector from "@/components/GoalSelector"
import PersonalInfoForm from "@/components/PersonalForm"
import OptionSelector from "@/components/OptionSelector"
import ResultsDisplay from "@/components/ResultsDisplay"

// Constants moved to a separate file for better organization
import { options, activities, goals, optionsText, activitiesText } from "@/lib/constants"

export default function Page() {
  // State management
  const [currentStep, setCurrentStep] = useState<"options" | "form" | "results">("options")
  const [selected, setSelected] = useState("Peso ideal")
  const [formData, setFormData] = useState({
    gender: "hombre",
    activity: "Sedentario",
    goal: "Perder peso",
    age: 0,
    height: 0,
    weight: 0,
  })
  const [formError, setFormError] = useState<string | null>(null)

  // Handlers for form data updates
  const updateFormData = (key: keyof typeof formData, value: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: "age" | "height" | "weight") => {
    updateFormData(field, Number(e.target.value))
  }

  // Calculate results
  const calculateResults = () => {
    // Validate form data before proceeding
    if (formData.age <= 0 || formData.height <= 0 || formData.weight <= 0) {
      setFormError("Por favor completa todos los campos correctamente")
      return
    }
    setFormError(null)
    setCurrentStep("results")
  }

  const resetForm = () => {
    setFormData({
      gender: "hombre",
      activity: "Sedentario",
      goal: "Perder peso",
      age: 0,
      height: 0,
      weight: 0,
    })
  }

  return (
    <section className="w-full h-dvh p-2 text-white">
      <section className="h-full flex flex-col">
        <div className="h-full">
          <AnimatePresence initial={false}>
            {currentStep === "options" && (
              <motion.div className="h-full w-full md:flex" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <div className="h-full w-full md:flex-1">
                  <OptionSelector
                    options={options}
                    selected={selected}
                    setSelected={setSelected}
                    optionsText={optionsText}
                    onNext={() => setCurrentStep("form")}
                  />
                </div>
                <div className="hidden md:block md:flex-1 md:bg-primary/10 md:p-4 md:rounded-lg">
                  <div className="h-full flex items-center justify-center">
                    <p className="text-dark text-lg font-medium text-center">
                      Completa el formulario para calcular tu {selected.toLowerCase()}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {currentStep === "form" && (
            <motion.div
              className="h-screen bg-white p-4 flex flex-col justify-between gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <PersonalInfoForm
                gender={formData.gender}
                setGender={(gender) => updateFormData("gender", gender)}
                handleAge={(e) => handleInputChange(e, "age")}
                handleHeight={(e) => handleInputChange(e, "height")}
                handleWeight={(e) => handleInputChange(e, "weight")}
                age={formData.age}
                height={formData.height}
                weight={formData.weight}
              />

              <ActivitySelector
                activities={activities}
                activity={formData.activity}
                setActivity={(activity) => updateFormData("activity", activity)}
                activitiesText={activitiesText}
              />

              <GoalSelector goals={goals} goal={formData.goal} setGoal={(goal) => updateFormData("goal", goal)} />

              {formError && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-center">{formError}</p>
                </motion.div>
              )}

              <motion.div className="flex items-center gap-3 mt-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentStep("options")}
                  className="flex-1 px-4 py-3 bg-light rounded-lg text-dark font-medium"
                >
                  Atrás
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="flex-1 px-4 py-3 bg-light rounded-lg text-dark font-medium"
                >
                  Limpiar
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={calculateResults}
                  className="flex-1 px-4 py-3 bg-dark rounded-lg text-white font-medium"
                >
                  Calcular
                </motion.button>
              </motion.div>

              <NavFooter />
            </motion.div>
          )}

          {currentStep === "results" && (
            <ResultsDisplay calculationType={selected} formData={formData} onBack={() => setCurrentStep("form")} />
          )}
        </div>
      </section>
    </section>
  )
}

// Footer navigation component
const NavFooter = () => (
  <div className="w-full py-3 border-t border-gray-100">
    <ul className="flex justify-center w-full gap-6 font-medium text-dark">
      <li className="cursor-pointer hover:text-primary transition-colors">Calculadoras</li>
      <li className="cursor-pointer hover:text-primary transition-colors">Recetas</li>
      <li className="cursor-pointer hover:text-primary transition-colors">Tabla</li>
    </ul>
  </div>
)

