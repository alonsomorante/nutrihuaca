'use client'
// import Image from "next/image";
// import prisma from "./lib/db"
import { useEffect, useState } from "react";

// import ComponentTest from "@/components/ui/component";
// import Square from "@/components/ui/square";
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { calcularCalorias } from "@/lib/utils";
import ActivitySelector from "@/components/ActivitySelector";
import GoalSelector from "@/components/GoalSelector";
import PersonalInfoForm from "@/components/PersonalForm";
import OptionSelector from "@/components/OptionSelector";

const options = ["Peso ideal", "Porcentaje de grasa", "Consumo calórico"]
const activities = ["Sedentario", "Ligero", "Moderado", "Activo", "Muy activo"]
const goals = ["Perder peso", "Mantener peso", "Ganar peso"]

const optionsText = {
  "Peso ideal": "La calculadora de calorías se puede usar para estimar el número de calorías que una persona necesita consumir cada día. Esta calculadora también puede proporcionar algunas directrices simples para ganar o perder peso.",
  "Porcentaje de grasa": "La calculadora de grasa corporal se puede utilizar para estimar su grasa corporal total basada en medidas específicas.",
  "Consumo calórico": "La calculadora de calorías se puede utilizar para estimar el número de calorías que una persona necesita consumir cada día. Esta calculadora también puede proporcionar algunas pautas simples para ganar o perder peso."
}

const activitiesText = {
  "Sedentario": "Poco o ningún ejercicio",
  "Ligero": "Ejercicio ligero (1-3 días a la semana)",
  "Moderado": "Ejercicio moderado (3-5 días a la semana)",
  "Activo": "Ejercicio activo (6-7 días a la semana)",
  "Muy activo": "Ejercicio muy activo (dos veces al día, entrenamientos muy duros)"
}


export default function Page() {

  const [toggle, setToggle] = useState(false)
  const [toggleCalculator, setToggleCalculator] = useState(false)
  const [selected, setSelected] = useState('Peso ideal')
  const [gender, setGender] = useState('hombre')
  const [activity, setActivity] = useState('Sedentario')
  const [goal, setGoal] = useState('Perder peso')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const [calories, setCalories] = useState(0)


  const handleAge = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setAge(e.target.value)
  }

  const handleHeight = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setHeight(e.target.value)
  }

  const handleWeight = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    setWeight(e.target.value)
  }

  useEffect(() => {
    setCalories(calcularCalorias({ goal, activity, age, height, weight, gender }))

  }, [toggleCalculator])



  return (
    <section className="w-full h-dvh p-2   text-white"  >
      <section
        className="h-full flex flex-col"
      >
        <div className="h-full">
          <AnimatePresence initial={false}>
            {
              !toggle && (
                <div className="h-full bg-green-light md:flex">
                  <motion.div
                    className="h-full w-full md:flex-1"
                    exit={{ width: 0 }}
                    transition={{ duration: 0 }}
                  >
                    <OptionSelector options={options} selected={selected} setSelected={setSelected} optionsText={optionsText} setToggle={setToggle} />
                  </motion.div>
                  <div className="hidden md:bg-blue-400 md:h-full md:block md:flex-1">
                    asdasd
                  </div>
                </div>
              )
            }
          </AnimatePresence>
          {
            toggle && !toggleCalculator && (
              <motion.div
                className="h-screen bg-white p-2.5 flex flex-col justify-between gap-4"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <PersonalInfoForm gender={gender} setGender={setGender} handleAge={handleAge} handleHeight={handleHeight} handleWeight={handleWeight}/>
                <ActivitySelector activities={activities} activity={activity} setActivity={setActivity} activitiesText={activitiesText}/>
                <GoalSelector goal={goal} goals={goals} setGoal={setGoal}/>
                <motion.div className="flex-1 flex items-center gap-2">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="flex justify-center items-center flex-1 px-4 py-2 bg-light rounded-lg">
                    <p className="text-balance text-base text-center text-dark font-bold">Limpiar</p>
                  </motion.div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="flex justify-center items-center flex-1 px-4 py-2 bg-dark rounded-lg">
                    <p className="text-balance text-base text-center" onClick={() => setToggleCalculator(prev => !prev)}>Calcular</  p>
                  </motion.button>
                </motion.div>
                <div className="w-full py-2">
                  <ul className="flex justify-center w-full gap-4 font-bold text-dark">
                    <li>
                      Calculadoras
                    </li>
                    <li>
                      Recetas
                    </li>
                    <li>
                      Tabla
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
          {
            toggleCalculator && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.2 }} className="w-full h-full bg-amber-300">
                {selected},
                {activity},
                {goal},
                {gender},
                {age},
                {height},
                {weight},
                <div>
                  <p className="text-2xl font-bold">TIENES QUE CONSUMIR: {calories}</p>
                </div>
              </motion.div>
            )
          }
        </div>
      </section>
    </section>
  )
} 
